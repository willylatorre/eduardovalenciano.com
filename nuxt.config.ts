export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }
      ],
    },
  },
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxtjs/i18n', '@nuxt/content', '@nuxtjs/sitemap', '@nuxtjs/robots', 'nuxt-jsonld'],

  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'ca',
        iso: 'ca'
      },
      {
        code: 'en',
        language: 'en-US'
      },
      {
        code: 'fr',
        iso: 'fr'
      },
      {
        code: 'es',
        language: 'es-ES',
        isCatchallLocale: true
      },
    ],
    baseUrl: 'https://eduardovalenciano.com',
    defaultLocale: 'es',
    customRoutes: 'config', // disable custom route with page components
    pages: {
      index: {
        en: '/',
        fr: '/',
        es: '/',
        ca: '/'
      },
      curriculum: {
        en: '/curriculum',
        fr: '/curriculums',
        es: '/curriculum',
        ca: '/curriculum'
      },
      servicios: {
        en: '/services',
        fr: '/services',
        es: '/servicios',
        ca: '/serveis'
      },
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  experimental: {
    payloadExtraction: false
  },

  site: {
    url: 'https://eduardovalenciano.com',
    name: 'Eduardo Valenciano Mendoza, psicólogo'
  },
  robots: {
    // allow: ['/api/og/*']
  },

  vite: {
    server: {
      cors: true,
      hmr: {
        protocol: 'wss',
        clientPort: process.env.CODESPACES ? 443 : undefined,
        host: "https://expert-barnacle-5vw5gjqwq9h4xvj-3000.app.github.dev"
      }
    }
  },

  compatibilityDate: '2024-09-02'
})