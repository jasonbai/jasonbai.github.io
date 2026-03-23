import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 用户站部署在 `https://jasonbai.github.io/`（根路径）。
  // Vite 的 base 用于生成资源路径，根路径下需要保持默认 `/`。
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
