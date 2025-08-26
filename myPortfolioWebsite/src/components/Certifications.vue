<script setup>

    const certifications = [
        { name: 'Certified Kubernetes Administrator'},
        { name: 'AWS Certified Solutions Architect' },
        { name: 'Google Cloud Professional Data Engineer'},
    ];

</script>
<template>
    <Card class="rounded-full shadow-xl px-10 py-4 w-full">
        <div class="flex flex-row gap-x-10 justify-around w-full overflow-x-auto">
            <div class="flex flex-col items-center justify-center" v-for="certification in certifications" :key="certification.name">
                <span class="pi pi-file text-xl md:text-5xl"></span>
                <p class="text-secondaryDARK font-bold mt-5 truncate w-[20ch]">{{ certification.name }}</p>
            </div>
        </div>
    </Card>
</template>