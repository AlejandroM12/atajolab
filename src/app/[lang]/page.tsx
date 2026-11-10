import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { HomeView, homeMetadata } from "@/views/home";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  return isLocale(lang) ? homeMetadata(lang) : {};
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <HomeView locale={lang} />;
}
