<script setup>
definePageMeta({
  title: 'pages.title.top' // set resource key
})
const { locale, t } = useI18n()
const { data, refresh } = await useAsyncData('quote', async () => {
  const [quote, cv, services, take, contact] = await Promise.all([
    queryContent(locale.value, 'quote').findOne(),
    queryContent(locale.value, 'cv').findOne(),
    queryContent(locale.value, 'services').findOne(),
    queryContent(locale.value, 'take').findOne(),
    queryContent(locale.value, 'contact').findOne()
  ])

  return {
    quote,
    cv,
    services,
    take,
    contact
  }
})

watch(locale, () => {
  refresh()
})

</script>

<template>
  <div>
    <div id="quote" class="flex flex-col md:flex-row items-center gap-8 justify-between ds-wrapper pb-12 px-4">
      <div class="text-xl md:text-2xl flex flex-col justify-center max-w-[500px]">
        <span class="text-primary ds-serif text-sm mb-2">ACERCA DE MI</span>
        <ContentRenderer :value="data.quote" />
      </div>
      <div>
        <img src="/img/eduardo.jpg" width="100%"
          class="w-[90vw] md:w-[50vw] lg:w-400px rounded overflow-hidden max-w-[400px]" />
      </div>
    </div>

    <div class="bg-background px-4 py-12" id="curriculum">
      <div class="ds-wrapper">
        <h2 class="ds-serif text-2xl mb-8">
          Curriculum
        </h2>

        <div class="flex flex-wrap gap-4 cv-list">
          <ContentRenderer :value="data.cv" />
        </div>
      </div>
    </div>

    <div class="bg-white px-4 py-12" id="services">
      <div class="ds-wrapper">
        <h2 class="ds-serif text-2xl mb-8">
          {{ t('services') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="take-p">
            <h4 class="text-primary ds-serif text-sm mb-2 uppercase">{{ t('take') }}</h4>
            <ContentRenderer :value="data.take" />
          </div>
          <div class="mx-auto">
            <h4 class="text-primary ds-serif text-sm mb-2 uppercase">{{ t('listOfServices') }}</h4>
            <div class="border border-background rounded p-4 text-sm max-w-[400px]">
              <ContentRenderer :value="data.services" />
            </div>
          </div>
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
            <ContentRenderer :value="data.contact" />
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

<i18n lang="json">
{
  "es": {
    "take": "Abordaje terapéutico",
    "services": "Servicios",
    "contact": "Contacto",
    "listOfServices": "Lista de servicios"
  },
  "ca": {
    "take": "Inici",
    "services": "Serveis",
    "contact": "Contacte",
    "listOfServices": "Llista de serveis"
  }
}
</i18n>



<style lang="css">
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