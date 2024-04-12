/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
    extend: {
      colors: {
        "bookmark-white": "#ECE5F0",
        "bookmark-purple": "#9F7AEA",
        "bookmark-blue": "#00C6C3",
        "bookmark-yellow": "#FCA311",
        "bookmark-black": "#040528",
      },
      fontFamily: {
        ssp: ['"Source Serif Pro"', "serif"],
        opensans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  darkMode: "class",
  variants: {
    extend: {
      objectFit: ["responsive"],
      objectPosition: ["responsive"],
    },
  },
};
