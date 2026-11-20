import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertCircle, ArrowRight, ArrowUpRight, Check, Clock, Sparkles, Users } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { htmlLang, intlLocale, locales } from "@/i18n/config";
import type { Microapp } from "@/types/microapp";
import { getDictionary } from "@/i18n/dictionaries";
import { catalogParams } from "@/i18n/catalog-params";
import { microappPaths, pagePath, projectPath } from "@/i18n/routes";
import { getMicroapps, microappSources } from "@/data/microapps";
import { getProjects } from "@/data/projects";
import { getCategory } from "@/data/categories";
import { site } from "@/data/site";
import { getMicroappCta, isActionableCta } from "@/lib/microapp-cta";
import { formatPrice, isIndexable } from "@/lib/microapp-labels";
import { absoluteUrl } from "@/lib/metadata";
import { pageMetadata } from "@/lib/metadata";
import { EMPTY_FILTERS, filtersToSearch } from "@/lib/catalog";
import { displayHost } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { JsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ColdStartNote } from "@/components/shared/cold-start-note";
import { CtaBanner } from "@/components/shared/cta-banner";
import { MicroappArtwork } from "@/components/microapps/microapp-artwork";
import { PricingBadge, StatusBadge } from "@/components/microapps/microapp-badges";
import { MicroappCtaButton } from "@/components/microapps/microapp-cta-button";
import { MicroappGallery } from "@/components/microapps/microapp-gallery";
import { ProductStage, StageGallery } from "@/components/microapps/product-stage";
import { MicroappCard } from "@/components/microapps/microapp-card";

/** Static params for `/[lang]/microapps/[slug]`: every tool in every language, with its localized slug. */
export function microappStaticParams() {
  return locales.flatMap((lang) => microappSources.map((app) => ({ lang, slug: app.slug[lang] })));
}

function findApp(slug: string, locale: Locale) {
  return getMicroapps(locale).find((app) => app.slug === slug);
}

export function microappMetadata(slug: string, locale: Locale): Metadata {
  const app = findApp(slug, locale);
  if (!app) return {};
  return pageMetadata({
    locale,
    title: app.seoTitle ?? `${app.name}: ${app.headline}`,
    description: app.seoDescription ?? app.shortDescription,
    paths: microappPaths(app.id),
    // Upcoming tools stay out of search results (in every language) until they exist.
    noIndex: !isIndexable(app),
    image: app.social && { url: app.social.image, alt: app.social.alt },
  });
}

