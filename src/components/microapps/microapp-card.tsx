import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Microapp } from "@/types/microapp";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { microappPath } from "@/i18n/routes";
import { getMicroappCta, isActionableCta } from "@/lib/microapp-cta";
import { cn } from "@/lib/utils";
import { MicroappArtwork } from "./microapp-artwork";
import { PricingBadge, StatusBadge } from "./microapp-badges";
import { MicroappCtaButton } from "./microapp-cta-button";

interface MicroappCardProps {
  app: Microapp;
  locale: Locale;
  /** Heading level inside the page outline. */
  headingLevel?: "h2" | "h3";
  /** Load the image eagerly (first cards above the fold). */
  priority?: boolean;
}

/**
 * Catalog card. The whole card links to the detail page (stretched link on the title);
 * the CTA sits above that layer so it stays independently clickable.
 */
export function MicroappCard({ app, locale, headingLevel: Heading = "h3", priority = false }: MicroappCardProps) {
  const t = getDictionary(locale);
  const cover = app.images[0];
  const cta = getMicroappCta(app);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-card transition-[border-color,box-shadow,transform] duration-200",
        "hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-float focus-within:border-brand-300",
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface">
        {cover ? (
          <Image
            src={cover.src}
            alt=""
            width={cover.width}
            height={cover.height}
            priority={priority}
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <MicroappArtwork app={app} />
        )}
        <StatusBadge app={app} locale={locale} className="absolute top-3 left-3 shadow-sm" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm font-semibold text-brand-700">{app.name}</p>
        <Heading className="mt-1.5 text-xl leading-snug font-semibold text-ink">
          <Link href={microappPath(app.slug, locale)} className="rounded after:absolute after:inset-0 after:content-['']">
            {app.headline}
          </Link>
        </Heading>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{app.shortDescription}</p>
        {app.audience[0] && (
          <p className="mt-3 text-sm leading-snug text-ink-soft">
            <span className="font-semibold">{t.labels.audience}:</span> {app.audience[0].replace(/\.$/, "")}
          </p>
        )}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
          <PricingBadge app={app} locale={locale} />
          {isActionableCta(cta) ? (
            <MicroappCtaButton app={app} locale={locale} size="sm" className="relative z-10" />
          ) : (
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
              {t.labels.viewDetails}
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
