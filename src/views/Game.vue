<template>
  <div id="MainCanvas">
    <div id="Base">
      <Tower :Data=Tower1 />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

import Tower from "@/components/tower.vue"
import Stage from "@/assets/StageData.json"

const Tower1 = ref("")
Tower1.value = Stage["FirstStage"][1]
</script>

<style scoped>
#MainCanvas {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: rgb(221, 221, 221);
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