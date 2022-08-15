
import { defineConfig } from 'tsup'
import vue from 'esbuild-plugin-vue'

export default defineConfig({
  entry: ['src/index.vue'],
  sourcemap: true,
  clean: true,
  format: ['esm'],
  esbuildPlugins: [vue()],
})
