import Link from "next/link";
import {
  AppWindow,
  ArrowRight,
  Calculator,
  CalendarDays,
  Check,
  Clock,
  Command,
  FileSpreadsheet,
  FileText,
  FormInput,
  LayoutGrid,
  ListChecks,
  Mail,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary, type Dictionary } from "@/i18n/dictionaries";
import { pagePath } from "@/i18n/routes";
import { LogoMark } from "@/components/layout/logo";
import { MARK_VIEWBOX, markParts } from "@/lib/brand-mark";
import { cn } from "@/lib/utils";

/**
 * Hero composition: the AtajoLab ecosystem.
 *
 * "Atajo" means shortcut, so the centerpiece is a shortcut panel with real links to
 * the three lines of work. Around it, abstract cards (no screenshots, no numbers)
 * hint at each one: a microapp library, a custom dashboard and an automation flow.
 *
 * From `sm` up the cards are layered with absolute positions; on phones they flow
 * in a column so nothing gets scaled down to unreadable sizes.
 */
export function HeroVisual({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home;
  return (
    <div className="relative mx-auto w-full max-w-[520px] sm:h-[520px]">
      <BrandBackdrop />

      <div className="relative flex flex-col gap-3 sm:static sm:block">
        <ShortcutPanel locale={locale} t={t} className="sm:absolute sm:top-[120px] sm:right-[4%] sm:left-[4%] sm:z-20" />
        <div className="grid grid-cols-2 gap-3 sm:contents">
          <LibraryCard label={t.illustration.microapps} className="sm:absolute sm:top-0 sm:left-0 sm:z-0 sm:w-[47%]" />
          <DashboardCard label={t.illustration.custom} className="sm:absolute sm:top-5 sm:right-0 sm:z-0 sm:w-[49%]" />
        </div>
        <FlowCard t={t} className="sm:absolute sm:right-[2%] sm:bottom-0 sm:z-10 sm:w-[78%]" />
      </div>
    </div>
  );
}

type HomeText = Dictionary["home"];

/* ---------- Shortcut panel (interactive: real links) ---------- */

function ShortcutPanel({ locale, t, className }: { locale: Locale; t: HomeText; className?: string }) {
  const shortcuts: { href: string; icon: LucideIcon; title: string; text: string }[] = [
    { href: pagePath("microapps", locale), icon: LayoutGrid, ...t.shortcuts.microapps },
    { href: pagePath("solutions", locale), icon: AppWindow, ...t.shortcuts.custom },
    { href: `${pagePath("solutions", locale)}#automatizacion`, icon: Workflow, ...t.shortcuts.automation },
  ];

  return (
    <nav
      aria-label={t.shortcuts.label}
      className={cn("animate-fade-up rounded-2xl border border-line bg-card shadow-float", className)}
    >
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <span aria-hidden="true" className="flex size-8 items-center justify-center rounded-lg bg-brand-600 text-on-brand">
          <Command className="size-4" />
        </span>
        <p className="font-display text-[0.95rem] font-semibold text-ink">{t.shortcuts.question}</p>
      </div>
      <ul className="space-y-0.5 p-2">
        {shortcuts.map(({ href, icon: Icon, title, text }, index) => (
          <li key={href}>
            <Link
              href={href}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-2.5 py-2.5 transition-colors hover:bg-brand-50",
                index === 0 && "bg-brand-50/70",
              )}
            >
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-brand-100 bg-card text-brand-700"
              >
                <Icon className="size-[18px]" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[0.95rem] leading-tight font-semibold text-ink">{title}</span>
                <span className="mt-0.5 block text-sm leading-snug text-muted">{text}</span>
              </span>
              <ArrowRight
                aria-hidden="true"
                className={cn(
                  "size-4 shrink-0 text-brand-600 transition-all group-hover:translate-x-0.5 group-hover:opacity-100",
                  index === 0 ? "opacity-100" : "opacity-0",
                )}
              />
            </Link>
          </li>
        ))}
      </ul>
      <div
        aria-hidden="true"
        className="flex items-center justify-between border-t border-line px-4 py-2.5 text-xs text-muted"
      >
        <span className="flex items-center gap-2 font-semibold text-ink-soft">
          <LogoMark className="h-3" />
          AtajoLab
        </span>
        <span>{t.shortcuts.footer}</span>
      </div>
    </nav>
  );
}

/* ---------- Decorative satellites (hidden from assistive tech) ---------- */

function CardCaption({ icon: Icon, children }: { icon: LucideIcon; children: string }) {
  return (
    <p className="flex items-center gap-1.5 text-[0.68rem] font-semibold tracking-[0.08em] text-brand-700 uppercase">
      <Icon className="size-3.5" />
      {children}
    </p>
  );
}

function Skeleton({ className }: { className?: string }) {
  return <span className={cn("block h-1.5 rounded-full bg-line", className)} />;
}

