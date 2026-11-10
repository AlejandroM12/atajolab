import { SolutionsView, solutionsMetadata } from "@/views/solutions";

// Only exists in English; the other language uses its own slug.
const locale = "en";

export function generateStaticParams() {
  return [{ lang: locale }];
}

export const metadata = solutionsMetadata(locale);

export default function Page() {
  return <SolutionsView locale={locale} />;
}
