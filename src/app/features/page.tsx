"use client";

import {
  Award,
  BookOpen,
  CreditCard,
  Languages,
  LineChart,
  ListChecks,
  PlayCircle,
  Flame,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const ICONS = [BookOpen, PlayCircle, ListChecks, LineChart, Award, Flame, Languages, CreditCard];

export default function FeaturesPage() {
  const { t } = useLanguage();
  const items = [1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => ({
    icon: ICONS[i],
    title: t(`feat_${n}_t`),
    body: t(`feat_${n}_d`),
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          {t("feat_page_eyebrow")}
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-ink-900">
          {t("feat_page_title")}
        </h1>
        <p className="mt-3 text-slate-600">{t("feat_page_sub")}</p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <it.icon className="mb-3 h-6 w-6 text-brand-600" />
            <h2 className="font-bold text-ink-900">{it.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{it.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/courses/"
          className="inline-flex rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600"
        >
          {t("feat_page_cta")}
        </Link>
      </div>
    </div>
  );
}
