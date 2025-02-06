<template>
  <div class="contacts contacts__block">
    <section class="intro contacts__intro">
      <h2 class="intro__header intro__header_title">Мои контактные данные:</h2>
      <div class="intro__details">
        <h3 class="details__header">Мой электронный адрес:</h3>
        <a href="#" class="details__email">example@mail.ru</a>
        <h3 class="details__header">И мои социальные сети:</h3>
        <div class="details__social">
          <a href="#"
            ><img src="/icons/Telegram.svg" alt="иконка Telegram" class="social__icon"
          /></a>
          <a href="#"
            ><img src="/icons/VK-Logo.svg" alt="иконка вконтакте" class="social__icon"
          /></a>
          <a href="#"
            ><img src="/icons/WhatsApp-Green.svg" alt="иконка WhatsApp" class="social__icon"
          /></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactsView',
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/variables';

.contacts {
  &__header {
    text-align: center;
    padding: 20px 0;
  }
}

.intro {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: no-repeat center url('/img/2.jpg');
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
  &__header {
    color: $color-primary;
    z-index: 2;
  }
  &__details {
    z-index: 2;
    margin-top: 20px;
    width: 400px;
    padding: 30px 50px;
    border-radius: 20px;
    color: $color-dark;
    background-color: $color-primary;
    font-family: $font-family-text;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}

.details {
  &__email {
    font-size: 2rem;
    font-family: $font-family-headers;
    margin-bottom: 20px;
    color: $color-dark;
  }
  &__email:hover {
    cursor: pointer;
    font-weight: bold;
  }
}
.social__icon {
  margin: 10px;
}

@media (max-width: 500px) {
  .intro {
    &__header {
      display: none;
    }
    &__details {
      width: 90%;
      padding: 20px;
    }
  }
  .details {
    &__email {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
  }
}
</style>
