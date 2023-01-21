/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      xxs: "370px",
      // => @media (min-width: 370px) { ... }

      xs: "480px",
      // => @media (min-width: 480px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "800px",
      // => @media (min-width: 800px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "0.8rem",
        // xxs: '1rem',
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        xxl: "8rem",
      },
    },

    extend: {},
  },
  plugins: [],
};
