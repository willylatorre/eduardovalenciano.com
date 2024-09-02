<script setup>
definePageMeta({
  title: 'pages.title', // set resource key,
  image: 'https://eduardovalenciano.com/img/eduardo.jpg'
})
const { locale, t } = useI18n()
const { data } = await useAsyncData('cv-' + locale.value, async () => {
  const [cv, contact] = await Promise.all([
    queryContent(locale.value, 'cv').findOne(),
    queryContent(locale.value, 'contact').findOne()
  ])

  return {
    cv,
    contact
  }
})

</script>

<template>
  <div>
    <div class="px-4 py-12" id="curriculum">
      <div class="ds-wrapper">
        <h2 class="ds-serif text-2xl mb-8">
          Curriculum
        </h2>

        <div class="flex flex-wrap gap-4 cv-list">
          <ContentRenderer :value="data.cv" :key="`cv-${locale}`" />
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