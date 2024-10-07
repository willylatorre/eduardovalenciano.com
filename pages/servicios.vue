<script setup>
definePageMeta({
  title: 'pages.title', // set resource key,
  image: 'https://eduardovalenciano.com/img/foto1.jpg'
})

const { locale, t } = useI18n()


const { data } = await useAsyncData('services-' + locale.value, async () => {
  const [services, take, contact] = await Promise.all([
    queryContent(locale.value, 'services').findOne(),
    queryContent(locale.value, 'take').findOne(),
    queryContent(locale.value, 'contact').findOne()
  ])

  return {
    services,
    take,
    contact
  }
})

</script>

<template>
  <div>

    <div class="bg-white px-4 py-12" id="services">
      <div class="ds-wrapper">
        <h2 class="ds-serif text-2xl mb-8">
          {{ t('services') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="take-p">
            <h4 class="text-primary ds-serif text-sm mb-2 uppercase">{{ t('take') }}</h4>
            <ContentRenderer :value="data.take" :key="`take-${locale}`" />
          </div>
          <div class="mx-auto">
            <img src="/img/foto2.jpg" width="100%" alt="Eduardo Valenciano"
              class="w-[90vw] md:w-[50vw] lg:w-400px rounded overflow-hidden max-w-[400px]" />
          </div>

        </div>
      </div>
    </div>

    <div class="mx-auto my-10 max-w-[600px] w-[90%] px-2">
      <h4 class="text-primary ds-serif text-sm mb-2 uppercase">{{ t('listOfServices') }}</h4>
      <div class="border border-background rounded p-4 text-sm">
        <ContentRenderer :value="data.services" :key="`services-${locale}`" class="content" />
      </div>
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
            <a href="https://maps.app.goo.gl/8qa814oqWYtY11Gk9">
              <iframe class="max-w-[90vw] rounded overflow-hidden  w-[400px] h-[400px]"
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
    "pages.title": "Eduardo Valenciano Mendoza, psicólogo - Servicios",
    "services": "Servicios",
    "take": "Abordaje terapéutico",
    "listOfServices": "Lista de servicios",
    "contact": "Contacto"
  },
  "ca": {
    "pages.title": "Eduardo Valenciano Mendoza, psicòleg - Serveis",
    "services": "Serveis",
    "take": "Abordatge terapèutic",
    "listOfServices": "Llista de serveis",
    "contact": "Contacte"
  },
  "en": {
    "pages.title": "Eduardo Valenciano Mendoza, psicòleg - Services",
    "services": "Services",
    "take": "Therapeutic approach",
    "listOfServices": "List of services",
    "contact": "Contact"
  },
  "fr": {
    "pages.title": "Eduardo Valenciano Mendoza, psychologue - Services",
    "services": "Services",
    "take": "Approche thérapeutique",
    "listOfServices": "Liste des services",
    "contact": "Contact"
  }
}</i18n>



<style lang="scss">
li {
  line-height: 1.75rem;
  margin-right: 24px;
}

.cv-list ul {
  list-style: circle;
  columns: 2;

  @media screen and (max-width: 768px) {
    columns: 1;
    list-style-position: inside;
  }
}

.take-p p {
  padding-bottom: 12px;
}

.take-p a {
  text-decoration: underline;
}
</style>