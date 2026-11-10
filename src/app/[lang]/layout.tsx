import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { htmlLang, isLocale, ogLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/data/site";
import { ogImage } from "@/lib/metadata";
import { fontVariables } from "@/lib/fonts";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ThemeScript } from "@/components/theme/theme-script";
import "../globals.css";

// Only the languages listed by each page's generateStaticParams exist.
export const dynamicParams = false;

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    metadataBase: new URL(site.url),
    title: { default: t.meta.defaultTitle, template: "%s | AtajoLab" },
    description: t.meta.siteDescription,
    applicationName: site.name,
    openGraph: { type: "website", locale: ogLocale[lang], siteName: site.name, images: [ogImage(lang)] },
    twitter: { card: "summary_large_image" },
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1211" },
  ],
};

/** Root layout for every localized page. `<html lang>` follows the URL language. */
export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    // The theme script adds `.dark` before hydration, hence suppressHydrationWarning on <html> only.
    <html lang={htmlLang[lang]} className={`${fontVariables} h-full antialiased`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col overflow-x-clip">
        <a
          href="#contenido"
          className="sr-only z-[60] rounded-full bg-brand-600 px-4 py-2 font-semibold text-on-brand focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {t.a11y.skipToContent}
        </a>
        <SiteHeader locale={lang} />
        <main id="contenido" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter locale={lang} />
      </body>
    </html>
  );
}
