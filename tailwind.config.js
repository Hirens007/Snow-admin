module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        black: {
          DEFAULT: "#1c1c1c",
        },
        lightwhite: {
          DEFAULT: "#F7F9FB",
        },
        lightblue: {
          DEFAULT: "#E3F5FF",
        },
        lightpurple: {
          DEFAULT: "#E5ECF6",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
    }),
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
  ],
};
