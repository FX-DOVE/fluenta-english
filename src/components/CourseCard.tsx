import Link from "next/link";
import type { Course } from "@/lib/types";
import { BookOpen, Signal } from "lucide-react";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}/`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className={`h-28 bg-gradient-to-br ${course.color} p-5 text-white`}>
        <span className="inline-flex rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold backdrop-blur">
          {course.level}
        </span>
        <h3 className="mt-3 text-lg font-bold leading-tight">{course.title}</h3>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-4 flex-1 text-sm text-slate-600">{course.subtitle}</p>
        <div className="flex items-center justify-between text-xs font-medium text-slate-500">
          <span className="inline-flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" />
            {course.lessons.length} lessons
          </span>
          <span className="inline-flex items-center gap-1">
            <Signal className="h-3.5 w-3.5" />
            {course.category}
          </span>
        </div>
      </div>
    </Link>
  );
}
