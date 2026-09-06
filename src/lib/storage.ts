"use client";

import type { Order, ProgressState, User } from "./types";

const KEYS = {
  user: "fluenta_user",
  progress: "fluenta_progress",
  orders: "fluenta_orders",
  lang: "fluenta_lang",
  enrolledPlan: "fluenta_plan",
} as const;

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function getUser(): User | null {
  if (typeof window === "undefined") return null;
  return safeParse<User | null>(localStorage.getItem(KEYS.user), null);
}

export function setUser(user: User | null) {
  if (typeof window === "undefined") return;
  if (!user) localStorage.removeItem(KEYS.user);
  else localStorage.setItem(KEYS.user, JSON.stringify(user));
}

export function defaultProgress(): ProgressState {
  return {
    enrolled: [],
    completedLessons: {},
    quizScores: {},
    certificates: [],
    streak: 0,
    lastStudyDate: null,
    completedAt: {},
  };
}

export function getProgress(): ProgressState {
  if (typeof window === "undefined") return defaultProgress();
  return safeParse(localStorage.getItem(KEYS.progress), defaultProgress());
}

export function setProgress(p: ProgressState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEYS.progress, JSON.stringify(p));
}

export function enrollCourse(slug: string) {
  const p = getProgress();
  if (!p.enrolled.includes(slug)) {
    p.enrolled.push(slug);
    setProgress(p);
  }
  return p;
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayISO() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export function touchStreak() {
  const p = getProgress();
  const today = todayISO();
  if (p.lastStudyDate === today) return p;
  if (p.lastStudyDate === yesterdayISO()) p.streak += 1;
  else p.streak = 1;
  p.lastStudyDate = today;
  setProgress(p);
  return p;
}

export function markLessonComplete(courseSlug: string, lessonSlug: string, totalLessons: number) {
  const p = getProgress();
  if (!p.enrolled.includes(courseSlug)) p.enrolled.push(courseSlug);
  const list = p.completedLessons[courseSlug] ?? [];
  if (!list.includes(lessonSlug)) list.push(lessonSlug);
  p.completedLessons[courseSlug] = list;

  if (list.length >= totalLessons && !p.certificates.includes(courseSlug)) {
    p.certificates.push(courseSlug);
    p.completedAt[courseSlug] = new Date().toISOString();
  }
  setProgress(p);
  touchStreak();
  return p;
}

export function saveQuizScore(courseSlug: string, lessonSlug: string, pct: number) {
  const p = getProgress();
  p.quizScores[`${courseSlug}/${lessonSlug}`] = pct;
  setProgress(p);
  return p;
}

export function courseProgressPct(courseSlug: string, totalLessons: number): number {
  const p = getProgress();
  const done = p.completedLessons[courseSlug]?.length ?? 0;
  if (!totalLessons) return 0;
  return Math.round((done / totalLessons) * 100);
}

export function getOrders(): Order[] {
  if (typeof window === "undefined") return [];
  return safeParse(localStorage.getItem(KEYS.orders), []);
}

export function addOrder(order: Order) {
  const orders = getOrders();
  orders.unshift(order);
  localStorage.setItem(KEYS.orders, JSON.stringify(orders));
  localStorage.setItem(KEYS.enrolledPlan, order.planId);
  return orders;
}

export function getActivePlanId(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(KEYS.enrolledPlan);
}

export function getLang(): "en" | "es" | "ja" {
  if (typeof window === "undefined") return "en";
  const v = localStorage.getItem(KEYS.lang);
  if (v === "es" || v === "ja" || v === "en") return v;
  return "en";
}

export function setLang(lang: "en" | "es" | "ja") {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEYS.lang, lang);
}
