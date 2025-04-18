import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // 將 `@` 指向 `src` 資料夾
    },
  },
})

// vite.config.js
// export default {
//   base: '/react-web/', // 👈 改這裡
// };

