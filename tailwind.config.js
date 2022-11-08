module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'easy': '1fr 1fr 1fr 1fr 1fr',
        'normal': '1fr 1fr 1fr 1fr 1fr 1fr',
        'hard': '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      },
      spacing: {
        'mycenter': '-50%, -50%'
      },
      fontFamily: {
        'header': ['Patua One', 'sans-serif']
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
