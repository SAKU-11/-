import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['mammoth']
  },
  build: {
    rollupOptions: {
      // mammothをバンドルに含めず、index.htmlのimportmap(CDN)から読み込む設定
      external: ['mammoth'],
    },
  },
});