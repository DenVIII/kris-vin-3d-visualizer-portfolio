<template>
  <section class="about">
    <div class="wrapper">
      <h2 class="about__header">Обо мне:</h2>
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
          <img src="../../assets/icons/3ds-Max.svg" alt="3Ds Max" class="icon" />
          <img src="../../assets/icons/Chaos-Corona-01.svg" alt="3Ds Max" class="icon" />
          <img src="../../assets/icons/V-Ray.svg" alt="3Ds Max" class="icon" />
          <img src="../../assets/icons/Adobe-Photoshop.svg" alt="3Ds Max" class="icon" />
        </div>
      </div>
      <img
        src="../../assets/img/close-up-1.jpg"
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
  height: 100vh;
  padding: 40px 0;
  .wrapper {
    position: relative;
    height: 80%;
  }
  &__header {
    text-align: center;
    font-size: $font-size-headers;
    font-weight: $font-weight-headers;
    font-family: $font-family-headers;
  }
  &__content {
    position: absolute;
    top: 22%;
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
    text-justify: auto;
    color: $color-dark;
    font-family: $font-family-text;
  }
  &__image {
    position: absolute;
    top: 15%;
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
</style>
