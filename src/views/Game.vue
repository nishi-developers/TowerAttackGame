<template>
  <button type="button" @click="nextStep">nextStep</button>
  <div id="MainCanvas">
    <div id="hero">
      <Character :CharaData="{ 'character': 'hero', 'formula': '', 'num': HP }" />
      <!--プレイヤー(position: absolute;) キャラコンポーネントから直接描画-->
    </div>
    <Tower :TowerData=Tower1 :key="key1" /> <!--描写する1つ目の塔 この塔の構成要素を送信-->
    <div id="spacer"></div>
    <Tower :TowerData=Tower2 @clickTower="ClickChara" :key="key2" /> <!--描写する2つ目の塔 この塔の構成要素を送信 2つめの塔のみクリックを受け付ける-->
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue'
import Character from "@/components/character.vue"
import Tower from "@/components/tower.vue"
import Stages from "@/assets/StageData.json"
const Stage = Stages["FirstStage"]
const HP = ref(0)
// keyによる再描画
// 2つの塔にkey属性を追加し、そのkeyを更新することで、塔コンポーネントを明示的に再描画する
// https://qiita.com/fuminopen/items/34eb14d6e74c3a9fcbf0
const key1 = ref(0)
const key2 = ref(0)

const TowerNum = ref(0) //何番目の塔が描画されているか
const Tower1 = ref("")
const Tower2 = ref("")

Tower1.value = Stage[TowerNum.value]
Tower2.value = Stage[TowerNum.value + 1]

function nextStep() { //次の塔を描画するように切り替え
  TowerNum.value++
  Tower1.value = Stage[TowerNum.value]
  Tower2.value = Stage[TowerNum.value + 1]
}

function ClickChara(Num) {
  Stage[TowerNum.value + 1][Num] = { "character": "-", "formula": "", "num": "" },
    key2.value = key2.value ? 0 : 1
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

#hero {
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