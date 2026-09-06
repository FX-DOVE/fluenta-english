"use client";

import Link from "next/link";
import type { Course } from "@/lib/types";
import { Star } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { courseCopy, courseLevelLabel } from "@/lib/courseI18n";
import { cn } from "@/lib/utils";

function badgeLabel(badge: Course["badge"], t: (k: string) => string) {
  if (badge === "Bestseller") return t("bestseller");
  if (badge === "Nuevo") return t("nuevo");
  if (badge === "Popular") return t("popular");
  return null;
}

export function CourseCard({
  course,
  compact = false,
}: {
  course: Course;
  compact?: boolean;
}) {
  const { t, lang } = useLanguage();
  const c = courseCopy(course, lang);
  const label = badgeLabel(course.badge, t);

  return (
    <Link
      href={`/courses/${course.slug}/`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-soft",
        compact ? "min-w-[240px] max-w-[280px]" : ""
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-sand-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={course.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-2.5 top-2.5 rounded-md bg-ink-900/85 px-2 py-0.5 text-[11px] font-bold text-white">
          {course.cefr}
        </span>
        {label && (
          <span className="absolute bottom-2.5 left-2.5 rounded-md bg-teal-100 px-2 py-0.5 text-[11px] font-bold text-teal-800">
            {label}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3.5">
        <h3 className="line-clamp-2 min-h-[2.6em] text-[15px] font-bold leading-snug text-ink-900">
          {c.title}
        </h3>
        <p className="truncate text-xs text-slate-500">
          {course.instructor} · {courseLevelLabel(course, lang)}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
          <span className="inline-flex items-center gap-1 text-sm font-bold text-ink-900">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {course.rating.toFixed(1)}
          </span>
          <span className="rounded-full border border-slate-200 px-2 py-0.5 text-[11px] text-slate-500">
            {course.reviewCount.toLocaleString()} {t("ratings")}
          </span>
        </div>
        <p className="text-[11px] font-medium text-slate-500">
          {course.lessons.length} {t("lessons")} · {course.hours} {t("hours")}
        </p>
      </div>
    </Link>
  );
}

export function CourseRailCard({ course }: { course: Course }) {
  return <CourseCard course={course} compact />;
}
