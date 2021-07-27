import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import path from 'path'
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: 'components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'assets', replacement: path.resolve(__dirname, 'src/assets') }
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://30.207.88.109:33202',
        //target: 'http://192.168.11.32:3202', // 李斌
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    port: 3000,
  },
  build: {
    sourcemap: false,
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'element-plus': ['element-plus'],
          echarts: ['echarts'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        }
      ]
    })
  ]
})