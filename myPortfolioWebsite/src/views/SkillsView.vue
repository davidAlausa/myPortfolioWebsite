<script setup>

    import Visualisations from '@/components/Visualisations.vue';
    import VisualisationsText from '@/components/VisualisationsText.vue';
    import Certifications from '@/components/Certifications.vue';
    
    import PageTitles from '@/components/PageTitles.vue';

</script>
<template>
    <div class="skills-view">
        <PageTitles title="Skills">
            <p class="max-w-[100ch] justify-between">
                    As a software developer, I have honed a diverse set of skills that span across various domains of technology. 
                    My expertise includes backend development with Spring and  frontend development using Vue.js 
                    and data visualization with libraries like D3.js. I also have experience in machine learning using Python.
                    <br>
                    <br>
                    I am passionate about problem-solving and continuously learning new technologies to enhance my skill set. 
                    Whether it's building robust APIs, creating interactive user interfaces, or analyzing data to extract meaningful insights, 
                    I strive to deliver high-quality solutions that meet the needs of users and businesses alike.
                    <br>
                    <br>
                    As such, I thought that there would be no better way to showcase my skills than through encapsulating them in the 
                    visualisations I have made below using D3.js. Enjoy!
            </p>
        </PageTitles>   
        <div class="flex flex-col md:flex-row justify-center gap-10 items-center px-10 md:px-5 lg:px-28 py-2 md:py-10 lg:py-20 mt-2 md:mt-20 max-w-[1050px] mx-auto">    
            <Visualisations type="languages"/>
            <VisualisationsText
            title="Coding Languages used in my projects."
            description="Favourites: JavaScript, Java, Python"
            class="mt-10 md:mt-0"
            />
        </div>

        <div class="md:hidden px-20">
            <hr class="my-6 border-t-2 border-accentLIGHT dark:border-accentDARK" />
        </div>


        <div class="flex flex-col md:flex-row justify-center gap-10 items-center  px-10 md:px-5 lg:px-28 py-2 md:py-20 max-w-[1050px] mx-auto">
            <VisualisationsText 
                title="Frameworks & Tools used in my projects."
                description="Favourites: Vue, Spring"
                class="mb-10 md:mb-0"
            />
            <Visualisations type="frameworks"/>
        </div>
        <small class="flex flex-row text-center justify-center text-primaryLIGHT dark:text-primaryDARK">***Data visualised inlclude academic projects and coursework as well as personal projects.***</small>
        <section class="flex flex-col mt-20 md:mt-10 p-10 items-center justify-center">
            <h1 class="text-3xl font-bold text-accentLIGHT dark:text-accentDARK">Certifications</h1>
            <Certifications class="mt-10"/>
        </section>
        <section class="flex flex-col mt-20 p-10 items-center justify-center">
            <h1 class="text-xl md:text-3xl font-bold text-accentLIGHT dark:text-accentDARK">Don't see a particular tool, language or technology here?</h1>
            <p class="justify-between text-sm md:text-xl">
                Chances are I've explored it, haven't showcased it yet. Drop me a message if you're curious about anything specific - I'm always learning and expanding my toolkit.
            </p>
        </section>  
    </div>
</template>  