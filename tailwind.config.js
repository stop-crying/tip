/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "640px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1900px",
    },
    extend: {
      fontFamily: {
        charis: ["charis", "san-serif"],
        poppins: ["poppins", "san-serif"],
      },
      colors: {
        "Very-dark-cyan": "hsl(183, 100%, 15%)",
        "Dark-grayish-cyan": "hsl(186, 14%, 43%)",
        "Grayish-cyan": "hsl(184, 14%, 56%)",
        "Light-grayish-cyan": "hsl(185, 41%, 84%)",
        "Very-light-grayish-cyan": "hsl(189, 41%, 97%)",
        "Strong-cyan": "hsl(172, 67%, 45%)",
      },
    },
  },
  plugins: [],
};
