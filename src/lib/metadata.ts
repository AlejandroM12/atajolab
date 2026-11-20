import type { Metadata } from "next";
import { site } from "../data/site";
import { defaultLocale, htmlLang, ogLocale, locales, type Locale, type Localized } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}

export function ogImage(locale: Locale) {
  return { url: "/og.png", width: 1200, height: 630, alt: getDictionary(locale).meta.ogImageAlt };
}

/** hreflang map: one entry per language plus x-default (Spanish). */
export function languageAlternates(paths: Localized<string>): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) languages[htmlLang[locale]] = absoluteUrl(paths[locale]);
  languages["x-default"] = absoluteUrl(paths[defaultLocale]);
  return languages;
}

interface PageMetadataInput {
  locale: Locale;
  title: string;
  description: string;
  /** URL of this page in every language (with trailing slash). */
  paths: Localized<string>;
  noIndex?: boolean;
  /** Use the title as is, without the "| AtajoLab" template. */
  absoluteTitle?: boolean;
  /** Social image of this page (1200 × 630). Defaults to the site image. */
  image?: { url: string; alt: string };
}

/** Metadata with canonical URL, hreflang alternates, Open Graph and Twitter card. */
export function pageMetadata({
  locale,
  title,
  description,
  paths,
  noIndex = false,
  absoluteTitle = false,
  image: pageImage,
}: PageMetadataInput): Metadata {
  const ogTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  const image = pageImage ? { ...pageImage, width: 1200, height: 630 } : ogImage(locale);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: paths[locale],
      languages: languageAlternates(paths),
    },
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      siteName: site.name,
      url: paths[locale],
      title: ogTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image.url],
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}
