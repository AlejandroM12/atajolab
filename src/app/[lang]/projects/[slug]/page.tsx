import { ProjectDetailView, projectMetadata, projectStaticParams } from "@/views/project-detail";

// Only exists in English; the other language uses its own slug.
const locale = "en";

export function generateStaticParams() {
  return projectStaticParams(locale);
}

export async function generateMetadata({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const { slug } = await params;
  return projectMetadata(slug, locale);
}

export default async function Page({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const { slug } = await params;
  return <ProjectDetailView slug={slug} locale={locale} />;
}
