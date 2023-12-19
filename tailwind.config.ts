import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "30px",
        lg: "40px",
        xl: "60px",
      },
    },
    extend: {
      colors: {
        white: {
          DEFAULT: "rgb(var(--white))",
        },
        black: {
          DEFAULT: "rgb(var(--black))",
        },
        surface: {
          DEFAULT: "rgb(var(--surface))",
          light: "rgb(var(--surface-light))",
          heavy: "rgb(var(--surface-heavy))",
        },
        text: {
          DEFAULT: "rgb(var(--text))",
          white: "rgb(var(--text-white))",
          light: "rgb(var(--text-light))",
          heavy: "rgb(var(--text-heavy))",
        },
        accent: {
          DEFAULT: "rgb(var(--accent))",
          light: "rgb(var(--accent-light))",
          heavy: "rgb(var(--accent-heavy))",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
