/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyBg: "#EFF4FF",
      },
      secondary: {
        100 : "#3B3B3B9C"
      },
    },
  },
  plugins: [],
};
