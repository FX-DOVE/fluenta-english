"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getOrders } from "@/lib/storage";
import { getPlan, planNameKey } from "@/data/plans";
import type { Order } from "@/lib/types";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

function SuccessInner() {
  const { t } = useLanguage();
  const params = useSearchParams();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const id = params.get("order");
    const orders = getOrders();
    setOrder(orders.find((o) => o.id === id) ?? orders[0] ?? null);
  }, [params]);

  const plan = order ? getPlan(order.planId) : null;

  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-accent-600">
        <CheckCircle2 className="h-9 w-9" />
      </div>
      <h1 className="mt-6 font-display text-3xl font-semibold text-ink-900">{t("success_title")}</h1>
      <p className="mt-3 text-slate-600">{t("success_sub")}</p>
      {order && (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-left text-sm shadow-sm">
          <Row label={t("success_order")} value={order.id} />
          <Row
            label={t("success_plan")}
            value={plan ? `${t(planNameKey(plan.id))} ($${plan.price})` : order.planId}
          />
          <Row
            label={t("success_method")}
            value={order.method === "giftcard" ? t("checkout_giftcard") : order.method.toUpperCase()}
          />
          <Row label={t("success_status")} value={order.status} />
        </div>
      )}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/dashboard/"
          className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white"
        >
          {t("success_dash")}
        </Link>
        <Link
          href="/courses/"
          className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800"
        >
          {t("success_courses")}
        </Link>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-slate-100 py-2 last:border-0">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium text-slate-800">{value}</span>
    </div>
  );
}

function SuccessFallback() {
  const { t } = useLanguage();
  return <div className="p-10 text-center">{t("success_loading")}</div>;
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<SuccessFallback />}>
      <SuccessInner />
    </Suspense>
  );
}
