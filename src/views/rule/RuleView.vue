<template>
  <div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
div {
  height: 100vh;
  
  background-image: url(@/assets/rule/rule.svg);
  background-repeat: no-repeat;
  background-position: 0 center;
}

@media (max-width: 768px) {
  div {
    transform: rotate(90deg);
    width: 100vw;
    height: 100vw;
  }
}
</style>