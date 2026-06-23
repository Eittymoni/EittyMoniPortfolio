/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        sage: {
          50: "#f1f8f4",
          100: "#dcefe3",
          200: "#bcdec9",
          300: "#8fc6a4",
          400: "#5da878",
          500: "#3d8b5b",
          600: "#2c6f47",
          700: "#245a3b",
          800: "#1f4830",
          900: "#1a3a28",
        },
        slatey: {
          50: "#f6f7f8",
          100: "#eceef1",
          200: "#d4d9de",
          300: "#aab3bd",
          400: "#7c8895",
          500: "#5b6773",
          600: "#475260",
          700: "#363f4a",
          800: "#252b33",
          900: "#191d23",
          950: "#0f1216",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fadeIn 0.8s ease both",
        "float": "float 6s ease-in-out infinite",
        "gradient": "gradient 8s ease infinite",
        "blink": "blink 1s step-end infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        gradient: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
