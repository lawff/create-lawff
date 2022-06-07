/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import Inspect from 'vite-plugin-inspect'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),

    react(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'react',
        'react-router-dom',
      ],
      dts: true,
    }),

    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:7777/__inspect/ to see the inspector
    Inspect(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
  },
})
