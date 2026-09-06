"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { COURSES } from "@/data/courses";
import {
  courseProgressPct,
  defaultProgress,
  getProgress,
  getUser,
} from "@/lib/storage";
import type { ProgressState, User } from "@/lib/types";
import { ProgressBar } from "@/components/ProgressBar";
import { StreakWidget } from "@/components/StreakWidget";
import { useLanguage } from "@/lib/LanguageContext";
import { Award, BookOpen, LayoutGrid, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const { t } = useLanguage();
  const [user, setUser] = useState<User | null>(null);
  const [progress, setProgress] = useState<ProgressState>(defaultProgress());
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | "inprogress" | "done">("all");

  useEffect(() => {
    setUser(getUser());
    setProgress(getProgress());
  }, []);

  const enrolledCourses = COURSES.filter(
    (c) =>
      progress.enrolled.includes(c.slug) ||
      (progress.completedLessons[c.slug]?.length ?? 0) > 0
  );

  const list = useMemo(() => {
    const base = enrolledCourses.length ? enrolledCourses : COURSES;
    return base.filter((c) => {
      const pct = courseProgressPct(c.slug, c.lessons.length);
      if (filter === "inprogress" && !(pct > 0 && pct < 100)) return false;
      if (filter === "done" && pct < 100) return false;
      const qq = q.trim().toLowerCase();
      if (qq && !c.title.toLowerCase().includes(qq) && !c.category.toLowerCase().includes(qq))
        return false;
      return true;
    });
  }, [enrolledCourses, filter, q]);

  const continueCourse =
    enrolledCourses.find((c) => courseProgressPct(c.slug, c.lessons.length) < 100) ??
    COURSES[0];

  const doneLessons = Object.values(progress.completedLessons).reduce(
    (a, b) => a + b.length,
    0
  );

  const nextLesson = (() => {
    const done = progress.completedLessons[continueCourse.slug] ?? [];
    return (
      continueCourse.lessons.find((l) => !done.includes(l.slug)) ??
      continueCourse.lessons[0]
    );
  })();

  const firstName = user?.name?.split(" ")[0] ?? "";
  const greeting = user
    ? t("dash_hi").replace("{name}", firstName)
    : t("dash_hi_guest");

  return (
    <div className="bg-sand-50/60 min-h-[70vh]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-brand-700">{t("dash_title")}</p>
            <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
              {greeting}
            </h1>
            <p className="mt-1 text-slate-600">{t("dash_sub")}</p>
          </div>
          {!user && (
            <Link href="/signup/" className="btn-primary !py-2">
              {t("dash_create")}
            </Link>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <div>
            {/* Continue */}
            <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
              <div className="grid sm:grid-cols-[200px_1fr]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={continueCourse.image}
                  alt=""
                  className="h-40 w-full object-cover sm:h-full"
                />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-600">
                    {t("dash_continue")}
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-brand-800">
                    {continueCourse.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {continueCourse.category} · Next: {nextLesson.title}
                  </p>
                  <ProgressBar
                    className="mt-3"
                    value={courseProgressPct(continueCourse.slug, continueCourse.lessons.length)}
                  />
                  <Link
                    href={`/learn/${continueCourse.slug}/${nextLesson.slug}/`}
                    className="btn-primary mt-4 !py-2"
                  >
                    {t("dash_resume")}
                  </Link>
                </div>
              </div>
            </div>

            {/* Moodle-style overview toolbar */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-ink-900">{t("dash_overview")}</h2>
              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as typeof filter)}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
                >
                  <option value="all">{t("dash_filter_all")}</option>
                  <option value="inprogress">In progress</option>
                  <option value="done">Completed</option>
                </select>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder={t("dash_search")}
                    className="rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm outline-none ring-brand-300 focus:ring-2"
                  />
                </div>
                <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
                  <LayoutGrid className="h-4 w-4" />
                  {t("dash_card_view")}
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {list.map((c) => {
                const pct = courseProgressPct(c.slug, c.lessons.length);
                return (
                  <Link
                    key={c.slug}
                    href={`/courses/${c.slug}/`}
                    className={cn(
                      "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition hover:border-brand-300"
                    )}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.image} alt="" className="h-32 w-full object-cover" />
                    <div className="p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {c.category}
                      </p>
                      <h3 className="mt-1 font-bold text-brand-800">{c.title}</h3>
                      <ProgressBar className="mt-3" value={pct} />
                      <p className="mt-1 text-xs font-semibold text-slate-500">{pct}%</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right sidebar — Moodle widgets */}
          <aside className="space-y-4">
            <StreakWidget streak={progress.streak} />

            <div className="grid grid-cols-3 gap-2">
              <MiniStat icon={BookOpen} label={t("dash_lessons_done")} value={doneLessons} />
              <MiniStat
                icon={BookOpen}
                label={t("dash_enrolled")}
                value={Math.max(enrolledCourses.length, progress.enrolled.length)}
              />
              <MiniStat icon={Award} label={t("dash_certs")} value={progress.certificates.length} />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
              <h3 className="font-bold text-ink-900">{t("dash_announcements")}</h3>
              <ul className="mt-3 space-y-3 text-sm">
                <li className="border-l-4 border-brand-400 pl-3">
                  <p className="font-semibold text-ink-900">Nueva lección LIVE esta semana</p>
                  <p className="text-xs text-slate-500">Fluenta Team · hoy</p>
                </li>
                <li className="border-l-4 border-gold-500 pl-3">
                  <p className="font-semibold text-ink-900">Consejo: practica 15 min al día</p>
                  <p className="text-xs text-slate-500">Coach Ana · ayer</p>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
              <h3 className="font-bold text-ink-900">{t("dash_badges")}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {["A1", "Racha 3", "Quiz 80%+"].map((b) => (
                  <span
                    key={b}
                    className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-800"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
              <h3 className="font-bold text-ink-900">{t("dash_files")}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>phrasebook-a1.pdf</li>
                <li>irregular-verbs.pdf</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function MiniStat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
      <Icon className="mx-auto mb-1 h-4 w-4 text-brand-600" />
      <p className="text-lg font-bold text-ink-900">{value}</p>
      <p className="text-[10px] font-medium leading-tight text-slate-500">{label}</p>
    </div>
  );
}
