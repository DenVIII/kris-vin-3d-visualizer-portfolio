<template>
  <section class="gallery">
    <h2 class="gallery__header">Некоторые из моих работ:</h2>
    <vueper-slides class="no-shadow" arrows-outside bullets-outside :slide-ratio="0.5">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :title="slide.title"
        :content="slide.content"
      ></vueper-slide>
    </vueper-slides>
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
}
</script>

<style lang="scss">
@use '../assets/styles/variables';

.gallery {
  min-height: 100vh;
  padding: 50px 200px;
  background-color: $color-primary;
  &__header {
    font-family: $font-family-headers;
    font-size: $font-size-headers;
    text-align: center;
    margin-bottom: 50px;
  }
}

.vueperslides {
  &__arrow {
    color: $color-accent;
  }
}

.slide {
  width: 900px;
  height: 100%;
}
</style>
