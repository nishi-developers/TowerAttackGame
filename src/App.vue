<template>
  <!-- クリック時の画像を読ませることで、一回目のクリックから画像が表示されるようにする -->
  <img src="@/assets/cursor/cursor.webp" style="display: none;">
  <img src="@/assets/cursor/click.webp" style="display: none;">
  <RouterView :key="$route.fullPath"/>
  <Footer></Footer>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Footer from "@/components/footer.vue"

</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=DotGothic16&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap');

:root {
  --footer: 10%;
  /* --footer: 15%; */
}

* {
  margin: 0;
  padding: 0;
  /* font-family: "DotGothic16"; */
  font-family: "Noto Sans JP";
}

/* Cursor */
* {
  cursor: url("@/assets/cursor/cursor.webp"), auto;
}

/* .click:active,
.click *:active { 
なぜかこれは使えない
  */
*:active {
  cursor: url("@/assets/cursor/click.webp"), auto;
}

.RouterLink {
  text-decoration: none;
}
</style>