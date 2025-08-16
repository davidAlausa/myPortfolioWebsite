<script setup>

    import Visualisations from '@/components/Visualisations.vue';
    import VisualisationsText from '@/components/VisualisationsText.vue';

</script>
<template>
    <div class="skills-view">   
        <section class="mt-10 p-10">
            <h1 class="text-7xl font-bold mt-20 text-accentDARK">Skills</h1>
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
        </section>
        <div class="flex justify-between items-center px-56 py-10">    
            <Visualisations />
            <VisualisationsText
            title="Coding Languages used in my projects."
            description="Favourites: JavaScript, Java, Python"
            />
        </div>
        <div class="flex justify-between items-center  px-56 py-10">
            <VisualisationsText 
                title="Frameworks & Tools used in my projects."
                description="Favourites: Vue, Spring"
            />
            <Visualisations />
        </div>
    </div>
</template>  