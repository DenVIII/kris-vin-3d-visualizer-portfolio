<template>
  <div class="project">
    <p class="project__caption">
      <span class="caption__title">{{ title }}</span>
      <span class="caption__descr">{{ description }}</span>
    </p>
    <div class="wrapper">
      <vueper-slides
        class="no-shadow"
        arrows-outside
        bullets-outside
        :slide-ratio="2 / 3"
        :breakpoints="breakpoints"
      >
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :title="slide.title"
          :image="slide.imageSrc"
          :class="'slide'"
        ></vueper-slide>
      </vueper-slides>
    </div>
    <div class="border"></div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'ProjectSlider',
  props: ['title', 'description', 'slides'],
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
@use '../../assets/styles/variables';

.project {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0 30px 0;
  &__caption {
    font-family: $font-family-text;
    margin-bottom: 30px;
  }
  .wrapper {
    width: 900px;
  }
  .caption {
    &__title {
      font-weight: bold;
    }
  }
}

.border {
  margin-top: 10px;
  width: 50%;
  height: 4px;
  border-radius: 100%;
  background-color: #b8b4b433;
}

.vueperslides {
  &__arrow {
    color: $color-dark;
  }
  &__bullet:hover,
  &__bullet:focus,
  &__arrow:hover {
    color: $color-accent;
  }
}

@media (max-width: 1024px) {
  .project {
    .wrapper {
      width: 100%;
    }
  }
}

@media (max-width: 500px) {
  .portfolio__header {
    font-size: 1.5rem;
  }
  .project {
    padding: 20px 0;
    &__caption {
      text-align: center;
    }
  }
}
</style>
