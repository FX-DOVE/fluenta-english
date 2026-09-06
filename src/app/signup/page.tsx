"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { setUser } from "@/lib/storage";

export default function SignupPage() {
  const router = useRouter();
  const [name, setNombre] = useState("");
  const [email, setEmail] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setUser({
      id: `u_${Date.now()}`,
      name: name.trim() || "Learner",
      email: email.trim(),
      createdAt: new Date().toISOString(),
    });
    router.push("/dashboard/");
  }

  return (
    <div className="mx-auto max-w-md px-4 py-14 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-ink-900">Registrarse</h1>
      <p className="mt-2 text-sm text-slate-600">
        Crea una cuenta demo stored only in your browser.
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Nombre</span>
          <input
            required
            value={name}
            onChange={(e) => setNombre(e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none ring-brand-300 focus:ring-2"
          />
        </label>
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
        <button
          type="submit"
          className="w-full rounded-full bg-brand-500 py-3 text-sm font-semibold text-white hover:bg-brand-600"
        >
          Crear cuenta
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-slate-600">
        Ya tienes cuenta demo?{" "}
        <Link href="/login/" className="font-semibold text-brand-700 hover:underline">
          Entrar
        </Link>
      </p>
    </div>
  );
}
