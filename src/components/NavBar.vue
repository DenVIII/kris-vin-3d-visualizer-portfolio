<template>
  <nav class="navbar">
    <a href="#" class="navbar__logo">Kristy V.</a>
    <div class="navbar__items">
      <a class="navbar__item" href="#">Портфолио</a>
      <a class="navbar__item" href="#">Условия</a>
      <a class="navbar__item" href="#">Оплата</a>
      <a class="navbar__item" href="#">Контакты</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style lang="scss">
@use '../assets/styles/variables';

.navbar {
  position: sticky;
  top: 0;
  overflow: hidden;
  background-color: $color-primary;
  z-index: 99;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 15px 40px;
  & > * {
    color: $color-dark;
  }

  &__logo {
    font-family: $font-family-headers;
    font-weight: $font-weight-headers;
  }

  &__items {
    font-family: $font-family-text;
  }

  &__item {
    position: relative;
    padding: 15px 20px;
    color: $color-dark;
  }
  &__item:hover {
    cursor: pointer;
    color: $color-accent;
  }
}
</style>
