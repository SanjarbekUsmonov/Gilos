<template>
  <div>
    <div class="products">
      <products/>
    </div>
   <div class="container">
    <h3>Smartfonlar...</h3>
      <card class="q-px-lg" :products="store.smartphones"/>
   </div>
  </div>
</template>

<script setup>
  import card from '../components/card.vue';
  import products from '../components/products.vue'
  import {useCounterStore} from '../stores/index'
  const store = useCounterStore()
  store.getApi()
</script>

<style lang="scss" scoped>
.container{
  padding: 20px;
}
h3{
  padding-left: 13px;
}
.products{
  margin: 0px 40px;
}
</style>
