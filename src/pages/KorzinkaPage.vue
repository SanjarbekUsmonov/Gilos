<template>
  <div class="products">
    <products />
  </div>
  <div class="column">
    <div class="text-h4 q-ml-xl q-mt-lg" style="font-weight: 600">
      Savat: <span class="text-grey">{{ piniaStore.counter }} mahsulot</span>
    </div>
    <div class="container bg-grey">
      <div class="contend__card q-pa-lg row" v-for="card in 1" :key="card">
        <div class="contend__card-img">
          <q-img :src="piniaStore.img" alt="" />
        </div>
        <div class="contend__card-texts q-pa-md">
          <div class="row justify-between items-center content-center">
            <div class="content__card-name">
              {{ piniaStore.info }}
            </div>
            <q-btn text-color="red" label="Delete" no-caps />
          </div>
          <div class="row row justify-between items-center content-center">
            <div><span class="text-grey-7">Sotuvchi:</span> Nomalum</div>
            <div
              class="info-amount-active bg-indigo-1 row justify-between items-center content-center"
            >
              <q-icon
                name="remove_circle_outline "
                size="22px"
                class="i1 q-ml-md"
                @click="piniaStore.dec()"
              />
              <!-- <q-btn

                text-color="red"
                glossy
                label="-"
              /> -->
              <strong>{{ piniaStore.counter }}</strong>
              <q-icon
                name="add_circle_outline "
                size="22px"
                class="i2 q-mr-md"
                @click="piniaStore.inc()"
              />
              <!-- <q-btn
                style="font-size: 10px"

                text-color="green"
                glossy
                label="+"
              /> -->
            </div>
            <div>
              <strong>{{ piniaStore.prince }}</strong>
            </div>
            <div>Umumiy narxi: <strong>20000 so'm</strong></div>
          </div>
        </div>
      </div>
      <div class="btn q-pa-md">
        <q-btn color="green" glossy label="Rasmiylashtirish" />
      </div>
    </div>
  </div>
</template>

<script setup>
import products from "../components/products";
import { ref } from "vue";
import { useCounterStore } from "../stores/index";
const piniaStore = useCounterStore();
piniaStore.getProducts();
</script>

<style scoped>
.i1:active {
  color: red;
}
.i2:active {
  color: rgb(45, 200, 45);
}
.products {
  margin: 0px 40px;
}
.container {
  width: 94%;
  /* height: 400px; */
  margin: 0 auto;
  /* margin-top: 20px; */
}
.contend__card {
  width: 70%;
  height: 160px;
  /* background-color: aqua; */
  border-bottom: 1px solid grey;
}
.contend__card-img {
  width: 10%;
  height: 100%;
}
.contend__card-texts {
  width: 90%;
  height: 100%;
}
.btn {
  width: 100%;
  height: 80px;
  background-color: blue;
  margin: 0 auto;
}
</style>
