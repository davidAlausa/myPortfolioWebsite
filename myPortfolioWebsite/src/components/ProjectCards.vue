<script setup>

import { defineProps, ref } from 'vue';
import fallbackImage from '@/assets/thumbs/not_available.png';

const showModal = ref(false);

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

    defineProps({
        title: {
            type: String,
            default: "null",
        },
        description: {
            type: String,
            default: "null",
        },
        source: {
            type: String,
            default: fallbackImage,
        },
        language: {
            type: String,
            default: "null",
        },
        createdAt: {
            type: String,
            default: "01-01-00",
        },
        updatedAt: {
            type: String,
            default: "01-01-00",
        },
        topics: {
            type: Object,
            default: ['No Topics'],
        },
        link: {
            type: String,
            default: "#",
        },
    });
</script>
<template>
    <div>
        <Card class="flex flex-col items-center justify-center p-6 bg-secondaryDARK hover:bg-white shadow-md rounded-lg w-fit cursor-pointer" id="githubProjectCard" @click="openModal">
            <img :src="source" alt="Project Image" class="w-16 h-16 mb-4"/>
            <h2 class="text-2xl text-center font-bold mb-4 text-primaryDARK truncate w-[18ch]">{{ title }}</h2>
            <p class="text-center text-sm md:text-lg text-primaryDARK truncate w-[20ch]">{{ description }}</p>
            <div class="flex flex-row items-center justify-aroun gap-x-3 mt-4">
                <div class="flex flex-row items-center gap-x-1">
                    <span class="pi pi-language text-accentDARK font-black shadow-2xl">: </span>
                    <p class="text-primaryDARK text-sm md:text-xl">{{ language }}</p>            
                </div>
                <div class="flex flex-row items-center gap-x-1">
                    <span class="pi pi-clock text-accentDARK font-black shadow-2xl">: </span>
                    <p class="text-primaryDARK text-sm md:text-xl">{{ createdAt }}</p>            
                </div>
                <div class="flex flex-row items-center justify-center p-4 bg-primaryDARK shadow-2xl rounded-lg">
                    <abbr title="View Project on GitHub">
                        <a :href="link" class="text-primaryDARK underline w-auto flex flex-row items-center" target="_blank" rel="noopener noreferrer" @click.stop>
                            <span class="pi pi-external-link text-accentDARK font-black"></span>
                        </a>
                    </abbr>
                </div>
            </div>
        </Card>
    </div>
    <transition name="fade" mode="out-in">
        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div class="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full relative">
                <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl font-bold">&times;</button>
                <img :src="source" alt="Project Image" class="w-24 h-24 mb-4 mx-auto"/>
                <h2 class="text-3xl font-bold mb-4 text-primaryDARK text-center overflow-x-auto">{{ title }}</h2>
                <p class="text-center text-lg text-primaryDARK mb-4">{{ description }}</p>
                <hr class="border-t-2 mb-4"> 
                <div class="flex flex-row items-center justify-between gap-x-4 mb-4">
                    <p class="text-accentDARK"><span class="pi pi-language "></span> Language: </p>
                    <p class="text-primaryDARK">{{ language }}</p>
                </div>
                <hr class="border-t-2 mb-4">
                
                <div class="flex flex-row items-center justify-between gap-x-1">
                    <p class="text-accentDARK"><span class="pi pi-clock "></span> Created At: </p>
                    <p class="text-primaryDARK">{{ createdAt }}</p>
                </div>
                <div class="flex flex-row items-center justify-between gap-x-1 mb-4">
                    <p class="text-accentDARK"><span class="pi pi-clock "></span> Last Updated At: </p>
                    <p class="text-primaryDARK">{{ updatedAt }}</p>
                </div>
                <hr class="border-t-2 mb-4">
                <div class="flex flex-row items-center justify-between gap-x-1 mb-4">
                    <p class="text-accentDARK"><span class="pi pi-objects-column "></span> Related Topics: </p>
                    <p class="text-primaryDARK hover:text-accentDARK" v-for="topic in topics" :key="topic"> {{ topic}} </p>
                </div>
                    
                <div class="flex flex-row items-center justify-center p-2 bg-primaryDARK shadow-2xl rounded-lg">
                    <abbr title="View Project on GitHub">
                        <a :href="link" class="text-primaryDARK underline w-auto flex flex-row items-center" target="_blank" rel="noopener noreferrer">
                        <span class="pi pi-external-link text-accentDARK"></span>
                        <p class="ml-2 text-accentDARK">Go To Repository</p>
                        </a>
                    </abbr>
                </div>
            </div>
        </div>
    </transition>
</template>