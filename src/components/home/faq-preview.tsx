import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pagePath } from "@/i18n/routes";
import { getFaq } from "@/data/faq";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { FaqList } from "@/components/shared/faq-list";

export function FaqPreview({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home.faq;
  const items = getFaq(locale).filter((item) => item.home);
  return (
    <section aria-labelledby="faq-title" className="border-t border-line bg-paper py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionHeader id="faq-title" eyebrow={t.eyebrow} title={t.title} description={t.description} />
          <ButtonLink
            href={pagePath("faq", locale)}
            locale={locale}
            variant="secondary"
            className="mt-8"
            icon={<ArrowRight aria-hidden="true" className="size-4" />}
          >
            {t.action}
          </ButtonLink>
        </div>
        <FaqList items={items} />
      </Container>
    </section>
  );
}
