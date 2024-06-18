import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#4E555F",
          200: "#F7F8F8",
          300: "#E6E7E8",
          400: "#CCCED1",
          500: "#4E555F",
          600: "#28303D",
          700: "#020C1B",
        },
        light: {
          DEFAULT: "#F0F0F5",
          200: "#FEFEFF",
          300: "#FDFDFE",
          400: "#FBFBFC",
          500: "#F0F0F5",
          600: "#EDEDF3",
          700: "#EAEAF1",
        },
        informative: {
          DEFAULT: "#00AEEB",
          200: "#E5F6FD",
          300: "#B0EBFF",
          400: "#51D2FF",
          500: "#00AEEB",
          600: "#006285",
          700: "#003C52",
        },
        success: {
          DEFAULT: "#27AE60",
          200: "#E9F6F0",
          300: "#D4FFDE",
          400: "#A9EFB9",
          500: "#27AE60",
          600: "#188130",
          700: "#105620",
        },
        warning: {
          DEFAULT: "#DF7B33",
          200: "#FBF1EB",
          300: "#FFD5B7",
          400: "#F5A164",
          500: "#DF7B33",
          600: "#A6551A",
          700: "#814813",
        },
        error: {
          DEFAULT: "#CF3F24",
          200: "#FAEBEA",
          300: "#F6D2CB",
          400: "#E78674",
          500: "#CF3F24",
          600: "#A5321D",
          700: "#7A2515",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xxxs: ".5rem",
        xxs: ".625rem",
      },
      zIndex: {
        dropdown: "1010",
        sticky: "1020",
        fixed: "1030",
        modalBackdrop: "1040",
        modal: "1050",
        popover: "1060",
        tooltip: "1070",
        footer: "1080",
      },
      borderWidth: {
        DEFAULT: "1px",
        0.2: "0.2px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
  },
  plugins: [],
};
export default config;
