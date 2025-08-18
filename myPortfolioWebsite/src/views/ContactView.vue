<script setup>
    import ContactUsCards from '@/components/ContactUsCards.vue';
</script>
<template>

<div class="flex flex-col p-10 mt-10 md:mt-20">
    <h1 class="text-7xl font-bold mt-5 md:mt-10 mb-10 text-accentDARK">Contact</h1>
    <ContactUsCards LOGO="pi-github flex gap-x-20">
        <a href="https://www.github.com/davidAlausa">   
        <h1 class="text-3xl font-bold text-primaryDARK">GitHub</h1>
        <p class="text-primaryDARK">Explore my projects and contributions on GitHub.</p>
        </a>
    </ContactUsCards>
    <ContactUsCards LOGO="pi-linkedin">
        <a href="https://www.linkedin.com/in/david-alausa-251405290">
        <h1 class="text-3xl font-bold text-primaryDARK">LinkedIn</h1>
        <p class="text-primaryDARK">Connect with me on LinkedIn to see my professional journey.</p>
        </a>
    </ContactUsCards>
    <ContactUsCards LOGO="pi-envelope">
        <a href="mailto:damialausa@gmail.com">
        <h1 class="text-3xl font-bold text-primaryDARK">Email</h1>
        <p class="text-primaryDARK">Feel free to reach out via email for any inquiries or collaborations.</p>   
        </a>
    </ContactUsCards>
</div>


</template>