<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';

const baseClasses = 'hover:text-accentLIGHT dark:text-accentDARK';
const activeClasses = 'text-accentLIGHT dark:text-accentDARK underline decoration-2 underline-offset-4';
const inactiveClasses = 'text-secondaryLIGHT dark:text-secondaryDARK';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};

const sidenavOpen = ref(false)

const isDark = useDark()          
const toggleDark = useToggle(isDark) 

</script>
<template>
  <div class="flex justify-between items-center p-10 w-full">
    <RouterLink to="/" class="text-accentLIGHT dark:text-accentDARK hover:text-secondaryLIGHT hover:dark:text-secondaryDARK">
      <h1 class=" text-2xl font-bold">DAVID ALAUSA</h1>
    </RouterLink>
    <div class="flex items-center gap-x-6">
      <nav class="hidden md:block rounded-full shadow-xl px-10 py-4">
        <div class="flex gap-x-10">
          <RouterLink to="/about"    :class="[isActiveLink('/about')    ? activeClasses : inactiveClasses, baseClasses]">About</RouterLink>
          <RouterLink to="/skills"   :class="[isActiveLink('/skills')   ? activeClasses : inactiveClasses, baseClasses]">Skills</RouterLink>
          <RouterLink to="/timeline" :class="[isActiveLink('/timeline') ? activeClasses : inactiveClasses, baseClasses]">Timeline</RouterLink>
          <RouterLink to="/projects" :class="[isActiveLink('/projects') ? activeClasses : inactiveClasses, baseClasses]">Projects</RouterLink>
          <RouterLink to="/contact"  :class="[isActiveLink('/contact')  ? activeClasses : inactiveClasses, baseClasses]">Contact</RouterLink>
        </div>
      </nav>

      <button @click="toggleDark()" class="relative w-14 h-8 bg-accentLIGHT dark:bg-accentDARK dark:bg-accentLIGHT dark:bg-accentDARK rounded-full flex items-center px-1 transition-colors duration-300 focus:outline-none">
        <span class="absolute left-2 text-xs text-gray-700 text-primaryLIGHT dark:text-primaryDARK pi pi-sun"></span>
        <span class="absolute right-2 text-xs text-gray-700 text-primaryLIGHT dark:text-primaryDARK pi pi-moon"></span>
        <span :class="['absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-primaryLIGHT dark:bg-primaryDARK shadow transform transition-all duration-300', isDark ? 'translate-x-6' : 'translate-x-0']"></span>
      </button>
    </div>

    <button 
      @click="sidenavOpen = true" 
      class="md:hidden text-accentLIGHT dark:text-accentDARK text-3xl focus:outline-none"
    >
      <i class="pi pi-bars"></i>
    </button>
  </div>

  <transition name="fade">
    <div 
      v-if="sidenavOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      @click="sidenavOpen = false"
    ></div>
  </transition>

    <div 
      class="fixed top-0 left-0 h-full bg-primaryLIGHT dark:bg-primaryDARK overflow-x-hidden transition-all duration-500 z-50"
      :class="sidenavOpen ? 'w-64' : 'w-0'"
    >
      <a @click="sidenavOpen = false" class="absolute top-0 right-5 text-4xl text-secondaryLIGHT dark:text-secondaryDARK cursor-pointer">&times;</a>

      <div class="flex flex-col mt-20 space-y-6 pl-8">
        <RouterLink to="/about"    @click="sidenavOpen=false" :class="[isActiveLink('/about')    ? activeClasses : inactiveClasses, baseClasses]">About</RouterLink>
        <RouterLink to="/skills"   @click="sidenavOpen=false" :class="[isActiveLink('/skills')   ? activeClasses : inactiveClasses, baseClasses]">Skills</RouterLink>
        <RouterLink to="/timeline" @click="sidenavOpen=false" :class="[isActiveLink('/timeline') ? activeClasses : inactiveClasses, baseClasses]">Timeline</RouterLink>
        <RouterLink to="/projects" @click="sidenavOpen=false" :class="[isActiveLink('/projects') ? activeClasses : inactiveClasses, baseClasses]">Projects</RouterLink>
        <RouterLink to="/contact"  @click="sidenavOpen=false" :class="[isActiveLink('/contact')  ? activeClasses : inactiveClasses, baseClasses]">Contact</RouterLink>
      </div>
    </div>
    
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* If the transition for the knob does not work, check your tailwind.config.js for enabled transition and transform utilities, and restart your dev server to clear cache. */
</style>