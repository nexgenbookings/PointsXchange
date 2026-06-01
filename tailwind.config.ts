import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#D4AF37",
          foreground: "#0B0B0B"
        },
        accent: {
          DEFAULT: "#F4C542",
          foreground: "#0B0B0B"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      boxShadow: {
        gold: "0 18px 60px rgba(212, 175, 55, 0.18)",
        "gold-md": "0 8px 30px rgba(212, 175, 55, 0.22)",
        "gold-lg": "0 20px 60px rgba(212, 175, 55, 0.28)",
        "lift": "0 12px 36px rgba(0, 0, 0, 0.1)"
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      animation: {
        "fade-up": "fade-up 0.65s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.45s ease both",
        "shimmer": "shimmer 4s linear infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite"
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to:   { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" }
        },
        "shimmer": {
          "0%":   { backgroundPosition: "-300% center" },
          "100%": { backgroundPosition: "300% center" }
        },
        "pulse-gold": {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.5" }
        }
      }
    }
  },
  plugins: []
};

export default config;
