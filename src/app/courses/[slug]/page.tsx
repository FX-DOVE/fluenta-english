import { notFound } from "next/navigation";
import { COURSES, getCourse } from "@/data/courses";
import { CourseDetail } from "./CourseDetail";

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
  return <CourseDetail course={course} />;
}
