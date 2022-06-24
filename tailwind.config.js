module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ea1b25",
"primary-content": "#FFFFFF" ,       
"secondary": "#343a40",
        
"base-100": "#FFFFFF"

        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
