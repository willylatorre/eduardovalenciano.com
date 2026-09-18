<script setup>
definePageMeta({
  title: 'pages.title', // set resource key,
  image: 'https://eduardovalenciano.com/img/foto1.jpg'
})

const { locale, t } = useI18n()

const { data } = await useAsyncData('index-' + locale.value, async () => {
  return queryCollection(locale.value).all()
})


const services = computed(() => data.value.find(e => e.id.includes('services')))
const take = computed(() => data.value.find(e => e.id.includes('take')))
const contact = computed(() => data.value.find(e => e.id.includes('contact')))


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
            <ContentRenderer :value="take" :key="`take-${locale}`" />
          </div>
          <div class="mx-auto">
            <img src="/img/foto2.jpg" width="100%" alt="Eduardo Valenciano"
              class="w-[90vw] md:w-[50vw] lg:w-400px rounded-sm overflow-hidden max-w-[400px]" />
          </div>

        </div>
      </div>
    </div>

    <div class="mx-auto my-10 max-w-[600px] w-[90%] px-2">
      <h4 class="text-primary ds-serif text-sm mb-2 uppercase">{{ t('listOfServices') }}</h4>
      <div class="border border-background rounded-sm p-4 text-sm">
        <ContentRenderer :value="services" :key="`services-${locale}`" class="content" />
      </div>
    </div>

    <div class="bg-background px-4 py-12" id="contact">
      <div class="ds-wrapper">
        <h2 class="ds-serif text-2xl mb-8">
          {{ t('contact') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="take-p">
            <ContentRenderer :value="contact" :key="`contact-${locale}`" />
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
