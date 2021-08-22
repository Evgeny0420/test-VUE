<template>
  <div>
    <h2 class="title">Добавление товара</h2>
    <div class="form">
      <form class="form__forms">
        <div class="form__item">
          <label for="name">Наименование товара</label>
          <input  class="form__input" type="text" id="name" name="name" placeholder="Введите нименование товара">
        </div>
        <div class="form__item">
          <label for="about">Описание товара</label>
          <textarea class="form__input form__input--textarea" name="about" id="about" cols="30" rows="10" placeholder="Введите описание товара"></textarea>
        </div>
        <div class="form__item">
          <label for="link-img">Ссылка на изображение товара</label>
          <input class="form__input" type="text" name="link-img" id="link-img" placeholder="Введите ссылку">
        </div>
        <div class="form__item">
          <label for="price">Цена товара</label>
          <input class="form__input" type="text" name="price" id="price" placeholder="Введите цену">
        </div>
        <button class="form__button" type="submit">Добавить товар</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form'
};
</script>

<style lang="scss" scoped>
.title {
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3F3F3F;
  margin: 0 0 16px;
}
.form {
  width: 332px;
  height: 440px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  margin: 0;
  background: #FFFEFB;
}

.form__forms {
  padding: 24px;
}

.form__item {
  display: flex;
  flex-direction: column;
  margin: 0 0 16px;

  label {
    font-weight: normal;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485E;
  }
}

.form__input {
  height: 36px;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px 16px;
  font-family: Source Sans Pro;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  background: #FFFEFB;

  &--textarea {
    height: 108px;
    resize: none;
  }
}

.form__button {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #B4B4B4;
  letter-spacing: -0.02em;
  border: none;
  width: 100%;
  height: 36px;
  background: #EEEEEE;
  border-radius: 10px;
  margin: 8px 0 0;

  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  &:active,
  &:focus {
    background: #728FAB;
    color: #4C555E;
  }
}
</style>
