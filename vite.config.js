import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        about: fileURLToPath(new URL('./index.html', import.meta.url)),
        specs: fileURLToPath(new URL('./specs/index.html', import.meta.url)),
        faq: fileURLToPath(new URL('./faq/index.html', import.meta.url)),
        updates: fileURLToPath(new URL('./updates/index.html', import.meta.url)),
      },
    },
  },
});
