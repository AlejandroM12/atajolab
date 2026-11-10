import { Mail } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pagePath } from "@/i18n/routes";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/data/site";
import { Container } from "./container";

interface CtaBannerProps {
  locale: Locale;
  title?: string;
  description?: string;
}

/** Closing call to action used at the end of pages. Always-dark brand band in both themes. */
export function CtaBanner({ locale, title, description }: CtaBannerProps) {
  const t = getDictionary(locale).ctaBanner;
  return (
    <section aria-labelledby="cta-banner-title" className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-900 px-5 py-12 ring-1 ring-white/5 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(rgb(255_255_255/0.18)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_left,black,transparent_70%)]"
          />
          <div className="relative max-w-2xl">
            <h2 id="cta-banner-title" className="text-3xl leading-tight font-semibold text-white sm:text-4xl">
              {title ?? t.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-mint-100/85">{description ?? t.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={pagePath("contact", locale)} locale={locale} variant="inverted" size="lg">
                {t.primary}
              </ButtonLink>
              <ButtonLink
                href={`mailto:${site.email}`}
                locale={locale}
                variant="outline-inverted"
                size="lg"
                className="px-4 text-[0.9rem] sm:px-6 sm:text-base"
                icon={<Mail aria-hidden="true" className="size-4 shrink-0" />}
              >
                <span className="truncate">{site.email}</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
