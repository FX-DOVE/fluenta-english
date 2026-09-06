"use client";

import Link from "next/link";
import { ArrowRight, Play, Volume2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { COURSES } from "@/data/courses";
import { CourseCard } from "@/components/CourseCard";
import { CATEGORY_KEYS, categoryLabel } from "@/lib/i18n";

export default function HomePage() {
  const { t, lang } = useLanguage();
  const testimonials = [
    { name: "María G.", loc: t("t_1_loc"), quote: t("t_1_quote") },
    { name: "Hiroshi T.", loc: t("t_2_loc"), quote: t("t_2_quote") },
    { name: "Lucía R.", loc: t("t_3_loc"), quote: t("t_3_quote") },
  ];
  const popular = COURSES.filter((c) => c.badge === "Bestseller" || c.badge === "Popular");
  const speaking = COURSES.filter((c) => c.category === "Speaking");

  return (
    <div>
      {/* ABA-inspired hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 20%, rgba(0,184,239,0.12), transparent 40%), radial-gradient(circle at 88% 30%, rgba(196,165,116,0.12), transparent 35%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-22">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brand-600">
              {t("hero_eyebrow")}
            </p>
            <h1 className="font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]">
              {t("hero_title_a")}{" "}
              <span className="underline-brush">{t("hero_title_b")}</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{t("hero_sub")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/signup/" className="btn-primary">
                {t("hero_primary")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/pricing/" className="btn-ghost">
                {t("hero_secondary")}
              </Link>
            </div>
            <p className="mt-8 text-sm text-slate-500">
              <strong className="text-ink-900">30,000+</strong> {t("hero_stat_students")} ·{" "}
              <strong className="text-ink-900">6</strong> {t("hero_stat_courses")} ·{" "}
              <strong className="text-ink-900">A1–B2</strong> {t("hero_stat_cefr")}
            </p>
          </div>

          {/* Floating product mockups */}
          <div className="relative mx-auto h-[420px] w-full max-w-md lg:max-w-none">
            <div className="absolute left-0 top-6 w-[48%] rotate-[-6deg] rounded-2xl border border-slate-200 bg-white p-2 shadow-card">
              <div className="relative overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                  alt=""
                  className="aspect-[3/4] w-full object-cover"
                />
                <span className="absolute left-2 top-2 rounded bg-rose-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  {t("live_chip")}
                </span>
                <div className="absolute bottom-2 left-2 right-2 flex justify-center gap-2">
                  <span className="rounded-full bg-black/50 px-2 py-1 text-[10px] text-white">🎤</span>
                  <span className="rounded-full bg-black/50 px-2 py-1 text-[10px] text-white">📷</span>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-0 w-[42%] rotate-[5deg] space-y-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-orange-400 bg-orange-50 font-display text-2xl font-bold text-orange-600">
                  B1
                </div>
                <p className="mt-2 text-center text-xs font-semibold text-slate-500">MCER / CEFR</p>
              </div>
              <div className="ml-4 rounded-2xl border border-slate-200 bg-brand-50 p-3 shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-400 bg-white font-bold text-brand-700">
                  A1
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-2 w-[58%] rotate-[3deg] rounded-2xl border border-slate-200 bg-white p-2 shadow-soft">
              <div className="relative overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80"
                  alt=""
                  className="aspect-video w-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-brand-600 shadow">
                    <Play className="h-4 w-4 fill-current" />
                  </span>
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2 rounded-xl bg-sand-50 px-3 py-2">
                <span className="font-bold text-ink-900">Honey</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-white">
                  <Volume2 className="h-3.5 w-3.5" />
                </span>
                <span className="ml-auto text-emerald-500">✓</span>
              </div>
            </div>

            <span className="absolute left-[46%] top-[38%] h-3 w-3 rounded-full bg-brand-400" />
            <span className="absolute bottom-24 left-8 text-brand-400">+</span>
            <span className="absolute right-10 top-36 h-2 w-2 rounded-full bg-brand-300" />
          </div>
        </div>
      </section>

      {/* Category chips — Skillshare vibe */}
      <section className="border-y border-slate-100 bg-sand-50/80 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
            {CATEGORY_KEYS.map((cat) => {
              const sample = COURSES.find((c) => c.category === cat) ?? COURSES[0];
              return (
                <Link
                  key={cat}
                  href={`/courses/?cat=${encodeURIComponent(cat)}`}
                  className="group relative h-28 min-w-[160px] overflow-hidden rounded-2xl"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={sample.image}
                    alt=""
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-sm font-bold text-white">
                    {categoryLabel(lang, cat)}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works — numbered, not icon spam */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
          {t("how_title")}
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            [t("how_1"), t("how_1d")],
            [t("how_2"), t("how_2d")],
            [t("how_3"), t("how_3d")],
          ].map(([title, desc], i) => (
            <div key={title} className="relative pt-2">
              <span className="font-display text-5xl font-semibold text-brand-100">{i + 1}</span>
              <h3 className="-mt-6 text-lg font-bold text-ink-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Udemy-style rails */}
      <section className="bg-white py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold text-ink-900">
                {t("courses_title")}
              </h2>
              <p className="mt-2 text-slate-600">{t("courses_sub")}</p>
            </div>
            <Link href="/courses/" className="text-sm font-semibold text-brand-700 hover:underline">
              {t("courses_all")} →
            </Link>
          </div>

          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
            {t("rail_popular")}
          </h3>
          <div className="mb-10 flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {(popular.length ? popular : COURSES.slice(0, 4)).map((c) => (
              <CourseCard key={c.slug} course={c} compact />
            ))}
          </div>

          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
            {t("rail_speaking")}
          </h3>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {(speaking.length ? speaking : COURSES.slice(0, 3)).map((c) => (
              <CourseCard key={c.slug} course={c} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Features — photo + copy, not 6 lucide icons */}
      <section className="mt-8 bg-sand-50 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
              {t("features_title")}
            </h2>
            <p className="mt-3 text-slate-600">{t("features_sub")}</p>
            <ul className="mt-6 space-y-4">
              {[
                [t("feat_bullet_1_t"), t("feat_bullet_1_d")],
                [t("feat_bullet_2_t"), t("feat_bullet_2_d")],
                [t("feat_bullet_3_t"), t("feat_bullet_3_d")],
              ].map(([title, body]) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-500" />
                  <div>
                    <p className="font-bold text-ink-900">{title}</p>
                    <p className="text-sm text-slate-600">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/features/" className="btn-primary mt-8">
              {t("nav_features")}
            </Link>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=80"
                alt=""
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-soft sm:left-4">
              <p className="text-xs font-semibold text-slate-500">{t("feat_rating_label")}</p>
              <p className="text-sm font-bold text-ink-900">{t("feat_rating_value")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl font-semibold">
            {t("testimonials_title")}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((tm) => (
              <blockquote
                key={tm.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm leading-relaxed text-slate-200">&ldquo;{tm.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-brand-300">
                  {tm.name} · {tm.loc}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-[2rem] border border-brand-100 bg-brand-50 px-8 py-12 text-center sm:px-12">
          <h2 className="font-display text-3xl font-semibold text-ink-900">{t("cta_title")}</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">{t("cta_sub")}</p>
          <Link href="/pricing/" className="btn-primary mt-8">
            {t("cta_btn")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
