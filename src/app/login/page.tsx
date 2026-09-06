"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getUser, setUser } from "@/lib/storage";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const existing = getUser();
    if (existing && existing.email.toLowerCase() === email.toLowerCase()) {
      router.push("/dashboard/");
      return;
    }
    if (existing) {
      setError("No matching demo account for that email. Try sign up or use the email you registered.");
      return;
    }
    // Auto-create lightweight demo session
    setUser({
      id: `u_${Date.now()}`,
      name: email.split("@")[0] || "Learner",
      email,
      createdAt: new Date().toISOString(),
    });
    router.push("/dashboard/");
  }

  return (
    <div className="mx-auto max-w-md px-4 py-14 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-ink-900">Entrar</h1>
      <p className="mt-2 text-sm text-slate-600">Auth demo via localStorage — no password required.</p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none ring-brand-300 focus:ring-2"
          />
        </label>
        {error && <p className="text-sm text-rose-600">{error}</p>}
        <button
          type="submit"
          className="w-full rounded-full bg-brand-500 py-3 text-sm font-semibold text-white hover:bg-brand-600"
        >
          Continuar
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-slate-600">
        Nuevo aqui?{" "}
        <Link href="/signup/" className="font-semibold text-brand-700 hover:underline">
          Registrarse
        </Link>
      </p>
    </div>
  );
}
