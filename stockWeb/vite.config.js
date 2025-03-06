import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://openapi.twse.com.tw/v1', // API 的基礎 URL
        changeOrigin: true, // 允許跨域
        rewrite: (path) => path.replace(/^\/api/, ''), // 移除路徑中的 /api
      },
    },
  },
});