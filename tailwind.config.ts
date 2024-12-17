import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          100: "#101828",
          200: "#344054",
          300: "#667085",
        },
        grey: {
          100: "#D0D5DD",
          200: "#F2F4F7",
          300: "#F9FAFB",
          400: "#EAECF0",
          500: "#70798C",
        },
        purple: {
          100: "#D6BBFB",
          200: "#6941C6",
          300: "#7F56D9",
          400: "#F9F5FF",
          500: "#53389E",
          600: "#9E77ED",
        },
        green: {
          100: "#ECFDF3",
          200: "#027A48",
        },
        orange: {
          100: "#F2994A",
        },
      },
    },
    fontFamily: {
      body: ["Manrope", "sans-serif"],
    },
    boxShadow: {
      100: "0px 1px 2px 0px #1018280D",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: any) {
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      });
    }),
  ],
} satisfies Config;
