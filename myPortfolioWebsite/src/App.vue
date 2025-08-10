<script setup>
import Navbar from '@/components/Navbar.vue';

import { RouterView } from 'vue-router';
</script>

<template>
    <div class="bg-primaryDARK min-h-screen text-secondaryDARK">
        <Navbar />
        <RouterView />
    </div>
</template>
