<script setup>
definePageMeta({
  title: 'pages.title', // set resource key,
  image: 'https://eduardovalenciano.com/img/eduardo.jpg'
})
const { locale, t } = useI18n()
console.log(locale.value)
const { data } = await useAsyncData('index-' + locale.value, async () => {
  const [quote, intro, contact] = await Promise.all([
    queryContent(locale.value, 'quote').findOne(),
    queryContent(locale.value, 'intro').findOne(),
    queryContent(locale.value, 'contact').findOne()
  ])

  return {
    quote,
    intro,
    contact
  }
})
</script>

<template>
  <div>
    <div id="quote" class="flex flex-col md:flex-row items-center gap-8 justify-between ds-wrapper pb-12 px-4">
      <div class="text-xl md:text-2xl flex flex-col justify-center max-w-[500px]">
        <span class="text-primary ds-serif text-sm mb-2">{{ t('about') }}</span>
        <ContentRenderer :value="data.quote" :key="`quote-${locale}`" />
      </div>
      <div>
        <img src="/img/foto1.jpg" width="100%" alt="Eduardo Valenciano"
          class="w-[90vw] md:w-[50vw] lg:w-400px rounded overflow-hidden max-w-[400px]" />
      </div>
    </div>

    <div class="w-[70vw] text-balanced mx-auto leading-relaxed border-l border-primary border-l-4 pl-4 my-10">

      <ContentRenderer :value="data.intro" :key="`intro-${locale}`" class="content" />

    </div>

    <div class="bg-background px-4 py-12" id="contact">
      <div class="ds-wrapper">
        <h2 class="ds-serif text-2xl mb-8">
          {{ t('contact') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="take-p">
            <ContentRenderer :value="data.contact" :key="`contact-${locale}`" />
          </div>
          <div class="mx-auto">
            <a href="https://goo.gl/maps/CtiKGgPqpmpbyj2J9">
              <img width="400" height="400" class="max-w-[90vw] rounded overflow-hidden"
                src="https://maps.googleapis.com/maps/api/staticmap?center=Consell%20de%20Cent,%20355,%20Barcelona&zoom=15&size=400x400&markers=color:blue%7C41.3918997,2.1665775&key=AIzaSyCoEmBGQloGVYe_Y3tBBM9Favi42xLWMBE" />
            </a>
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
    "pages.title": "Eduardo Valenciano Mendoza, psicòleg",
    "take": "Inici",
    "services": "Serveis",
    "about": "ABOUT ME",
    "contact": "Contacte",
    "listOfServices": "Llista de serveis"
  },
  "fr": {
    "pages.title": "Eduardo Valenciano Mendoza, psicòleg",
    "take": "Inici",
    "services": "Serveis",
    "about": "SOBRE MI",
    "contact": "Contacte",
    "listOfServices": "Llista de serveis",
  }
}</i18n>



<style lang="scss">
li {
  line-height: 1.75rem;
  margin-right: 24px;
}
</style>