<template>
  <NavBar />
  <router-view />
  <Footer />
</template>

<script setup>
import NavBar from "./Components/Layouts/navbar.vue";
import Footer from "./Components/Layouts/footer.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
</style>
