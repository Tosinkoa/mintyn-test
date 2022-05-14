const plugin = require("tailwindcss/plugin");

module.exports = {
  darkmode: "class",
  content: ["./pages/**/*.{js,ts,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      "my-font": ["Nunito", "sans-serif"],
      "logo-font": ["Ultra", "serif"],
    },
    extend: {
      screens: {
        sm: "1px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".remove-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        "remove-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      });
    }),
  ],
};
