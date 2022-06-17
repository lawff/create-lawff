// vite.config.js
import path from 'path'
import { defineConfig } from 'vite'
import typescript2 from 'rollup-plugin-typescript2'

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MyLib',
      // the proper extensions will be added
      fileName: 'my-lib',
      formats: ['es', 'cjs', 'umd', 'iife'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖

    },
  },
  plugins: [
    {
      ...typescript2(),
      apply: 'build',
    },
  ],
})
