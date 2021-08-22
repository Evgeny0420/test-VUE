<template>
  <div class="container">
    <Form/>
    <Goods/>
  </div>
</template>

<script>
import Form from "./components/Form/Form";
import Goods from "./components/Goods/Goods";

export default {
  name: 'App',
  components: {
    Form,
    Goods,
  },
}
</script>

<style lang="scss">
  .container {
    max-width: 1440px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    grid-gap: 16px;
    font-family: 'Source Sans Pro', sans-serif;
    padding: 32px;
  }
</style>
