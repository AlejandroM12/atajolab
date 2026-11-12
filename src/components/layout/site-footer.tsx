import Link from "next/link";
import { Mail } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { microappPath, pagePath } from "@/i18n/routes";
import { catalogParams } from "@/i18n/catalog-params";
import { filtersToSearch, EMPTY_FILTERS } from "@/lib/catalog";
import { site, socialLinks } from "@/data/site";
import { getMicroapps } from "@/data/microapps";
import { Container } from "@/components/shared/container";
import { Logo } from "./logo";
import { mainNav } from "./site-header";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  // The site is exported as static HTML, so the year is the build year.
  const year = new Date().getFullYear();
  const availableApps = getMicroapps(locale).filter((app) => app.status === "AVAILABLE");
  const upcomingHref =
    pagePath("microapps", locale) + filtersToSearch({ ...EMPTY_FILTERS, status: "COMING_SOON" }, catalogParams[locale]);

  return (
    <footer className="border-t border-line bg-paper">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="max-w-xs">
          <Logo locale={locale} />
          <p className="mt-4 text-sm leading-relaxed text-muted">{t.footer.tagline}</p>
        </div>

        <nav aria-label={t.footer.sections}>
          <h2 className="text-sm font-semibold text-ink">{t.footer.navigation}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ...mainNav(locale),
              { label: t.nav.projects, href: pagePath("projects", locale) },
              { label: t.nav.faq, href: pagePath("faq", locale) },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted hover:text-brand-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-ink">{t.footer.microapps}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {availableApps.map((app) => (
              <li key={app.id}>
                <Link href={microappPath(app.slug, locale)} className="text-muted hover:text-brand-700">
                  {app.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href={upcomingHref} className="text-muted hover:text-brand-700">
                {t.footer.upcoming}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">{t.footer.contact}</h2>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium break-all text-brand-700 hover:underline"
          >
            <Mail aria-hidden="true" className="size-4 shrink-0" />
            {site.email}
          </a>
          {socialLinks.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-3 text-sm">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand-700">
                    {link.label}
                    <span className="sr-only">{t.a11y.opensInNewTab}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} AtajoLab. {t.footer.madeIn}
          </p>
          <p>atajolab.dev</p>
        </Container>
      </div>
    </footer>
  );
}
