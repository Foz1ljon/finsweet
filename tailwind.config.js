/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "40px",
    },

    extend: {
      screens: {
        sm: "310px",
      },
      // use font-family
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

      // bg gradients
      backgroundImage: {
        bgGr: "linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%)",
        bgPort1: "linear-gradient(131.34deg, #F4EDE1 16.74%, #98B1C6 103.17%)",
        bgPort2: "linear-gradient(131.34deg, #FFD3AF 16.74%, #4F56FF 103.17%)",
        bgPort3: "linear-gradient(131.34deg, #EEBCA7 16.74%, #C8C8C8 103.17%)",
        bgPort4: "linear-gradient(131.34deg, #C2E7F2 16.74%, #98A4FF 103.17%)",
        bgPort5: "linear-gradient(131.34deg, #C5BCFF 16.74%, #9BF7D5 103.17%)",
        bgPort6: "linear-gradient(131.34deg, #D2D6FD 16.74%, #D6ACEA 103.17%)",
      },

      // use color
      colors: {
        dblue: "#1C1E53",
        darkBlue: "#282938",
        orang: "#FCD980",
        deepBlue: "#282938",
      },
    },
  },
  plugins: [],
};
