import Link from "next/link";
import { ArrowRight, Calculator, Command, Star, Wrench, type LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { catalogParams } from "@/i18n/catalog-params";
import { microappPaths, pagePath } from "@/i18n/routes";
import { getMicroapps } from "@/data/microapps";
import { EMPTY_FILTERS, filtersToSearch } from "@/lib/catalog";
import { Badge, type BadgeTone } from "@/components/ui/badge";
import { LogoMark } from "@/components/layout/logo";
import { MARK_VIEWBOX, markParts } from "@/lib/brand-mark";

/**
 * "What do you want to solve?": three real links, worded as needs and not as products.
 * "Atajo" means shortcut, so the panel is the shortcut. The status tag next to each
 * choice comes from the catalog data, so it never claims a tool is ready when it isn't.
 */
export function HeroVisual({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.home.choices;
  const qr = getMicroapps(locale).find((app) => app.id === "atajolab-qr");
  const upcomingHref =
    pagePath("microapps", locale) + filtersToSearch({ ...EMPTY_FILTERS, status: "COMING_SOON" }, catalogParams[locale]);

  const choices: { href: string; icon: LucideIcon; title: string; text: string; tag?: { label: string; tone: BadgeTone } }[] = [
    {
      href: microappPaths("atajolab-qr")[locale],
      icon: Star,
      ...t.reviews,
      tag: qr?.status === "AVAILABLE" ? { label: dict.labels.status.AVAILABLE, tone: "success" } : undefined,
    },
    {
      href: upcomingHref,
      icon: Calculator,
      ...t.planning,
      tag: { label: dict.labels.status.COMING_SOON, tone: "amber" },
    },
    { href: pagePath("contact", locale), icon: Wrench, ...t.custom },
  ];

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <BrandBackdrop />
      <nav aria-label={t.label} className="relative rounded-2xl border border-line bg-card shadow-float">
        <div className="flex items-center gap-3 border-b border-line px-5 py-4">
          <span aria-hidden="true" className="flex size-9 items-center justify-center rounded-lg bg-brand-600 text-on-brand">
            <Command className="size-[18px]" />
          </span>
          <p className="font-display text-lg font-semibold text-ink">{t.question}</p>
        </div>
        <ul className="space-y-1 p-2.5">
          {choices.map(({ href, icon: Icon, title, text, tag }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex items-center gap-4 rounded-xl px-3 py-3.5 transition-colors hover:bg-brand-50"
              >
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand-100 bg-brand-50 text-brand-700"
                >
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base leading-snug font-semibold text-ink">{title}</span>
                  <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
                    {text}
                    {tag && (
                      <Badge tone={tag.tone} dot>
                        {tag.label}
                      </Badge>
                    )}
                  </span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="size-5 shrink-0 text-brand-600 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </li>
          ))}
        </ul>
        <div
          aria-hidden="true"
          className="flex items-center justify-between border-t border-line px-5 py-3 text-xs text-muted"
        >
          <span className="flex items-center gap-2 font-semibold text-ink-soft">
            <LogoMark className="h-3" />
            AtajoLab
          </span>
          <span>{t.footer}</span>
        </div>
      </nav>
    </div>
  );
}

/** Large outline of the AtajoLab mark behind the panel. */
function BrandBackdrop() {
  return (
    <svg
      aria-hidden="true"
      viewBox={MARK_VIEWBOX}
      className="pointer-events-none absolute top-1/2 left-1/2 hidden w-[120%] -translate-x-1/2 -translate-y-1/2 overflow-visible text-brand-200/60 sm:block"
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
