import { ProjectsView, projectsMetadata } from "@/views/projects";

// Only exists in Spanish; the other language uses its own slug.
const locale = "es";

export function generateStaticParams() {
  return [{ lang: locale }];
}

export const metadata = projectsMetadata(locale);

export default function Page() {
  return <ProjectsView locale={locale} />;
}
