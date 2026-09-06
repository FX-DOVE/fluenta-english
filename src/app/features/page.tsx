import {
  Award,
  BookOpen,
  CreditCard,
  Languages,
  LineChart,
  ListChecks,
  PlayCircle,
  Flame,
} from "lucide-react";
import Link from "next/link";

const items = [
  {
    icon: BookOpen,
    title: "Course catalog & enrollment",
    body: "Browse six polished demo courses, enroll in one click, and keep enrollments in localStorage.",
  },
  {
    icon: PlayCircle,
    title: "Lesson player",
    body: "Curriculum sidebar, readable lesson content, mark complete, and resume where you left off.",
  },
  {
    icon: ListChecks,
    title: "Interactive quizzes",
    body: "Score yourself with multiple-choice quizzes embedded in key lessons.",
  },
  {
    icon: LineChart,
    title: "Progress bars",
    body: "Per-course completion percentages drive the dashboard and certificate unlocks.",
  },
  {
    icon: Award,
    title: "Certificates",
    body: "Finish every lesson in a course to unlock a certificate you can view anytime.",
  },
  {
    icon: Flame,
    title: "Streak widget",
    body: "Daily study touches update your streak so motivation stays visible.",
  },
  {
    icon: Languages,
    title: "EN / ES / JA toggle",
    body: "Marketing pages switch copy instantly for Spanish and Japanese speakers.",
  },
  {
    icon: CreditCard,
    title: "Demo checkout",
    body: "USDT, BTC, and gift-card flows with persisted demo orders—clearly labeled as simulation.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Product</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-slate-900">Built like a real LMS</h1>
        <p className="mt-3 text-slate-600">
          Fluenta showcases the learning loop end-to-end—from discovery to certificate—without a backend.
        </p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <it.icon className="mb-3 h-6 w-6 text-brand-600" />
            <h2 className="font-bold text-slate-900">{it.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{it.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/courses/"
          className="inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Explore courses
        </Link>
      </div>
    </div>
  );
}
