import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pagePath, pagePaths } from "@/i18n/routes";
import { getMicroapps } from "@/data/microapps";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { CtaBanner } from "@/components/shared/cta-banner";
import { MicroappCatalog } from "@/components/microapps/microapp-catalog";

export function microappsMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).catalog;
  return pageMetadata({ locale, title: t.metaTitle, description: t.metaDescription, paths: pagePaths("microapps") });
}

export function MicroappsView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const apps = getMicroapps(locale);
  const available = apps.filter((app) => app.status === "AVAILABLE").length;
  const upcoming = apps.filter((app) => app.status === "COMING_SOON").length;

  return (
    <>
      <PageHeader
        eyebrow={t.catalog.eyebrow}
        title={t.catalog.title}
        description={`${t.catalog.intro} ${t.catalog.counts(available, upcoming)}`}
        breadcrumbs={{
          label: t.a11y.breadcrumb,
          items: [{ label: t.nav.home, href: pagePath("home", locale) }, { label: t.nav.microapps }],
        }}
      />
      <section aria-label={t.catalog.sectionLabel} className="py-10 sm:py-14">
        <Container>
          <MicroappCatalog apps={apps} locale={locale} contactHref={pagePath("contact", locale)} />
        </Container>
      </section>
      <CtaBanner locale={locale} title={t.catalog.bannerTitle} description={t.catalog.bannerDescription} />
    </>
  );
}
