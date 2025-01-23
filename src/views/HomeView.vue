<template>
  <section class="hero">
    <div class="wrapper">
      <h1 class="hero__header">3D Визуализатор</h1>
      <p class="hero__subheader">Кристина Виноградова</p>
      <p class="hero__subheader">"Визуализация ваших идей"</p>
    </div>
  </section>
  <gallery-section :slides></gallery-section>
</template>

<script>
import GallerySection from '@/components/GallerySection.vue'

export default {
  name: 'HomeView',
  components: {
    GallerySection,
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

.hero {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: no-repeat center url('../assets/img/1.jpg');
  height: 100vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(31, 30, 30, 0.7);
    z-index: 1;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
  }
  &__header {
    color: $color-primary;
    font-size: 4rem;
    font-family: $font-family-headers;
    font-weight: $font-weight-headers;
    padding: 40px 0;
  }
  &__subheader {
    color: $color-primary;
    font-size: $font-size-subheaders;
    font-family: $font-family-text;
    font-weight: 300;
  }
}
</style>
