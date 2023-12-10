/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "inclusionBG": "#F3F3F3",
        "dark-800": "#161616",
        "dark-600": "#212121",
      },
      fontSize: {
        "1xl": "1.35rem",
        "24xl": "24rem",
        "32xl": "32rem",
        "36xl": "36rem",
        "46xl": "46rem",
        "25px": "2.5rem",
        "4.2xl": "2.2rem",
        "4.5xl": "2.8rem",
        "6.5xl": "4rem",
        "1.6xl": "1.6rem",
        "1.9xl": "1.9rem",
      },
      lineHeight: {
        0.8: "0.8",
        1.1: "1.1",
      },
      spacing: {
        "5.5/12": "47%",
        "2.7/12": "23%",
        "30%": "30%",
        "31%": "31%",
        "40%": "40%",
        "50%": "50%",
        "55%": "55%",
        "60%": "60%",
        "70%": "70%",
      },
      borderRadius: {
        "50%": "50%",
        "2rem": "2rem",
        "3rem": "3rem",
      },
      minHeight: {
        "hp-exp": "102rem",
      },
      maxWidth: {
        "8xl": "83rem",
        "9xl": "88rem",
        "10xl": "90rem",
        "16xl": "116rem",
      },
      screens: {
        "1xl": "1440px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};