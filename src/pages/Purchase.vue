<template>
  <div>
    <div class="products">
      <products />
    </div>
    <div class="section row row justify-center items-center content-center">
      <div class="container">
        <div
          v-if="store.product != null"
          class="container q-pt-md row justify-between"
        >
          <div class="carusel">
            <info-carusel :products="store.product" />
          </div>
          <div class="info">
            <info-text :products="store.product" />
          </div>
        </div>
        <div class="q-mt-xl">
          <h1 class="text-h4">O'xshash maxsulotlar</h1>
          <card :products="store.cotegory_products" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import infoCarusel from "../components/infoCarusel";
import infoText from "../components/infoText";
import card from "../components/card";
import products from "../components/products";
import { useCounterStore } from "../stores/index";
import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
const store = useCounterStore();
store.getProducts();
let id = ref();
id.value = useRoute().params.id;
// let cardProduct = ref(null);
// let card_category = ref(null);
// let get_Api_Product = async () => {
//   let apiProducts = await axios.get(
//     "http://bazarcom.pythonanywhere.com/products/" + id.value + "/"
//   );
//   cardProduct.value = apiProducts.data;
// };
// get_Api_Product().then(async () => {
//   let apiCategory = await axios.get(
//     "http://bazarcom.pythonanywhere.com/category/" +
//       cardProduct.value.category_id +
//       "/"
//   );
//   card_category.value = apiCategory.data.products;
//   console.log(card_category.value, "khhcgfjgh");
// });
// let get_Api_Category = async () => {

// };
// get_Api_Product().then(get_Api_Category());
store.get(id.value);
// (() => {
//   store.get_Api_Product().then(async () => {
//     store.get_Api_Category();
//   });
// })();
</script>

<style lang="css" scoped>
.container {
  width: 90%;
  height: auto;
  margin: 0 auto;
}

.carusel {
  width: 45%;
  height: 410px;
  /* background: red; */
}

.info {
  width: 50%;
  height: 410px;
  /* background: yellow; */
}

.section {
  height: auto;
}
.products {
  margin: 0px 40px;
}
</style>
