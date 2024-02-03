<template>
  <button type="button" @click="nextStep">nextStep</button>
  <div id="MainCanvas">
    <div id="hero">
      <Character :Data="{ 'character': 'hero', 'formula': '', 'num': HP }" />
    </div>
    <Tower :Data=Tower1 />
    <div id="spacer"></div>
    <Tower :Data=Tower2 />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Character from "@/components/character.vue"
import Tower from "@/components/tower.vue"
import Stage from "@/assets/StageData.json"

const HP = ref(0)

const TowerNum = ref(0) //何番目の塔が描画されているか
const Tower1 = ref("")
const Tower2 = ref("")

Tower1.value = Stage["FirstStage"][TowerNum.value]
Tower2.value = Stage["FirstStage"][TowerNum.value + 1]

function nextStep() { //次の塔を描画するように切り替え
  TowerNum.value++
  Tower1.value = Stage["FirstStage"][TowerNum.value]
  Tower2.value = Stage["FirstStage"][TowerNum.value + 1]
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
  position: absolute;
}

#spacer {
  width: 50px;
}
</style>
<style>
html,
body,
div#app {
  height: 100%;
  width: 100%;
}

#hero{
  position: absolute;
  bottom: 20px;
  left: 30px;
  width: 100px;
  height: 130px;
  z-index: 15;
}

.chara.hero {
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}

.text.hero {
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 2rem;
}
</style> 