<script setup>
import { RouterLink, useRoute } from 'vue-router';

const baseClasses = 'hover:text-accentDARK';
const activeClasses = 'text-accentDARK underline decoration-2 underline-offset-4';
const inactiveClasses = 'text-secondaryDARK';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};



</script>
<template>

<div class="flex justify-between items-center p-16 w-full">

    <RouterLink to="/" class="text-accentDARK hover:text-secondaryDARK">
        <h1 class=" text-2xl font-bold">DAVID ALAUSA</h1>
    </RouterLink>

    <nav class="rounded-full shadow-xl px-10 py-4">
        <div class="flex gap-x-10">
            <RouterLink to="/about" :class="[isActiveLink('/about') ? activeClasses : inactiveClasses, baseClasses]">About</RouterLink>
            <RouterLink to="/skills"    :class="[isActiveLink('/skills') ? activeClasses : inactiveClasses, baseClasses]">Skills</RouterLink>
            <RouterLink to="/timeline"  :class="[isActiveLink('/timeline') ? activeClasses : inactiveClasses, baseClasses]">Timeline</RouterLink>
            <RouterLink to="/projects"  :class="[isActiveLink('/projects') ? activeClasses : inactiveClasses, baseClasses]">Projects</RouterLink>
            <RouterLink to="/contact"   :class="[isActiveLink('/contact') ? activeClasses : inactiveClasses, baseClasses]">Contact</RouterLink>
        </div>
    </nav>
</div>

    
</template>