/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust this if needed
  ],
  theme: {
    extend: {
      colors: {   //do it inside the extend if you want to extend the color set else do it outside the extend it you want only these colors should be used
        primary: {
          300: "#9AE6B4",
          500: "#38A169",
          700: "#22543D",
        },
        secondary: "#FF5733",
        
      },
    },
  },
  plugins: [],
};
