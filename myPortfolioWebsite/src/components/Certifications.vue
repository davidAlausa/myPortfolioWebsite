<script setup>

    const certifications = [
        { name: 'Bsc Software Developer', link: '#' },

    ];

</script>
<template>
    <Card class="rounded-full shadow-xl px-6 py-6 w-full">
        <div class="flex flex-row gap-10 overflow-x-auto w-full py-4">
            <div 
            v-for="certification in certifications" 
            :key="certification.name" 
            class="flex-shrink-0 flex flex-col items-center justify-center w-40"
            >
            <a :href="certification.link" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center justify-center">
                <span class="pi pi-file text-3xl md:text-5xl text-accentDARK"></span>
                <p class="text-secondaryDARK font-bold mt-4 text-center">{{ certification.name }}</p>
            </a>
            </div>
        </div>
    </Card>

</template>