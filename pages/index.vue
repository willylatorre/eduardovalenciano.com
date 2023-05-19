<script setup>
definePageMeta({
  title: 'pages.title.top' // set resource key
})
const { locale } = useI18n()
const { data } = await useAsyncData('quote', () => queryContent(locale.value, 'quote').findOne())

</script>

<template>
  <div>
    <ContentRenderer :value="data" />
  </div>
</template>