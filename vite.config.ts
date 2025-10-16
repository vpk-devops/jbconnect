/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
   svgr(),
    react(),

    legacy()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})


// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000, // frontend runs on 3000 (keep separate from gateway 8080)
//     proxy: {
//       "/api": {
//         target: "http://localhost:8080", // Gateway
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// });