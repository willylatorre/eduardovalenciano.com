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
      <div class="bg-white min-h-[100vh]">
        <nav class="py-8 flex flex-col md:flex-row gap-6 justify-between align-center ds-wrapper px-4">
          <div>
            <div class="ds-serif ds-bold text-3xl">Eduardo Valenciano<span class="text-primary text-sm">, PhD</span></div>
            <div class="text-primary text-sm">{{ t('psicologo') }}</div>
          </div>
          <div>
            <div class="flex justify-end text-sm">
              <a href="/" class="mr-2">{{ t('home') }}</a>
              <a href="#curriculum" class="mr-2">{{ t('curriculum') }}</a>
              <a href="#services" class="mr-2">{{ t('services') }}</a>
              <a href="#contact">{{ t('contact') }}</a>
            </div>
            <div class="text-xs text-right">
              <NuxtLink :to="switchLocalePath('es')">ES</NuxtLink> |
              <NuxtLink :to="switchLocalePath('ca')">CA</NuxtLink>
            </div>
          </div>
        </nav>
        <slot />
        <footer class="bg-background">
          <div class="ds-wrapper flex items-center justify-center min-h-[100px] text-xs">
            Eduardo Valenciano &copy; 2023 |&nbsp; <a href="mailto:evalenciano@copc.cat">{{ t('contact') }}</a>
          </div>
        </footer>
      </div>

    </Body>

    </Html>
  </div>
</template>

<i18n lang="json">
{
  "es": {
    "home": "Inicio",
    "psicologo": "Psicólogo",
    "curriculum": "Curriculum",
    "services": "Servicios",
    "contact": "Contacto",
  },
  "ca": {
    "home": "Inici",
    "psicologo": "Psicòleg",
    "curriculum": "Curriculum",
    "services": "Serveis",
    "contact": "Contacte"
  }
}
</i18n>