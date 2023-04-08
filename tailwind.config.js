/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        navigation:
          "linear-gradient(180deg, rgba(0, 5, 0, 1) 7.99%, rgba(0, 5, 0, 1) 86.64%)",
      },
      fontFamily: {
        Eremitage: "Eremitage",
      },
    },
  },
  plugins: [],
};
