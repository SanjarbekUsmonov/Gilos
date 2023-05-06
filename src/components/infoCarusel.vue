<template>
  <div>
    <q-carousel swipeable animated v-model="slide" thumbnails infinite>
      <q-carousel-slide :name="1" :img-src="props.products.img" />
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import { useCounterStore } from "../stores/index";
// store.useCounterStore();
const props = defineProps({ products: Object });
const slide = ref(1);
</script>
