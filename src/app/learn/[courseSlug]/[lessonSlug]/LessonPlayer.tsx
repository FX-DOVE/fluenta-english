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

export function LessonPlayer({
  course,
  lesson,
  lessonIndex,
}: {
  course: Course;
  lesson: Lesson;
  lessonIndex: number;
}) {
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
    <div className="mx-auto flex max-w-6xl gap-0 px-0 lg:gap-6 lg:px-4 lg:py-8">
      {/* Mobile sidebar toggle */}
      <button
        type="button"
        className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg lg:hidden"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open curriculum"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-80 overflow-y-auto border-r border-slate-200 bg-white p-4 shadow-xl transition lg:static lg:z-0 lg:w-72 lg:shrink-0 lg:rounded-2xl lg:border lg:shadow-sm",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="mb-4 flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              Curriculum
            </p>
            <h2 className="text-sm font-bold text-slate-900">{course.title}</h2>
            <div className="mt-2">
              <ProgressBar value={pct} />
              <p className="mt-1 text-xs text-slate-500">{pct}% complete</p>
            </div>
          </div>
          <button
            type="button"
            className="rounded-lg p-1 text-slate-500 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="space-y-1">
          {course.lessons.map((l, i) => {
            const done = completed.includes(l.slug);
            const active = l.slug === lesson.slug;
            return (
              <Link
                key={l.slug}
                href={`/learn/${course.slug}/${l.slug}/`}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-start gap-2 rounded-xl px-3 py-2.5 text-sm transition",
                  active
                    ? "bg-brand-50 font-semibold text-brand-800 ring-1 ring-brand-200"
                    : "text-slate-700 hover:bg-slate-50"
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                    done
                      ? "bg-accent-500 text-white"
                      : active
                        ? "bg-brand-600 text-white"
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
          ← Back to course
        </Link>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <article className="min-w-0 flex-1 px-4 py-8 lg:rounded-2xl lg:border lg:border-slate-200 lg:bg-white lg:px-8 lg:shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Lesson {lessonIndex + 1} of {course.lessons.length}
        </p>
        <h1 className="mt-1 font-display text-3xl font-bold text-slate-900">
          {lesson.title}
        </h1>
        <p className="mt-1 text-sm text-slate-500">{lesson.durationMin} min read</p>

        <div className="mt-8">
          <MarkdownLite content={lesson.content} />
        </div>

        {lesson.quiz && lesson.quiz.length > 0 && (
          <Quiz
            questions={lesson.quiz}
            onComplete={(score) => {
              saveQuizScore(course.slug, lesson.slug, score);
              setProgress(getProgress());
            }}
          />
        )}

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
          {prev ? (
            <Link
              href={`/learn/${course.slug}/${prev.slug}/`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-brand-700"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </Link>
          ) : (
            <span />
          )}

          <button
            type="button"
            onClick={complete}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-semibold",
              isDone
                ? "bg-emerald-100 text-emerald-800"
                : "bg-brand-600 text-white hover:bg-brand-700"
            )}
          >
            {isDone ? "Completed ✓" : "Mark complete"}
          </button>

          {next ? (
            <Link
              href={`/learn/${course.slug}/${next.slug}/`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-brand-700"
            >
              Next <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link
              href="/certificates/"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700"
            >
              Certificates <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </article>
    </div>
  );
}
