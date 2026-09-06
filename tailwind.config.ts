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
          50: "#eefcff",
          100: "#d5f7ff",
          200: "#b0efff",
          300: "#79e4ff",
          400: "#32d2ff",
          500: "#00b8ef",
          600: "#0093cc",
          700: "#0075a5",
          800: "#066288",
          900: "#0b516f",
          950: "#07344b",
        },
        ink: {
          700: "#2c3340",
          800: "#1c2430",
          900: "#0f1419",
        },
        sand: {
          50: "#faf8f5",
          100: "#f3efe8",
          200: "#e8e0d4",
        },
        gold: {
          500: "#c4a574",
          600: "#a88855",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 18px 50px -20px rgba(0, 147, 204, 0.35)",
        card: "0 1px 2px rgba(15,20,25,0.04), 0 8px 24px rgba(15,20,25,0.06)",
      },
      backgroundImage: {
        "hero-dots":
          "radial-gradient(circle at 1px 1px, rgba(0,184,239,0.18) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
