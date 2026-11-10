import type { Metadata } from "next";
import { defaultLocale, htmlLang } from "@/i18n/config";
import { pagePath, pagePaths } from "@/i18n/routes";
import { site } from "@/data/site";
import { languageAlternates } from "@/lib/metadata";
import { fontVariables } from "@/lib/fonts";
import { ThemeScript } from "@/components/theme/theme-script";
import "../globals.css";

const target = pagePath("home", defaultLocale);

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { absolute: "AtajoLab" },
  // The root only forwards to /es/: it is not indexed and points to the localized homes.
  robots: { index: false, follow: true },
  alternates: { canonical: target, languages: languageAlternates(pagePaths("home")) },
};

/**
 * Root layout of `/` only. Without a server there is no redirect response, so the
 * page forwards in the browser (meta refresh + script) and shows a link as fallback.
 * On Cloudflare Pages, `public/_redirects` also answers `/` with a 301 to `/es/`.
 */
export default function RootRedirectLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={htmlLang[defaultLocale]} className={`${fontVariables} h-full antialiased`} suppressHydrationWarning>
      <head>
        <ThemeScript />
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `location.replace(${JSON.stringify(target)} + location.search + location.hash);`,
          }}
        />
      </head>
      <body className="flex min-h-full items-center justify-center p-6">
        {children}
      </body>
    </html>
  );
}
