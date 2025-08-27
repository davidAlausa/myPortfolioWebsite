<script setup>
    import ProjectCards from '@/components/ProjectCards.vue';
    import { ref, onMounted } from 'vue';
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

    const projects = ref([]);
    const CACHE_KEY = 'github_projects';
    const CACHE_DURATION = 60 * 60 * 1000; // 1 hour
    const isLoading = ref(false);

    onMounted(async () => {
    const cached = localStorage.getItem(CACHE_KEY);
    const cachedTime = parseInt(localStorage.getItem(CACHE_KEY + '_time') || "0");
    const now = Date.now();
 
    if (cached && cachedTime && now - cachedTime < CACHE_DURATION) {
        projects.value = JSON.parse(cached);
    } else {
        try {
            isLoading.value = true;
            const response = await fetch('https://api.github.com/users/davidAlausa/repos?sort=created_at');
            if (!response.ok) {
                console.error("GitHub API error:", response.status);
                return;
            }
            const data = await response.json();
            projects.value = data;
            localStorage.setItem(CACHE_KEY, JSON.stringify(data));
            localStorage.setItem(CACHE_KEY + '_time', now);
        } catch (error) {
            console.error("Error fetching projects:", error);
        } finally {
            isLoading.value = false;
        }

    
    }
    });
</script>

<template>
    <div class="skills-view">   
        <section class="p-10">
            <h1 class="text-7xl font-bold text-accentDARK">Projects</h1>
            <br>
            <p class="max-w-[100ch] justify-between">
                    Please find below a selection of projects ( including this one! ) that I have worked on pulled straight from my Github, showcasing my skills and experience in software 
                    development.
            </p>
            <br>
            <p>Click on a card to see more details about each project.</p>
        </section>
        <div class="m-10 flex flex-row flex-wrap justify-center gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" v-if="!isLoading">
            <ProjectCards v-for="project in projects" 
                :key="project.id"
                :title= project.name
                :description= project.description 
                :language= project.language
                :createdAt= "new Date(project.created_at).toLocaleDateString()"
                :updatedAt= "new Date(project.updated_at).toLocaleDateString()"
                :topics= project.topics
                :link= project.html_url

                class="hover:scale-105 transition-transform duration-300"
            />
        </div>
        <div v-if="isLoading" class="text-center text-secondaryDARK">
            <PulseLoader />
        </div>
    </div>
</template>