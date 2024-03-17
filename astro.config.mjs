import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import react from "@astrojs/react";
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      svgr({
        include: '**/*.svg?react',
        svgrOptions: {
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        },
      }),
    ],
  },
  integrations: [ 
    astroI18next(),
    react({
      experimentalReactChildren: true,
    })
  ]
});