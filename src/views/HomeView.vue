<template>
  <section class="hero">
    <div class="wrapper">
      <h1 class="hero__header">3D Визуализатор</h1>
      <p class="hero__subheader">Кристина Виноградова</p>
      <p class="hero__subheader">"Визуализация ваших идей"</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeView',
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
    font-size: $font-size-headers;
    font-family: $font-family-headers;
    font-weight: $font-weight-headers;
    margin-bottom: 60px;
  }
  &__subheader {
    color: $color-primary;
    font-size: $font-size-subheaders;
    font-family: $font-family-text;
    font-weight: 400;
  }
}
</style>
