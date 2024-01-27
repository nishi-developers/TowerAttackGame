<template>
  <button type="button" @click="nextStep">nextStep</button>
  <div id="hero">
    <img src="@/assets/character/hero.png">
  </div>
  <div id="MainCanvas">
    <Tower :Data=Tower1 />
    <div id="spacer"></div>
    <Tower :Data=Tower2 />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Tower from "@/components/tower.vue"
import Stage from "@/assets/StageData.json"

const Tower1 = ref("")
const Tower2 = ref("")
const Num = ref(0)

Tower1.value = Stage["FirstStage"][Num.value]
Tower2.value = Stage["FirstStage"][Num.value + 1]

function nextStep() {
  Num.value++
  Tower1.value = Stage["FirstStage"][Num.value]
  Tower2.value = Stage["FirstStage"][Num.value + 1]
  console.log(Tower1.value);
}

</script>

<style scoped>
#MainCanvas {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: rgb(221, 221, 221);
  display: flex;
  align-items: flex-end;
}

#spacer {
  width: 50px;
}

#hero {
  position: fixed;
}

#hero img {
  width: 100px;
}
</style>
<style>
html,
body,
div#app {
  height: 100%;
  width: 100%;
}
</style> 