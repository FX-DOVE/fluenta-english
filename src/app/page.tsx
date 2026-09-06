"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Languages,
  LineChart,
  Sparkles,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { COURSES } from "@/data/courses";
import { CourseCard } from "@/components/CourseCard";

const features = [
  {
    icon: BookOpen,
    title: "Structured catalog",
    desc: "Six demo courses with real lesson content, levels, and outcomes.",
  },
  {
    icon: Zap,
    title: "Lesson player",
    desc: "Curriculum sidebar, mark complete, and progress saved locally.",
  },
  {
    icon: CheckCircle2,
    title: "Interactive quizzes",
    desc: "Score yourself instantly and lock in what you learned.",
  },
  {
    icon: Award,
    title: "Certificates",
    desc: "Unlock a certificate when a course hits 100% completion.",
  },
  {
    icon: LineChart,
    title: "Dashboard & streaks",
    desc: "Continue learning, track stats, and keep your streak alive.",
  },
  {
    icon: Languages,
    title: "EN / ES / JA",
    desc: "Toggle marketing copy for Spanish and Japanese speakers.",
  },
];

const testimonials = [
  {
    name: "María G.",
    loc: "Madrid",
    quote:
      "The grammar explanations finally clicked—especially articles. The quizzes keep me honest.",
  },
  {
    name: "Hiroshi T.",
    loc: "Osaka",
    quote:
      "Pronunciation Power helped my R/L clarity. The lesson player is clean and focused.",
  },
  {
    name: "Lucía R.",
    loc: "Mexico City",
    quote:
      "I love the streak widget. Paying with USDT in the demo checkout was surprisingly smooth.",
  },
];

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-100 via-slate-50 to-slate-50" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              {t("hero_badge")}
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 text-balance sm:text-5xl lg:text-6xl">
              {t("hero_title")}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">{t("hero_sub")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/courses/"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
              >
                {t("hero_primary")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing/"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-300 hover:bg-brand-50"
              >
                {t("hero_secondary")}
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                ["6", "Courses"],
                ["20+", "Lessons"],
                ["3", "Pay methods"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-slate-200 bg-white/80 p-3 text-center shadow-sm">
                  <dt className="text-2xl font-bold text-brand-700">{n}</dt>
                  <dd className="text-xs font-medium text-slate-500">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-800">Today&apos;s path</p>
                <span className="rounded-full bg-accent-500/10 px-2.5 py-0.5 text-xs font-bold text-accent-600">
                  On track
                </span>
              </div>
              <div className="space-y-3">
                {COURSES.slice(0, 3).map((c, i) => (
                  <div
                    key={c.slug}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3"
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-sm font-bold text-white`}
                    >
                      {i + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-slate-800">{c.title}</p>
                      <p className="text-xs text-slate-500">{c.lessons.length} lessons · {c.level}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/dashboard/"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Open dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-slate-900">
          {t("how_title")}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [t("how_1"), t("how_1d")],
            [t("how_2"), t("how_2d")],
            [t("how_3"), t("how_3d")],
          ].map(([title, desc], i) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl font-bold text-slate-900">
            {t("features_title")}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 transition hover:border-brand-200 hover:bg-white hover:shadow-soft"
              >
                <f.icon className="mb-3 h-6 w-6 text-brand-600" />
                <h3 className="font-bold text-slate-900">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/features/" className="text-sm font-semibold text-brand-700 hover:underline">
              Explore all features →
            </Link>
          </div>
        </div>
      </section>

      {/* Courses preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900">
              {t("courses_title")}
            </h2>
            <p className="mt-2 text-slate-600">{t("courses_sub")}</p>
          </div>
          <Link
            href="/courses/"
            className="text-sm font-semibold text-brand-700 hover:underline"
          >
            View catalog →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.slice(0, 3).map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl font-bold">
            {t("testimonials_title")}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((tm) => (
              <blockquote
                key={tm.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <p className="text-sm leading-relaxed text-brand-50">&ldquo;{tm.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-brand-200">
                  {tm.name} · {tm.loc}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-12 text-center text-white shadow-soft sm:px-12">
          <h2 className="font-display text-3xl font-bold">{t("cta_title")}</h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-100">{t("cta_sub")}</p>
          <Link
            href="/pricing/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-800 transition hover:bg-brand-50"
          >
            {t("cta_btn")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
