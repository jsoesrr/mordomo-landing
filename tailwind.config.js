/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#232946",
        dark: "#16161a",
        gray: "#242629",
        grayish: "#72757e",
        light: "#fffffe",
        heading: "#fffffe",
        paragraph: "#b8c1ec",
        header: "#121629",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

// This Tailwind CSS configuration file sets up custom colors and fonts for the Mordomo landing page.

