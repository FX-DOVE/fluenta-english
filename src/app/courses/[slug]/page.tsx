import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES, getCourse } from "@/data/courses";
import { Clock, CheckCircle2 } from "lucide-react";
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
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className={`rounded-3xl bg-gradient-to-br ${course.color} p-8 text-white shadow-soft sm:p-10`}>
        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-white/20 px-3 py-1">{course.level}</span>
          <span className="rounded-full bg-white/20 px-3 py-1">{course.category}</span>
        </div>
        <h1 className="mt-4 font-display text-4xl font-bold">{course.title}</h1>
        <p className="mt-3 max-w-2xl text-white/90">{course.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <EnrollButton slug={course.slug} />
          <Link
            href={`/learn/${course.slug}/${first.slug}/`}
            className="rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white/25"
          >
            Start first lesson
          </Link>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-slate-900">Curriculum</h2>
          <ul className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {course.lessons.map((l, i) => (
              <li key={l.slug}>
                <Link
                  href={`/learn/${course.slug}/${l.slug}/`}
                  className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-slate-50"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {i + 1}. {l.title}
                    </p>
                    {l.quiz && (
                      <p className="text-xs text-brand-600">Includes quiz</p>
                    )}
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
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-slate-900">What you&apos;ll achieve</h3>
            <ul className="mt-4 space-y-3">
              {course.outcomes.map((o) => (
                <li key={o} className="flex gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
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
