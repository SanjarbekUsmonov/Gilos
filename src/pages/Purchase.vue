<template>
  <div class="products">
    <products />
  </div>
  <div class="section row row justify-center items-center content-center">
    <div class="container q-pt-md row justify-between">
      <div class="carusel">
        <info-carusel />
      </div>
      <div class="info">
        <info-text />
      </div>
      <div class="q-mt-xl">
        <card :products="store.purchaseCard" />
      </div>
    </div>
  </div>
</template>

<script setup>
import infoCarusel from "../components/infoCarusel";
import infoText from "../components/infoText";
import card from "../components/card";
import products from "../components/products";
import { useCounterStore } from "../stores/index";
const store = useCounterStore();
store.getProducts();
</script>

<style lang="css" scoped>
.container {
  width: 90%;
  height: auto;
  margin: 0 auto;
}

.carusel {
  width: 45%;
  height: 410px;
  /* background: red; */
}

.info {
  width: 50%;
  height: 410px;
  /* background: yellow; */
}

.section {
  height: auto;
}
.products {
  margin: 0px 40px;
}
</style>
