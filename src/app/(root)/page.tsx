import Link from "next/link";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pagePath } from "@/i18n/routes";
import { LogoMark } from "@/components/layout/logo";

/** Shown for an instant while the browser forwards to /es/ (or if it does not). */
export default function RootPage() {
  const t = getDictionary(defaultLocale).redirect;
  return (
    <main className="flex flex-col items-center gap-4 text-center">
      <LogoMark className="h-8" />
      <h1 className="text-xl font-semibold text-ink">{t.title}</h1>
      <p className="text-muted">{t.text}</p>
      <Link href={pagePath("home", defaultLocale)} className="font-semibold text-brand-700 underline-offset-2 hover:underline">
        {t.link}
      </Link>
    </main>
  );
}
