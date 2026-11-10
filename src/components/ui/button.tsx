import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { cn, isExternalUrl } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "inverted" | "outline-inverted";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-600 text-on-brand shadow-sm hover:bg-brand-700 focus-visible:outline-brand-600",
  secondary:
    "border border-line-strong bg-card text-ink hover:border-brand-300 hover:bg-brand-50 focus-visible:outline-brand-600",
  ghost: "text-brand-700 hover:bg-brand-50 focus-visible:outline-brand-600",
  // For the always-dark brand bands: same look in both themes.
  inverted: "bg-white text-[#0c3d38] hover:bg-mint-100 focus-visible:outline-white",
  "outline-inverted":
    "border border-white/25 text-white hover:border-white/50 hover:bg-white/10 focus-visible:outline-white",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-12 px-6 text-base",
};

export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md") {
  return cn(base, variants[variant], sizes[size]);
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  /** Language of the page, for the "opens in a new tab" hint on external links. */
  locale: Locale;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Icon placed after the label. External links get an arrow by default. */
  icon?: ReactNode;
}

/**
 * Link styled as a button. External URLs open in a new tab with
 * `rel="noopener noreferrer"` and a hidden hint for screen readers.
 */
export function ButtonLink({
  href,
  children,
  locale,
  variant = "primary",
  size = "md",
  className,
  icon,
}: ButtonLinkProps) {
  const classes = cn(buttonClasses(variant, size), className);

  if (isExternalUrl(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icon ?? <ArrowUpRight aria-hidden="true" className="size-4" />}
        <span className="sr-only">{getDictionary(locale).a11y.opensInNewTab}</span>
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
