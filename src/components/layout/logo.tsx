import { useId } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pagePath } from "@/i18n/routes";
import { MARK_STOPS, MARK_VIEWBOX, markParts } from "@/lib/brand-mark";
import { cn } from "@/lib/utils";

/**
 * AtajoLab "A" mark. Light and dark variants come from the --logo-* CSS
 * variables, so it switches with the theme. Size it by height; width follows.
 */
export function LogoMark({ className }: { className?: string }) {
  // Gradient ids must be unique per instance (header and footer share a page).
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      className={cn("aspect-[110/74] w-auto shrink-0", className ?? "h-6")}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {markParts.map(({ id, gradient }) => (
          <linearGradient key={id} id={`${uid}-${id}`} gradientUnits="userSpaceOnUse" {...gradient}>
            {MARK_STOPS.map((offset, i) => (
              <stop key={offset} offset={offset} style={{ stopColor: `var(--logo-${id}-${i + 1})` }} />
            ))}
          </linearGradient>
        ))}
      </defs>
      {markParts.map(({ id, d }) => (
        <path key={id} d={d} fill={`url(#${uid}-${id})`} />
      ))}
    </svg>
  );
}

interface LogoProps {
  locale: Locale;
  className?: string;
}

export function Logo({ locale, className }: LogoProps) {
  return (
    <Link
      href={pagePath("home", locale)}
      className={cn("inline-flex items-center gap-2 rounded-lg", className)}
      aria-label={getDictionary(locale).a11y.logoHome}
    >
      <LogoMark />
      <span className="font-display text-lg font-bold tracking-tight text-ink max-[359px]:sr-only">
        Atajo<span className="text-logo-accent">Lab</span>
      </span>
    </Link>
  );
}
