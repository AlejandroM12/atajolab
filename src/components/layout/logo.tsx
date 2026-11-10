import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pagePath } from "@/i18n/routes";
import { cn } from "@/lib/utils";

/**
 * Official AtajoLab mark (same artwork as the atajolab-google-qr repository):
 * rounded square in brand green with a white arrow. Fixed colors in both themes.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("shrink-0", className ?? "size-9")} aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#0f6e62" />
      <path
        d="M8.5 16h11M15.5 11.5 20.5 16l-5 4.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
      className={cn("inline-flex items-center gap-2.5 rounded-lg", className)}
      aria-label={getDictionary(locale).a11y.logoHome}
    >
      <LogoMark />
      <span className="font-display text-lg font-semibold tracking-tight text-ink max-[359px]:sr-only">
        AtajoLab
      </span>
    </Link>
  );
}
