<template>
  <div class="payment">
    <h2 class="payment__header payment__header_text">Оплата</h2>
    <section class="intro payment__intro">
      <h2 class="intro__header intro__header_title">Цена и условия оплаты</h2>
      <p class="intro__caption">
        Стоимость визуализации начинается от <span class="highlight">700 р./м².</span> Точную цену я
        смогу назвать после изучения вашего технического задания.
      </p>
    </section>
    <section class="payment__details details">
      <h2 class="details__header">Подробнее:</h2>
      <ul class="details__list list">
        <h3 class="list__subheader subheader">Что входит в стоимость:</h3>
        <li class="list__item item">
          Сборка 3D-сцены и моделирование корпусной мебели на заказ (без сложной фрезеровки,
          например, ровные кухонные фасады).
        </li>
        <li class="list__item item">
          Настройка освещения и детальная проработка всех элементов интерьера.
        </li>
        <li class="list__item item">
          Два круга правок:
          <ul class="list sub_list">
            <li class="list__item item sub_item">
              Первый — на этапе черновых рендеров (изменения в геометрии, материалах, освещении и
              декоре).
            </li>
            <li class="list__item item sub_item">Второй — после финальных рендеров.</li>
          </ul>
        </li>
        <li class="list__item item">Финальная обработка рендеров в Photoshop.</li>
      </ul>
      <ul class="details__list list">
        <h3 class="list__subheader subheader">Дополнительные условия:</h3>
        <li class="list__item item">
          <span class="highlight">3D-моделирование мебели: </span> Если нужной модели мебели нет в
          библиотеке, стоимость ее создания обсуждается отдельно.
        </li>
        <li class="list__item item">
          <span class="highlight">Техническое задание: </span>Для точного расчета стоимости
          необходимо полное ТЗ, включающее планы помещений, подборку текстур, ссылки на модели
          мебели и другие детали.
        </li>
        <li class="list__item item">
          <span class="highlight">Дедлайны: </span>Срочные проекты оплачиваются с наценкой от
          <span class="hightlight">30%</span>.
        </li>
        <li class="list__item item">
          <span class="highlight">Разработка дизайна интерьера: </span>Если требуется создание
          дизайн-проекта без чертежей (эскизный вариант), стоимость составит от
          <span class="highlight">2400 руб./кв.м.</span>
        </li>
      </ul>
      <ul class="details__list list">
        <h3 class="list__subheader subheader">Габариты помещения:</h3>
        <li class="list__item item">
          Для помещений <span class="highlight">до 10 м²</span> действует фиксированная цена:
          <span class="highlight">от 7000 рублей.</span>
        </li>
        <li class="list__item item">
          Если помещение <span class="highlight">до 10 м²</span> является частью квартиры, расчет
          идет по общей площади.
        </li>
        <li class="list__item item">
          Для больших объектов (от 150 м², офисы, банкетные или актовые залы) стоимость начинается
          от <span class="hightlight">200 р./м²</span>
        </li>
      </ul>
      <ul class="details__list list">
        <h3 class="list__subheader subheader">Условия оплаты:</h3>
        <li class="list__item item">
          Для начала работы требуется предоплата в размере <span class="highlight">50%</span>.
        </li>
        <li class="list__item item">
          Остальная сумма оплачивается поэтапно в процессе выполнения проекта.
        </li>
        <li class="list__item item">Финальные рендеры передаются после полной оплаты.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PaymentView',
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/variables';

.highlight {
  font-weight: 600;
}

.payment {
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
  height: 85vh;

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
  &__caption {
    z-index: 2;
    margin-top: 20px;
    width: 400px;
    height: 150px;
    padding: 30px 50px;
    border-radius: 20px;
    color: $color-dark;
    background-color: $color-primary;
    font-family: $font-family-text;
  }
}

.details {
  width: 960px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  margin: 0 auto 40px auto;
  &__header {
    text-align: center;
    padding: 20px 0;
    grid-area: 1 / 1 / 2 / 3;
  }
}

.list {
  background-color: $color-primary;
  border-radius: 20px;
  padding: 20px 40px;
  &__item,
  &__subheader {
    margin-bottom: 10px;
    color: $color-dark;
  }
  &__subheader {
    font-family: $font-family-headers;
  }
  &__item {
    font-family: $font-family-text;
    list-style-type: disc;
  }
}

.sub_item {
  list-style-type: circle;
}

.sub_item:last-child {
  margin-bottom: 0;
}
</style>
