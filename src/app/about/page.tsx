import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">About</p>
      <h1 className="mt-2 font-display text-4xl font-bold text-slate-900">About Fluenta</h1>
      <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
        <p>
          Fluenta is a polished portfolio LMS built to demonstrate a full English-learning product
          experience for Spanish and Japanese speakers—without requiring a production backend.
        </p>
        <p>
          The product story is simple: discover courses, enroll, learn in a focused lesson player,
          quiz yourself, keep a streak, and earn certificates when you reach 100% completion.
        </p>
        <p>
          Marketing pages support an EN / ES / JA language toggle. Checkout showcases USDT, BTC,
          and gift-card flows with clearly labeled demo wallets. Auth, progress, and orders persist
          in localStorage so the demo feels real on a static GitHub Pages deploy.
        </p>
      </div>
      <Link
        href="/contact/"
        className="mt-8 inline-flex rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white"
      >
        Contact us
      </Link>
    </div>
  );
}
