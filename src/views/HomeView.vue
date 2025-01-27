<template>
  <hero-section></hero-section>
  <gallery-section :slides></gallery-section>
  <about-section></about-section>
  <idea-section></idea-section>
</template>

<script>
import AboutSection from '@/components/home/AboutSection.vue'
import GallerySection from '@/components/GallerySection.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import IdeaSection from '@/components/home/IdeaSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    GallerySection,
    AboutSection,
    IdeaSection,
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

<style lang="scss">
@use '../assets/styles/variables';

h1,
h2 {
  font-size: $font-size-headers;
  font-weight: $font-weight-headers;
  font-family: $font-family-headers;
}

h2,
p {
  color: $color-dark;
}
</style>
