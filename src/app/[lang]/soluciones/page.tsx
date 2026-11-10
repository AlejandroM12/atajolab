import { SolutionsView, solutionsMetadata } from "@/views/solutions";

// Only exists in Spanish; the other language uses its own slug.
const locale = "es";

export function generateStaticParams() {
  return [{ lang: locale }];
}

export const metadata = solutionsMetadata(locale);

export default function Page() {
  return <SolutionsView locale={locale} />;
}
