<script setup>

    const certifications = [
        { name: 'Certified Kubernetes Administrator'},
        { name: 'AWS Certified Solutions Architect' },
        { name: 'Google Cloud Professional Data Engineer'},
    ];

</script>
<template>
    <Card class="rounded-full shadow-xl px-10 py-4 w-full">
        <div class="flex flex-row justify-around w-full">
            <div class="flex flex-col items-center justify-center" v-for="certification in certifications" :key="certification.name">
                <span class="pi pi-file text-9xl"></span>
                <p class="text-secondaryDARK font-bold mt-5">{{ certification.name }}</p>
            </div>
        </div>
    </Card>
</template>