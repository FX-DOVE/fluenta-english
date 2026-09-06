export type Lang = "en" | "es" | "ja";

export type PlanId = "2m" | "3m" | "1y";

export interface Plan {
  id: PlanId;
  name: string;
  months: number;
  price: number;
  popular?: boolean;
  features: string[];
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
}

export interface Lesson {
  slug: string;
  title: string;
  durationMin: number;
  content: string;
  quiz?: QuizQuestion[];
}

export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  lessons: Lesson[];
  description: string;
  outcomes: string[];
  color: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export type PaymentMethod = "usdt" | "btc" | "giftcard";

export interface Order {
  id: string;
  planId: PlanId;
  method: PaymentMethod;
  amount: number;
  status: "pending" | "confirmed" | "redeemed";
  createdAt: string;
  giftCode?: string;
  giftPin?: string;
  txNote?: string;
}

export interface ProgressState {
  enrolled: string[];
  completedLessons: Record<string, string[]>; // courseSlug -> lessonSlugs
  quizScores: Record<string, number>; // lessonKey -> score pct
  certificates: string[]; // courseSlugs
  streak: number;
  lastStudyDate: string | null;
  completedAt: Record<string, string>;
}
