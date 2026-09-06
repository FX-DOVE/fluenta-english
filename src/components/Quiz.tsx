"use client";

import { useMemo, useState } from "react";
import type { QuizQuestion } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";

export function Quiz({
  questions,
  onComplete,
}: {
  questions: QuizQuestion[];
  onComplete?: (pct: number) => void;
}) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    if (!questions.length) return 0;
    let correct = 0;
    for (const q of questions) {
      if (answers[q.id] === q.correctIndex) correct += 1;
    }
    return Math.round((correct / questions.length) * 100);
  }, [answers, questions]);

  function submit() {
    setSubmitted(true);
    onComplete?.(score);
  }

  return (
    <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/50 p-5 sm:p-6">
      <h3 className="mb-4 text-lg font-bold text-brand-900">Interactive quiz</h3>
      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={q.id}>
            <p className="mb-3 text-sm font-semibold text-slate-800">
              {i + 1}. {q.prompt}
            </p>
            <div className="grid gap-2">
              {q.options.map((opt, oi) => {
                const selected = answers[q.id] === oi;
                const isCorrect = oi === q.correctIndex;
                const show = submitted;
                return (
                  <button
                    key={oi}
                    type="button"
                    disabled={submitted}
                    onClick={() => setAnswers((a) => ({ ...a, [q.id]: oi }))}
                    className={cn(
                      "flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition",
                      !show && selected && "border-brand-500 bg-white ring-2 ring-brand-200",
                      !show && !selected && "border-slate-200 bg-white hover:border-brand-300",
                      show && isCorrect && "border-accent-500 bg-emerald-50 text-emerald-900",
                      show && selected && !isCorrect && "border-rose-400 bg-rose-50 text-rose-900"
                    )}
                  >
                    <span>{opt}</span>
                    {show && isCorrect && <CheckCircle2 className="h-4 w-4 text-accent-600" />}
                    {show && selected && !isCorrect && <XCircle className="h-4 w-4 text-rose-500" />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {!submitted ? (
        <button
          type="button"
          disabled={Object.keys(answers).length < questions.length}
          onClick={submit}
          className="mt-6 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Check answers
        </button>
      ) : (
        <div className="mt-6 rounded-xl bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">
          Your score: <span className="text-brand-700">{score}%</span>
        </div>
      )}
    </div>
  );
}
