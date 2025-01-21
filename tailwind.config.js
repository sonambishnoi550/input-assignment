/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          "2xl": "1328px"
        },
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      },
      fontSize: {
        custom2xl: "28px",
        "custom-3xl": "32px",
        "custom-sm": "12px"
      },
      lineHeight: {
       " custom-2xl":"121%"
      },
      colors: {
        gray: "#DBDBF3",
        lightGray: "#31374D1A",
        customBlack: "#14191C",
        lightBlack: "#333333"
      }
    },
  },
  plugins: [],
}