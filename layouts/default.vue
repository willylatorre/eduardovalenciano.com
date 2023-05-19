<script setup>
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const switchLocalePath = useSwitchLocalePath()
const title = computed(() => t('layouts.title', { title: t(route.meta.title ?? 'TBD') }))
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

    <Head>
      <Title>{{ title }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>

    <Body>
      <div class="bg-white min-h-[100vh] p-4">
        <div class="ds-wrapper">
          <nav class="py-8 flex justify-between">
            <div class="ds-serif ds-bold text-3xl">Eduardo <span class="text-primary">Valenciano</span></div>
            <div class="flex">
            <a href="/">{{ t('home') }}</a>
            <NuxtLink :to="switchLocalePath('es')">ES</NuxtLink> / 
            <NuxtLink :to="switchLocalePath('ca')">CA</NuxtLink>
          </div>
          </nav>
          <slot />
          <footer>
            Footer
          </footer>
        </div>
      </div>

    </Body>

    </Html>
  </div>
</template>

<i18n lang="json">
{
  "es": {
    "home": "Inicio"
  },
  "ca": {
    "home": "Inici"
  }
}
</i18n>