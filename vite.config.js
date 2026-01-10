import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // 1. Add this import

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // 2. Map '@' to the 'src' directory
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})