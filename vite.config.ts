import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 当前 Pages 部署地址是 `https://jasonbai.github.io/jasonbai/`（子路径）。
  // Vite 默认 base 为 `/`，会导致资源路径变成 `/assets/...` 而 404，从而页面空白。
  base: '/jasonbai/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
