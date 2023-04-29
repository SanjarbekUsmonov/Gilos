<template>
  <div>
    <div class="products">
      <products/>
    </div>
   <div class="container">
    <h3>Brend kiyimlari...</h3>
      <div class="q-px-lg">
        <card/>
      </div>
   </div>
  </div>
</template>

<script setup>
  import card from '../components/card.vue';
  import products from '../components/products.vue'
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
