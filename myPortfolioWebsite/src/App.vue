<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

import { RouterView } from 'vue-router';
</script>

<template>
    <div class="bg-primaryLIGHT dark:bg-primaryDARK min-h-screen text-secondaryLIGHT dark:text-secondaryDARK flex flex-col transition-all duration-500 ease-in-out">
        <Navbar />
        <main class="flex-grow">
            <Transition name="fade" mode="out-in">
                <RouterView />
            </Transition>
        </main>
        <Footer />
    </div>
</template>
<style>
.fade-enter-active, .fade-leave-active {
  @apply transition-opacity duration-500 ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>