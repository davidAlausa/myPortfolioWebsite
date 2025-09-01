<script setup>
    import { defineProps } from 'vue';
    const { title } = defineProps({ title: String });

</script>
<template>
    <section class="p-10">
        <h1 class="text-7xl font-bold text-accentLIGHT dark:text-accentDARK">{{ title }}</h1>
        <br>
        <slot></slot>
    </section>
</template>