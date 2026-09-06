"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getOrders } from "@/lib/storage";
import { getPlan } from "@/data/plans";
import type { Order } from "@/lib/types";
import { CheckCircle2 } from "lucide-react";

function SuccessInner() {
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
      <h1 className="mt-6 font-display text-3xl font-bold text-slate-900">
        Payment recorded
      </h1>
      <p className="mt-3 text-slate-600">
        This is a demo confirmation. Your plan access is saved in localStorage.
      </p>
      {order && (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-left text-sm shadow-sm">
          <Row label="Order" value={order.id} />
          <Row label="Plan" value={plan ? `${plan.name} ($${plan.price})` : order.planId} />
          <Row label="Method" value={order.method.toUpperCase()} />
          <Row label="Status" value={order.status} />
        </div>
      )}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/dashboard/"
          className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white"
        >
          Go to dashboard
        </Link>
        <Link
          href="/courses/"
          className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800"
        >
          Browse courses
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

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading…</div>}>
      <SuccessInner />
    </Suspense>
  );
}