export function MicroappDetailView({ slug, locale }: { slug: string; locale: Locale }) {
  const app = findApp(slug, locale);
  if (!app) notFound();

  const t = getDictionary(locale);
  const m = t.microapp;
  const category = getCategory(app.category, locale);
  const cta = getMicroappCta(app);
  const available = app.status === "AVAILABLE";
  const price = available ? formatPrice(app, locale, t) : null;
  const others = getMicroapps(locale).filter((other) => other.id !== app.id).slice(0, 3);
  const project = app.projectId ? getProjects(locale).find((p) => p.id === app.projectId) : undefined;
  const categoryHref =
    pagePath("microapps", locale) + filtersToSearch({ ...EMPTY_FILTERS, category: app.category }, catalogParams[locale]);
  const host = app.appUrl ? displayHost(app.appUrl) : undefined;
  const staged = app.imageStyle === "stage";
  const structuredData = app.appUrl && (app.plans || app.pricingModel === "FREE") ? softwareData(app, locale) : null;

  return (
    <>
      {structuredData && <JsonLd data={structuredData} />}
      <header className="relative overflow-hidden border-b border-line bg-paper">
        <div aria-hidden="true" className="bg-grid mask-fade absolute inset-0 opacity-70" />
        <Container className="relative grid gap-10 py-10 sm:py-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-16">
          <div>
            <Breadcrumbs
              label={t.a11y.breadcrumb}
              items={[
                { label: t.nav.home, href: pagePath("home", locale) },
                { label: t.nav.microapps, href: pagePath("microapps", locale) },
                { label: app.name },
              ]}
              className="mb-6"
            />
            <div className="flex flex-wrap items-center gap-2">
              <StatusBadge app={app} locale={locale} />
              <PricingBadge app={app} locale={locale} />
              <Link
                href={categoryHref}
                className="rounded-full px-1 text-xs font-semibold tracking-wide text-brand-700 uppercase hover:underline"
              >
                {category.label}
              </Link>
            </div>
            <p className="mt-5 text-base font-semibold text-brand-700">{app.name}</p>
            <h1 className="mt-1.5 text-[2.1rem] leading-[1.1] font-semibold text-ink sm:text-5xl">{app.headline}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{app.shortDescription}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <MicroappCtaButton app={app} locale={locale} size="lg" />
              {app.trial && available && (
                <ButtonLink href={app.trial.href} locale={locale} size="lg" variant="secondary">
                  {app.trial.label}
                </ButtonLink>
              )}
              {app.demoUrl && available && (
                <a
                  href={app.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-700 hover:underline"
                >
                  {m.viewDemo}
                  <span className="sr-only">{t.a11y.opensInNewTab}</span>
                </a>
              )}
            </div>

            {available && isActionableCta(cta) && (
              <div className="mt-4 space-y-2">
                {host && (
                  <p className="text-sm text-muted">
                    {m.opensAt} <span className="font-medium text-ink-soft">{host}</span>.
                    {app.pricingModel !== "FREE" && !price && !app.pricingNote && ` ${m.priceNote}`}
                  </p>
                )}
                {app.hosting?.coldStart && <ColdStartNote text={t.coldStart} />}
              </div>
            )}

            {app.status === "COMING_SOON" && (
              <p className="mt-4 flex max-w-xl items-start gap-2 text-sm leading-snug text-muted">
                <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400" />
                <span>
                  {m.comingSoonBefore}{" "}
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(t.labels.interestSubject(app.name))}`}
                    className="font-semibold text-brand-700 hover:underline"
                  >
                    {m.comingSoonLink}
                  </a>
                  {m.comingSoonAfter}
                </span>
              </p>
            )}
          </div>

          <div>
            {app.images.length === 0 ? (
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-line shadow-card">
                <MicroappArtwork app={app} />
              </div>
            ) : staged ? (
              <ProductStage images={app.images} mark={app.logo ? { src: app.logo, name: app.name } : undefined} />
            ) : (
              <MicroappGallery images={app.images.slice(0, 1)} url={host} />
            )}
          </div>
        </Container>
      </header>

      <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div className="min-w-0 space-y-14">
          <section aria-labelledby="descripcion">
            <h2 id="descripcion" className="text-2xl font-semibold text-ink sm:text-3xl">
              {available ? m.whatItIs : m.whatWeAreBuilding}
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink-soft">
              {app.fullDescription.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          {app.problems && (
            <section aria-labelledby="problemas">
              <h2 id="problemas" className="text-2xl font-semibold text-ink sm:text-3xl">
                {m.problems}
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {app.problems.map((problem) => (
                  <li
                    key={problem}
                    className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4 text-[0.95rem] leading-relaxed text-ink-soft"
                  >
                    <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400" />
                    {problem}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {app.steps && (
            <section aria-labelledby="como-funciona">
              <h2 id="como-funciona" className="text-2xl font-semibold text-ink sm:text-3xl">
                {m.howItWorks}
              </h2>
              <ol className="mt-6 grid gap-4 sm:grid-cols-3">
                {app.steps.map((step, index) => (
                  <li key={step.title} className="rounded-2xl border border-line bg-card p-5 shadow-card">
                    <span className="font-display text-sm font-semibold text-brand-600 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted">{step.text}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {(staged ? app.images.length > 0 : app.images.length > 1) && (
            <section aria-labelledby="capturas">
              <h2 id="capturas" className="text-2xl font-semibold text-ink sm:text-3xl">
                {m.screenshots}
              </h2>
              <p className="mt-2 text-muted">{m.screenshotsNote}</p>
              <div className="mt-6">
                {staged ? (
                  <StageGallery images={app.images} />
                ) : (
                  <MicroappGallery images={app.images.slice(1)} url={host} />
                )}
              </div>
            </section>
          )}

          <section aria-labelledby="funcionalidades">
            <h2 id="funcionalidades" className="text-2xl font-semibold text-ink sm:text-3xl">
              {available ? m.features : m.plannedFeatures}
            </h2>
            {!available && <p className="mt-2 text-muted">{m.plannedNote}</p>}
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {app.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-line bg-card p-4 text-[0.95rem] leading-relaxed text-ink-soft"
                >
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {app.plans && (
            <section aria-labelledby="precios" className="scroll-mt-24">
              <h2 id="precios" className="text-2xl font-semibold text-ink sm:text-3xl">
                {m.plansTitle}
              </h2>
              <p className="mt-2 text-muted">{m.plansIntro}</p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {app.plans.map((plan) => (
                  <li key={plan.id} className="flex flex-col rounded-2xl border border-line bg-card p-6 shadow-card">
                    <h3 className="text-lg font-semibold text-ink">{plan.name}</h3>
                    <p className="mt-2 font-display text-3xl font-semibold text-ink">
                      {planPrice(plan.price, plan.currency, locale)}
                      <span className="ml-1.5 text-base font-medium text-muted">
                        {plan.billingPeriod ? t.labels.perMonth : m.oneTimePayment}
                      </span>
                    </p>
                    <ul className="mt-4 space-y-2">
                      {plan.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
                          <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-600" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              {app.pricingNote && <p className="mt-4 text-sm leading-relaxed text-muted">{app.pricingNote}</p>}
            </section>
          )}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-line bg-card p-6 shadow-card">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-ink">
              <Sparkles aria-hidden="true" className="size-5 text-brand-600" />
              {m.benefits}
            </h2>
            <ul className="mt-4 space-y-3">
              {app.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5 leading-relaxed text-ink-soft">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-card p-6 shadow-card">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-ink">
              <Users aria-hidden="true" className="size-5 text-brand-600" />
              {m.audience}
            </h2>
            <ul className="mt-4 space-y-3">
              {app.audience.map((item) => (
                <li key={item} className="flex items-start gap-2.5 leading-relaxed text-ink-soft">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line text-sm">
            <div className="bg-paper p-4">
              <dt className="text-muted">{m.pricingModel}</dt>
              <dd className="mt-1 font-semibold text-ink">
                {app.pricingLabel ?? t.labels.pricing[app.pricingModel]}
                {!available && ` ${m.planned}`}
              </dd>
            </div>
            <div className="bg-paper p-4">
              <dt className="text-muted">{m.price}</dt>
              <dd className="mt-1 font-semibold text-ink">
                {app.plans ? (
                  <a href="#precios" className="text-brand-700 hover:underline">
                    {m.seePlans}
                  </a>
                ) : (
                  (price ?? (available ? m.priceInApp : m.priceTbd))
                )}
              </dd>
            </div>
          </dl>

          {app.pricingNote && !app.plans && <p className="text-sm leading-relaxed text-muted">{app.pricingNote}</p>}

          {app.officialLinks && (
            <div className="rounded-2xl border border-line bg-card p-6 shadow-card">
              <h2 className="text-lg font-semibold text-ink">{m.officialLinks}</h2>
              <ul className="mt-4 space-y-2.5">
                {app.officialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline"
                    >
                      {link.label}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                      <span className="sr-only">{t.a11y.opensInNewTab}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project && (
            <Link
              href={projectPath(project.slug, locale)}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-card p-5 transition-colors hover:border-brand-300"
            >
              <span>
                <span className="block text-sm text-muted">{m.caseStudy}</span>
                <span className="font-display font-semibold text-ink">{m.howWeBuilt(app.name)}</span>
              </span>
              <ArrowRight
                aria-hidden="true"
                className="size-5 text-brand-600 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          )}
        </aside>
      </Container>

      {others.length > 0 && (
        <section aria-labelledby="otras" className="border-t border-line bg-surface py-14 sm:py-20">
          <Container>
            <h2 id="otras" className="text-2xl font-semibold text-ink sm:text-3xl">
              {m.otherMicroapps}
            </h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((other) => (
                <li key={other.id}>
                  <MicroappCard app={other} locale={locale} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CtaBanner locale={locale} />
    </>
  );
}

function planPrice(amount: number, currency: "ARS" | "USD", locale: Locale): string {
  return new Intl.NumberFormat(intlLocale[locale], { style: "currency", currency, maximumFractionDigits: 0 }).format(amount);
}

/** Structured data for a tool that has public plans: the product, its features and what it costs. */
function softwareData(app: Microapp, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${absoluteUrl(microappPaths(app.id)[locale])}#software`,
    name: app.name,
    description: app.seoDescription ?? app.shortDescription,
    url: app.appUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: htmlLang[locale],
    featureList: app.features,
    image: app.social ? absoluteUrl(app.social.image) : app.images[0] ? absoluteUrl(app.images[0].src) : undefined,
    publisher: { "@id": `${site.url}/#organization` },
    offers: app.plans
      ? app.plans.map((plan) => ({
          "@type": "Offer",
          name: plan.name,
          price: plan.price,
          priceCurrency: plan.currency,
          url: app.appUrl,
          availability: "https://schema.org/InStock",
        }))
      : { "@type": "Offer", price: 0, priceCurrency: "ARS", url: app.appUrl, availability: "https://schema.org/InStock" },
  };
}
