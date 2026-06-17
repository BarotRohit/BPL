import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a0e27",
          light: "#0f1535",
          mid: "#141b45",
        },
        royal: {
          DEFAULT: "#6c35de",
          light: "#8b5cf6",
          dark: "#4c1d95",
        },
        gold: {
          DEFAULT: "#f5c518",
          light: "#ffd700",
          dark: "#b8941e",
        },
        orange: {
          DEFAULT: "#ff6b35",
          light: "#ff8c5a",
          dark: "#cc5428",
        },
        cyan: {
          DEFAULT: "#00d4ff",
          light: "#67e8f9",
          dark: "#0891b2",
        },
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "cursive"],
        rajdhani: ["var(--font-rajdhani)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "trophy-rotate": "trophyRotate 4s ease-in-out infinite",
        "bat-swing": "batSwing 1.5s ease-in-out infinite",
        "ball-arc": "ballArc 3s ease-in-out infinite",
        "stadium-flicker": "stadiumFlicker 4s ease-in-out infinite",
        "particle-rise": "particleRise 4s ease-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
        "count-up": "countUp 0.5s ease-out forwards",
        "flip-in": "flipIn 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "zoom-in": "zoomIn 0.5s ease-out forwards",
        "wave": "wave 2s ease-in-out infinite",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(245, 197, 24, 0.4)" },
          "50%": { boxShadow: "0 0 60px rgba(245, 197, 24, 0.8), 0 0 100px rgba(245, 197, 24, 0.4)" },
        },
        trophyRotate: {
          "0%, 100%": { transform: "rotateY(0deg) scale(1)" },
          "50%": { transform: "rotateY(180deg) scale(1.05)" },
        },
        batSwing: {
          "0%": { transform: "rotate(-30deg)" },
          "50%": { transform: "rotate(30deg)" },
          "100%": { transform: "rotate(-30deg)" },
        },
        ballArc: {
          "0%": { transform: "translateX(0) translateY(0) rotate(0deg)", opacity: "1" },
          "50%": { transform: "translateX(50px) translateY(-80px) rotate(180deg)", opacity: "0.8" },
          "100%": { transform: "translateX(0) translateY(0) rotate(360deg)", opacity: "1" },
        },
        stadiumFlicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
          "75%": { opacity: "1" },
          "85%": { opacity: "0.9" },
        },
        particleRise: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.8" },
          "100%": { transform: "translateY(-200px) scale(0)", opacity: "0" },
        },
        fadeInUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        flipIn: {
          "0%": { transform: "rotateX(-90deg)", opacity: "0" },
          "100%": { transform: "rotateX(0deg)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-60px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(60px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.7)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(1.5)" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      backgroundImage: {
        "stadium-gradient": "radial-gradient(ellipse at center top, #1a1a4e 0%, #0a0e27 60%, #000 100%)",
        "hero-gradient": "linear-gradient(135deg, #0a0e27 0%, #141b45 30%, #1a0a3e 60%, #0a0e27 100%)",
        "gold-shimmer": "linear-gradient(90deg, transparent, rgba(245,197,24,0.4), transparent)",
        "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "royal-gradient": "linear-gradient(135deg, #6c35de, #4c1d95)",
        "trophy-gradient": "linear-gradient(135deg, #f5c518, #b8941e, #f5c518)",
      },
      boxShadow: {
        "stadium": "0 0 80px rgba(108, 53, 222, 0.3), 0 0 160px rgba(0, 212, 255, 0.1)",
        "gold": "0 0 30px rgba(245, 197, 24, 0.5), 0 0 60px rgba(245, 197, 24, 0.2)",
        "royal": "0 0 30px rgba(108, 53, 222, 0.6), 0 0 60px rgba(108, 53, 222, 0.3)",
        "cyan": "0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(0, 212, 255, 0.2)",
        "orange": "0 0 30px rgba(255, 107, 53, 0.5), 0 0 60px rgba(255, 107, 53, 0.2)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        "card-hover": "0 20px 60px rgba(108, 53, 222, 0.4), 0 0 40px rgba(0, 212, 255, 0.2)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
