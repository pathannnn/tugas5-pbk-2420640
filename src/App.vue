<template>
  <q-layout view="hHh lpR fFf">
    <Navbar />
    <q-page-container>
      <Carousel />
      <div class="q-pa-md">
        <q-page class="row justify-around">
          <ProductCard v-for="n in 3" :key="n" />
        </q-page>
      </div>
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Carousel from "./components/Carousel.vue";
import ProductCard from "./components/ProductCard.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Carousel,
    ProductCard,
    Footer,
  },
};
</script>

<style>
body {
  font-family: "Arial", sans-serif;
}
</style>
