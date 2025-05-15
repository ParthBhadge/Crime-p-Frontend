import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://crime-p-backend-2.onrender.com/', // Proxy API requests to the backend
    },
  },
});
