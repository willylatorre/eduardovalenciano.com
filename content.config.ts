import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        ca: defineCollection({
            type: 'page',
            source: 'ca/**/*.md'
        }),
        en: defineCollection({
            type: 'page',
            source: 'en/**/*.md'
        }),
        fr: defineCollection({
            type: 'page',
            source: 'fr/**/*.md'
        }),
        es: defineCollection({
            type: 'page',
            source: 'es/**/*.md'
        }),

    }
})
