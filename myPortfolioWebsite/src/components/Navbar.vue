<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>

<div class="flex justify-between items-center p-10 w-full">

    <RouterLink to="/" class="text-accentDARK hover:text-secondaryDARK">
        <h1 class=" text-2xl font-bold">DAVID ALAUSA</h1>
    </RouterLink>

    <nav class="rounded-full shadow-xl px-10 py-4">
        <div class="flex gap-x-10">
            <RouterLink to="/" class="text-secondaryDARK hover:text-accentDARK">About</RouterLink>
            <RouterLink to="/" class="text-secondaryDARK hover:text-accentDARK">Skills</RouterLink>
            <RouterLink to="/" class="text-secondaryDARK hover:text-accentDARK">Timeline</RouterLink>
            <RouterLink to="/" class="text-secondaryDARK hover:text-accentDARK">Projects</RouterLink>
            <RouterLink to="/" class="text-secondaryDARK hover:text-accentDARK">Contact</RouterLink>
        </div>
    </nav>
</div>

    
</template>