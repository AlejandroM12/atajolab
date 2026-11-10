"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import { Check, Monitor, Moon, Sun } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";
import { THEME_STORAGE_KEY } from "./theme-script";

export type ThemeChoice = "light" | "dark" | "system";

const DARK_QUERY = "(prefers-color-scheme: dark)";
const listeners = new Set<() => void>();

function readChoice(): ThemeChoice {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === "light" || value === "dark" ? value : "system";
  } catch {
    return "system";
  }
}

function applyChoice(choice: ThemeChoice) {
  const dark = choice === "dark" || (choice === "system" && window.matchMedia(DARK_QUERY).matches);
  const root = document.documentElement;
  root.classList.toggle("dark", dark);
  root.style.colorScheme = dark ? "dark" : "light";
}

function setChoice(choice: ThemeChoice) {
  try {
    if (choice === "system") localStorage.removeItem(THEME_STORAGE_KEY);
    else localStorage.setItem(THEME_STORAGE_KEY, choice);
  } catch {
    // Private mode or blocked storage: the theme still applies for this page.
  }
  applyChoice(choice);
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  const media = window.matchMedia(DARK_QUERY);
  const onSystemChange = () => {
    if (readChoice() === "system") applyChoice("system");
    callback();
  };
  // Another tab changed the theme.
  const onStorage = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY || event.key === null) {
      applyChoice(readChoice());
      callback();
    }
  };
  media.addEventListener("change", onSystemChange);
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(callback);
    media.removeEventListener("change", onSystemChange);
    window.removeEventListener("storage", onStorage);
  };
}

/** Current choice. The server snapshot is "system", so hydration never mismatches. */
function useThemeChoice(): ThemeChoice {
  return useSyncExternalStore(subscribe, readChoice, () => "system");
}

const options = [
  { value: "light", icon: Sun },
  { value: "dark", icon: Moon },
  { value: "system", icon: Monitor },
] as const;

/**
 * Theme selector: a button that opens a small group of options (light, dark, system).
 * The button icon follows the applied theme through CSS, so it is right from the first paint.
 */
export function ThemeToggle({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).theme;
  const choice = useThemeChoice();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Switching language re-mounts the root layout, and React resets the attributes of
  // <html>. Re-apply the theme before paint so the change is never visible.
  useLayoutEffect(() => {
    applyChoice(readChoice());
  }, []);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-10 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-surface hover:text-ink"
      >
        <Sun aria-hidden="true" className="size-[18px] dark:hidden" />
        <Moon aria-hidden="true" className="hidden size-[18px] dark:block" />
        <span className="sr-only">{`${t.button} (${t[choice]})`}</span>
      </button>

      <div
        id={panelId}
        role="group"
        aria-label={t.label}
        hidden={!open}
        className="absolute top-full right-0 z-50 mt-2 w-44 rounded-xl border border-line bg-card p-1 shadow-float"
      >
        {options.map(({ value, icon: Icon }) => {
          const selected = choice === value;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setChoice(value);
                setOpen(false);
                buttonRef.current?.focus();
              }}
              className={cn(
                "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors",
                selected ? "bg-brand-50 text-brand-800" : "text-ink-soft hover:bg-surface hover:text-ink",
              )}
            >
              <Icon aria-hidden="true" className="size-4" />
              <span className="flex-1">{t[value]}</span>
              {selected && <Check aria-hidden="true" className="size-4 text-brand-600" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
