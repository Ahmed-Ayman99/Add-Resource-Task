/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red1: "#ff4b55",
        blue1: "#0771de",
        gray1: "#1c1c28",
        gray2: "#f4eeee",
        gray3: "#92a1ad",
        gray4: "#e7eaed",
        gray5: "#fff6f6",
      },
    },
  },
  plugins: [],
};
