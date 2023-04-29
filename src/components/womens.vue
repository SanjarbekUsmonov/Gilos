<template>
  <div>
    <div>
      <router-link to="/AyollarKiyimi">
        <h3>Ayollar kiyimi...</h3>
      </router-link>
    </div>
    <card :products = "store.womans"/>
  </div>
</template>

<script setup>
import card from './card.vue';
import { useCounterStore } from "src/stores/index"
const store = useCounterStore()
</script>

<style lang="css" scoped></style>
