<script setup>
    import { defineProps } from 'vue';
    
    defineProps({
        LOGO: String,
    });

</script>
<template>
    <Card class="flex gap-x-20 items-center md:justify-between lg:hover:justify-between bg-none lg:bg-accentLIGHT lg:dark:bg-accentDARK lg:hover:bg-secondaryLIGHT lg:hover:dark:bg-secondaryDARK rounded-full p-8 mb-5 lg:shadow-lg  max-w-[fit] lg:max-w-[125px] hover:max-w-[1400px] 
           transition-all duration-500 ease-in-out group">

        <div class="lg:hidden lg:group-hover:block lg:group-hover:truncate">
            <slot></slot>
        </div>
        <i :class="`pi ${LOGO} text-secondaryLIGHT dark:text-primaryDARK lg:text-primaryLIGHT lg:dark:text-primaryDARK text-3xl lg:text-6xl transition-transform duration-500 ease-in-out`"></i>
    </Card>

    <div class="lg:hidden px-20">
        <hr class="my-6 border-t-2 border-accentLIGHT dark:border-accentDARK" />
    </div>
</template>