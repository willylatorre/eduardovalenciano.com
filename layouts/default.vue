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
        <nav>
          <a href="/">{{ t('home')}}</a>
         
        </nav>
        <slot />
      </Body>
       <footer>
      Footer
      <NuxtLink :to="switchLocalePath('es')">ES</NuxtLink>
      <NuxtLink :to="switchLocalePath('ca')">CA</NuxtLink>
    </footer>
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