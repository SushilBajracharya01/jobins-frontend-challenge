/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "11px",
        xl: "15px",
        "2xl": "22px",
      },
      colors: {
        gray: {
          50: "#F5F5F5",
          100: "#F3F4F8",
          300: "#8B909A",
          600: "#23272E",
        },
      },
      fontFamily: {
        public_sans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
