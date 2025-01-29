import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.js',  // Kütüphanenin giriş dosyası
      name: 'MyLibrary',
      fileName: (format) => `mylibrary.${format}.js`
    },
    rollupOptions: {
      external: ['vue'], // Vue'u dışa bağımlılık olarak alıyoruz
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
