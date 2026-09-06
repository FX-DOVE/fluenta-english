import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#d9f1ff",
          200: "#bce7ff",
          300: "#8ed8ff",
          400: "#58c0ff",
          500: "#32a1ff",
          600: "#1a81f5",
          700: "#1469e1",
          800: "#1755b6",
          900: "#19498f",
          950: "#142e57",
        },
        accent: {
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(20, 105, 225, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
