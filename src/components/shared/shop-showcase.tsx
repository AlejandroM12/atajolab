import Image from "next/image";
import { Check } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { shop } from "@/data/site";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "./container";

/**
 * AtajoLab Shop: the online store of physical QR and NFC products. It is live and sells
 * on its own site, so every call to action here leaves for the store.
 */
export function ShopShowcase({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.shop;

  return (
    <section aria-labelledby="shop-title" className="border-y border-line bg-surface py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-700 uppercase">{t.eyebrow}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <h2 id="shop-title" className="text-[1.75rem] leading-tight font-semibold text-ink sm:text-4xl">
              {shop.name}
            </h2>
            <Badge tone="success" dot>
              {dict.labels.status.AVAILABLE}
            </Badge>
          </div>
          <p className="mt-4 font-display text-xl leading-snug font-semibold text-ink-soft">{t.headline}</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">{t.intro}</p>
          <ul className="mt-6 space-y-2.5">
            {t.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 text-[0.95rem] text-ink-soft">
                <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={shop.url} locale={locale} size="lg">
              {t.cta}
            </ButtonLink>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{t.note}</p>
        </div>

        <ShopImage alt={t.imageAlt} sizes="(min-width: 1024px) 620px, 100vw" />
      </Container>
    </section>
  );
}

/** Compact version for the tools catalog: the store is related, but it is not one of the tools. */
export function ShopBanner({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).shop;

  return (
    <section aria-labelledby="shop-banner-title" className="pb-2 sm:pb-4">
      <Container>
        <div className="grid items-center gap-6 rounded-3xl border border-line bg-surface p-5 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-8 sm:p-8">
          <ShopImage alt={t.imageAlt} sizes="(min-width: 640px) 240px, 100vw" />
          <div>
            <p className="text-sm font-semibold text-brand-700">{shop.name}</p>
            <h2 id="shop-banner-title" className="mt-1.5 text-2xl leading-snug font-semibold text-ink">
              {t.bannerTitle}
            </h2>
            <p className="mt-2 leading-relaxed text-muted">{t.bannerText}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={shop.url} locale={locale}>
                {t.cta}
              </ButtonLink>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{t.note}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Official render from the store. Its background is light in both themes, so it sits in a frame. */
function ShopImage({ alt, sizes }: { alt: string; sizes: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line shadow-card">
      <Image
        src={shop.image.src}
        alt={alt}
        width={shop.image.width}
        height={shop.image.height}
        sizes={sizes}
        className="h-auto w-full"
      />
    </div>
  );
}
