<template>
  <div>
    <router-link to="/ErkaklarKiyimi">
      <h3>Erkaklar kiyimlari...</h3>
    </router-link>
    <card :products = "store.boys"/>
  </div>
</template>

<script setup>
import card from './card.vue';
import {useCounterStore} from '../stores/index'
const store = useCounterStore()
</script>

<style lang="css" scoped></style>
