import Link from "next/link";
import { PLANS } from "@/data/plans";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Pricing</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-slate-900">
          Simple plans. Real demo checkout.
        </h1>
        <p className="mt-3 text-slate-600">
          Pay with USDT, BTC, or a gift card—all flows are simulated and stored locally.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "relative flex flex-col rounded-3xl border bg-white p-6 shadow-sm",
              plan.popular
                ? "border-brand-400 shadow-soft ring-2 ring-brand-200"
                : "border-slate-200"
            )}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white">
                Most Popular
              </span>
            )}
            <h2 className="text-lg font-bold text-slate-900">{plan.name}</h2>
            <p className="mt-1 text-sm text-slate-500">{plan.months} months access</p>
            <p className="mt-4">
              <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={`/checkout/?plan=${plan.id}`}
              className={cn(
                "mt-8 block rounded-full py-3 text-center text-sm font-semibold",
                plan.popular
                  ? "bg-brand-600 text-white hover:bg-brand-700"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              )}
            >
              Choose {plan.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
