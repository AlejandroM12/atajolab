import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { microappPath, pagePath, projectPaths } from "@/i18n/routes";
import { getProjects, projectSources } from "@/data/projects";
import { getMicroapps } from "@/data/microapps";
import { pageMetadata } from "@/lib/metadata";
import { displayHost } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { BrowserFrame } from "@/components/shared/browser-frame";
import { ColdStartNote } from "@/components/shared/cold-start-note";
import { CtaBanner } from "@/components/shared/cta-banner";
import { ProjectDisclaimers } from "@/components/projects/project-disclaimers";
import { MicroappCard } from "@/components/microapps/microapp-card";

/** Static params for one language's project route (`/es/proyectos/[slug]` or `/en/projects/[slug]`). */
export function projectStaticParams(locale: Locale) {
  return projectSources.map((project) => ({ lang: locale, slug: project.slug[locale] }));
}

function findProject(slug: string, locale: Locale) {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function projectMetadata(slug: string, locale: Locale): Metadata {
  const project = findProject(slug, locale);
  if (!project) return {};
  return pageMetadata({
    locale,
    title: getDictionary(locale).project.metaTitle(project.name),
    description: project.seoDescription ?? project.summary,
    paths: projectPaths(project.id),
  });
}

export function ProjectDetailView({ slug, locale }: { slug: string; locale: Locale }) {
  const project = findProject(slug, locale);
  if (!project) notFound();

  const dict = getDictionary(locale);
  const t = dict.project;
  const [cover, ...rest] = project.images;
  const demo = project.links[0];
  const microapp = project.microappId ? getMicroapps(locale).find((app) => app.id === project.microappId) : undefined;

  return (
    <>
      <header className="relative overflow-hidden border-b border-line bg-paper">
        <div aria-hidden="true" className="bg-grid mask-fade absolute inset-0 opacity-70" />
        <Container className="relative py-10 sm:py-14 lg:py-16">
          <Breadcrumbs
            label={dict.a11y.breadcrumb}
            items={[
              { label: dict.nav.home, href: pagePath("home", locale) },
              { label: dict.nav.projects, href: pagePath("projects", locale) },
              { label: project.name },
            ]}
            className="mb-6"
          />
          <Badge tone={project.kind === "CUSTOM_DEVELOPMENT" ? "brand" : "neutral"}>
            {dict.projects.kinds[project.kind]}
          </Badge>
          <h1 className="mt-5 text-[2.1rem] leading-[1.1] font-semibold text-ink sm:text-5xl">{project.name}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{project.description}</p>

          {(project.links.length > 0 || microapp) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {project.links.map((link) => (
                <ButtonLink key={link.href} href={link.href} locale={locale} size="lg">
                  {link.label}
                </ButtonLink>
              ))}
              {microapp && (
                <ButtonLink
                  href={microappPath(microapp.slug, locale)}
                  locale={locale}
                  size="lg"
                  variant={project.links.length > 0 ? "secondary" : "primary"}
                  icon={<ArrowRight aria-hidden="true" className="size-4" />}
                >
                  {t.viewMicroapp}
                </ButtonLink>
              )}
            </div>
          )}
          {demo?.note && <ColdStartNote className="mt-4 max-w-xl" text={demo.note} />}

          {cover && (
            <figure className="mt-12">
              <BrowserFrame url={demo ? displayHost(demo.href) : undefined}>
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  width={cover.width}
                  height={cover.height}
                  priority
                  sizes="(min-width: 1152px) 1088px, 100vw"
                  className="h-auto w-full"
                />
              </BrowserFrame>
              {cover.caption && <figcaption className="mt-3 text-center text-sm text-muted">{cover.caption}</figcaption>}
            </figure>
          )}
        </Container>
      </header>

      <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div className="min-w-0 space-y-12">
          {project.sections.map((section, index) => (
            <section key={section.title} aria-labelledby={`seccion-${index}`}>
              <h2 id={`seccion-${index}`} className="text-2xl font-semibold text-ink sm:text-3xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink-soft">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          {rest.length > 0 && (
            <section aria-labelledby="capturas">
              <h2 id="capturas" className="text-2xl font-semibold text-ink sm:text-3xl">
                {t.screenshots}
              </h2>
              <div className="mt-6 space-y-8">
                {rest.map((image) => (
                  <figure key={image.src}>
                    <div className="overflow-hidden rounded-xl border border-line shadow-card">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        sizes="(min-width: 1024px) 680px, 100vw"
                        className="h-auto w-full"
                      />
                    </div>
                    {image.caption && (
                      <figcaption className="mt-3 text-center text-sm text-muted">{image.caption}</figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-line bg-card p-6 shadow-card">
            <h2 className="text-lg font-semibold text-ink">{t.highlights}</h2>
            <ul className="mt-4 space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 leading-relaxed text-ink-soft">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-card p-6 shadow-card">
            <h2 className="text-lg font-semibold text-ink">{t.stack}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech} className="rounded-md bg-surface px-2 py-1 font-mono text-xs text-ink-soft ring-1 ring-line">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <ProjectDisclaimers items={project.disclaimers} title={dict.disclaimersTitle} />
        </aside>
      </Container>

      {microapp && (
        <section aria-labelledby="microapp" className="border-t border-line bg-surface py-14 sm:py-20">
          <Container className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <h2 id="microapp" className="text-2xl font-semibold text-ink sm:text-3xl">
                {t.microappTitle}
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-muted">{t.microappText(microapp.name)}</p>
              <Link
                href={microappPath(microapp.slug, locale)}
                className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline"
              >
                {t.microappLink}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <div className="max-w-md lg:justify-self-end">
              <MicroappCard app={microapp} locale={locale} />
            </div>
          </Container>
        </section>
      )}

      <CtaBanner locale={locale} title={t.bannerTitle} />
    </>
  );
}
