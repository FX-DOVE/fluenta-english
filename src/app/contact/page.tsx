"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
        {t("contact_eyebrow")}
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink-900">{t("contact_title")}</h1>
      <p className="mt-3 text-slate-600">{t("contact_sub")}</p>

      {sent ? (
        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
          {t("contact_thanks")}
        </div>
      ) : (
        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <label className="block text-sm">
            <span className="font-medium text-slate-700">{t("contact_name")}</span>
            <input
              required
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none ring-brand-300 focus:ring-2"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium text-slate-700">{t("contact_email")}</span>
            <input
              required
              type="email"
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none ring-brand-300 focus:ring-2"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium text-slate-700">{t("contact_message")}</span>
            <textarea
              required
              rows={5}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none ring-brand-300 focus:ring-2"
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
          >
            {t("contact_send")}
          </button>
        </form>
      )}
    </div>
  );
}
