import type { Plan } from "@/lib/types";

export const PLANS: Plan[] = [
  {
    id: "2m",
    name: "Starter",
    months: 2,
    price: 100,
    features: [
      "Acceso a los 6 cursos",
      "Quizzes interactivos y progreso",
      "Certificados de finalización",
      "Interfaz ES / EN / JA",
      "Soporte por email",
    ],
  },
  {
    id: "3m",
    name: "Más popular",
    months: 3,
    price: 150,
    popular: true,
    features: [
      "Todo lo de Starter",
      "Ruta de lecciones prioritaria",
      "Rachas y panel de avance",
      "Checkout con gift card",
      "Soporte prioritario",
    ],
  },
  {
    id: "1y",
    name: "Año Fluido",
    months: 12,
    price: 500,
    features: [
      "Todo lo de Más popular",
      "Acceso de un año (mejor valor)",
      "Actualizaciones de cursos",
      "Archivo de certificados",
      "Plantilla de plan de estudio 1:1",
    ],
  },
];

export function getPlan(id: string | null | undefined): Plan | undefined {
  return PLANS.find((p) => p.id === id);
}
