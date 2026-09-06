"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-slate-200 bg-sand-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
              F
            </span>
            <span className="font-display text-lg font-semibold text-ink-900">Fluenta</span>
          </div>
          <p className="max-w-sm text-sm text-slate-600">{t("footer_tag")}</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-ink-900">{t("footer_product")}</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/features/" className="hover:text-brand-700">{t("nav_features")}</Link></li>
            <li><Link href="/courses/" className="hover:text-brand-700">{t("nav_courses")}</Link></li>
            <li><Link href="/pricing/" className="hover:text-brand-700">{t("nav_pricing")}</Link></li>
            <li><Link href="/certificates/" className="hover:text-brand-700">Certificados</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-ink-900">{t("footer_company")}</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/about/" className="hover:text-brand-700">{t("nav_about")}</Link></li>
            <li><Link href="/contact/" className="hover:text-brand-700">{t("nav_contact")}</Link></li>
            <li><Link href="/login/" className="hover:text-brand-700">{t("nav_login")}</Link></li>
            <li><Link href="/signup/" className="hover:text-brand-700">{t("nav_signup")}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Fluenta · {t("footer_copy")}
      </div>
    </footer>
  );
}
