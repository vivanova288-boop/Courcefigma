import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// имя репозитория на GitHub — СТРОКОЙ
const repoName = 'Courcefigma'

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
