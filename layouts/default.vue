<script setup>
// const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

    <Head>
      <Title>{{ t('title') }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
        <Meta id="title"  property="og:title" :content="t('title')" />
        <Meta id="sitename"  property="og:site_name" :content="t('title')" />
        <Meta id="description"  property="description" :content="t('description')" />
        <Meta id="og:description"  property="og:description" :content="t('description')" />
        <Meta id="og:description"  property="og:type" content="website" />
        <Meta id="og:description"  property="og:description" :content="t('description')" />
        <Meta id="image" property="image" content="https://eduardovalenciano.com/img/eduardo-snap.jpg" />
        <Meta id="og:image" property="og:image" content="https://eduardovalenciano.com/img/eduardo-snap.jpg" />
        <Meta id="og:image:type" property="og:image:type" content="image/jpeg" />
        <Meta id="og:url" property="og:url" content="https://eduardovalenciano.com" />
    </Head>

    <Body>
      <div class="bg-white min-h-[100vh]">
        <nav class="py-8 flex flex-col md:flex-row gap-6 justify-between align-center ds-wrapper px-4">
          <div>
            <div class="ds-serif ds-bold text-3xl">Eduardo Valenciano Mendoza<span class="text-primary text-sm">, PhD</span></div>
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
              <NuxtLink :to="switchLocalePath('ca')">CA</NuxtLink> |
               <NuxtLink :to="switchLocalePath('en')">EN</NuxtLink> |
                <NuxtLink :to="switchLocalePath('fr')">FR</NuxtLink>
            </div>
          </div>
        </nav>
        <slot />
        <footer class="bg-background">
          <div class="ds-wrapper flex items-center justify-center min-h-[100px] text-xs">
            Eduardo Valenciano Mendoza &copy; 2023 |&nbsp; <a href="mailto:evalenciano@copc.cat">{{ t('contact') }}</a>
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
    "title": "Eduardo Valenciano Mendoza, psicólogo",
    "description": "Psicólogo sanitario y doctor en Psicología Clínica por la Universidad de Barcelona con experiencia asistencial e investigadora en la red pública de salud mental y adicciones",
    "home": "Inicio",
    "psicologo": "Psicólogo",
    "curriculum": "Curriculum",
    "services": "Servicios",
    "contact": "Contacto"
  },
  "ca": {
    "title": "Eduardo Valenciano Mendoza, psicòleg",
    "description": "Psicòleg sanitari i doctor en Psicologia Clínica per la Universitat de Barcelona amb experiència assistencial i investigadora a la xarxa pública de salut mental i addiccions",
    "home": "Inici",
    "psicologo": "Psicòleg",
    "curriculum": "Curriculum",
    "services": "Serveis",
    "contact": "Contacte"
  }
}
</i18n>