<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

import { RouterView } from 'vue-router';
</script>

<template>
    <div class="bg-primaryDARK min-h-screen text-secondaryDARK flex flex-col">
        <Navbar />
        <main class="flex-grow">
            <RouterView />
        </main>
        <Footer />
    </div>
</template>
