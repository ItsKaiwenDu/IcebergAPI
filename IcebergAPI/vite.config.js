import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      // optional: tell Tailwind where to look for classes
      content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    }),
  ],
})
