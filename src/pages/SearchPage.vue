<template>
  <div class="q-px-lg">
    <Card :products="store.searchPanel" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Card from "src/components/card.vue";
import { useCounterStore } from "../stores/index";
const store = useCounterStore();
store.getProducts();
</script>

<style lang="css" scoped>
div {
  padding: 20px;
}
</style>
