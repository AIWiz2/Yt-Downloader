import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    host: '0.0.0.0',
    hmr: true, // hot module reload
    allowedHosts: ['.replit.dev'], // ✅ allow replit preview URL
  }
});