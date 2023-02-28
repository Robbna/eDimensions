<template>
    <div id="github-fork">
        <ForkGithub />
    </div>
    <nav id="links" class="flex justify-center flex-col items-center p-3 gap-4">
        <div id="nav-logo" class="flex justify-center items-center gap-3">
            <img src="@/assets/logo.png" alt="logo" class="w-12" />
            <h1>\(e\)Dimensions</h1>
        </div>
        <div class="flex gap-2 items-center">
            <RouterLink class="link" to="/">Home</RouterLink>
        </div>
    </nav>
</template>

<script setup lang="ts">
import ForkGithub from './ForkGithub.vue';
</script>


<style scoped>
#github-fork {
    position: absolute;
    top: 0;
    right: -6px;
}

nav {
    background-color: var(--brand-color-1);
    box-shadow: 0px 0px 6px var(--brand-color-4);
}

#nav-logo {
    font-size: 1.5rem;
    color: var(--brand-color-2);
}

.link {
    color: var(--brand-color-3);
}

.link:hover {
    color: var(--brand-color-5);
}
</style>
