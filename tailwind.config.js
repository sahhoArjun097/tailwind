// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens :{
        'xsmall':{'max':'480px'},
        'vsmall':{'max':"720px"},
        'zsmall':{'max':"900px"},
        'small' :{'max':"1100px"},
        'large':{'max':"1500px"}
      }
    },
  },
  plugins: [],
}