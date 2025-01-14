import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["var(--font-rubik)", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#F0FEEB",
          200: "#F9FFF6",
          300: "#8BAC3E",
        },
        secondary: {
          aqua: {
            100: "#40A2B1",
            200: "#E6F3F5",
          },
          blue: {
            100: "#405EB6",
            200: "#EAEEFA",
          },
          magenta: {
            100: "#B23F74",
            200: "#F9EEF3",
          },
          green: {
            100: "#A4B441",
            200: "##F3F7D9",
          },
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
