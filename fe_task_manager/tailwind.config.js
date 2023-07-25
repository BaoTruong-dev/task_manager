/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#249fd4",
          dark: "#071f2a",
          50: "#f4fafc",
          100: "#cae7f4",
          200: "#a0d5ec",
          300: "#77c3e4",
          400: "#4db1dc",
          500: "#249fd4",
          600: "#1c7fa9",
          700: "#155f7f",
          800: "#0e3f54",
          900: "#071f2a",
        },
      },
    },
  },
  plugins: [],
  corePlugins: {},
};
