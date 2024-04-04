/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#e8eef1",
        lightblue: "#43b0f1",
        darkblue: "#057dcd",
        dark: "#1e3d58",
      },
    },
  },
  plugins: [],
};
