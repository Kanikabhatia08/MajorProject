/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    fontFamily: {
      coro: ["Cormorant Garamond", "serif"],

    },
    colors: {
      brown: "#4D1F08",
      cream: "#FFF2EB",
      lightbrown: "#957461",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      grayText: "#818597",
      lightGray: "#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",
    },},
  },
  plugins: [],
};
