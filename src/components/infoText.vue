<template>
  <div v-if="products != null">
    <div class="info-text text-h5 text-weight-medium">
      {{ products.name }}
    </div>
    <div class="info-data q-mt-md">
      <div class="text-grey-8">
        <span>Sotuvchi:</span> <span class="q-ml-xl">Nomalum</span>
      </div>
      <div class="text-grey-8">
        <span>Yetkazib berish:</span> <span>1 kun, bepul</span>
      </div>
    </div>
    <q-separator class="q-mt-md" />
    <div class="info-amount">
      <div class="q-mt-lg text-h6"><b>Miqdor:</b></div>
      <div
        class="info-amount-active bg-indigo-1 row justify-between items-center content-center"
      >
        <q-btn @click="piniaStore.dec()" color="red" glossy label="-" />
        <strong>{{ piniaStore.counter }}</strong>
        <q-btn @click="piniaStore.inc()" color="green" glossy label="+" />
      </div>
      <div class="info-amount-cost q-mt-lg text-h6">
        Narxi:
        <span class="text-grey-6">
          {{ products.prince * piniaStore.counter }} so'm</span
        >
      </div>
      <div class="info-amount-cost-active text-grey-8">
        {{ products.info }}
      </div>
    </div>
    <div class="info-btn q-mt-xl row">
      <q-btn
        color="indigo-4"
        glossy
        label="Savatga qo'shish"
        padding="10px 20px"
      />
      <q-btn
        color="white"
        glossy
        text-color="black"
        label="Darhol sotib olish"
        padding="10px 20px"
        class="q-ml-md"
      />
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/index";
const piniaStore = useCounterStore();
const props = defineProps({ products: Object });
</script>

<style lang="scss" scoped>
</style>
