<template>
  <div>
    <div>
      <router-link to="/Smartfonlar">
        <h3>Smartfonlar...</h3>
      </router-link>
    </div>
    <div>
      <card :products = "store.smartphones"/>
    </div>
  </div>
</template>

<script setup>
import card from './card.vue';
import { useCounterStore } from "src/stores/index"
const store = useCounterStore()

</script>

<style lang="css" scoped></style>
