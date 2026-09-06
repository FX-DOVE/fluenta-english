"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/lib/LanguageContext";
import { getUser } from "@/lib/storage";
import type { User } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [user, setUserState] = useState<User | null>(null);

  useEffect(() => {
    setUserState(getUser());
  }, []);

  const links = [
    { href: "/features/", label: t("nav_features") },
    { href: "/courses/", label: t("nav_courses") },
    { href: "/pricing/", label: t("nav_pricing") },
    { href: "/about/", label: t("nav_about") },
    { href: "/contact/", label: t("nav_contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-brand-800">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-lg tracking-tight">Fluenta</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          {user ? (
            <Link
              href="/dashboard/"
              className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
            >
              {t("nav_dashboard")}
            </Link>
          ) : (
            <>
              <Link
                href="/login/"
                className="text-sm font-semibold text-slate-700 hover:text-brand-700"
              >
                {t("nav_login")}
              </Link>
              <Link
                href="/signup/"
                className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
              >
                {t("nav_signup")}
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-slate-100 bg-white md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="space-y-1 px-4 py-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center justify-between gap-3 pt-2">
            <LanguageToggle />
            <Link
              href={user ? "/dashboard/" : "/signup/"}
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
            >
              {user ? t("nav_dashboard") : t("nav_cta")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
