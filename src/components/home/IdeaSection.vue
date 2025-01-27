<template>
  <section class="idea">
    <h2 class="header idea__header">От идеи до реализации:</h2>
    <ImgComparisonSlider class="slider idea__slider">
      <!-- eslint-disable -->
      <img slot="first" class="slider__img first_img" src="../../assets/img/placeholder-1.jpg" />
      <img slot="second" class="slider__img second_img" src="../../assets/img/1.jpg" />
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__header {
    padding: 40px 0;
  }
}

.slider {
  margin-bottom: 40px;
  &__img {
    width: 900px;
  }
}

.slider:focus {
  outline: none;
}
</style>
