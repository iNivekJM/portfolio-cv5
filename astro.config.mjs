import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind()
  ],
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es'
  },
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  site: 'https://kevinariza.dev'
});
