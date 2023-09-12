import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@todolist': resolve(resolve(), './src'),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  server: {
    open: true,
  },
});
