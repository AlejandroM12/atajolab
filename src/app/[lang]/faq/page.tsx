import { FaqView, faqMetadata } from "@/views/faq";

// Only exists in English; the other language uses its own slug.
const locale = "en";

export function generateStaticParams() {
  return [{ lang: locale }];
}

export const metadata = faqMetadata(locale);

export default function Page() {
  return <FaqView locale={locale} />;
}
