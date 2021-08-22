<template>
    <div>
      <ul class="goods">
        <li class="goods__item">
          <div class="goods__photo">
            <img src="@/assets/img/rectangle-30.jpg" alt="Photo" class="goods-photo">
          </div>
          <div class="goods__about">
            <h3 class="goods__title">Наименование товара</h3>
            <p class="goods__about-text">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в
              несколько строк</p>
            <p class="goods__prise">10 000 руб.</p>
          </div>
        </li>
        <li class="goods__item">
          <div class="goods__photo">
            <img src="@/assets/img/rectangle-30.jpg" alt="Photo" class="goods-photo">
          </div>
          <div class="goods__about">
            <h3 class="goods__title">Наименование товара</h3>
            <p class="goods__about-text">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в
              несколько строк</p>
            <p class="goods__prise">10 000 руб.</p>
          </div>
        </li>
        <li class="goods__item">
          <div class="goods__photo">
            <img src="@/assets/img/rectangle-30.jpg" alt="Photo" class="goods-photo">
          </div>
          <div class="goods__about">
            <h3 class="goods__title">Наименование товара</h3>
            <p class="goods__about-text">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в
              несколько строк</p>
            <p class="goods__prise">10 000 руб.</p>
          </div>
        </li>
        <li class="goods__item">
          <div class="goods__photo">
            <img src="@/assets/img/rectangle-30.jpg" alt="Photo" class="goods-photo">
          </div>
          <div class="goods__about">
            <h3 class="goods__title">Наименование товара</h3>
            <p class="goods__about-text">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в
              несколько строк</p>
            <p class="goods__prise">10 000 руб.</p>
          </div>
        </li>
        <li class="goods__item">
          <div class="goods__photo">
            <img src="@/assets/img/rectangle-30.jpg" alt="Photo" class="goods-photo">
          </div>
          <div class="goods__about">
            <h3 class="goods__title">Наименование товара</h3>
            <p class="goods__about-text">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в
              несколько строк</p>
            <p class="goods__prise">10 000 руб.</p>
          </div>
        </li>
        <li class="goods__item">
          <div class="goods__photo">
            <img src="@/assets/img/rectangle-30.jpg" alt="Photo" class="goods-photo">
          </div>
          <div class="goods__about">
            <h3 class="goods__title">Наименование товара</h3>
            <p class="goods__about-text">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в
              несколько строк</p>
            <p class="goods__prise">10 000 руб.</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: 'Goods'
    };
</script>

<style lang="scss" scoped>
  .goods {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
  }
  .goods__item {
    width: 332px;
    min-height: 423px;
    background: #FFFEFB;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;

    &:hover {
      filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
    }
  }

  .goods__photo {
    width: 100%;
  }

  .goods__about {
    padding: 16px;
  }

  .goods__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin: 0 0 16px;
  }

  .goods__about-text {
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    margin: 0 0 32px;
  }

  .goods__prise {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    margin: 0 0 8px;
  }
</style>
