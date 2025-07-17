import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        "emay-lime": "#e9fd57",
        "emay-lime-subtle": "#f9ffef",
        "emay-pink": "#FF2670",
        "emay-black": "#000000",
        "emay-white": "#FFFFFF",
        "emay-lime-bright": "#E4FF07",
        "emay-cyan": "#07FFFF",
        "emay-violet": "#7916F3",
        "storm-200": "#DCE2E9",
        "storm-400": "#AEB7CB",
        "storm-700": "#6E7391",
        "dark-green-button": "#384209",
        "dark-green-field": "#5c6b12",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient-left":
          "linear-gradient(to left, transparent, var(--bg-color-mid) 50%, var(--bg-color-edge) 100%)",
        "hero-gradient-top": "linear-gradient(to top, transparent 70%, var(--bg-color-edge) 100%)",
        "hero-gradient-bottom": "linear-gradient(to bottom, transparent 70%, var(--bg-color-edge) 100%)",
        "hero-glow": "radial-gradient(circle, var(--glow-color) 0%, transparent 70%)",
      },
      boxShadow: {
        sharp: "4px 4px 0px #000000",
        "sharp-pink": `4px 4px 0px #FF2670`,
        "sharp-dark": "4px 4px 0px #9ca3af",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
export default config
