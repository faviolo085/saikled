import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#0A0A0A",
        "carbon-soft": "#141414",
        concrete: "#B6B4AC",
        "concrete-light": "#EDECE8",
        cobalt: "#0047AB",
        ice: "#A9C6E8"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      aspectRatio: {
        "4/5": "4 / 5",
        "9/16": "9 / 16"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 24s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
