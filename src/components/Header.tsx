"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white shadow-soft">
            F
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-ink-900 ring-2 ring-white" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-tight text-ink-900">
              Fluenta
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-600 sm:block">
              {t("brand_tag")}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-[13px] font-semibold uppercase tracking-wide text-gold-600 transition hover:bg-sand-100 hover:text-ink-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          {user ? (
            <Link href="/dashboard/" className="btn-primary !px-4 !py-2">
              {t("nav_dashboard")}
            </Link>
          ) : (
            <>
              <Link
                href="/login/"
                className="rounded-full border border-ink-900 px-4 py-2 text-sm font-semibold text-ink-900 transition hover:bg-sand-50"
              >
                {t("nav_login")}
              </Link>
              <Link href="/signup/" className="btn-primary !px-4 !py-2">
                {t("nav_signup")}
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ink-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={t("aria_menu")}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div className={cn("border-t border-slate-100 bg-white md:hidden", open ? "block" : "hidden")}>
        <div className="space-y-1 px-4 py-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-800 hover:bg-brand-50"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center justify-between gap-3 pt-2">
            <LanguageToggle />
            <Link
              href={user ? "/dashboard/" : "/signup/"}
              onClick={() => setOpen(false)}
              className="btn-primary !px-4 !py-2"
            >
              {user ? t("nav_dashboard") : t("nav_cta")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
