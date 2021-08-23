<template>
  <div>
    <ul class="goods">
      <li class="goods__item" v-for="(good, index) in goods" :key="index">
        <Good
        :title="good.title"
        :aboutText="good.aboutText"
        :link="good.link"
        :price="good.price"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Good from "./Good/Good";
export default {
  name: 'Goods',
  components: {Good},
  data() {
    return {
      goods: [
        {
          title: `Наименование товара`,
          aboutText: `Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк`,
          link: "rectangle-30.jpg",
          price: 10000,
        },
        {
          title: `Наименование товара`,
          aboutText: `Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк`,
          link: "rectangle-30.jpg",
          price: 10000,
        },
        {
          title: `Наименование товара`,
          aboutText: `Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк`,
          link: "rectangle-30.jpg",
          price: 10000,
        },
        {
          title: `Наименование товара`,
          aboutText: `Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк`,
          link: "rectangle-30.jpg",
          price: 10000,
        },
        {
          title: `Наименование товара`,
          aboutText: `Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк`,
          link: "rectangle-30.jpg",
          price: 10000,
        },
        {
          title: `Наименование товара`,
          aboutText: `Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк`,
          link: "rectangle-30.jpg",
          price: 10000,
        },
        {
          title: `Наименование товара`,
          aboutText: `Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк`,
          link: "rectangle-30.jpg",
          price: 10000,
        },
        {
          title: `Наименование товара`,
          aboutText: `Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк`,
          link: "rectangle-30.jpg",
          price: 10000,
        },
        {
          title: `Наименование товара`,
          aboutText: `Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк`,
          link: "rectangle-30.jpg",
          price: 10000,
        },
        {
          title: `Наименование товара`,
          aboutText: `Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк`,
          link: "rectangle-30.jpg",
          price: 10000,
        },
      ]
    }
  },
}
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
</style>
