import { Clock, Mail } from "lucide-react";
import type { Microapp } from "@/types/microapp";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { ButtonLink, buttonClasses, type ButtonSize } from "@/components/ui/button";
import { getMicroappCta } from "@/lib/microapp-cta";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Renders the CTA decided by `getMicroappCta`. Status-only CTAs (coming soon,
 * unavailable) render as a non-interactive label, never as a fake button.
 */
export function MicroappCtaButton({
  app,
  locale,
  size = "md",
  className,
}: {
  app: Microapp;
  locale: Locale;
  size?: ButtonSize;
  className?: string;
}) {
  const t = getDictionary(locale).labels;
  const cta = getMicroappCta(app);
  const label = app.ctaLabel ?? t.cta[cta.kind];

  switch (cta.kind) {
    case "use-free":
    case "open-app":
    case "checkout":
      return (
        <ButtonLink href={cta.href} locale={locale} size={size} className={className}>
          {label}
        </ButtonLink>
      );
    case "contact":
      return (
        <ButtonLink
          href={`mailto:${site.email}?subject=${encodeURIComponent(t.inquirySubject(app.name))}`}
          locale={locale}
          variant="secondary"
          size={size}
          className={className}
          icon={<Mail aria-hidden="true" className="size-4" />}
        >
          {label}
        </ButtonLink>
      );
    case "coming-soon":
    case "unavailable":
      return (
        <span
          className={cn(
            buttonClasses("secondary", size),
            "cursor-default border-dashed bg-surface text-muted hover:border-line-strong hover:bg-surface",
            className,
          )}
        >
          <Clock aria-hidden="true" className="size-4" />
          {label}
        </span>
      );
  }
}
