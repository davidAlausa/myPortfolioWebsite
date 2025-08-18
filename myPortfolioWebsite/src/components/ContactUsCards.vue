<script setup>
    import { defineProps } from 'vue';
    
    defineProps({
        LOGO: String,
    });

</script>
<template>
    <Card class=" flex gap-x-20 items-center hover:justify-between bg-accentDARK hover:bg-secondaryDARK rounded-full p-8 mb-5 shadow-lg  max-w-[90px] md:max-w-[125px] hover:max-w-[1400px] 
           transition-all duration-500 ease-in-out group">
        <div class="hidden group-hover:block md:group-hover:truncate">
            <slot></slot>
        </div>
        <i :class="`pi ${LOGO} text-primaryDARK text-3xl md:text-6xl transition-transform duration-500 ease-in-out`"></i>
    </Card>
</template>