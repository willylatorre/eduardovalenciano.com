<script setup>
definePageMeta({
  title: 'pages.title.top' // set resource key
})
const { locale, t} = useI18n()
const { data, refresh } = await useAsyncData('quote', async () => {
  const [quote, cv, services, take] = await Promise.all([
    queryContent(locale.value, 'quote').findOne(),
    queryContent(locale.value, 'cv').findOne(),
    queryContent(locale.value, 'services').findOne(),
    queryContent(locale.value, 'take').findOne()
  ])

  return {
    quote,
    cv,
    services,
    take
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

  </div>
</template>

<i18n lang="json">
  {
    "es": {
      "take": "Abordaje terapéutico",
      "services": "Servicios",
      "listOfServices": "Lista de servicios"
    },
    "ca": {
      "take": "Inici",
      "services": "Serveis",
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
</style>