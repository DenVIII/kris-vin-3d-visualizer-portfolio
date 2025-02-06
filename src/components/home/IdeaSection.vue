<template>
  <section class="idea">
    <h2 class="header idea__header">От идеи до реализации:</h2>
    <ImgComparisonSlider class="slider idea__slider">
      <!-- eslint-disable -->
      <img slot="first" class="slider__img first_img" src="/img/placeholder-1.jpg" />
      <img slot="second" class="slider__img second_img" src="/img/1.jpg" />
      <!-- eslint-enable -->
    </ImgComparisonSlider>
  </section>
</template>

<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue'

export default {
  name: 'IdeaSection',
  components: {
    ImgComparisonSlider,
  },
}
</script>

<style lang="scss">
@use '../../assets/styles/variables';

.idea {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__header {
    padding: 40px 0;
  }
}

.slider {
  &__img {
    width: 100%;
  }
}

.slider:focus {
  outline: none;
}

@media (max-width: 500px) {
  .idea {
    min-height: auto;
  }
}
</style>
