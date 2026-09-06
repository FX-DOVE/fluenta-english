"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function Quiz({
  questions,
  onComplete,
}: {
  questions: QuizQuestion[];
  onComplete?: (pct: number) => void;
}) {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const q = questions[index];

  function finish(nextCorrect: number) {
    const pct = Math.round((nextCorrect / questions.length) * 100);
    setFinalScore(pct);
    setFinished(true);
    onComplete?.(pct);
  }

  function onCheck() {
    if (selected === null) return;
    setChecked(true);
    if (selected === q.correctIndex) {
      setCorrectCount((c) => c + 1);
    }
  }

  function onNext() {
    const tally =
      checked && selected === q.correctIndex ? correctCount : correctCount;
    // correctCount already updated in onCheck when correct
    if (index + 1 >= questions.length) {
      finish(tally);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setChecked(false);
  }

  function skip() {
    if (index + 1 >= questions.length) {
      finish(correctCount);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setChecked(false);
  }

  if (finished) {
    return (
      <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
        <h3 className="text-lg font-bold text-ink-900">{t("quiz_title")}</h3>
        <p className="mt-3 text-2xl font-bold text-brand-700">
          {t("quiz_score")}: {finalScore}%
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-ink-900">{t("quiz_title")}</h3>
        <div className="flex gap-1.5">
          {questions.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-2.5 w-2.5 rounded-full",
                i < index ? "bg-emerald-500" : i === index ? "bg-brand-500" : "bg-slate-200"
              )}
            />
          ))}
        </div>
      </div>

      <p className="mb-4 text-base font-semibold text-ink-900">
        {index + 1}. {q.prompt}
      </p>
      <div className="grid gap-2">
        {q.options.map((opt, oi) => {
          const isSel = selected === oi;
          const isCorrect = oi === q.correctIndex;
          return (
            <button
              key={oi}
              type="button"
              disabled={checked}
              onClick={() => setSelected(oi)}
              className={cn(
                "flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition",
                !checked && isSel && "border-brand-500 bg-brand-50 ring-2 ring-brand-200",
                !checked && !isSel && "border-slate-200 hover:border-brand-300",
                checked && isCorrect && "border-emerald-500 bg-emerald-50 text-emerald-900",
                checked && isSel && !isCorrect && "border-rose-400 bg-rose-50 text-rose-900"
              )}
            >
              <span>{opt}</span>
              {checked && isCorrect && <CheckCircle2 className="h-4 w-4 text-emerald-600" />}
              {checked && isSel && !isCorrect && <XCircle className="h-4 w-4 text-rose-500" />}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
        <button
          type="button"
          onClick={skip}
          className="text-sm font-semibold text-brand-700 hover:underline"
        >
          {t("learn_skip")}
        </button>
        {!checked ? (
          <button
            type="button"
            disabled={selected === null}
            onClick={onCheck}
            className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-bold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {t("learn_check")}
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-bold text-white"
          >
            {index + 1 >= questions.length ? t("quiz_score") : t("learn_next")}
          </button>
        )}
      </div>
    </div>
  );
}