function LibraryCard({ label, className }: { label: string; className?: string }) {
  const tiles: LucideIcon[] = [Calculator, FileText, CalendarDays, Clock];
  return (
    <div aria-hidden="true" className={cn("rounded-2xl border border-line bg-paper p-3 shadow-card", className)}>
      <CardCaption icon={LayoutGrid}>{label}</CardCaption>
      <div className="mt-2.5 grid grid-cols-2 gap-2">
        {tiles.map((Icon, index) => (
          <div key={index} className="rounded-xl border border-line bg-card p-2">
            <span
              className={cn(
                "flex size-6 items-center justify-center rounded-md",
                index === 0 ? "bg-brand-600 text-on-brand" : "bg-brand-50 text-brand-700",
              )}
            >
              <Icon className="size-3.5" />
            </span>
            <Skeleton className="mt-2 w-4/5" />
            <Skeleton className="mt-1 w-1/2 bg-line/70" />
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardCard({ label, className }: { label: string; className?: string }) {
  const bars = [38, 56, 44, 70, 52, 82, 64];
  return (
    <div aria-hidden="true" className={cn("overflow-hidden rounded-2xl border border-line bg-card shadow-card", className)}>
      <div className="flex items-center gap-1.5 border-b border-line bg-surface px-3 py-2">
        <span className="size-1.5 rounded-full bg-line-strong" />
        <span className="size-1.5 rounded-full bg-line-strong" />
        <span className="size-1.5 rounded-full bg-line-strong" />
        <span className="ml-auto text-[0.68rem] font-semibold tracking-[0.08em] text-brand-700 uppercase">{label}</span>
      </div>
      <div className="flex gap-2.5 p-3">
        <div className="hidden w-7 shrink-0 flex-col gap-1.5 min-[400px]:flex sm:flex">
          <span className="h-5 rounded-md bg-brand-600" />
          <span className="h-5 rounded-md bg-surface" />
          <span className="h-5 rounded-md bg-surface" />
          <span className="h-5 rounded-md bg-surface" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-lg border border-line p-1.5">
              <Skeleton className="w-3/5" />
              <span className="mt-1.5 block h-2.5 w-4/5 rounded-full bg-brand-200" />
            </div>
            <div className="rounded-lg border border-line p-1.5">
              <Skeleton className="w-1/2" />
              <span className="mt-1.5 block h-2.5 w-3/5 rounded-full bg-brand-100" />
            </div>
          </div>
          <div className="mt-2.5 flex h-16 items-end gap-1 rounded-lg border border-line px-1.5 pt-1.5">
            {bars.map((height, index) => (
              <span
                key={index}
                style={{ height: `${height}%` }}
                className={cn("flex-1 rounded-t-sm", index === bars.length - 2 ? "bg-brand-600" : "bg-brand-200")}
              />
            ))}
          </div>
          <div className="mt-2 space-y-1.5">
            <div className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              <Skeleton className="flex-1" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-amber-500" />
              <Skeleton className="w-3/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowCard({ t, className }: { t: HomeText; className?: string }) {
  const icons: LucideIcon[] = [FormInput, ListChecks, FileSpreadsheet, Mail];
  const steps = t.illustration.steps.map((label, index) => ({ label, icon: icons[index] ?? Check }));
  return (
    <div aria-hidden="true" className={cn("rounded-2xl border border-line bg-card p-3.5 shadow-card", className)}>
      <div className="flex items-center justify-between">
        <CardCaption icon={Workflow}>{t.illustration.automation}</CardCaption>
        <span className="flex items-center gap-1 rounded-full bg-brand-50 px-2 py-0.5 text-[0.68rem] font-semibold text-brand-700">
          <Check className="size-3" />
          {t.illustration.automatic}
        </span>
      </div>
      <ol className="mt-3 flex items-start">
        {steps.map(({ icon: Icon, label }, index) => {
          const last = index === steps.length - 1;
          return (
            <li key={label} className={cn("flex items-start", !last && "flex-1")}>
              <span className="flex w-14 flex-col items-center gap-1.5 sm:w-16">
                <span
                  className={cn(
                    "flex size-8 items-center justify-center rounded-lg",
                    last ? "bg-brand-600 text-on-brand" : "bg-brand-50 text-brand-700 ring-1 ring-brand-100",
                  )}
                >
                  <Icon className="size-4" />
                </span>
                <span className="text-center text-[0.68rem] leading-tight font-medium text-ink-soft">{label}</span>
              </span>
              {!last && <span className="mt-4 h-px flex-1 border-t border-dashed border-brand-300" />}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** Large outline of the AtajoLab mark behind the composition. */
function BrandBackdrop() {
  return (
    <svg
      aria-hidden="true"
      viewBox={MARK_VIEWBOX}
      className="pointer-events-none absolute top-1/2 left-1/2 hidden w-[108%] -translate-x-1/2 -translate-y-1/2 overflow-visible text-brand-200/60 sm:block"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.3"
      strokeLinejoin="round"
    >
      {markParts.map(({ id, d }) => (
        <path key={id} d={d} />
      ))}
    </svg>
  );
}
