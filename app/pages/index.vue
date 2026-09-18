<script setup>
definePageMeta({
  title: 'pages.title', // set resource key,
  image: 'https://eduardovalenciano.com/img/foto1.jpg',
})

const { locale, t } = useI18n()

const { data } = await useAsyncData('index-' + locale.value, async () => {
  return queryCollection(locale.value).all()
})


const quote = computed(() => data.value?.find(e => e.id.includes('quote')))
const intro = computed(() => data.value?.find(e => e.id.includes('intro')))
const contact = computed(() => data.value?.find(e => e.id.includes('contact')))
</script>

<template>
  <div>
    <div id="quote"
      class="flex flex-col md:flex-row items-center gap-8 justify-between ds-wrapper pb-12 px-4 pt-12 md:pt-0">
      <div class="text-xl md:text-2xl flex flex-col justify-start md:justify-center max-w-[500px]">
        <span class="text-primary ds-serif text-sm mb-2">{{ t('about') }}</span>
        <ContentRenderer v-if="quote" :value="quote" :key="`quote-${locale}`" />
      </div>
      <div class="self-center md:self-auto">
        <img src="/img/foto1.webp" width="400" alt="Eduardo Valenciano"
          class="w-[90vw] md:w-[50vw] lg:w-400px rounded-sm overflow-hidden max-w-[400px]" />
      </div>
    </div>

    <div class="w-[70vw] text-balanced mx-auto leading-relaxed border-l border-primary border-l-4 pl-4 my-10">

      <ContentRenderer v-if="intro" :value="intro" :key="`intro-${locale}`" class="content" />

    </div>

    <div class="bg-background px-4 py-12" id="contact">
      <div class="ds-wrapper">
        <h2 class="ds-serif text-2xl mb-8">
          {{ t('contact') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="take-p">
            <ContentRenderer v-if="contact" :value="contact" :key="`contact-${locale}`" />
          </div>
          <div class="mx-auto">
            <iframe class="max-w-[90vw] rounded-sm overflow-hidden w-[400px] h-[400px]" name="contact-map"
              src="https://www.google.com/maps?q=Via+Augusta+120,+08006+Barcelona,+Spain&output=embed"
              width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Map showing the office location at Via Augusta 120, Barcelona"></iframe>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<i18n lang="json">{
  "es": {
    "pages.title": "Eduardo Valenciano Mendoza, psicólogo",
    "take": "Abordaje terapéutico",
    "services": "Servicios",
    "about": "ACERCA DE MI",
    "contact": "Contacto",
    "listOfServices": "Lista de servicios",
  },
  "ca": {
    "pages.title": "Eduardo Valenciano Mendoza, psicòleg",
    "take": "Inici",
    "services": "Serveis",
    "about": "SOBRE MI",
    "contact": "Contacte",
    "listOfServices": "Llista de serveis"
  },
  "en": {
    "pages.title": "Eduardo Valenciano Mendoza, psychologist",
    "take": "Start",
    "services": "Services",
    "about": "ABOUT ME",
    "contact": "Contact",
    "listOfServices": "List of services"
  },
  "fr": {
    "pages.title": "Eduardo Valenciano Mendoza, psychologue",
    "take": "Acceuil",
    "services": "Services",
    "about": "À PROPOS DE MOI",
    "contact": "Contact",
    "listOfServices": "Liste des services"
  }
}</i18n>



<style lang="scss">
li {
  line-height: 1.75rem;
  margin-right: 24px;
}
</style>
