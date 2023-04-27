<template>
  <q-layout view="hHh lpR fFf">


      <q-header reveal  bordered class=" header bg-white text-white">
      <q-toolbar>
        <q-toolbar-title class="row justify-between items-center">
          <router-link to="/" class="black text-h5 text-weight-bold">Gilos</router-link>
        <router-link to="/search" >
          <q-input class="input" v-model="search" outlined type="search" >
          <template v-slot:append>
          <q-icon name="search" />
        </template>
         </q-input>
        </router-link>
          <q-btn flat round icon="event" color="black"/>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>




    <q-page-container>
      <router-view />
    </q-page-container>



    <q-footer  class="bg-grey-8 text-white">

    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from "vue";
let search = ref('')
</script>
<style scoped>
.header{
  width: 90%;
  margin: 0 auto;
}
.black{
color: black;
}
.input{
  width: 400px;
}

</style>
