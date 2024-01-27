import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',

        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
            return 'assets/[name]-[hash][extname]';
          }

          if (/\.css$/.test(name ?? '')) {
            return 'css/[name]-[hash][extname]';
          }

          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return '[name]-[hash][extname]';
        },
      },
    }
  },
  server: {
    proxy: {
      "/getArtists": {
        target: "http://localhost:3001",
        secure: false,
      },
      "/getTracks": {
        target: "http://localhost:3001",
        secure: false,
      },
      "/getSearchedTracks": {
        target: "http://localhost:3001",
        secure: false,
      },
      "/getTracksByIds": {
        target: "http://localhost:3001",
        secure: false,
      }
    }
  },
  plugins: [react()],
  base: "./"
})
