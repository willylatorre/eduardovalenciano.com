<script setup>
definePageMeta({
  title: 'pages.title.top' // set resource key
})
const { locale } = useI18n()
const { data, refresh } = await useAsyncData('quote', async () => {
  const [quote, cv] = await Promise.all([
    queryContent(locale.value, 'quote').findOne(),
    queryContent(locale.value, 'cv').findOne()
  ])

  return {
    quote,
    cv
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
        <h2 class="ds-serif text-2xl mb-4">
          Curriculum
        </h2>

        <div class="flex flex-wrap gap-4">
          <ContentRenderer :value="data.cv" />
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="css">
li {
  line-height: 1.75rem;
  margin-right: 24px;
}

ul {
  list-style: circle;
  columns: 2;
  @media screen and (max-width: 768px) {
    columns: 1;
    list-style-position: inside;
  }
}
</style>