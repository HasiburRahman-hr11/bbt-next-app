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
      boxShadow: {
        "detail-space": "rgba(17, 17, 26, 0.1) 0px 0px 16px",
      },
      colors: {
        inclusionBG: "#F3F3F3",
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
        "3.5xl": "2rem",
        "4.5xl": "2.8rem",
        "5.5xl": "3.5rem",
        "6.5xl": "4rem",
        "1.6xl": "1.6rem",
        "1.9xl": "1.9rem",
        "5.5rem": "5.5rem",
        "3.5rem": "3.5rem",
        "11xl": "11rem",
      },
      lineHeight: {
        0.8: "0.8",
        1.1: "1.1",
        1.2: "1.2",
        1.3: "1.3",
        1.4: "1.4",
        1.4: "1.4",
        1.6: "1.6",
        1.7: "1.7",
      },
      spacing: {
        "5.5/12": "47%",
        "2.7/12": "23%",
        "1/8": "12.5%",
        "28%": "28%",
        "30%": "30%",
        "31%": "31%",
        "40%": "40%",
        "45%": "45%",
        "49%": "49%",
        "50%": "50%",
        "51%": "51%",
        "55%": "55%",
        "60%": "60%",
        "70%": "70%",
        "72%": "72%",
      },
      borderRadius: {
        "50%": "50%",
        "2rem": "2rem",
        "3rem": "3rem",
      },
      minHeight: {
        "hp-exp": "102rem",
        15: "15rem",
        16: "16rem",
        18: "18rem",
        20: "20rem",
        24: "24rem",
        30: "30rem",
        33: "33rem",
      },
      maxWidth: {
        "8xl": "83rem",
        "9xl": "88rem",
        "10xl": "90rem",
        "16xl": "116rem",
        "7r": "7rem",
        "8r": "8rem",
      },
      screens: {
        "1xl": "1440px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
