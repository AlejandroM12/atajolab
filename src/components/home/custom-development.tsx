import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pagePath } from "@/i18n/routes";
import { getServices } from "@/data/services";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { ServiceIcon } from "@/components/solutions/service-icon";

/** Always-dark brand band (same look in both themes). */
export function CustomDevelopment({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home.custom;
  const solutionsPath = pagePath("solutions", locale);
  return (
    <section
      aria-labelledby="custom-title"
      className="relative overflow-hidden bg-brand-950 py-16 text-white sm:py-24 dark:border-y dark:border-white/5"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]"
      />
      <Container className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader id="custom-title" inverted eyebrow={t.eyebrow} title={t.title} description={t.description} />
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={pagePath("contact", locale)} locale={locale} variant="inverted" size="lg">
              {t.primary}
            </ButtonLink>
            <ButtonLink href={solutionsPath} locale={locale} variant="outline-inverted" size="lg">
              {t.secondary}
            </ButtonLink>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {getServices(locale).map((service) => (
            <li key={service.id}>
              <Link
                href={`${solutionsPath}#${service.id}`}
                className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline-white sm:p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#2b9080]/25 text-mint-200 ring-1 ring-[#4fae9b]/30">
                  <ServiceIcon icon={service.icon} className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-1.5 font-display font-semibold text-white">
                    {service.title}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-mint-100/75">{service.summary}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
