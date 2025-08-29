<script setup>
definePageMeta({
  title: 'pages.title', // set resource key,
  image: 'https://eduardovalenciano.com/img/foto1.jpg'
})
const { locale, t } = useI18n()

const { data } = await useAsyncData('cv-' + locale.value, async () => {
  return queryCollection(locale.value).all()
})


const cv = computed(() => data.value.find(e => e.id.includes('cv')))
const contact = computed(() => data.value.find(e => e.id.includes('contact')))

</script>

<template>
  <div>
    <div class="px-4 py-12" id="curriculum">
      <div class="ds-wrapper">
        <h2 class="ds-serif text-2xl mb-8">
          Curriculum
        </h2>

        <div class="flex flex-wrap gap-4 cv-list">
          <ContentRenderer :value="cv" :key="`cv-${locale}`" />
        </div>
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
            <a href="https://maps.app.goo.gl/8qa814oqWYtY11Gk9" aria-label="Check the office location map link">
              <img width="400" height="400" class="max-w-[90vw] rounded-sm overflow-hidden"
                alt="Mapa de la ubicación de Eduardo Valenciano Mendoza, psicólogo"
                src="https://maps.googleapis.com/maps/api/staticmap?center=Ronda%20del%20General%20Mitre,%20164,%20Barcelona&zoom=15&size=400x400&markers=color:blue%7C41.3918997,2.1665775&key=AIzaSyCoEmBGQloGVYe_Y3tBBM9Favi42xLWMBE" />

              <!-- <iframe class="max-w-[90vw] rounded-sm overflow-hidden  w-[400px] h-[400px]" name="contact-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.6109523215296!2d2.1381640761317815!3d41.404254594948654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4980b9b4c59ff%3A0x51a43747ac90300!2sRonda%20del%20General%20Mitre%2C%20164%2C%20Sarri%C3%A0-Sant%20Gervasi%2C%2008006%20Barcelona%2C%20Spain!5e0!3m2!1sen!2snl!4v1725874743808!5m2!1sen!2snl"
                width="4000" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe> -->
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<i18n lang="json">{
  "es": {
    "pages.title": "Eduardo Valenciano Mendoza, psicólogo - Curriculum",
    "contact": "Contacto"
  },
  "ca": {
    "pages.title": "Eduardo Valenciano Mendoza, psicòleg - Curriculum",
    "contact": "Contacte"
  },
  "en": {
    "pages.title": "Eduardo Valenciano Mendoza, psicòleg - Curriculum",
    "contact": "Contacte"
  },
  "fr": {
    "pages.title": "Eduardo Valenciano Mendoza, psicòleg - Curriculum",
    "contact": "Contacte"
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
  padding: 0 16px;

  @media screen and (max-width: 768px) {
    columns: 1;
    list-style-position: inside;
  }
}

.cv-list p {
  padding-bottom: 12px;
}

.cv-list {
  h2 {
    margin-top: 48px;
    margin-bottom: 12px;
    /* text-decoration: underline; */
    width: 100%;
    border-bottom: 1px solid grey;
    padding-bottom: 6px;

    &:first-child {
      margin-top: 0;
    }
  }
}

.take-p p {
  padding-bottom: 12px;
}

.take-p a {
  text-decoration: underline;
}
</style>