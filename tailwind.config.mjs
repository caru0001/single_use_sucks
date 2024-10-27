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
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
