<script setup>

    import { defineProps } from 'vue';

    defineProps({
        title: {
            type: String,
            default: '...'
        },
        description: {
            type: String,
            default: '...'
        },
    });

</script>
<template>
        <section>
            <h1 class="text-lg md:text-2xl font-bold text-accentDARK">{{ title }}</h1>
            <p class="text-sm md:text-base text-secondaryDARK">{{ description }}</p>
        </section>
</template>   