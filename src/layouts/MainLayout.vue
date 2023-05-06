<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal bordered class="header bg-deep-purple-11">
      <q-toolbar>
        <q-toolbar-title class="row justify-between items-center">
          <router-link to="/" class="black text-h5 text-weight-bold"
            >Gilos.Market</router-link
          >
          <router-link to="/search">
            <q-input
              v-model="search"
              filled
              type="search"
              class="input_header"
              bg-color="indigo-1"
              color="white"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </router-link>
          <q-btn flat round icon="event" color="white" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, watch } from "vue";
import { useCounterStore } from "../stores/index";
const store = useCounterStore();
store.getProducts();
let search = ref(null);
watch(search, () => {
  store.searchPanel = store.purchaseCard.filter((product) => {
    return product.name.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>
<style scoped>
.header {
  width: 94%;
  margin: 0 auto;
}
.black {
  color: white;
}
.input_header {
  width: 400px;
  margin: 10px;
}
</style>


<!-- watch(search,()=>{
  store.search_product = store.products.filter((product) =>{
   return  product.name.toLowerCase().includes(search.value.toLowerCase())
  });
}) -->
