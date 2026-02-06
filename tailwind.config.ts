import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        arcane: {
          bg: "#050505",
          panel: "#0b0f0b",
          text: "#d6ffd6",
          neon: "#38ff6b",
          dim: "#6fbf7a",
        },
      },
      boxShadow: {
        neon: "0 0 40px rgba(56,255,107,0.08), 0 0 2px rgba(56,255,107,0.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
