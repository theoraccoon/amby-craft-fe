/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // Pages
    './src/components/**/*.{js,ts,jsx,tsx}',  // Components
    './src/layouts/**/*.{js,ts,jsx,tsx}',  // Layouts#
    './src/**/*.{js,ts,jsx,tsx}'
    
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
      },
    },
  },
  plugins: [],
};
