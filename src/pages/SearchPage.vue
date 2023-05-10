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

// let person = {
//   name: "Ali",
//   surname: "Madiminov",
// };
// person.age = 22;
// console.log(person);

// var obj = { key1: "value1", key2: "value2" };
// var pair = { key3: "value3" };
// var scalar = "value4";
// obj = { ...obj, ...pair, scalar };

// console.log(obj);
// var obj = {key1: "value1", key2: "value2"};
// Object.assign(obj, {key3: "value3"});
</script>

<style lang="css" scoped>
div {
  padding: 20px;
}
</style>
