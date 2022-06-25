<template>
  <ClientOnly>
    <iframe :src="src" class="w-full min-h-[30em]"></iframe>
  </ClientOnly>
</template>

<script setup>
const {src} = defineProps({
  src: {
    type: String,
    default: 'https://editor.lenguajelatino.org',
  },
})
</script>

<style scoped>

</style>
