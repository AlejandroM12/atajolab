import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { allRoutes, howWeWorkPath, pagePath, pagePaths } from "@/i18n/routes";
import type { NavItem } from "@/types/content";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./nav-links";

export function mainNav(locale: Locale): NavItem[] {
  const t = getDictionary(locale).nav;
  return [
    { label: t.home, href: pagePath("home", locale) },
    { label: t.microapps, href: pagePath("microapps", locale) },
    { label: t.solutions, href: pagePath("solutions", locale) },
    { label: t.howWeWork, href: howWeWorkPath(locale) },
    { label: t.contact, href: pagePath("contact", locale) },
  ];
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const nav = mainNav(locale);
  const contactHref = pagePath("contact", locale);
  // "Contact" is the highlighted button, so it is not repeated in the desktop list.
  const desktopItems = nav.filter((item) => item.href !== contactHref);

  return (
    // Solid background on purpose: backdrop-filter would trap the fixed mobile menu inside the header.
    <header className="sticky top-0 z-50 border-b border-line/80 bg-page/[0.97]">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Logo locale={locale} />
        <nav aria-label={t.a11y.mainNav} className="hidden lg:block">
          <NavLinks items={desktopItems} />
        </nav>
        <div className="flex items-center gap-1.5">
          <LanguageSwitcher
            locale={locale}
            routes={allRoutes()}
            catalogPaths={pagePaths("microapps")}
            homePaths={pagePaths("home")}
            label={t.language.label}
          />
          <ThemeToggle locale={locale} />
          {/* Wrapper controls visibility: the button's own `inline-flex` would override `hidden`. */}
          <div className="ml-1.5 hidden lg:block">
            <ButtonLink href={contactHref} locale={locale} size="sm">
              {t.nav.contact}
            </ButtonLink>
          </div>
          <MobileNav
            items={nav}
            cta={{ label: t.nav.mobileCta, href: contactHref }}
            labels={{ open: t.a11y.openMenu, close: t.a11y.closeMenu, nav: t.a11y.mainNav }}
          />
        </div>
      </Container>
    </header>
  );
}
