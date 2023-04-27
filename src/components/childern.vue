<template>
  <div>
    <div class=" ">
      <h3 style="font-weight: 450;">Bolalar kiyimi...</h3>
    </div>
    <card/>
  </div>
</template>

<script setup>
import card from './card.vue';
import {useCounterStore} from "src/stores/index"
const store = useCounterStore()
</script>

<style lang="css" scoped>

</style>
