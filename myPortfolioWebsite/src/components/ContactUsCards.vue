<script setup>
    import { defineProps } from 'vue';
    
    defineProps({
        LOGO: String,
    });

</script>
<template>
    <Card class="flex gap-x-20 items-center hover:justify-between bg-none md:bg-accentDARK md:hover:bg-secondaryDARK rounded-full p-8 mb-5 md:shadow-lg  max-w-[fit] md:max-w-[125px] hover:max-w-[1400px] 
           transition-all duration-500 ease-in-out group">

        <div class="md:hidden md:group-hover:block md:group-hover:truncate">
            <slot></slot>
        </div>
        <i :class="`pi ${LOGO} text-secondaryDark md:text-primaryDARK text-3xl md:text-6xl transition-transform duration-500 ease-in-out`"></i>
    </Card>

    <div class="md:hidden px-20">
        <hr class="my-6 border-t-2 border-accentDARK" />
    </div>
</template>