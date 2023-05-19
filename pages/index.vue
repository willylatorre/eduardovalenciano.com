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
      <div class="text-2xl flex flex-col justify-center max-w-[600px]"> 
        <span class="text-primary ds-serif text-sm">ACERCA</span>
        <ContentRenderer :value="data" />
      </div>

        <nuxt-img
         src="/img/eduardo.jpg" sizes="sm:100vw md:50vw lg:400px" 
          fit="cover" 
          :modifiers="{ roundCorner: '0:100' }" class="rounded" />

    </div>
   
  </div>
</template>