// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// To add sitemap support, run: npx astro add sitemap
// https://astro.build/config
export default defineConfig({
  site: 'https://srwa.in',
  vite: {
    plugins: [tailwindcss()]
  }
});