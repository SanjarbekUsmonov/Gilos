<template>
  <div class="product_container  row bg-deep-purple-11 content-center">
    <div>
      <router-link to="/ErkaklarKiyimi"> <q-btn color="white" text-color="white" no-caps flat
          label="Erkaklar kiyimlari" /></router-link>
      <router-link to="/AyollarKiyimi"><q-btn color="white" text-color="white" no-caps flat outline
          label="Ayollar kiyimlari" /></router-link>
      <router-link to="/BolalarKiyimi"><q-btn color="white" text-color="white" no-caps flat outline
          label="Bolalar kiyimlari" /></router-link>
      <router-link to="/Smartfonlar"><q-btn color="white" text-color="white" no-caps flat outline
          label="Smartfonlar" /></router-link>
      <router-link to="/Elektronika"><q-btn color="white" text-color="white" no-caps flat outline
          label="Elektronika" /></router-link>
      <router-link to="/BrendKiyimlar"> <q-btn color="white" text-color="white" no-caps flat outline
          label="Brend kiyimlar" /></router-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.product_container {
  width: 100%;
  height: 50px;
  /* background-color: blue; */
}</style>
