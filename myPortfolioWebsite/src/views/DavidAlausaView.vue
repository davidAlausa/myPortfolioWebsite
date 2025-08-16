<script setup>
import { ref, onMounted } from 'vue';

const txt = [
  'Software Developer',
  'Web Developer',
  'Tech Enthusiast',
  'Problem Solver',
  'Full Stack Developer',
  'Coffee Drinker',
  'Data Analyst',
];

const speed = 100; 
const pause = 500;
const description = ref('');
let textIndex = 0;
let charIndex = 0;
let typing = true;

function typeWriter() {
  if (typing) {
    if (charIndex < txt[textIndex].length) {
      description.value += txt[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, speed);
    } else {
      typing = false;
      setTimeout(typeWriter, pause);
    }
  } else {
    if (charIndex > 0) {
      description.value = description.value.slice(0, -1);
      charIndex--;
      setTimeout(typeWriter, speed / 2);
    } else {
      typing = true;
      textIndex = (textIndex + 1) % txt.length;
      setTimeout(typeWriter, speed);
    }
  }
}

onMounted(() => {
  typeWriter();
});

</script>
<template>
    <section class="mt-20 flex flex-col">
        <h1 class="text-center text-5xl md:text-9xl font-bold mt-20 text-accentDARK">David Alausa</h1>
        <p class="text-center mt-1 md:mt-4 py-5 md:py-10">{{ description }}</p>
    </section>
</template>