"use client";

import { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getPlan, planNameKey } from "@/data/plans";
import type { Order, PaymentMethod, PlanId } from "@/lib/types";
import { addOrder } from "@/lib/storage";
import { DEMO_WALLETS, cn } from "@/lib/utils";
import { Bitcoin, Copy, CreditCard, Gift, Check } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

function CheckoutInner() {
  const { t } = useLanguage();
  const params = useSearchParams();
  const router = useRouter();
  const planId = (params.get("plan") as PlanId) || "3m";
  const plan = getPlan(planId) ?? getPlan("3m")!;

  const [method, setMethod] = useState<PaymentMethod>("usdt");
  const [copied, setCopied] = useState(false);
  const [txNote, setTxNote] = useState("");
  const [giftCode, setGiftCode] = useState("");
  const [giftPin, setGiftPin] = useState("");
  const [confirming, setConfirming] = useState(false);
  const [error, setError] = useState("");

  const wallet = useMemo(
    () => (method === "btc" ? DEMO_WALLETS.btc : DEMO_WALLETS.usdt),
    [method]
  );

  async function copyWallet() {
    try {
      await navigator.clipboard.writeText(wallet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError(t("checkout_err_copy"));
    }
  }

  function placeOrder(status: Order["status"]) {
    setConfirming(true);
    setError("");
    const order: Order = {
      id: `ord_${Date.now()}`,
      planId: plan.id,
      method,
      amount: plan.price,
      status,
      createdAt: new Date().toISOString(),
      giftCode: method === "giftcard" ? giftCode : undefined,
      giftPin: method === "giftcard" ? giftPin || undefined : undefined,
      txNote: method !== "giftcard" ? txNote || "Demo confirmation" : undefined,
    };
    addOrder(order);
    setTimeout(() => {
      router.push(`/checkout/success/?order=${order.id}`);
    }, 400);
  }

  function onCryptoConfirm() {
    if (!txNote.trim()) {
      setError(t("checkout_err_tx"));
      return;
    }
    placeOrder("confirmed");
  }

  function onGiftRedeem() {
    if (!giftCode.trim() || giftCode.trim().length < 4) {
      setError(t("checkout_err_gift"));
      return;
    }
    placeOrder("redeemed");
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-ink-900">{t("checkout_title")}</h1>
      <p className="mt-2 text-slate-600">{t("checkout_sub")}</p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-slate-500">{t("checkout_plan")}</p>
            <p className="text-xl font-bold text-ink-900">
              {t(planNameKey(plan.id))} · {plan.months} {t("checkout_months")}
            </p>
          </div>
          <p className="font-display text-4xl font-semibold text-brand-700">${plan.price}</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-3 text-sm font-semibold text-ink-800">{t("checkout_method")}</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {(
            [
              ["usdt", "USDT", CreditCard],
              ["btc", "BTC", Bitcoin],
              ["giftcard", t("checkout_giftcard"), Gift],
            ] as const
          ).map(([id, label, Icon]) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                setMethod(id);
                setError("");
              }}
              className={cn(
                "flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition",
                method === id
                  ? "border-brand-500 bg-brand-50 text-brand-800 ring-2 ring-brand-200"
                  : "border-slate-200 bg-white text-slate-700 hover:border-brand-300"
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {(method === "usdt" || method === "btc") && (
        <div className="mt-6 space-y-4 rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
          <div className="rounded-lg bg-amber-100 px-3 py-2 text-xs font-semibold text-amber-900">
            {t("checkout_wallet_warn", { method: method.toUpperCase() })}
          </div>
          <div>
            <p className="text-sm font-medium text-slate-700">
              {t("checkout_send", { amount: plan.price, method: method.toUpperCase() })}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <code className="break-all rounded-xl bg-white px-3 py-2 text-xs text-slate-800 ring-1 ring-slate-200">
                {wallet}
              </code>
              <button
                type="button"
                onClick={copyWallet}
                className="inline-flex items-center gap-1 rounded-full bg-ink-900 px-3 py-2 text-xs font-semibold text-white"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? t("checkout_copied") : t("checkout_copy")}
              </button>
            </div>
          </div>
          <label className="block text-sm">
            <span className="font-medium text-slate-700">{t("checkout_tx_label")}</span>
            <input
              value={txNote}
              onChange={(e) => setTxNote(e.target.value)}
              placeholder={t("checkout_tx_ph")}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none ring-brand-300 focus:ring-2"
            />
          </label>
          <button
            type="button"
            disabled={confirming}
            onClick={onCryptoConfirm}
            className="w-full rounded-full bg-brand-500 py-3 text-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-60"
          >
            {t("checkout_confirm", { method: method.toUpperCase() })}
          </button>
        </div>
      )}

      {method === "giftcard" && (
        <div className="mt-6 space-y-4 rounded-2xl border border-brand-200 bg-brand-50/50 p-6">
          <p className="text-sm text-brand-900">{t("checkout_gift_help")}</p>
          <label className="block text-sm">
            <span className="font-medium text-slate-700">{t("checkout_gift_code")}</span>
            <input
              value={giftCode}
              onChange={(e) => setGiftCode(e.target.value)}
              placeholder="FLUENTA-DEMO-2026"
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none ring-brand-300 focus:ring-2"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium text-slate-700">{t("checkout_gift_pin")}</span>
            <input
              value={giftPin}
              onChange={(e) => setGiftPin(e.target.value)}
              placeholder="****"
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none ring-brand-300 focus:ring-2"
            />
          </label>
          <button
            type="button"
            disabled={confirming}
            onClick={onGiftRedeem}
            className="w-full rounded-full bg-brand-600 py-3 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
          >
            {t("checkout_redeem")}
          </button>
        </div>
      )}

      {error && (
        <p className="mt-4 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>
      )}
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <CheckoutFallback />
      }
    >
      <CheckoutInner />
    </Suspense>
  );
}

function CheckoutFallback() {
  const { t } = useLanguage();
  return <div className="p-10 text-center text-slate-500">{t("checkout_loading")}</div>;
}
