<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref } from 'vue';

const baseClasses = 'hover:text-accentDARK';
const activeClasses = 'text-accentDARK underline decoration-2 underline-offset-4';
const inactiveClasses = 'text-secondaryDARK';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};

const sidenavOpen = ref(false)

</script>
<template>

<div class="flex justify-between items-center p-10 w-full">

    <RouterLink to="/" class="text-accentDARK hover:text-secondaryDARK">
        <h1 class=" text-2xl font-bold">DAVID ALAUSA</h1>
    </RouterLink>

    <nav class="hidden md:block rounded-full shadow-xl px-10 py-4">
      <div class="flex gap-x-10">
        <RouterLink to="/about"    :class="[isActiveLink('/about')    ? activeClasses : inactiveClasses, baseClasses]">About</RouterLink>
        <RouterLink to="/skills"   :class="[isActiveLink('/skills')   ? activeClasses : inactiveClasses, baseClasses]">Skills</RouterLink>
        <RouterLink to="/timeline" :class="[isActiveLink('/timeline') ? activeClasses : inactiveClasses, baseClasses]">Timeline</RouterLink>
        <RouterLink to="/projects" :class="[isActiveLink('/projects') ? activeClasses : inactiveClasses, baseClasses]">Projects</RouterLink>
        <RouterLink to="/contact"  :class="[isActiveLink('/contact')  ? activeClasses : inactiveClasses, baseClasses]">Contact</RouterLink>
      </div>
    </nav>

    <button 
      @click="sidenavOpen = true" 
      class="md:hidden text-accentDARK text-3xl focus:outline-none"
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
    class="fixed top-0 left-0 h-full bg-primaryDARK overflow-x-hidden transition-all duration-500 z-50"
    :class="sidenavOpen ? 'w-64' : 'w-0'"
  >
    <a @click="sidenavOpen = false" class="absolute top-0 right-5 text-4xl text-secondaryDARK cursor-pointer">&times;</a>

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

</style>