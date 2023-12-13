/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        site: 'url("/site-bg.svg")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FDF2F8",
        secundary: "#5B5B5B",
        tertiary: "#292524",
        ui: "#6083FF",
      },
      gridTemplateColumns: {
        skillsGrid: "repeat(auto-fit, minmax(50px, 100px))",
        projectsGrid: "repeat(auto-fit, minmax(250px, 350px))",
      },
      borderRadius: {
        blobShape: "40% 60% 65% 35% / 40% 35% 65% 60%",
      },
    },
  },
  plugins: [],
}
