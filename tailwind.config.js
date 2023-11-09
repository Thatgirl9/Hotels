/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Lora", "serif"],
        headingFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        whiteText: "rgba(255, 255, 255, 1)",
        blueText: "rgba(11, 19, 77, 1)",
        blueBG: "rgba(24, 39, 81, 1)",
        yellowBG: "rgba(255, 215, 0, 1)",
        mobileNav: "rgba(38, 84, 124, 1)",
        flippedCard: "rgba(120, 156, 115, 1)",
        greenBorder: "rgba(55, 80, 36, 1)",
        greenBG: "rgba(71, 99, 55, 1)",
        footerGreen: "rgba(21, 42, 0, 1)",
        //         background: linear-gradient(0deg, #375024, #375024),
        // linear-gradient(0deg, #476337, #476337);


      }
    },
  },
  plugins: [],
}

