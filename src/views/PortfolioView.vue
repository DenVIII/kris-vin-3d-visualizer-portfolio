<template>
  <h2 class="portfolio__header">Мои работы:</h2>
  <project-slider
    v-for="(project, i) in projects"
    :key="i"
    :title="project.title"
    :description="project.description"
    :slides="project.slides"
  ></project-slider>
</template>

<script>
import ProjectSlider from '@/components/portfolio/ProjectSlider.vue'
import image1 from '/img/1.jpg'
import image2 from '/img/2.jpg'
import image3 from '/img/3.jpg'

export default {
  name: 'PortfolioView',
  components: {
    ProjectSlider,
  },
  data: () => ({
    projects: [
      {
        title: 'Гостинная. ',
        description: 'Проект гостинной в нордическом стиле. г.Севастополь.',
        slides: [
          {
            id: 'slide-1',
            imageSrc: image1,
          },
          {
            id: 'slide-2',
            imageSrc: image2,
          },
          {
            id: 'slide-3',
            imageSrc: image3,
          },
        ],
      },
      {
        title: 'Гостинная. ',
        description: 'Проект гостинной в нордическом стиле. г.Севастополь.',
        slides: [
          {
            id: 'slide-1',
            imageSrc: image2,
          },
          {
            id: 'slide-2',
            imageSrc: image1,
          },
          {
            id: 'slide-3',
            imageSrc: image3,
          },
        ],
      },
      {
        title: 'Гостинная. ',
        description: 'Проект гостинной в нордическом стиле. г.Севастополь.',
        slides: [
          {
            id: 'slide-1',
            imageSrc: image3,
          },
          {
            id: 'slide-2',
            imageSrc: image1,
          },
          {
            id: 'slide-3',
            imageSrc: image2,
          },
        ],
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
.portfolio__header {
  padding: 20px 0;
  text-align: center;
}
</style>
