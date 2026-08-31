/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#ffffff',
          subtle: '#fafafa', // zinc-50
          muted: '#f4f4f5',  // zinc-100
        },
        brand: {
          dark: '#09090b',    // zinc-950
          primary: '#18181b', // zinc-900
          secondary: '#71717a', // zinc-500
          accent: '#0f172a',  // slate-900 (tecnológico y elegante)
        },
      },
    },
  },
  plugins: [],
}
