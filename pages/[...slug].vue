<script setup lang="ts">
  const route = useRoute();

  const {data} = await useAsyncData(`content-${route.path}`, () => queryContent().where({_path: route.path}).findOne())
</script>

<template>
  <NuxtLayout>
    <main class="mt-20 md:w-2/3 md:mx-auto mx-3 backdrop-blur-sm bg-white/30 p-5">
              <h1 class='font-bold text-4xl mb-0'>{{data.title}}</h1>
              <p class='text-sm text-zinc-900 mt-0 bg-gray-700/10 px-2 py-1 rounded-md font-normal'>آخر تحديث : {{data.updated}}</p>
      <br />
      <ContentRenderer :value="data" />
       </main>
  </NuxtLayout>
</template>

<style scoped>
  
main :deep(h1) {
  @apply text-4xl mb-2 mt-5 ;
}

main :deep(h2) {
  @apply text-2xl mb-2 mt-7;
}

main :deep(h3) {
  @apply text-xl mb-2 mt-7;
}

main :deep(pre) {
  @apply bg-zinc-900 shadow-lg rounded overflow-auto my-2 w-full text-white; 
}

main :deep(code) {
  @apply float-left p-2 my-2 w-full whitespace-pre;
  direction: ltr;
  overflow-x: auto;
}
main :deep(strong) {
  @apply px-2 py-1 bg-yellow-700 text-zinc-900 rounded;
}

</style>