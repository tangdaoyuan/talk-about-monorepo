import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js"
    }
  }
})
