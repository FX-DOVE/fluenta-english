"use client";

import { LANG_LABELS } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

const langs: Lang[] = ["es", "en", "ja"];

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-white p-0.5 text-xs font-semibold",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {langs.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={cn(
            "rounded-full px-2.5 py-1 transition",
            lang === l
              ? "bg-brand-500 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-50"
          )}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
