import { COURSES, getLesson } from "@/data/courses";
import { notFound } from "next/navigation";
import { LessonPlayer } from "./LessonPlayer";

export function generateStaticParams() {
  const params: { courseSlug: string; lessonSlug: string }[] = [];
  for (const c of COURSES) {
    for (const l of c.lessons) {
      params.push({ courseSlug: c.slug, lessonSlug: l.slug });
    }
  }
  return params;
}

export default async function LearnPage({
  params,
}: {
  params: Promise<{ courseSlug: string; lessonSlug: string }>;
}) {
  const { courseSlug, lessonSlug } = await params;
  const data = getLesson(courseSlug, lessonSlug);
  if (!data) notFound();

  return (
    <LessonPlayer
      course={data.course}
      lesson={data.lesson}
      lessonIndex={data.index}
    />
  );
}
