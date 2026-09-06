"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
        {t("about_eyebrow")}
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink-900">{t("about_title")}</h1>
      <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
        <p>{t("about_p1")}</p>
        <p>{t("about_p2")}</p>
        <p>{t("about_p3")}</p>
      </div>
      <Link
        href="/contact/"
        className="mt-8 inline-flex rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white"
      >
        {t("about_cta")}
      </Link>
    </div>
  );
}
