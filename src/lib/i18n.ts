import type { Lang } from "./types";

type Dict = Record<string, string>;

const en: Dict = {
  nav_features: "Features",
  nav_courses: "Courses",
  nav_pricing: "Pricing",
  nav_about: "About",
  nav_contact: "Contact",
  nav_dashboard: "Dashboard",
  nav_login: "Log in",
  nav_signup: "Sign up",
  nav_cta: "Start learning",
  hero_badge: "For Spanish & Japanese speakers",
  hero_title: "Become fluent in English with Fluenta",
  hero_sub:
    "A modern LMS built for clarity—structured courses, interactive quizzes, streaks, and certificates. Learn at your pace in EN, ES, or JA.",
  hero_primary: "Browse courses",
  hero_secondary: "See pricing",
  how_title: "How it works",
  how_1: "Pick a plan",
  how_1d: "2 months, 3 months, or a full year—clear pricing, crypto or gift card.",
  how_2: "Enroll & learn",
  how_2d: "Lesson player, curriculum sidebar, quizzes, and progress that sticks.",
  how_3: "Earn certificates",
  how_3d: "Hit 100% course completion and unlock a shareable certificate.",
  features_title: "Everything you need to level up",
  courses_title: "Featured courses",
  courses_sub: "Six practical tracks from foundations to pronunciation power.",
  testimonials_title: "Learners love Fluenta",
  cta_title: "Ready to speak with confidence?",
  cta_sub: "Join Fluenta today—demo checkout supports USDT, BTC, and gift cards.",
  cta_btn: "View pricing",
  footer_tag: "English learning for ES & JA speakers.",
};

const es: Dict = {
  nav_features: "Funciones",
  nav_courses: "Cursos",
  nav_pricing: "Precios",
  nav_about: "Nosotros",
  nav_contact: "Contacto",
  nav_dashboard: "Panel",
  nav_login: "Entrar",
  nav_signup: "Registrarse",
  nav_cta: "Empezar",
  hero_badge: "Para hispanohablantes y japoneses",
  hero_title: "Hazte fluido en inglés con Fluenta",
  hero_sub:
    "Un LMS moderno y claro: cursos estructurados, quizzes, rachas y certificados. Aprende a tu ritmo en EN, ES o JA.",
  hero_primary: "Ver cursos",
  hero_secondary: "Ver precios",
  how_title: "Cómo funciona",
  how_1: "Elige un plan",
  how_1d: "2 meses, 3 meses o un año—precios claros, cripto o gift card.",
  how_2: "Inscríbete y aprende",
  how_2d: "Reproductor de lecciones, barra lateral, quizzes y progreso guardado.",
  how_3: "Obtén certificados",
  how_3d: "Completa el 100% del curso y desbloquea tu certificado.",
  features_title: "Todo lo que necesitas para mejorar",
  courses_title: "Cursos destacados",
  courses_sub: "Seis recorridos prácticos desde fundamentos hasta pronunciación.",
  testimonials_title: "Los estudiantes aman Fluenta",
  cta_title: "¿Listo para hablar con confianza?",
  cta_sub: "Únete hoy—el checkout demo admite USDT, BTC y gift cards.",
  cta_btn: "Ver precios",
  footer_tag: "Inglés para hablantes de ES y JA.",
};

const ja: Dict = {
  nav_features: "機能",
  nav_courses: "コース",
  nav_pricing: "料金",
  nav_about: "概要",
  nav_contact: "お問い合わせ",
  nav_dashboard: "ダッシュボード",
  nav_login: "ログイン",
  nav_signup: "登録",
  nav_cta: "学習を始める",
  hero_badge: "スペイン語・日本語話者向け",
  hero_title: "Fluentaで英語を流暢に",
  hero_sub:
    "わかりやすさ重視の最新LMS。体系的なコース、クイズ、連続学習、修了証。EN / ES / JAで自分のペースで学べます。",
  hero_primary: "コースを見る",
  hero_secondary: "料金を見る",
  how_title: "使い方",
  how_1: "プランを選ぶ",
  how_1d: "2ヶ月・3ヶ月・1年。明確な料金。USDT / BTC / ギフトカード対応。",
  how_2: "登録して学ぶ",
  how_2d: "レッスンプレーヤー、カリキュラム、クイズ、進捗の保存。",
  how_3: "修了証を取得",
  how_3d: "コースを100%完了すると修了証がもらえます。",
  features_title: "上達に必要なすべて",
  courses_title: "おすすめコース",
  courses_sub: "基礎から発音まで、実践的な6コース。",
  testimonials_title: "学習者の声",
  cta_title: "自信を持って話せるようになりませんか？",
  cta_sub: "今すぐFluentaへ—デモ決済はUSDT、BTC、ギフトカードに対応。",
  cta_btn: "料金を見る",
  footer_tag: "ES・JA話者のための英語学習。",
};

const maps: Record<Lang, Dict> = { en, es, ja };

export function t(lang: Lang, key: string): string {
  return maps[lang][key] ?? maps.en[key] ?? key;
}

export const LANG_LABELS: Record<Lang, string> = {
  en: "EN",
  es: "ES",
  ja: "JA",
};
