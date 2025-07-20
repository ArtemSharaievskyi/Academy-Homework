import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwind(),
  ],
  server: {
    proxy: {
      '/create-checkout-session': 'http://localhost:3000',
    },
  },
})