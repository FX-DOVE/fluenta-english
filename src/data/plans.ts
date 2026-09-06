import type { Plan, PlanId } from "@/lib/types";

/** Feature keys resolved via t() in UI — names/features localized */
export const PLANS: Plan[] = [
  {
    id: "2m",
    name: "Starter",
    months: 2,
    price: 100,
    features: ["plan_2m_f1", "plan_2m_f2", "plan_2m_f3", "plan_2m_f4", "plan_2m_f5"],
  },
  {
    id: "3m",
    name: "Más popular",
    months: 3,
    price: 150,
    popular: true,
    features: ["plan_3m_f1", "plan_3m_f2", "plan_3m_f3", "plan_3m_f4", "plan_3m_f5"],
  },
  {
    id: "1y",
    name: "Año Fluido",
    months: 12,
    price: 500,
    features: ["plan_1y_f1", "plan_1y_f2", "plan_1y_f3", "plan_1y_f4", "plan_1y_f5"],
  },
];

export function getPlan(id: string | null | undefined): Plan | undefined {
  return PLANS.find((p) => p.id === id);
}

export function planNameKey(id: PlanId): string {
  return `plan_${id}_name`;
}
