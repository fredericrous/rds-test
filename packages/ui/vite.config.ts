import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      name: 'ui',
      entry: './src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
    },
    sourcemap: true,
    target: 'es2020',
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  publicDir: false,
});
