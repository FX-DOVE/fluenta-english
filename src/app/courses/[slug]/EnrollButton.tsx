"use client";

import { useEffect, useState } from "react";
import { enrollCourse, getProgress } from "@/lib/storage";

export function EnrollButton({ slug }: { slug: string }) {
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    setEnrolled(getProgress().enrolled.includes(slug));
  }, [slug]);

  return (
    <button
      type="button"
      onClick={() => {
        enrollCourse(slug);
        setEnrolled(true);
      }}
      className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-900 shadow hover:bg-brand-50"
    >
      {enrolled ? "Enrolled ✓" : "Enroll free (demo)"}
    </button>
  );
}
