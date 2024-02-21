<template>
  <RouterView />
  <Footer></Footer>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Footer from "@/components/footer.vue"

</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=DotGothic16&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  /* font-family: "DotGothic16"; */
  font-family: "Noto Sans JP";
}
</style>