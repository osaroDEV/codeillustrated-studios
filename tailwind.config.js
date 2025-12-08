/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E5A6D",
        accent: "#C42125",
        light: "#EEE5E9",
        warm: "#EFC88B",
        muted: "#939F5C",
      },
    },
  },
  plugins: [],
};
