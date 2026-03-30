import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 站点通过 GitHub Pages 托管，自定义域名为 https://jasonbai.com/（根路径，主域无 www）。
  // Vite 的 base 用于生成资源路径，根路径下需要保持默认 `/`。
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
