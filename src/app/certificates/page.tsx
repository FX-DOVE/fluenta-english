"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { COURSES } from "@/data/courses";
import { defaultProgress, getProgress, getUser } from "@/lib/storage";
import type { ProgressState, User } from "@/lib/types";
import { Award } from "lucide-react";

export default function CertificadosPage() {
  const [progress, setProgress] = useState<ProgressState>(defaultProgress());
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setProgress(getProgress());
    setUser(getUser());
  }, []);

  const certs = COURSES.filter((c) => progress.certificates.includes(c.slug));

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          Achievements
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-ink-900">Certificados</h1>
        <p className="mt-3 text-slate-600">
          Complete every lesson in a course to unlock a certificate. Progress is stored locally.
        </p>
      </div>

      {certs.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <Award className="mx-auto h-10 w-10 text-slate-400" />
          <p className="mt-3 font-semibold text-slate-800">Aun no hay certificados</p>
          <p className="mt-1 text-sm text-slate-600">
            Finish a course at 100% to unlock your first certificate.
          </p>
          <Link
            href="/courses/"
            className="mt-5 inline-flex rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Ir a cursos
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {certs.map((c) => (
            <div
              key={c.slug}
              className="overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-brand-50 shadow-sm"
            >
              <div className="border-b border-amber-100 bg-white/60 px-6 py-4">
                <div className="flex items-center gap-2 text-amber-700">
                  <Award className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Certificate of Completion
                  </span>
                </div>
              </div>
              <div className="px-6 py-8 text-center">
                <p className="text-sm text-slate-500">This certifies that</p>
                <p className="mt-1 font-display text-2xl font-bold text-ink-900">
                  {user?.name ?? "Fluenta Learner"}
                </p>
                <p className="mt-3 text-sm text-slate-600">has successfully completed</p>
                <p className="mt-1 text-lg font-bold text-brand-800">{c.title}</p>
                <p className="mt-4 text-xs text-slate-500">
                  {progress.completedAt[c.slug]
                    ? new Date(progress.completedAt[c.slug]).toLocaleDateString()
                    : "Recently"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
