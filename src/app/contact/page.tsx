"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Contact</p>
      <h1 className="mt-2 font-display text-4xl font-bold text-slate-900">Get in touch</h1>
      <p className="mt-3 text-slate-600">
        This form is a demo — messages are not sent to a server.
      </p>

      {sent ? (
        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
          Thanks! Your demo message was recorded locally. We&apos;ll pretend to reply soon.
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
            <span className="font-medium text-slate-700">Name</span>
            <input
              required
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none ring-brand-300 focus:ring-2"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium text-slate-700">Email</span>
            <input
              required
              type="email"
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none ring-brand-300 focus:ring-2"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium text-slate-700">Message</span>
            <textarea
              required
              rows={5}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none ring-brand-300 focus:ring-2"
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Send message
          </button>
        </form>
      )}
    </div>
  );
}
