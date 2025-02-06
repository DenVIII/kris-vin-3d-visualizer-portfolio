<template>
  <nav class="navbar">
    <a href="/" class="navbar__logo">Kristy V.</a>
    <div class="navbar__items">
      <a class="navbar__item" v-for="(route, index) in routes" :href="route.ref" :key="index">{{
        route.name
      }}</a>
    </div>
    <dropdown-menu direction="center" class="navbar__items mobile">
      <template #trigger>
        <button class="navbar__btn">Меню</button>
      </template>

      <template #header></template>
      <template #body>
        <ul>
          <li class="navbar__item" v-for="(route, index) in routes" :key="index">
            <a class="navbar__item" :href="route.ref">{{ route.name }}</a>
          </li>
        </ul>
      </template>
      <template #footer></template>
    </dropdown-menu>
  </nav>
</template>

<script>
import DropdownMenu from 'v-dropdown-menu'
import 'v-dropdown-menu/css'

export default {
  name: 'NavBar',
  components: {
    DropdownMenu,
  },
  data: () => ({
    routes: [
      {
        name: 'Портфолио',
        ref: '/portfolio',
      },
      {
        name: 'Условия',
        ref: '/conditions',
      },
      {
        name: 'Оплата',
        ref: '/payment',
      },
      {
        name: 'Контакты',
        ref: '/contacts',
      },
    ],
  }),
}
</script>

<style lang="scss">
@use '../assets/styles/variables';

.navbar {
  position: sticky;
  top: 0;
  background-color: $color-primary;
  z-index: 99;
  min-height: 50px;
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

.mobile {
  display: none;
}

@media (max-width: 500px) {
  .navbar {
    padding: 10px;
    &__logo {
      padding: 10px;
    }
    &__item {
      padding: 5px;
    }
    &__btn {
      background-color: $color-primary;
      color: $color-dark;
      font-family: $font-family-text;
      border: none;
      height: 100%;

      padding: 10px;
    }
  }
  .navbar__items:not(.mobile) {
    display: none;
  }
  .mobile {
    display: block;
    z-index: 1000;
  }
}
</style>
