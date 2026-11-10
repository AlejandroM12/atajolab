import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { MicroappsView, microappsMetadata } from "@/views/microapps";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/microapps">) {
  const { lang } = await params;
  return isLocale(lang) ? microappsMetadata(lang) : {};
}

export default async function Page({ params }: PageProps<"/[lang]/microapps">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <MicroappsView locale={lang} />;
}
