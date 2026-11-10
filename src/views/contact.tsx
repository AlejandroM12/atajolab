import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquareText } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pagePath, pagePaths } from "@/i18n/routes";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { CopyEmailButton } from "@/components/shared/copy-email-button";

export function contactMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).contact;
  return pageMetadata({
    locale,
    title: t.metaTitle,
    description: t.metaDescription(site.email),
    paths: pagePaths("contact"),
  });
}

export function ContactView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.contact;
  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(t.mailSubject)}&body=${encodeURIComponent(t.mailBody.join("\n"))}`;

  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
        breadcrumbs={{
          label: dict.a11y.breadcrumb,
          items: [{ label: dict.nav.home, href: pagePath("home", locale) }, { label: dict.nav.contact }],
        }}
      />

      <section aria-label={t.sectionLabel} className="py-14 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-line bg-card p-6 shadow-card sm:p-10">
            <span className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
              <Mail aria-hidden="true" className="size-6" />
            </span>
            <h2 className="mt-6 text-2xl font-semibold text-ink">{t.emailHeading}</h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block font-display text-xl font-semibold break-all text-brand-700 hover:underline sm:text-2xl"
            >
              {site.email}
            </a>
            <p className="mt-4 leading-relaxed text-muted">{t.emailHelp}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={mailtoHref} locale={locale} size="lg" icon={<Mail aria-hidden="true" className="size-4" />}>
                {t.write}
              </ButtonLink>
              <CopyEmailButton email={site.email} labels={{ copy: t.copy, copied: t.copied, error: t.copyError }} />
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-surface p-6 sm:p-10">
            <span className="flex size-12 items-center justify-center rounded-xl bg-card text-brand-700 ring-1 ring-line">
              <MessageSquareText aria-hidden="true" className="size-6" />
            </span>
            <h2 className="mt-6 text-2xl font-semibold text-ink">{t.tipsTitle}</h2>
            <p className="mt-2 leading-relaxed text-muted">{t.tipsIntro}</p>
            <ul className="mt-6 space-y-4">
              {t.tips.map((tip, index) => (
                <li key={tip.title} className="flex gap-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-card font-display text-sm font-semibold text-brand-700 ring-1 ring-line">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{tip.title}</span>
                    <span className="text-muted">{tip.text}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-muted">
              {t.faqBefore}{" "}
              <Link href={pagePath("faq", locale)} className="font-semibold text-brand-700 hover:underline">
                {t.faqLink}
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
