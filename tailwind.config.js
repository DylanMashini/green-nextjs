/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.tsx", "src/**/*.js"],
  theme: {
    extend: {},
    screens: {
      desktop: "1079px",
      lg: "976px",
sm: '480px',
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
