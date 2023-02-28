<template>
    <div class="flex flex-col justify-center items-center p-10">
        <div id="grid" class="grid justify-items-center grid-cols-2 md:gap-6 md:grid-cols-3 h-screen w-full">
            <HomeCard text="Inches" path-to="/inches" :img-path=InchesImage />
            <HomeCard text="Rule" path-to="/rule" :img-path=RuleImage />
        </div>
    </div>
</template>

<script setup lang="ts">
import HomeCard from '@/components/HomeCard.vue';
import InchesImage from '@/assets/inches/tv_thumbnail.png'
import RuleImage from '@/assets/rule/rule.svg'


</script>

<style scoped>
#grid {
    overflow: auto;
}
</style>