/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'handlee':['Handlee', 'cursive'],
        'playball':['Playball', 'cursive'],
        'dancing':['Dancing Script', 'cursive']
      },
    },
  },
  plugins: [],
}
