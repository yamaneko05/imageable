import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/variants.ts",
    "./src/heplers/getNavItems.tsx",
    "./src/components/**/*.tsx",
    "./src/app/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "slide-in-bottom": "slide-in-bottom 150ms cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "slide-in-bottom": {
          from: {
            transform: "translateY(100%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
