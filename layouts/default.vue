<script setup>
// const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const switchLocalePath = useSwitchLocalePath()

const menuShown = ref(false)
const showMenu = () => {
  menuShown.value = true
}

const hideMenu = () => {
  menuShown.value = false
}


</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

    <Head>
      <Title>{{ t('title') }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
      <Meta id="title" property="og:title" :content="t('title')" />
      <Meta id="sitename" property="og:site_name" :content="t('title')" />
      <Meta id="description" property="description" :content="t('description')" />
      <Meta id="og:description" property="og:description" :content="t('description')" />
      <Meta id="og:description" property="og:type" content="website" />
      <Meta id="og:description" property="og:description" :content="t('description')" />
      <Meta id="image" property="image" content="https://eduardovalenciano.com/img/eduardo-snap.jpg" />
      <Meta id="og:image" property="og:image" content="https://eduardovalenciano.com/img/eduardo-snap.jpg" />
      <Meta id="og:image:type" property="og:image:type" content="image/jpeg" />
      <Meta id="og:url" property="og:url" content="https://eduardovalenciano.com" />
    </Head>

    <Body>
      <div class="bg-white min-h-[100vh]">
        <nav class="pt-8 md:pb-8 flex gap-6 justify-between align-center ds-wrapper px-4 md:px-0">
          <div>
            <!-- Desktop -->
            <div class="ds-serif ds-bold text-3xl hidden md:block">Eduardo Valenciano Mendoza </div>
            <!-- Mobile -->
            <div class="ds-serif ds-bold text-2xl block md:hidden">Eduardo <br />Valenciano <br /> Mendoza <br />
            </div>
            <div class="text-primary text-sm">{{ t('psicologo') }}</div>
          </div>
          <img src="/assets/icons/burger.svg" alt="menu" class="block md:hidden w-[32px] h-[32px]" @click="showMenu" />
          <div class="hidden md:block">
            <div class="gap-4">
              <NuxtLink :to="localePath('index')" class="mr-2">{{ t('home') }}</NuxtLink>
              <NuxtLink :to="localePath('curriculum')" class="mr-2">{{ t('curriculum') }}</NuxtLink>
              <NuxtLink :to="localePath('servicios')" class="mr-2">{{ t('services') }}</NuxtLink>
              <a href="#contact">{{ t('contact') }}</a>
            </div>

            <div class="text-sm text-right text-primary">
              <NuxtLink :to="switchLocalePath('es')">ES</NuxtLink> |
              <NuxtLink :to="switchLocalePath('ca')">CA</NuxtLink> |
              <NuxtLink :to="switchLocalePath('en')">EN</NuxtLink> |
              <NuxtLink :to="switchLocalePath('fr')">FR</NuxtLink>
            </div>
          </div>

          <div class="mobile bg-white h-[100dvh] w-[100dvw] p-10 fixed top-0 left-0 z-1 flex justify-between flex-col"
            v-if="menuShown" @click="hideMenu">
            <div class="flex justify-end w-full">
              <button @click="hideMenu" class="border-0 bg-transparent">
                <img src="/assets/icons/close.svg" alt="close" class="w-[32px] h-[32px]" />
              </button>
            </div>

            <div class="flex-1 flex flex-col items-center text-primary text-2xl gap-5">
              <NuxtLink :to="localePath('index')" class="mr-2">{{ t('home') }}</NuxtLink>
              <NuxtLink :to="localePath('curriculum')" class="mr-2">{{ t('curriculum') }}</NuxtLink>
              <NuxtLink :to="localePath('servicios')" class="mr-2">{{ t('services') }}</NuxtLink>
              <a href="#contact">{{ t('contact') }}</a>
            </div>

            <div class="mx-auto text-center">
              <NuxtLink :to="switchLocalePath('es')">ES</NuxtLink> |
              <NuxtLink :to="switchLocalePath('ca')">CA</NuxtLink> |
              <NuxtLink :to="switchLocalePath('en')">EN</NuxtLink> |
              <NuxtLink :to="switchLocalePath('fr')">FR</NuxtLink>
            </div>
          </div>
        </nav>
        <slot />
        <footer class="bg-background">
          <div class="ds-wrapper flex items-center justify-center min-h-[100px] text-xs">
            Eduardo Valenciano Mendoza &copy; 2023 |&nbsp; <a href="mailto:evalenciano@copc.cat">{{ t('contact') }}</a>
          </div>
        </footer>
      </div>

    </Body>

    </Html>
  </div>
</template>

<i18n lang="json">{
  "es": {
    "title": "Eduardo Valenciano Mendoza, psicólogo",
    "description": "Psicólogo sanitario y doctor en Psicología Clínica por la Universidad de Barcelona con experiencia asistencial e investigadora en la red pública de salud mental y adicciones",
    "home": "Inicio",
    "psicologo": "Psicólogo y Doctor en Psicología Clínica",
    "curriculum": "Curriculum",
    "services": "Servicios",
    "contact": "Contacto"
  },
  "ca": {
    "title": "Eduardo Valenciano Mendoza, psicòleg",
    "description": "Psicòleg sanitari i doctor en Psicologia Clínica per la Universitat de Barcelona amb experiència assistencial i investigadora a la xarxa pública de salut mental i addiccions",
    "home": "Inici",
    "psicologo": "Psicòleg i Doctor en Psicologia Clínica",
    "curriculum": "Curriculum",
    "services": "Serveis",
    "contact": "Contacte"
  },
  "fr": {
    "title": "Eduardo Valenciano Mendoza, psicòleg",
    "description": "Psychologue clinicien et docteur en psychologie clinique de l'Université de Barcelone avec une expérience clinique et de recherche dans le réseau public de santé mentale et de toxicomanie",
    "home": "Début",
    "psicologo": "Psychologue et docteur en psychologie clinique",
    "curriculum": "Curriculum",
    "services": "Services",
    "contact": "Contact"
  },
  "en": {
    "title": "Eduardo Valenciano Mendoza, psicòleg",
    "description": "Health psychologist and PhD in Clinical Psychology from the University of Barcelona with clinical and research experience in the public network of mental health and addictions",
    "home": "Home",
    "psicologo": "Psychologist and PhD in Clinical Psychology",
    "curriculum": "Curriculum",
    "services": "Services",
    "contact": "Contact"
  }
}</i18n>

<style lang="scss">
nav {
  a {
    line-height: 24px;

    &:hover {
      text-decoration: underline;
    }

  }
}
</style>