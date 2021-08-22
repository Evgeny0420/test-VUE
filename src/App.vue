<template>
  <div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
