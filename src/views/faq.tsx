import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pagePath, pagePaths } from "@/i18n/routes";
import { getFaq } from "@/data/faq";
import type { FaqGroup } from "@/types/content";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { FaqList } from "@/components/shared/faq-list";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";

export function faqMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).faq;
  return pageMetadata({ locale, title: t.metaTitle, description: t.metaDescription, paths: pagePaths("faq") });
}

const groups: FaqGroup[] = ["microapps", "desarrollo"];

export function FaqView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.faq;
  const faq = getFaq(locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <PageHeader
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
        breadcrumbs={{
          label: dict.a11y.breadcrumb,
          items: [{ label: dict.nav.home, href: pagePath("home", locale) }, { label: dict.nav.faq }],
        }}
      />
      <Container className="max-w-4xl space-y-14 py-14 sm:py-20">
        {groups.map((group) => (
          <section key={group} aria-labelledby={`grupo-${group}`}>
            <h2 id={`grupo-${group}`} className="mb-6 text-2xl font-semibold text-ink sm:text-3xl">
              {t.groups[group]}
            </h2>
            <FaqList items={faq.filter((item) => item.group === group)} />
          </section>
        ))}
      </Container>
      <CtaBanner locale={locale} title={t.bannerTitle} description={t.bannerDescription} />
    </>
  );
}
