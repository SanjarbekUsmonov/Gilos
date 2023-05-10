import { defineStore, createPinia } from 'pinia';
import { store } from 'quasar/wrappers'
import axios from 'axios'

const API_URL = "http://bazarcom.pythonanywhere.com";
export const useCounterStore = defineStore('store', {
  state: () => ({
    counter: 1,
    cotegory: null,
    boys: null,
    womans: null,
    children: null,
    //brendKiyimlar: null,
    // elektonika: null,
    smartphones: null,
    searchPanel: null,
    purchaseCard: null,
    product: null,
    cotegory_products: null,
    korzinka_product: [],
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
      this.smartphones = this.cotegory[3].products;
      // this.brendKiyimlar = this.cotegory[4].products;
      // this.elektonika = this.cotegory[5].products
      console.log(this.boys)

    },
    async getProducts() {
      let appProducts = await axios.get("http://bazarcom.pythonanywhere.com/products/")
      this.searchPanel = [...appProducts.data];
      this.purchaseCard = [...appProducts.data];
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
    },
    async get_Api_Product(id) {
      let apiProducts = await axios.get(
        "http://bazarcom.pythonanywhere.com/products/" + id + "/"
      );
      this.product = apiProducts.data;
    },
    async get_Api_Category() {
      let apiCategory = await axios.get(
        "http://bazarcom.pythonanywhere.com/category/" +
        this.product.category_id +
        "/"
      );
      this.cotegory_products = apiCategory.data.products
    },
    get(id) {
      this.get_Api_Product(id).then(async () => {
        this.get_Api_Category()
        this.counter = 1
      })
    },

    addKorzinka(product) {
      let params = {
        quantity: 1,
        total: product.prince,
      }
      this.korzinka_product.push(Object.assign(product, params))
      console.log(this.korzinka_product);
    }
  },

});



export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})
