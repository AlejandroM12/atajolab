import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { htmlLang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pagePaths } from "@/i18n/routes";
import { absoluteUrl, pageMetadata } from "@/lib/metadata";
import { site } from "@/data/site";
import { Hero } from "@/components/home/hero";
import { FeaturedMicroapps } from "@/components/home/featured-microapps";
import { Benefits } from "@/components/home/benefits";
import { CustomDevelopment } from "@/components/home/custom-development";
import { FeaturedCase } from "@/components/home/featured-case";
import { FaqPreview } from "@/components/home/faq-preview";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";

export function homeMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).home;
  return pageMetadata({
    locale,
    title: t.metaTitle,
    description: t.metaDescription,
    paths: pagePaths("home"),
    absoluteTitle: true,
  });
}

export function HomeView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        email: site.email,
        logo: absoluteUrl("/brand/atajolab-icon-512.png"),
        description: t.meta.siteDescription,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: absoluteUrl(pagePaths("home")[locale]),
        inLanguage: htmlLang[locale],
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <Hero locale={locale} />
      <FeaturedMicroapps locale={locale} />
      <Benefits locale={locale} />
      <CustomDevelopment locale={locale} />
      <FeaturedCase locale={locale} />
      <FaqPreview locale={locale} />
      <CtaBanner locale={locale} />
    </>
  );
}
