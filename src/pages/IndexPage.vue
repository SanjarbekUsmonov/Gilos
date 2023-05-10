<template>
  <div class="container">
    <products />
    <carusel />
    <boys />
    <div class="clothes q-pa-md">
      <router-link to="/BrendKiyimlar">
        <q-img
          style="cursor: pointer"
          src="https://images.uzum.uz/cetufm0l08k0o9qhg7d0/main_page_banner.jpg"
        />
      </router-link>
    </div>
    <smartphones />
    <div class="clothes q-pa-md">
      <router-link to="/Elektronika">
        <q-img
          style="cursor: pointer"
          src="https://images.uzum.uz/cetug62vtie1lhbghhn0/main_page_banner.jpg"
        />
      </router-link>
    </div>
    <womens />
    <childern />
  </div>
</template>

<script setup>
import Boys from "../components/boys";
import carusel from "../components/carusel";
import Smartphones from "../components/smartphones";
import Womens from "../components/womens";
import Childern from "../components/childern";
import products from "../components/products";
import { useCounterStore } from "../stores/index";
const store = useCounterStore();
store.getApi();
</script>

<style lang="css" scoped>
.container {
  width: 94%;
  height: auto;
  margin: 0 auto;
  background: white;
}
</style>
