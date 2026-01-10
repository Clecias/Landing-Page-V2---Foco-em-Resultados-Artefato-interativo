import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: process.env.VERCEL
    ? '/'
    : '/Landing-Page-V2---Foco-em-Resultados-Artefato-interativo/',
});
