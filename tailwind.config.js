/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "11px",
        xl: "15px",
        "2xl": "22px",
        "2.5xl": "24px",
        "3xl": "32px",
      },
      colors: {
        gray: {
          50: "#F5F5F5",
          100: "#F3F4F8",
          150: "#E9E7FD",
          200: "#DBDADE",
          300: "#8B909A",
          500: "#4B465C",
          600: "#23272E",
        },
        red: {
          500: "#EA5455",
        },
        green: {
          400: "#1EB564",
        },
        blue: {
          500: "#0F60FF",
        },
        yellow: {
          500: "#FFC600",
        },
      },
      fontFamily: {
        public_sans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
