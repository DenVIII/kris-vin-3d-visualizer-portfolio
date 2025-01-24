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
  name: 'HeroSection',
}
</script>

<style lang="scss">
@use '../../assets/styles/variables';

.hero {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: no-repeat center url('../../assets/img/1.jpg');
  height: 100vh;

  // Параллакс эффект
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
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
