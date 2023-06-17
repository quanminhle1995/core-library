import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import dts from 'vite-plugin-dts'
import { splitVendorChunkPlugin } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(
      {
        template: {
          compilerOptions: {
            // treat all tags with a dash as custom elements
            isCustomElement: (tag) => tag.includes('el-')
          }
        }
      }
    ), 
    dts({
      insertTypesEntry: true
    }),
    // splitVendorChunkPlugin()
  ],
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   }
  // },
  build: {
    lib: {
      // entry: resolve(__dirname, './src/core/index.ts'),
      entry: {
        // useUser: resolve(__dirname, './src/core/composables/useUser.ts'),
        // useGames: resolve(__dirname, './src/core/composables/useGames.ts'),
        // composable: resolve(__dirname, './src/core/composables/index.ts'),
        // until: resolve(__dirname, './src/core/util/index.ts'),
        // store: resolve(__dirname, './src/core/store/index.ts'),
        main: resolve(__dirname, './src/core/index.ts'),
        component: resolve(__dirname, './src/build-components/index.ts')
      },
      formats: ["es", "cjs"],
      // name: "core",
      fileName: (format, entryName) => {
        console.log(entryName);
        return (format === 'es' ? `${entryName}.js` : `${entryName}.cjs`)
      }, 
    },
    rollupOptions: {
      // input: {
      //   useUser: resolve(__dirname, './src/core/composables/useUser.ts'),
      //   useGames: resolve(__dirname, './src/core/composables/useGames.ts'),
      //   composable: resolve(__dirname, './src/core/composables/index.ts'),
      //   until: resolve(__dirname, './src/core/util/index.ts'),
      //   store: resolve(__dirname, './src/core/store/index.ts')
      // },
      external: ['axios', 'vue'],
      // output: [
      //   {
      //     entryFileNames: ({ name: fileName }) => {
      //       return `${fileName}.js`
      //     },
      //     dir: resolve(__dirname, './dist'),
          
      //   },
      // ],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    },
    sourcemap: true,
    target: "esnext",
    minify: false,
  }

})
