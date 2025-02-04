<template>
  <footer>
    <div class="row">
      <div class="logo row__column"><a href="/">Kristy V.</a></div>
      <div class="socials row__column">
        <a href="#"
          ><img src="/icons/Telegram_footer.svg" alt="иконка Telegram" class="socials__icon"
        /></a>
        <a href="#"
          ><img src="/icons/VK_footer.svg" alt="иконка вконтакте" class="socials__icon"
        /></a>
        <a href="#"
          ><img src="/icons/Email_footer.svg" alt="иконка Email" class="socials__icon"
        /></a>
        <a href="#"
          ><img src="/icons/WhatsApp_footer.svg" alt="иконка WhatsApp" class="socials__icon"
        /></a>
      </div>
    </div>
    <div class="row">
      <p class="copyright row__column">Кристина Виноградова © 2025</p>
      <div class="menu row__column">
        <a class="menu__item" href="/">Главная</a>
        <a class="menu__item" href="/portfolio">Портфолио</a>
        <a class="menu__item" href="/conditions">Условия</a>
        <a class="menu__item" href="/payment">Оплата</a>
        <a class="menu__item" href="/contacts">Контакты</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
}
</script>

<style lang="scss">
@use '../assets/styles/variables';

footer {
  background-color: $color-primary;
  padding: 40px 250px;
  box-shadow: 0 10px 10px 10px #18181833;
  .logo {
    font-family: $font-family-headers;
    font-weight: $font-weight-headers;
  }
}

footer a,
footer p {
  color: $color-dark;
}

.row {
  display: flex;
  justify-content: space-between;
  &__column {
    padding: 20px 0;
    display: flex;
    gap: 10px;
  }
}

.socials {
  &__icon {
    width: 30px;
    height: 30px;
  }
}

.menu {
  &__item {
    font-family: $font-family-text;
  }
}

.copyright {
  color: #636363;
  font-family: $font-family-text;
}
</style>
