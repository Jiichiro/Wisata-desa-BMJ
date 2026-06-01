import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// Sitemap otomatis generate semua URL halaman — penting untuk SEO crawling
export default defineConfig({
  site: 'https://wisatadesabmj.web.id',
  integrations: [sitemap()],

  // Astro build semua halaman jadi static HTML by default
  // Tidak perlu adapter kecuali butuh SSR (server-side rendering)
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },
});