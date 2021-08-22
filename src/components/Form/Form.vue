<template>
  <div class="Form">
    <form action="">
      <div class="item-form">
        <label for="name">Наименование товара</label>
        <input type="text" id="name" name="name" placeholder="Введите нименование товара">
      </div>
      <div class="item-form">
        <label for="about">Описание товара</label>
        <textarea name="about" id="about" cols="30" rows="10" placeholder="Введите описание товара"></textarea>
      </div>
      <div class="item-form">
        <label for="link-img">Ссылка на изображение товара</label>
        <input type="text" name="link-img" id="link-img" placeholder="Введите ссылку">
      </div>
      <div class="item-form">
        <label for="price">Цена товара</label>
        <input type="text" name="price" id="price" placeholder="Введите цену">
      </div>
      <button type="submit">Добавить товар</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form'
};
</script>

<style lang="scss">
  .item-form {
    display: flex;
    flex-direction: column;
  }
</style>
