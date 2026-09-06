import type { Plan } from "@/lib/types";

export const PLANS: Plan[] = [
  {
    id: "2m",
    name: "Starter",
    months: 2,
    price: 100,
    features: [
      "All 6 course catalog access",
      "Interactive quizzes & progress",
      "Certificates of completion",
      "EN / ES / JA interface",
      "Email support",
    ],
  },
  {
    id: "3m",
    name: "Most Popular",
    months: 3,
    price: 150,
    popular: true,
    features: [
      "Everything in Starter",
      "Priority lesson roadmap",
      "Streak tracking & dashboard",
      "Gift-card checkout option",
      "Priority support",
    ],
  },
  {
    id: "1y",
    name: "Fluent Year",
    months: 12,
    price: 500,
    features: [
      "Everything in Most Popular",
      "Full-year access (best value)",
      "All future course updates",
      "Certificate archive",
      "1:1 study plan template",
    ],
  },
];

export function getPlan(id: string | null | undefined): Plan | undefined {
  return PLANS.find((p) => p.id === id);
}
