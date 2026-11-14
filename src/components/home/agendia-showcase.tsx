import { ArrowRight, Check } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { microappPath } from "@/i18n/routes";
import { getMicroapps } from "@/data/microapps";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { ProductStage } from "@/components/microapps/product-stage";

/**
 * Agendia, launched: a section of its own inside the tools area of the home.
 * It reads the tool's data, so it disappears if Agendia is not available.
 */
export function AgendiaShowcase({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.home.agendia;
  const app = getMicroapps(locale).find((item) => item.id === "agendia");
  if (!app || app.status !== "AVAILABLE") return null;

  return (
    <section aria-labelledby="agendia-title" className="py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <ProductStage images={app.images} mark={app.logo ? { src: app.logo, name: app.name } : undefined} className="order-2 lg:order-1" />

        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-700 uppercase">{t.eyebrow}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <h2 id="agendia-title" className="text-[1.75rem] leading-tight font-semibold text-ink sm:text-4xl">
              {app.name}
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
            <ButtonLink
              href={microappPath(app.slug, locale)}
              locale={locale}
              size="lg"
              icon={<ArrowRight aria-hidden="true" className="size-4" />}
            >
              {t.primary}
            </ButtonLink>
            {app.trial && (
              <ButtonLink href={app.trial.href} locale={locale} size="lg" variant="secondary">
                {t.secondary}
              </ButtonLink>
            )}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{t.note}</p>
        </div>
      </Container>
    </section>
  );
}
