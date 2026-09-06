"use client";

import Link from "next/link";
import { PLANS } from "@/data/plans";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

export default function PricingPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
          {t("pricing_eyebrow")}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink-900 sm:text-5xl">
          {t("pricing_title")}
        </h1>
        <p className="mt-4 text-slate-600">{t("pricing_sub")}</p>
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-sand-50 px-4 py-2 text-sm text-slate-700">
          <Star className="h-4 w-4 fill-emerald-500 text-emerald-500" />
          {t("pricing_trust")}
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "relative flex flex-col rounded-3xl border bg-sand-50 p-6 shadow-card",
              plan.popular
                ? "border-brand-400 bg-white ring-2 ring-brand-200"
                : "border-slate-200"
            )}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-ink-900 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gold-500">
                {t("pricing_popular")}
              </span>
            )}
            <h2 className="text-lg font-bold text-ink-900">{plan.name}</h2>
            <p className="mt-1 text-sm text-slate-500">
              {plan.months} {t("pricing_months")}
            </p>
            <p className="mt-4">
              <span className="font-display text-5xl font-semibold text-ink-900">
                ${plan.price}
              </span>
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={`/checkout/?plan=${plan.id}`}
              className={cn(
                "mt-8 block rounded-full py-3 text-center text-sm font-semibold",
                plan.popular
                  ? "bg-brand-500 text-white hover:bg-brand-600"
                  : "bg-ink-900 text-white hover:bg-ink-800"
              )}
            >
              {t("pricing_choose")}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
