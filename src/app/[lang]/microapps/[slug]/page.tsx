import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { MicroappDetailView, microappMetadata, microappStaticParams } from "@/views/microapp-detail";

export function generateStaticParams() {
  return microappStaticParams();
}

export async function generateMetadata({ params }: PageProps<"/[lang]/microapps/[slug]">) {
  const { lang, slug } = await params;
  return isLocale(lang) ? microappMetadata(slug, lang) : {};
}

export default async function Page({ params }: PageProps<"/[lang]/microapps/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  return <MicroappDetailView slug={slug} locale={lang} />;
}
