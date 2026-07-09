import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// eslint-disable-next-line no-undef
const isVercel = process.env.VERCEL === 'true'

export default defineConfig({
  plugins: [react()],
  base: isVercel ? '/' : '/portofolio/',
  
  build: {
    // Optimize chunk sizes
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'framer-motion']
        }
      }
    },
    
    // Better gzip compression & code splitting
    reportCompressedSize: true,
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 4096
  },
  
  // Optimizations untuk dev
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  }
})
