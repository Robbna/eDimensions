<template>
  <NavBar />
  <RouterView />
  <FooterComponent />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';

</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --brand-color-1: #eaeaea;
  --brand-color-2: #192c60;
  --brand-color-3: #575152;
  --brand-color-4: #967744;
  --brand-color-5: #d59d36;
}

* {
  margin: 0;
  overflow: hidden;

  font-family: 'Quicksand', sans-serif;
}
</style>
