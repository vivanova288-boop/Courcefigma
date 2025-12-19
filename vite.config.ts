import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Courcefigma/',
  plugins: [react()],
  build: {
    outDir: 'docs'
  }
})
