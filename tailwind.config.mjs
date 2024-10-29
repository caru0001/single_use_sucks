/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "custom-ocean": "#004153",
        "custom-orange": "#F19A48",
        "custom-sand": "#F3EADC",
        "custom-lightblue": "#BFDEE3",
        "custom-offwhite": "#EEEEEE",
        "custom-green": "#268541",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        xxs: "16rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
