"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-semibold text-ink-900">404</h1>
      <p className="mt-3 text-slate-600">{t("notfound_body")}</p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white"
      >
        {t("notfound_home")}
      </Link>
    </div>
  );
}
