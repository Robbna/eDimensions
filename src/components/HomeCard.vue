<template>
  <RouterLink :to="pathTo" :style="{ backgroundImage: `url(${imgPath})` }"
  class="w-44 h-44 text-xl md:w-56 md:h-56 flex justify-center items-center p-4">
    <h1>{{ text }}</h1>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  pathTo: string,
  imgPath: string,
  text: string
}>()

</script>

<style scoped>
a {
  box-shadow: 6px 6px 9px rgb(0, 0, 0, .6);

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  background-color: white;
  transition: .3s ease-out;
}

a:hover {
  transform: scale(0.93);
}

h1 {
  mix-blend-mode: difference;
  color: var(--brand-color-1);
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 9px;
}
</style>