/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        base:{
          500:"#532200",
          600:"#E1A140",
          700:"#200d00"
        }
      }
    },
  },
  plugins: [],
}

