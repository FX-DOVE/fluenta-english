"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
import { Award, BookOpen, Play } from "lucide-react";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [progress, setProgress] = useState<ProgressState>(defaultProgress());

  useEffect(() => {
    setUser(getUser());
    setProgress(getProgress());
  }, []);

  const enrolledCourses = COURSES.filter(
    (c) =>
      progress.enrolled.includes(c.slug) ||
      (progress.completedLessons[c.slug]?.length ?? 0) > 0
  );

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

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-brand-600">Dashboard</p>
          <h1 className="font-display text-3xl font-bold text-slate-900">
            {user ? `Welcome back, ${user.name.split(" ")[0]}` : "Your learning hub"}
          </h1>
          <p className="mt-1 text-slate-600">
            Continue learning, track streaks, and unlock certificates.
          </p>
        </div>
        {!user && (
          <Link
            href="/signup/"
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Create demo account
          </Link>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StreakWidget streak={progress.streak} />
        <StatCard icon={BookOpen} label="Lessons done" value={String(doneLessons)} />
        <StatCard
          icon={Play}
          label="Courses enrolled"
          value={String(Math.max(enrolledCourses.length, progress.enrolled.length))}
        />
        <StatCard
          icon={Award}
          label="Certificates"
          value={String(progress.certificates.length)}
        />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-4 text-lg font-bold text-slate-900">Continue learning</h2>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className={`mb-4 rounded-xl bg-gradient-to-br ${continueCourse.color} p-4 text-white`}>
              <p className="text-xs font-semibold opacity-90">{continueCourse.level}</p>
              <h3 className="text-xl font-bold">{continueCourse.title}</h3>
            </div>
            <p className="text-sm text-slate-600">Next up: {nextLesson.title}</p>
            <ProgressBar
              className="mt-3"
              value={courseProgressPct(continueCourse.slug, continueCourse.lessons.length)}
            />
            <Link
              href={`/learn/${continueCourse.slug}/${nextLesson.slug}/`}
              className="mt-5 inline-flex rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Resume lesson
            </Link>
          </div>

          <h2 className="mb-4 mt-10 text-lg font-bold text-slate-900">Your courses</h2>
          <div className="space-y-3">
            {(enrolledCourses.length ? enrolledCourses : COURSES.slice(0, 3)).map((c) => {
              const pct = courseProgressPct(c.slug, c.lessons.length);
              return (
                <Link
                  key={c.slug}
                  href={`/courses/${c.slug}/`}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-brand-200"
                >
                  <div className={`h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br ${c.color}`} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-slate-900">{c.title}</p>
                    <ProgressBar className="mt-2" value={pct} />
                  </div>
                  <span className="text-sm font-bold text-brand-700">{pct}%</span>
                </Link>
              );
            })}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-bold text-slate-900">Quick links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="text-brand-700 hover:underline" href="/courses/">Browse catalog</Link></li>
              <li><Link className="text-brand-700 hover:underline" href="/certificates/">Certificates</Link></li>
              <li><Link className="text-brand-700 hover:underline" href="/pricing/">Upgrade plan</Link></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
            <p className="font-semibold">Demo tip</p>
            <p className="mt-1">
              Progress, auth, and orders persist in your browser&apos;s localStorage.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <Icon className="mb-2 h-5 w-5 text-brand-600" />
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-xs font-medium text-slate-500">{label}</p>
    </div>
  );
}
