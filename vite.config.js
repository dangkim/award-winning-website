// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip', // or 'brotliCompress'
      ext: '.gz', // file extension
      threshold: 10240, // only compress files larger than this (in bytes)
      deleteOriginFile: false, // keep original files
    })
  ],
  // Configure assets handling
  build: {
    assetsInlineLimit: 4096, // Files smaller than this will be inlined (in bytes)
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunks
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  // You can also configure the server during development
  server: {
    // Configure headers to enable compression in development
    headers: {
      'Cache-Control': 'max-age=31536000', // For better caching
    }
  }
})