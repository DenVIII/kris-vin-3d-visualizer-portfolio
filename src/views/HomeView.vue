<template>
  <hero-section></hero-section>
  <gallery-section :slides></gallery-section>
  <about-section></about-section>
</template>

<script>
import AboutSection from '@/components/home/AboutSection.vue'
import GallerySection from '@/components/GallerySection.vue'
import HeroSection from '@/components/home/HeroSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    GallerySection,
    AboutSection,
  },
  data: () => ({
    slides: [
      {
        id: 'slide-1',

        content: '<img src="/src/assets/img/1.jpg" class="slide"> ',
      },
      {
        id: 'slide-2',

        content: '<img src="/src/assets/img/2.jpg" class="slide"> ',
      },
      {
        id: 'slide-3',

        content: '<img src="/src/assets/img/3.jpg" class="slide"> ',
      },
    ],
  }),
}
</script>

<style lang="scss"></style>
