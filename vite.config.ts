import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Замените 'repo-name' на имя вашего репозитория на GitHub
const repoName = 'Courcefigma'

export default defineConfig({
  base: `/${repoName}/`, // <--- добавляем эту строку
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
