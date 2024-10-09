<script setup>
definePageMeta({
  title: 'pages.title', // set resource key,
  image: 'https://eduardovalenciano.com/img/foto1.jpg',
})

const { locale, t } = useI18n()

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
    <div id="quote"
      class="flex flex-col md:flex-row items-center gap-8 justify-between ds-wrapper pb-12 px-4 pt-12 md:pt-0">
      <div class="text-xl md:text-2xl flex flex-col justify-start md:justify-center max-w-[500px]">
        <span class="text-primary ds-serif text-sm mb-2">{{ t('about') }}</span>
        <ContentRenderer :value="data?.quote" :key="`quote-${locale}`" />
      </div>
      <div class="self-center md:self-auto">
        <img src="/img/foto1.jpg" width="100%" alt="Eduardo Valenciano"
          class="w-[90vw] md:w-[50vw] lg:w-400px rounded overflow-hidden max-w-[400px]" />
      </div>
    </div>

    <div class="w-[70vw] text-balanced mx-auto leading-relaxed border-l border-primary border-l-4 pl-4 my-10">

      <ContentRenderer :value="data?.intro" :key="`intro-${locale}`" class="content" />

    </div>

    <div class="bg-background px-4 py-12" id="contact">
      <div class="ds-wrapper">
        <h2 class="ds-serif text-2xl mb-8">
          {{ t('contact') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="take-p">
            <ContentRenderer :value="data?.contact" :key="`contact-${locale}`" />
          </div>
          <div class="mx-auto">
            <a href="https://maps.app.goo.gl/8qa814oqWYtY11Gk9">
              <iframe class="max-w-[90vw] rounded overflow-hidden w-[400px] h-[400px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.6109523215296!2d2.1381640761317815!3d41.404254594948654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4980b9b4c59ff%3A0x51a43747ac90300!2sRonda%20del%20General%20Mitre%2C%20164%2C%20Sarri%C3%A0-Sant%20Gervasi%2C%2008006%20Barcelona%2C%20Spain!5e0!3m2!1sen!2snl!4v1725874743808!5m2!1sen!2snl"
                width="4000" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
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
    "pages.title": "Eduardo Valenciano Mendoza, psychologist",
    "take": "Start",
    "services": "Services",
    "about": "ABOUT ME",
    "contact": "Contact",
    "listOfServices": "List of services"
  },
  "fr": {
    "pages.title": "Eduardo Valenciano Mendoza, psychologue",
    "take": "Début",
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