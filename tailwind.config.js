/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lenno: {
          trust: "#1E3A8A",       // Azul escuro — confiança
          innovation: "#7C3AED",  // Roxo — inovação
          creativity: "#F97316",  // Laranja — criatividade
          balance: "#6B7280",     // Cinza — equilíbrio
        },
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