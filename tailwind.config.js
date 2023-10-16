/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'FFFEF9': '#FFFEF9',
        'FAE392': '#FAE392',
        'D8B4F8': '#D8B4F8',
        'CA8DFF': '#CA8DFF',
      },
      textColor: {
        'CA8DFF': '#CA8DFF', // Define your custom text color here
      },
      borderColor: {
        'CA8DFF': '#CA8DFF', // Define your custom border color here
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],


  
}




