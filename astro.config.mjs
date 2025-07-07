// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Ang3l1llo.github.io',
  base: 'Ang3l1llo.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});