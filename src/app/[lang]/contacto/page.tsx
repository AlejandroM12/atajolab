import { ContactView, contactMetadata } from "@/views/contact";

// Only exists in Spanish; the other language uses its own slug.
const locale = "es";

export function generateStaticParams() {
  return [{ lang: locale }];
}

export const metadata = contactMetadata(locale);

export default function Page() {
  return <ContactView locale={locale} />;
}
