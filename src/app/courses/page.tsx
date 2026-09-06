"use client";

import { useMemo, useState } from "react";
import { COURSES } from "@/data/courses";
import { CourseCard } from "@/components/CourseCard";
import { useLanguage } from "@/lib/LanguageContext";
import { CATEGORY_KEYS, categoryLabel } from "@/lib/i18n";
import { courseCopy } from "@/lib/courseI18n";
import { cn } from "@/lib/utils";

export default function CoursesPage() {
  const { t, lang } = useLanguage();
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return COURSES.filter((c) => {
      const catOk = cat === "All" || c.category === cat;
      const loc = courseCopy(c, lang);
      const qq = q.trim().toLowerCase();
      const qOk =
        !qq ||
        loc.title.toLowerCase().includes(qq) ||
        c.instructor.toLowerCase().includes(qq) ||
        loc.subtitle.toLowerCase().includes(qq);
      return catOk && qOk;
    });
  }, [cat, q, lang]);

  const popular = COURSES.filter((c) => c.badge === "Bestseller" || c.badge === "Popular");

  return (
    <div>
      <div className="border-b border-slate-100 bg-sand-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            {t("nav_courses")}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-ink-900">
            {t("catalog_title")}
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">{t("catalog_sub")}</p>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("dash_search")}
            className="mt-6 w-full max-w-xl rounded-full border border-slate-200 bg-white px-5 py-3 text-sm outline-none ring-brand-300 focus:ring-2"
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="mb-3 font-display text-2xl font-semibold text-ink-900">
          {t("rail_popular")}
        </h2>
        <div className="mb-10 flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          {popular.map((c) => (
            <CourseCard key={c.slug} course={c} compact />
          ))}
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCat("All")}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition",
              cat === "All"
                ? "border-ink-900 bg-ink-900 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-brand-300"
            )}
          >
            {t("catalog_filter")}
          </button>
          {CATEGORY_KEYS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition",
                cat === c
                  ? "border-ink-900 bg-ink-900 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-brand-300"
              )}
            >
              {categoryLabel(lang, c)}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-16 text-center text-slate-500">{t("catalog_empty")}</p>
        )}
      </div>
    </div>
  );
}
