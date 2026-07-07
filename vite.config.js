import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Vercel serves from the domain root; GitHub Pages serves from /portofolio/.
  base: process.env.VERCEL ? '/' : '/portofolio/',
})
