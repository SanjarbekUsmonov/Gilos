import { defineStore, createPinia } from 'pinia';
import {store} from 'quasar/wrappers'
import axios from 'axios'


export const useCounterStore = defineStore('store', {
  state: () => ({


  }),
  getters: {

  },
  actions: {

  },

});



export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})
