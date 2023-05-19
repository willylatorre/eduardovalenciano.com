// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/i18n',
        '@nuxt/content'
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
          }
        ],
        baseUrl: 'https://eduardovalenciano.com',
        defaultLocale: 'es',
      },

})
