<template>
    <div>
      <div>
        <img :src="require('../../../assets/img/' + link)" alt="Photo" class="goods-photo" width="332">
      </div>
      <div class="goods__about">
        <h3 class="goods__title">{{ title }}</h3>
        <p class="goods__about-text">{{ aboutText }}</p>
        <p class="goods__price">{{ price }} руб.</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Good',
      props: [ 'title', 'aboutText', 'link', 'price']
    };
</script>

<style lang="scss">
.goods__photo {
  width: 332px;
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

.goods__price {
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  margin: 0 0 8px;
}
</style>
