import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pagePath, pagePaths } from "@/i18n/routes";
import { getProjects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { CtaBanner } from "@/components/shared/cta-banner";
import { ProjectCard } from "@/components/projects/project-card";

export function projectsMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).projects;
  return pageMetadata({ locale, title: t.metaTitle, description: t.metaDescription, paths: pagePaths("projects") });
}

export function ProjectsView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.projects;
  const ordered = [...getProjects(locale)].sort((a, b) => Number(b.featured) - Number(a.featured));
  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
        breadcrumbs={{
          label: dict.a11y.breadcrumb,
          items: [{ label: dict.nav.home, href: pagePath("home", locale) }, { label: dict.nav.projects }],
        }}
      />
      <section aria-label={t.listLabel} className="py-14 sm:py-20">
        <Container>
          <ul className="space-y-8">
            {ordered.map((project, index) => (
              <li key={project.id}>
                <ProjectCard project={project} locale={locale} reverse={index % 2 === 1} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBanner locale={locale} title={t.bannerTitle} />
    </>
  );
}
