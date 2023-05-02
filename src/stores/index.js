import { defineStore, createPinia } from 'pinia';
import { store } from 'quasar/wrappers'
import axios from 'axios'

const API_URL = "http://bazarcom.pythonanywhere.com";
export const useCounterStore = defineStore('store', {
  state: () => ({
    counter: 1,
    cotegory: [],
    boys: [],
    womans: [],
    children: [],
    smartphones: [],
    searchPanel: [],
    purchaseCard: []
  }),

  getters: {
  },

  actions: {
    async getApi() {
      let appInfo = await axios.get("http://bazarcom.pythonanywhere.com/category/");
      this.cotegory = appInfo.data;
      //console.log(this.cotegory);
      this.boys = this.cotegory[0].products;
      this.womans = this.cotegory[1].products;
      this.children = this.cotegory[2].products;
      this.smartphones = this.cotegory[3].products
      console.log(this.boys)

    },
    async getProducts() {
      let appProducts = await axios.get("http://bazarcom.pythonanywhere.com/products/")
      this.searchPanel = [...appProducts.data]
      this.purchaseCard = [...appProducts.data]
      console.log(this.searchPanel)
    },
    inc() {
      if (this.counter < 10) {
        this.counter++
      }
    },
    dec() {
      if (this.counter > 1) {
        this.counter--
      }
    }
  },

});



export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})
