// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/content',
  ],
  image: {
    provider: process.env.VERCEL_ENV ? 'vercel' : 'ipx',
    staticFilename: '[publicPath]/[name]-[hash][ext]'
  },
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

})
