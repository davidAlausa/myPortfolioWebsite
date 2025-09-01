<script setup>

import { ref } from 'vue'

import PageTitles from '@/components/PageTitles.vue';

    const timeline = [
    { date: "2025", month: "August",  title: "Created This Website", description: "With the freedom to work on personal projects, I decided to build my own website from scratch using Vue.js. \n\n It serves as a platform to showcase the skills I’ve developed throughout my software development journey and to present future projects. \n\n And yes, you are looking at it!" },
    { date: "2025", month: "May",  title: "Graduated University", description: "Graduated from the Technological University of the Shannon (TUS) with a BSc in Software Development." },
    { date: "2024", month: "October",  title: "Started Development my final year project - \"CUMULUS\"", description: "I took on the challenge of building a full-stack web application for my final year project called \"CUMULUS\". \n\n The app was designed to simplify cloud migrations by combining features of a cloud service aggregator, Akinator-style guidance, and the AWS Well-Architected Tool into a single platform. \n\n It was ambitious, but I gained hands-on experience with frontend development (API calls, Vue, JavaScript), backend functionality (CORS, endpoints, MVC architecture, Spring), and how the two communicate seamlessly." },
    { date: "2024", month: "August",  title: "Started Development on myFirstPythonProject", description: "To get familiar with Git and version control while experimenting with Python, I created a small game using PyGame. \n\n Inspired by retro games like Undertale, the player must escape a haunted house by collecting three keys. \n\n The concept isn't mind-blowing I know, but the project taught me a lot about Python fundamentals and very basic game development." },
    { date: "2024", month: "July",  title: "Joined Github", description: "In July, I started putting together my personal portfolio. At the time, I had been working a lot with software and CI/CD pipelines, and I wanted a place where I could create, store, and manage my projects without worrying about backups. \n\n After some digging, I found that Github was a no-brainer for what I needed at the time." },
    { date: "2024", month: "January",  title: "First Tech-Related Work Experience", description: "Worked as a Software Support Engineer at AMCS (Limerick), providing software and technical support to customers, resolving issues, assisting with installations and upgrades, and supporting project needs. \n\n Completed an 8-month placement." },
    { date: "2021", month: "September",  title: "Started College", description: "Began the first year of my Software Development degree at the Technological University of the Shannon, Midwest (Limerick, Ireland)." },
];

    const active = ref(0)

</script>
<template>
    <div class="timeline-view">

        <PageTitles title="Timeline">
            <p class="max-w-[100ch] justify-between">
                Scroll to go on a journey through my projects, milestones, and growth as a developer.
            </p>            
        </PageTitles>

        <section class="flex flex-col md:flex-row items-start md:items-start p-4 md:p-10">
            <div class="relative md:w-1/4 w-full h-56 overflow-y-scroll scrollbar scrollbar-thumb-accentLIGHT dark:scrollbar-thumb-accentDARK scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-primaryLIGHT dark:scrollbar-track-primaryDARK hidden md:block">
                <div class="sticky top-0 h-auto"> 
                    <div class="relative h-fit overflow-y-auto">
                        <div class="absolute left-6 top-0 bottom-0 border-l-4 border-accentLIGHT dark:border-accentDARK rounded-full"></div>
                        <ul class="flex flex-col gap-10 w-full py-8">
                            <li
                                v-for="(event, idx) in timeline"
                                :key="event.date || idx"
                                @click="active = idx"
                                class="relative flex items-center cursor-pointer group"
                            >
                                <div class="z-10 ml-4">
                                    <div
                                        class="w-5 h-5 rounded-full border-4"
                                        :class="active === idx ? 'bg-accentLIGHT dark:bg-accentDARK border-accentLIGHT dark:border-accentDARK' : 'bg-primaryLIGHT dark:bg-primaryDARK border-accentLIGHT dark:border-accentDARK'"
                                    ></div>
                                </div>
                                <div class="ml-8 min-w-[80px]"
                                    :class="active === idx ? 'text-accentLIGHT dark:text-accentDARK font-bold' : 'text-secondaryLIGHT dark:text-secondaryDARK font-semibold'">
                                    {{ event.month}} {{ event.date }}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="relative w-full h-32 overflow-x-auto scrollbar scrollbar-thumb-accentDARK scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-primaryDARK flex md:hidden">
                <div class="absolute top-10 left-0 right-0 border-t-4 border-accentDARK rounded-full w-[920px]"></div>
                <ul class="flex flex-row gap-10 w-full py-8">
                    <li
                        v-for="(event, idx) in timeline"
                        :key="event.date || idx"
                        @click="active = idx"
                        class="relative flex flex-col items-center cursor-pointer group min-w-[100px]"
                    >
                        <div class="z-10">
                            <div
                                class="w-5 h-5 rounded-full border-4"
                                :class="active === idx ? 'bg-accentLIGHT dark:bg-accentDARK border-primaryDARK' : 'bg-primaryLIGHT dark:bg-primaryDARK border-accentDARK'"
                            ></div>
                        </div>
                        <div class="mt-4 text-center"
                            :class="active === idx ? 'text-accentLIGHT dark:text-accentDARK font-bold' : 'text-secondaryLIGHT dark:text-secondaryDARK font-semibold'">
                            {{ event.month}}<br>{{ event.date }}
                        </div>
                    </li>
                </ul>
            </div>

            <div class="md:w-3/4 w-full md:pl-10 mt-10 md:mt-0">
                <Transition name="fade" mode="out-in">
                    <div :key="active">
                        <h2 class="text-2xl md:text-3xl font-bold text-accentLIGHT dark:text-accentDARK">{{ timeline[active]?.title }}</h2>
                        <p class="text-secondaryLIGHT dark:text-secondaryDARK mt-2 text-base md:text-lg whitespace-pre-line">{{ timeline[active]?.description }}</p>
                    </div>
                </Transition>
            </div>


        </section>

    </div>

</template>
<style scoped>

</style>
