// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    meta: [
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png" },
      { rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png" },
      { rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png" },
      { rel:"manifest", href:"/site.webmanifest" },
      { rel:"mask-icon", href:"/safari-pinned-tab.svg", color:"#5bbad5" }
    ],
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/content',
  ],
  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'es',
        iso: 'es-ES'
      },
      {
        code: 'ca',
        iso: 'ca'
      },
      {
        code: 'en',
        iso: 'en-EN'
      },
      {
        code: 'fr',
        iso: 'fr'
      }
    ],
    baseUrl: 'https://eduardovalenciano.com',
    defaultLocale: 'es',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  experimental: {
    payloadExtraction: false
  }
})
