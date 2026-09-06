import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES, getCourse } from "@/data/courses";
import { Clock, CheckCircle2, Star } from "lucide-react";
import { EnrollButton } from "./EnrollButton";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const first = course.lessons[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
        <div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-brand-800">{course.cefr}</span>
            <span className="rounded-full bg-sand-100 px-3 py-1 text-ink-800">{course.level}</span>
            <span className="rounded-full bg-sand-100 px-3 py-1 text-ink-800">{course.category}</span>
            {course.badge && (
              <span className="rounded-full bg-teal-100 px-3 py-1 text-teal-800">{course.badge}</span>
            )}
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink-900">{course.title}</h1>
          <p className="mt-3 max-w-2xl text-slate-600">{course.description}</p>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1 font-bold text-ink-900">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {course.rating.toFixed(1)}
            </span>
            <span className="rounded-full border border-slate-200 px-2.5 py-0.5 text-xs text-slate-500">
              {course.reviewCount.toLocaleString()} ratings
            </span>
            <span className="text-slate-500">
              {course.lessons.length} lecciones · {course.hours} horas
            </span>
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 font-bold text-white">
              {course.instructor.split(" ").map((p) => p[0]).slice(0, 2).join("")}
            </div>
            <div>
              <p className="font-bold text-ink-900">{course.instructor}</p>
              <p className="text-xs text-slate-500">{course.instructorTitle}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <EnrollButton slug={course.slug} />
            <Link
              href={`/learn/${course.slug}/${first.slug}/`}
              className="rounded-full border border-ink-900 px-5 py-2.5 text-sm font-semibold text-ink-900 hover:bg-sand-50"
            >
              Empezar primera lección
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={course.image} alt="" className="aspect-[4/3] w-full object-cover" />
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-ink-900">Currículo</h2>
          <ul className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {course.lessons.map((l, i) => (
              <li key={l.slug}>
                <Link
                  href={`/learn/${course.slug}/${l.slug}/`}
                  className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-sand-50"
                >
                  <div>
                    <p className="text-sm font-semibold text-ink-900">
                      {i + 1}. {l.title}
                    </p>
                    {l.quiz && <p className="text-xs text-brand-600">Incluye quiz</p>}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="h-3.5 w-3.5" />
                    {l.durationMin} min
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <aside>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <h3 className="font-bold text-ink-900">Lo que lograrás</h3>
            <ul className="mt-4 space-y-3">
              {course.outcomes.map((o) => (
                <li key={o} className="flex gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
