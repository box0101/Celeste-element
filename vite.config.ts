import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslint from 'vite-plugin-eslint'
import VueMacros from 'unplugin-vue-macros'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros.vite({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(),
      },
    }),
    eslint()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',            // 打包输出目录
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),  // 组件库入口
      name: 'CltLib',           // 全局变量名（UMD/iife 模式下使用）
      fileName: (format) => `my-lib.${format}.js`,  // 输出文件名
      formats: ['es', 'umd'],  // 输出格式，可选 ['es','cjs','umd','iife']
    },
    rollupOptions: {
      // 指定外部依赖，不打包 Vue
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
