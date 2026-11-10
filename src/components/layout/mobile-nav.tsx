"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import type { NavItem } from "@/types/content";
import { cn } from "@/lib/utils";
import { isActive } from "./nav-links";

interface MobileNavProps {
  items: NavItem[];
  cta: NavItem;
  labels: { open: string; close: string; nav: string };
}

/** Mobile menu: toggle button + full-width panel. Closes on navigation and Escape. */
export function MobileNav({ items, cta, labels }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the menu when the route changes (adjusting state during render).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface"
      >
        {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
        <span className="sr-only">{open ? labels.close : labels.open}</span>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-page"
      >
        <nav aria-label={labels.nav} className="px-4 pt-4 pb-10">
          <ul className="flex flex-col">
            {items.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between py-4 font-display text-xl font-medium",
                      active ? "text-brand-700" : "text-ink",
                    )}
                  >
                    {item.label}
                    <ArrowRight aria-hidden="true" className="size-5 text-line-strong" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href={cta.href}
            onClick={() => setOpen(false)}
            className="mt-8 flex h-12 items-center justify-center rounded-full bg-brand-600 font-semibold text-on-brand"
          >
            {cta.label}
          </Link>
        </nav>
      </div>
    </div>
  );
}
