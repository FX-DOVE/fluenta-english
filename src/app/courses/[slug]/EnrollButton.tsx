"use client";

import { useEffect, useState } from "react";
import { enrollCourse, getProgress } from "@/lib/storage";
import { useLanguage } from "@/lib/LanguageContext";

export function EnrollButton({ slug }: { slug: string }) {
  const { t } = useLanguage();
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
      className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white shadow-soft hover:bg-brand-600"
    >
      {enrolled ? `${t("enrolled")} ✓` : t("enroll")}
    </button>
  );
}
