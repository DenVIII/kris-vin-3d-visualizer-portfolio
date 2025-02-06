<template>
  <section class="gallery">
    <h2 class="header gallery__header">Некоторые из моих работ:</h2>
    <div class="wrapper">
      <vueper-slides arrows-outside bullets-outside :slide-ratio="2 / 3" :breakpoints="breakpoints">
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :title="slide.title"
          :image="slide.imageSrc"
        ></vueper-slide>
      </vueper-slides>
    </div>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'GallerySection',
  props: ['slides'],
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    breakpoints: {
      1024: {
        arrowsOutside: false,
        arrows: true,
      },
      600: {
        slideRatio: 1,
        arrows: false,
      },
    },
  }),
}
</script>

<style lang="scss">
@use '../assets/styles/variables';

.gallery {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 50px 0;
  background-color: $color-primary;
  &__header {
    text-align: center;
    margin-bottom: 40px;
  }
  .wrapper {
    width: 900px;
  }
}

.vueperslides {
  position: relative;
  &__arrow {
    color: $color-dark;
  }
  &__bullets {
    color: $color-dark;
  }
}

@media (max-width: 1024px) {
  .gallery {
    .wrapper {
      width: 100%;
    }
  }
}

@media (max-width: 800px) {
  .gallery {
    padding: 40px 0;
  }
}

@media (max-width: 500px) {
  .gallery {
    min-height: auto;
    padding: 0;
    &__header {
      margin-bottom: 0;
    }
  }
}
</style>
