import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pagePath } from "@/i18n/routes";
import { getMicroapps } from "@/data/microapps";
import { sortMicroapps } from "@/lib/catalog";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { MicroappCard } from "@/components/microapps/microapp-card";

export function FeaturedMicroapps({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home.featured;
  const featured = sortMicroapps(getMicroapps(locale).filter((app) => app.featured)).slice(0, 3);
  return (
    <section aria-labelledby="featured-title" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          id="featured-title"
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          action={
            <ButtonLink
              href={pagePath("microapps", locale)}
              locale={locale}
              variant="secondary"
              icon={<ArrowRight aria-hidden="true" className="size-4" />}
            >
              {t.action}
            </ButtonLink>
          }
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((app) => (
            <li key={app.id}>
              <MicroappCard app={app} locale={locale} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
