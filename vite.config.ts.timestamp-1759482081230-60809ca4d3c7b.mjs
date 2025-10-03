// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///F:/web/project/element-library/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/web/project/element-library/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///F:/web/project/element-library/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import eslint from "file:///F:/web/project/element-library/node_modules/vite-plugin-eslint/dist/index.mjs";
import VueMacros from "file:///F:/web/project/element-library/node_modules/unplugin-vue-macros/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "F:\\web\\project\\element-library";
var __vite_injected_original_import_meta_url = "file:///F:/web/project/element-library/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    VueMacros.vite({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx()
      }
    }),
    eslint()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    outDir: "dist",
    // 打包输出目录
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      // 组件库入口
      name: "CltLib",
      // 全局变量名（UMD/iife 模式下使用）
      fileName: (format) => `my-lib.${format}.js`,
      // 输出文件名
      formats: ["es", "umd"]
      // 输出格式，可选 ['es','cjs','umd','iife']
    },
    rollupOptions: {
      // 指定外部依赖，不打包 Vue
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFx3ZWJcXFxccHJvamVjdFxcXFxlbGVtZW50LWxpYnJhcnlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXHdlYlxcXFxwcm9qZWN0XFxcXGVsZW1lbnQtbGlicmFyeVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovd2ViL3Byb2plY3QvZWxlbWVudC1saWJyYXJ5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCBlc2xpbnQgZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50J1xuaW1wb3J0IFZ1ZU1hY3JvcyBmcm9tICd1bnBsdWdpbi12dWUtbWFjcm9zJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBWdWVNYWNyb3Mudml0ZSh7XG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgIHZ1ZTogdnVlKCksXG4gICAgICAgIHZ1ZUpzeDogdnVlSnN4KCksXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGVzbGludCgpXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnZGlzdCcsICAgICAgICAgICAgLy8gXHU2MjUzXHU1MzA1XHU4RjkzXHU1MUZBXHU3NkVFXHU1RjU1XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLCAgLy8gXHU3RUM0XHU0RUY2XHU1RTkzXHU1MTY1XHU1M0UzXG4gICAgICBuYW1lOiAnQ2x0TGliJywgICAgICAgICAgIC8vIFx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlx1NTQwRFx1RkYwOFVNRC9paWZlIFx1NkEyMVx1NUYwRlx1NEUwQlx1NEY3Rlx1NzUyOFx1RkYwOVxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBteS1saWIuJHtmb3JtYXR9LmpzYCwgIC8vIFx1OEY5M1x1NTFGQVx1NjU4N1x1NEVGNlx1NTQwRFxuICAgICAgZm9ybWF0czogWydlcycsICd1bWQnXSwgIC8vIFx1OEY5M1x1NTFGQVx1NjgzQ1x1NUYwRlx1RkYwQ1x1NTNFRlx1OTAwOSBbJ2VzJywnY2pzJywndW1kJywnaWlmZSddXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvLyBcdTYzMDdcdTVCOUFcdTU5MTZcdTkwRThcdTRGOURcdThENTZcdUZGMENcdTRFMERcdTYyNTNcdTUzMDUgVnVlXG4gICAgICBleHRlcm5hbDogWyd2dWUnXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiAnVnVlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9SLFNBQVMsZUFBZSxXQUFXO0FBRXZULFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZUFBZTtBQUN0QixPQUFPLFVBQVU7QUFQakIsSUFBTSxtQ0FBbUM7QUFBa0ksSUFBTSwyQ0FBMkM7QUFVNU4sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsVUFBVSxLQUFLO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUCxLQUFLLElBQUk7QUFBQSxRQUNULFFBQVEsT0FBTztBQUFBLE1BQ2pCO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQTtBQUFBLElBQ1IsS0FBSztBQUFBLE1BQ0gsT0FBTyxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBO0FBQUEsTUFDN0MsTUFBTTtBQUFBO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVyxVQUFVLE1BQU07QUFBQTtBQUFBLE1BQ3RDLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQTtBQUFBLElBQ3ZCO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
