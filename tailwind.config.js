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
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      },
      fontSize: {
        "custom-xs":"12px"
      },
      lineHeight: {
        "custom-2xl": "121%",
         "custom-3xl": "171%"
      },
      colors: {
        gray: "#DBDBF3",
        lightGray: "#31374D1A",
        customBlack: "#14191C",
        lightBlack: "#333333",
        'off-white': "#FAFAFF",
        'off-black': "  #9F9DAB",
        blue:"#007BFF"
      }
    },
  },
  plugins: [],
}