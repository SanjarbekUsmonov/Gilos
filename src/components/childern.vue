<template>
  <div>
    <div>
      <router-link to="/BolalarKiyimi">
        <h3>Bolalar kiyimi...</h3>
      </router-link>
    </div>
    <card :products = "store.children"/>
  </div>
</template>

<script setup>
import card from './card.vue';
import { useCounterStore } from "src/stores/index"
const store = useCounterStore()
</script>

<style lang="css" scoped></style>
