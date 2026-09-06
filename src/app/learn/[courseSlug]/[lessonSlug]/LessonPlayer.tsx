"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Course, Lesson, ProgressState } from "@/lib/types";
import {
  courseProgressPct,
  defaultProgress,
  getProgress,
  markLessonComplete,
  saveQuizScore,
} from "@/lib/storage";
import { MarkdownLite } from "@/components/MarkdownLite";
import { Quiz } from "@/components/Quiz";
import { ProgressBar } from "@/components/ProgressBar";
import { Check, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";
import { courseCopy } from "@/lib/courseI18n";

export function LessonPlayer({
  course,
  lesson,
  lessonIndex,
}: {
  course: Course;
  lesson: Lesson;
  lessonIndex: number;
}) {
  const { t, lang } = useLanguage();
  const localized = courseCopy(course, lang);
  const locLesson =
    localized.lessons.find((l) => l.slug === lesson.slug) ?? localized.lessons[lessonIndex] ?? lesson;
  const [progress, setProgress] = useState<ProgressState>(defaultProgress());
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setProgress(getProgress());
  }, [course.slug, lesson.slug]);

  const completed = progress.completedLessons[course.slug] ?? [];
  const isDone = completed.includes(lesson.slug);
  const pct = courseProgressPct(course.slug, course.lessons.length);
  const prev = course.lessons[lessonIndex - 1];
  const next = course.lessons[lessonIndex + 1];

  function complete() {
    const p = markLessonComplete(course.slug, lesson.slug, course.lessons.length);
    setProgress({ ...p });
  }

  return (
    <div className="bg-sand-50/40">
      <div className="mx-auto flex max-w-6xl gap-0 lg:gap-0 lg:px-0 lg:py-0">
        <button
          type="button"
          className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg lg:hidden"
          onClick={() => setSidebarOpen(true)}
          aria-label={t("aria_curriculum")}
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Khan-style left curriculum */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-80 overflow-y-auto border-r border-slate-200 bg-white p-4 shadow-xl transition lg:static lg:z-0 lg:min-h-[calc(100vh-4.25rem)] lg:w-72 lg:shrink-0 lg:shadow-none",
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          )}
        >
          <div className="mb-4 flex items-start justify-between gap-2">
            <div className="min-w-0">
              <div className="mb-3 flex items-center gap-2 rounded-xl border border-slate-200 bg-sand-50 p-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-xs font-bold text-white">
                  {course.cefr}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-xs font-bold text-ink-900">{localized.title}</p>
                  <p className="text-[10px] text-slate-500">{pct}%</p>
                </div>
              </div>
              <ProgressBar value={pct} />
            </div>
            <button
              type="button"
              className="rounded-lg p-1 text-slate-500 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {t("learn_curriculum")}
          </p>
          <nav className="space-y-0.5">
            {localized.lessons.map((l, i) => {
              const done = completed.includes(l.slug);
              const active = l.slug === lesson.slug;
              return (
                <Link
                  key={l.slug}
                  href={`/learn/${course.slug}/${l.slug}/`}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-start gap-2 border-l-4 px-3 py-2.5 text-sm transition",
                    active
                      ? "border-brand-500 bg-brand-50 font-semibold text-brand-900"
                      : "border-transparent text-slate-700 hover:bg-slate-50"
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                      done
                        ? "bg-emerald-500 text-white"
                        : active
                          ? "bg-brand-500 text-white"
                          : "bg-slate-200 text-slate-600"
                    )}
                  >
                    {done ? <Check className="h-3 w-3" /> : i + 1}
                  </span>
                  <span>{l.title}</span>
                </Link>
              );
            })}
          </nav>
          <Link
            href={`/courses/${course.slug}/`}
            className="mt-6 block text-center text-xs font-semibold text-brand-700 hover:underline"
          >
            ← {t("learn_back")}
          </Link>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <article className="relative min-w-0 flex-1 bg-white px-4 pb-28 pt-8 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            {localized.title} › {t("learn_unit", { n: Math.floor(lessonIndex / 3) + 1 })}
          </p>
          <div className="mt-2 flex items-center justify-between gap-3">
            {prev ? (
              <Link href={`/learn/${course.slug}/${prev.slug}/`} className="text-slate-400 hover:text-brand-600">
                <ChevronLeft className="h-5 w-5" />
              </Link>
            ) : (
              <span className="w-5" />
            )}
            <h1 className="text-center font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
              {locLesson.title}
            </h1>
            {next ? (
              <Link href={`/learn/${course.slug}/${next.slug}/`} className="text-slate-400 hover:text-brand-600">
                <ChevronRight className="h-5 w-5" />
              </Link>
            ) : (
              <span className="w-5" />
            )}
          </div>
          <p className="mt-1 text-center text-sm text-slate-500">{lesson.durationMin} {t("min")}</p>

          <div className="mx-auto mt-8 max-w-2xl">
            <MarkdownLite content={lesson.content} />
          </div>

          {locLesson.quiz && locLesson.quiz.length > 0 && (
            <div className="mx-auto max-w-2xl">
              <Quiz
                questions={locLesson.quiz}
                onComplete={(score) => {
                  saveQuizScore(course.slug, lesson.slug, score);
                  setProgress(getProgress());
                }}
              />
            </div>
          )}

          {/* Khan-style bottom action bar */}
          <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-200 bg-white/95 backdrop-blur lg:left-72">
            <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-3">
              <div className="flex items-center gap-2">
                {localized.lessons.map((l) => {
                  const done = completed.includes(l.slug);
                  const active = l.slug === lesson.slug;
                  return (
                    <span
                      key={l.slug}
                      className={cn(
                        "h-2.5 w-2.5 rounded-full",
                        done ? "bg-emerald-500" : active ? "bg-brand-500" : "bg-slate-200"
                      )}
                      title={l.title}
                    />
                  );
                })}
              </div>
              <div className="flex items-center gap-3">
                {next && (
                  <Link
                    href={`/learn/${course.slug}/${next.slug}/`}
                    className="text-sm font-semibold text-brand-700 hover:underline"
                  >
                    {t("learn_skip")}
                  </Link>
                )}
                <button
                  type="button"
                  onClick={complete}
                  className={cn(
                    "rounded-lg px-5 py-2.5 text-sm font-bold",
                    isDone
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-brand-500 text-white hover:bg-brand-600"
                  )}
                >
                  {isDone ? `${t("learn_completed")} ✓` : t("learn_complete")}
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
