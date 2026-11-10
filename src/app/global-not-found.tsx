import type { Metadata } from "next";
import { locales, htmlLang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pagePath } from "@/i18n/routes";
import { fontVariables } from "@/lib/fonts";
import { LogoMark } from "@/components/layout/logo";
import { ThemeScript } from "@/components/theme/theme-script";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 | AtajoLab",
  robots: { index: false, follow: false },
};

/**
 * Static hosts serve a single 404.html for every unknown URL, in any language,
 * so this page speaks both: Spanish first (default), then English.
 */
export default function GlobalNotFound() {
  return (
    <html lang={htmlLang.es} className={`${fontVariables} h-full antialiased`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col">
        <main className="relative flex flex-1 items-center overflow-hidden">
          <div aria-hidden="true" className="bg-grid mask-fade absolute inset-0" />
          <div className="relative mx-auto w-full max-w-4xl px-4 py-20 sm:px-6">
            <div className="flex justify-center">
              <LogoMark className="h-10" />
            </div>
            <p className="mt-6 text-center font-display text-sm font-semibold text-brand-700">Error 404</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {locales.map((locale) => {
                const t = getDictionary(locale).notFound;
                return (
                  <section
                    key={locale}
                    lang={htmlLang[locale]}
                    className="rounded-2xl border border-line bg-card p-6 text-center shadow-card sm:p-8"
                  >
                    {locale === "es" ? (
                      <h1 className="text-2xl font-semibold text-ink">{t.title}</h1>
                    ) : (
                      <h2 className="text-2xl font-semibold text-ink">{t.title}</h2>
                    )}
                    <p className="mt-3 text-muted">{t.text}</p>
                    <div className="mt-6 flex flex-col items-center gap-2">
                      <a
                        href={pagePath("home", locale)}
                        className="inline-flex h-11 items-center rounded-full bg-brand-600 px-5 font-semibold text-on-brand hover:bg-brand-700"
                      >
                        {t.home}
                      </a>
                      <a href={pagePath("microapps", locale)} className="text-sm font-semibold text-brand-700 hover:underline">
                        {t.microapps}
                      </a>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
