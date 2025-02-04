<template>
  <section class="about">
    <h2 class="header about__header">Обо мне:</h2>
    <div class="wrapper">
      <div class="about__content">
        <p class="about__caption">
          Занимаюсь 3D-визуализацией жилых интерьеров. Разрабатываю композицию кадра и освещение,
          подбираю декор для передачи объема и атмосферы пространства.
        </p>
        <p class="about__caption">
          Со мной вы получите качественную визуализацию концепции в согласованном световом сценарии
          точно в срок. Если у вас есть вопросы или хотите обсудить проект, свяжитесь со мной — я
          всегда на связи.
        </p>
        <p class="about__caption">
          Использую следующие инструменты:
          <br />
          <b>3Ds Max / Corona Renderer / V-Ray / Adobe Photoshop</b>
        </p>
        <div class="icons">
          <img src="/icons/3ds-Max.svg" alt="3Ds Max" class="icon" />
          <img src="/icons/Chaos-Corona-01.svg" alt="3Ds Max" class="icon" />
          <img src="/icons/V-Ray.svg" alt="3Ds Max" class="icon" />
          <img src="/icons/Adobe-Photoshop.svg" alt="3Ds Max" class="icon" />
        </div>
      </div>
      <img
        src="/img/close-up-1.jpg"
        alt="Пример работы: близкое изображение цветка перед загородным домом"
        class="about__image"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
}
</script>

<style lang="scss">
@use '../../assets/styles/variables';

.about {
  min-height: 100vh;
  padding: 40px 0;
  .wrapper {
    position: relative;
    min-height: 80%;
  }
  &__header {
    text-align: center;
    margin-bottom: 40px;
  }
  &__content,
  &__image {
    transform: translateY(100px);
    transition:
      opacity 1s ease-in-out,
      transform 2s ease-in-out;
  }
  &__content {
    position: absolute;
    margin-top: 40px;
    left: 20%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    background-color: $color-primary;
    border-radius: 20px;
    width: 500px;
    height: 500px;
    padding: 40px;
  }
  &__caption {
    text-indent: 2ch;
    text-align: left;
    color: $color-dark;
    font-family: $font-family-text;
  }
  &__image {
    position: absolute;
    top: 0%;
    right: 10%;
    width: 600px;
    height: 400px;
    border-radius: 20px;
  }
}
.icons {
  display: flex;
  gap: 10px;
  .icon {
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
}

@media (max-width: 1024px) {
  .about {
    margin: 0 auto;
    width: 768px;
    &__content {
      position: static;
    }
    &__image {
      top: -5%;
      right: -10%;
      width: 400px;
      height: 300px;
      border-radius: 10px;
      z-index: -1;
    }
  }
}
</style>
