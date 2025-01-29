<template>
  <section class="my-contacts">
    <h2 class="header my-contacts__header">Давайте поработаем вместе!</h2>
    <p class="subheader my-contacts__subheader">Мои контакты:</p>
    <div class="my-contacts__social social">
      <a href="#"><img src="/icons/Telegram.svg" alt="иконка Telegram" class="social__icon" /></a>
      <a href="#"><img src="/icons/VK-Logo.svg" alt="иконка вконтакте" class="social__icon" /></a>
      <a href="#"
        ><img src="/icons/Email_inverted.svg" alt="иконка Email" class="social__icon"
      /></a>
      <a href="#"
        ><img src="/icons/WhatsApp-Green.svg" alt="иконка WhatsApp" class="social__icon"
      /></a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactsSection',
}
</script>

<style lang="scss">
@use '../../assets/styles/variables';

.my-contacts {
  padding: 40px 0;
  padding-bottom: 80px;
  background-color: $color-primary;
  &__header {
    text-align: center;
    padding: 40px 0;
  }
  &__subheader {
    text-align: center;
    font-size: $font-size-subheaders;
    font-weight: 400;
  }
  &__social,
  &__subheader {
    transform: translateY(50px);
    opacity: 0.5;
    transition:
      opacity 1s ease-in-out,
      transform 2s ease-in-out;
  }
}

.social {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 20px 0;
  overflow: hidden;

  &__icon {
    width: 75px;
    height: 75px;
    border-radius: 10px;
    cursor: pointer;
    transition: all ease-in-out 500ms;
  }
  &__icon:hover {
    transform: translateY(-5px);
  }
}
</style>
