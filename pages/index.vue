<script setup>
definePageMeta({
  title: 'pages.title.top' // set resource key
})
const { locale } = useI18n()
const { data } = await useAsyncData('quote', () => queryContent(locale.value, 'quote').findOne())

</script>

<template>
  <div>

    <div id="quote" class="flex flex-col md:flex-row items-center gap-4 justify-between">
      <div class="text-2xl flex flex-col justify-center max-w-[500px]">
        <span class="text-primary ds-serif text-sm">ACERCA</span>
        <ContentRenderer :value="data" />
      </div>

      <div>
        <img src="/img/eduardo.jpg"  width="100%" class="w-[100vw] md:w-[50vw] lg:w-400px rounded overflow-hidden max-w-[400px]" />
      </div>

    </div>

  </div>
</template>