import { COURSES } from "@/data/courses";
import { CourseCard } from "@/components/CourseCard";

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Catalog</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-slate-900">Courses</h1>
        <p className="mt-3 text-slate-600">
          Six practical tracks designed for Spanish and Japanese speakers learning English—from foundations to pronunciation.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((c) => (
          <CourseCard key={c.slug} course={c} />
        ))}
      </div>
    </div>
  );
}
