import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatMoney(n: number) {
  return `$${n}`;
}

/** Demo wallets — clearly labeled as demo / not real. */
export const DEMO_WALLETS = {
  usdt: "TDemoFluentaUSDT9xK2mP4qR7wE1nB8cV",
  btc: "bc1qdemofluenta000000000000000xyz123",
} as const;

export function withBase(path: string) {
  const base = process.env.NODE_ENV === "production" ? "/fluenta-english" : "";
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}
