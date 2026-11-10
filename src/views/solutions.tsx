import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pagePath, pagePaths, projectPath } from "@/i18n/routes";
import { getServices } from "@/data/services";
import { getProjects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeader } from "@/components/shared/section-header";
import { CtaBanner } from "@/components/shared/cta-banner";
import { ServiceIcon } from "@/components/solutions/service-icon";

export function solutionsMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).solutions;
  return pageMetadata({ locale, title: t.metaTitle, description: t.metaDescription, paths: pagePaths("solutions") });
}

export function SolutionsView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.solutions;
  const example = getProjects(locale).find((project) => project.kind === "CUSTOM_DEVELOPMENT");

  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
        breadcrumbs={{
          label: dict.a11y.breadcrumb,
          items: [{ label: dict.nav.home, href: pagePath("home", locale) }, { label: dict.nav.solutions }],
        }}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={pagePath("contact", locale)} locale={locale} size="lg">
            {t.primary}
          </ButtonLink>
          <ButtonLink href={pagePath("projects", locale)} locale={locale} variant="secondary" size="lg">
            {t.secondary}
          </ButtonLink>
        </div>
      </PageHeader>

      <section aria-labelledby="servicios" className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            id="servicios"
            eyebrow={t.servicesEyebrow}
            title={t.servicesTitle}
            description={t.servicesDescription}
          />
          <ul className="mt-12 grid gap-6 lg:grid-cols-2">
            {getServices(locale).map((service) => (
              <li key={service.id} id={service.id} className="scroll-mt-24">
                <article className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 shadow-card sm:p-8">
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                      <ServiceIcon icon={service.icon} className="size-6" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
                      <p className="text-sm text-muted">{service.summary}</p>
                    </div>
                  </div>
                  <dl className="mt-6 space-y-5">
                    <div>
                      <dt className="text-xs font-semibold tracking-wide text-brand-700 uppercase">{t.problem}</dt>
                      <dd className="mt-1.5 leading-relaxed text-ink-soft">{service.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold tracking-wide text-brand-700 uppercase">{t.solution}</dt>
                      <dd className="mt-1.5 leading-relaxed text-ink-soft">{service.solution}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold tracking-wide text-brand-700 uppercase">{t.fitsFor}</dt>
                      <dd className="mt-1.5 leading-relaxed text-ink-soft">{service.fitsFor}</dd>
                    </div>
                  </dl>
                  <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5" aria-label={t.examples}>
                    {service.examples.map((example) => (
                      <li key={example} className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink-soft">
                        {example}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="proceso" className="border-y border-line bg-surface py-16 sm:py-24">
        <Container>
          <SectionHeader id="proceso" eyebrow={t.processEyebrow} title={t.processTitle} />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step, index) => (
              <li key={step.title} className="relative rounded-2xl border border-line bg-card p-6">
                <span className="font-display text-sm font-semibold text-brand-600 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          {example && (
            <Link
              href={projectPath(example.slug, locale)}
              className="group mt-10 flex flex-col gap-2 rounded-2xl border border-line bg-card p-6 transition-colors hover:border-brand-300 sm:flex-row sm:items-center sm:justify-between"
            >
              <span>
                <span className="block text-sm text-muted">{t.exampleLabel}</span>
                <span className="font-display text-lg font-semibold text-ink">{t.exampleTitle}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-brand-700">
                {t.exampleCta}
                <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          )}
        </Container>
      </section>

      <CtaBanner locale={locale} title={t.bannerTitle} description={t.bannerDescription} />
    </>
  );
}
