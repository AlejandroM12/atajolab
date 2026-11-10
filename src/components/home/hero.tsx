import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pagePath } from "@/i18n/routes";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { HeroVisual } from "./hero-visual";

/** Institutional hero: the brand and its three lines of work, no single product in focus. */
export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home.hero;
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden border-b border-line bg-paper">
      <div aria-hidden="true" className="bg-grid mask-fade absolute inset-0 opacity-60" />
      <Container className="relative grid grid-cols-1 items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-card px-3 py-1 text-xs font-semibold text-brand-800">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-500" />
            {t.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[2.5rem] leading-[1.06] font-semibold text-ink sm:text-[3.4rem] lg:text-[3.6rem]"
          >
            {t.titleLine1} <span className="block text-brand-600">{t.titleLine2}</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">{t.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={pagePath("microapps", locale)}
              locale={locale}
              size="lg"
              icon={<ArrowRight aria-hidden="true" className="size-4" />}
            >
              {t.primary}
            </ButtonLink>
            <ButtonLink href={pagePath("solutions", locale)} locale={locale} variant="secondary" size="lg">
              {t.secondary}
            </ButtonLink>
          </div>
          <p className="mt-8 text-sm text-muted">{t.madeFor}</p>
        </div>
        <HeroVisual locale={locale} />
      </Container>
    </section>
  );
}
