"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-3 flex items-center gap-2 font-bold text-brand-800">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            Fluenta
          </div>
          <p className="max-w-sm text-sm text-slate-600">{t("footer_tag")}</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-900">Product</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/features/" className="hover:text-brand-700">Features</Link></li>
            <li><Link href="/courses/" className="hover:text-brand-700">Courses</Link></li>
            <li><Link href="/pricing/" className="hover:text-brand-700">Pricing</Link></li>
            <li><Link href="/certificates/" className="hover:text-brand-700">Certificates</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-900">Company</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/about/" className="hover:text-brand-700">About</Link></li>
            <li><Link href="/contact/" className="hover:text-brand-700">Contact</Link></li>
            <li><Link href="/login/" className="hover:text-brand-700">Log in</Link></li>
            <li><Link href="/signup/" className="hover:text-brand-700">Sign up</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Fluenta · Demo portfolio LMS · Payments are simulated
      </div>
    </footer>
  );
}
