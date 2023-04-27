<template>
  <div>
    <section>
      <div class="container">
        <carusel/>
        <div>
          <boys />
        </div>
        <div class="clothes q-pa-md">
          <q-img style="cursor: pointer;"
            src="https://images.uzum.uz/cetufm0l08k0o9qhg7d0/main_page_banner.jpg"
          />
        </div>
        <div>
          <smartphones />
        </div>
        <div class="clothes q-pa-md" >
          <q-img style="cursor: pointer;"
            src="https://images.uzum.uz/cetug62vtie1lhbghhn0/main_page_banner.jpg"
          />
        </div>
        <div>

          <womens />
        </div>
        <div>
          <childern/>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Boys from "../components/boys";
import carusel from "../components/carusel";
import Smartphones from "../components/smartphones";
import Womens from "../components/womens";
import Childern from "../components/childern";
</script>

<style lang="css" scoped>
.container {
  width: 90%;
  height: auto;
  margin: 0 auto;
  background: rgb(255, 255, 255);
}
</style>
