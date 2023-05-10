<template>
  <div class="q-gutter-md row justify-between">
    <router-link
      :to="'/p/' + card.id + '/'"
      class="my-card"
      v-for="card in products"
      :key="card"
      @click="store.get(card.id)"
    >
      <q-img style="height: 250px" :src="card.img" />

      <div class="q-pa-md">
        <div>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis" style="font-weight: 700">
              {{ card.name }}
            </div>
          </div>
          <q-rating v-model="stars" :max="5" size="22px" />
        </div>

        <div>
          <div style="font-weight: 600" class="text-grey-7">
            {{ card.info }}
          </div>
          <div class="prince text-black" style="font-weight: 800">
            Narxi: {{ card.prince }}
          </div>
        </div>
        <div>
          <!-- <q-btn flat round icon="event" /> -->
          <q-btn
            @click="store.addKorzinka(card)"
            size="15px"
            color="indigo-3"
            no-caps
            text-color="white"
            glossy
            label="Savatga qo'shish"
            class="btn"
          />
        </div>
      </div>
    </router-link>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useCounterStore } from "../stores/index";
const store = useCounterStore();
const stars = ref(4);
const props = defineProps({ products: Array });
</script>

<style lang="css" scoped>
.my-card {
  width: 100%;
  height: 423px;
  cursor: pointer;
  max-width: 250px;
  background: rgb(255, 255, 255);
  -webkit-box-shadow: -4px 5px 40px -10px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: -4px 5px 40px -10px rgba(34, 60, 80, 0.2);
  box-shadow: -4px 5px 40px -10px rgba(34, 60, 80, 0.2);
}

.my-card:hover {
  box-shadow: 1px 2px 3px grey;
}

a {
  text-decoration: none;
  color: black;
}

.prince {
  margin-top: 8px;
}

.btn {
  width: 100%;
  margin-top: 10px;
}
</style>
