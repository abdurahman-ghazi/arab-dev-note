<template>
  <NuxtPage />
</template>

<style>
  html {
    height: 100%;
    background: url(/background.jpg) repeat center center fixed; 
}
/* width */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-zinc-900;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-zinc-700
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-zinc-800
}
</style>
