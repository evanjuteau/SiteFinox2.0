import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#080C14",
          50: "#0C1220",
          100: "#111829",
          200: "#162035",
        },
        gold: {
          DEFAULT: "#D4A843",
          dark: "#B88C28",
          pale: "rgba(212,168,67,0.12)",
        },
        cream: {
          DEFAULT: "#F5F0E8",
          dim: "#DDD8CE",
        },
        muted: {
          DEFAULT: "#8A96A8",
          dark: "#6E7A8A",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bebas)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.23, 1, 0.32, 1) both",
        "hero-in": "heroIn 1.2s cubic-bezier(0.23, 1, 0.32, 1) both",
        "logo-glow": "logoGlow 4s ease-in-out infinite alternate",
        "glow-pulse": "glowPulse 8s ease-in-out infinite alternate",
        twinkle: "twinkle var(--d, 4s) var(--dl, 0s) ease-in-out infinite",
        "scroll-drop": "scrollDrop 2s ease-in-out infinite",
        "cta-pulse": "ctaPulse 6s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        heroIn: {
          from: { opacity: "0", transform: "translateY(40px) scale(0.95)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        logoGlow: {
          from: { filter: "drop-shadow(0 0 40px rgba(212,168,67,0.2))" },
          to: {
            filter:
              "drop-shadow(0 0 80px rgba(212,168,67,0.4)) drop-shadow(0 0 30px rgba(212,168,67,0.25))",
          },
        },
        glowPulse: { from: { opacity: "0.6" }, to: { opacity: "1" } },
        twinkle: {
          "0%,100%": { opacity: "0", transform: "scale(0.5)" },
          "50%": { opacity: "var(--op, 0.6)", transform: "scale(1)" },
        },
        scrollDrop: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top", opacity: "1" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom", opacity: "0" },
        },
        ctaPulse: {
          from: { transform: "translate(-50%,-50%) scale(0.8)" },
          to: { transform: "translate(-50%,-50%) scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
