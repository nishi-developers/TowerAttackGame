<template>
  <!-- <button type="button" @click="nextStep">nextStep</button> -->
  <div id="MainCanvas" :style="{
    'background-image': 'url(/src/assets/background/' + BackgroundImage + ')'
  }">
    <div id="GameStart" class="overlay" v-if="isGameStart">
      <div id="startButton" class="click" @click="gameStart()">
        <p>GameStart</p>
      </div>
    </div>
    <div id="GameOver" class="overlay" v-if="isGameOver">
      <p>GameOver</p>
    </div>
    <div id="hero" :style="{ 'left': HeroLeft + 'px', 'bottom': HeroBottom + 'px' }">
      <Character :CharaData="{ 'character': 'hero', 'formula': '', 'num': HP }" />
      <!--プレイヤー(position: absolute;) キャラコンポーネントから直接描画-->
    </div>
    <Tower :TowerData=Tower1 :key="key1" /> <!--描写する1つ目の塔 この塔の構成要素を送信-->
    <div id="spacer"></div>
    <Tower :TowerData=Tower2 @clickTower="ClickChara" :key="key2" /> <!--描写する2つ目の塔 この塔の構成要素を送信 2つめの塔のみクリックを受け付ける-->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Character from "@/components/character.vue"
import Tower from "@/components/tower.vue"
import StageData from "@/assets/StageData.json"
const Stage = StageData["FirstStage"]["Stage"]
const BackgroundImage = ref(StageData["FirstStage"]["background"])
const HP = ref(StageData["FirstStage"]["PlayerHP"])
const isGameStart = ref(true)
const isGameOver = ref(false)
// keyによる再描画
// 2つの塔にkey属性を追加し、そのkeyを更新することで、塔コンポーネントを明示的に再描画する
// https://qiita.com/fuminopen/items/34eb14d6e74c3a9fcbf0
const key1 = ref(0) // 0 or 1
const key2 = ref(2) // 2 or 3

const TowerNum = ref(0) //何番目の塔が描画されているか
const Tower1 = ref("")
const Tower2 = ref("")

Tower1.value = Stage[TowerNum.value]
Tower2.value = Stage[TowerNum.value + 1]

// Playerの位置
const HeroLeft = ref(0)
const HeroBottom = ref(0)
function HeroPossition(x, y) {
  HeroLeft.value = x
  HeroBottom.value = y
}
HeroPossition(30, 20)
// HeroPossition(230, 120)
// HeroPossition(230, 220)



function gameStart() {
  isGameStart.value = false
}

function nextStep() { //次の塔を描画するように切り替え
  TowerNum.value++
  Tower1.value = Stage[TowerNum.value]
  Tower2.value = Stage[TowerNum.value + 1]
  HeroPossition(30, 20)
}

function ClickChara(Num) {
  Calc(Stage[TowerNum.value + 1][Num]["num"], Stage[TowerNum.value + 1][Num]["formula"])
  Stage[TowerNum.value + 1][Num] = { "character": "", "formula": "", "num": "" } //ステージ情報からキャラを削除
  key2.value = key2.value == 3 ? 2 : 3 //塔2を明示的に再描画
  // プレイヤーの移動
  var UnderNum = Stage[TowerNum.value + 1].length - Num
  HeroPossition(230, 20 + 100 * UnderNum)
  console.log(UnderNum);
  checkLive() // 生きているかをチェック
  // 敵がいるかを確認し、塔内の全ての敵がいなければ次の塔へ
  let count = 0
  for (let i = 0; i < Stage[TowerNum.value + 1].length; i++) {
    if (Stage[TowerNum.value + 1][i]["character"] != "") {
      count++
      break
    }
  }
  if (count == 0) {
    nextStep()
  }
}
function checkLive() {
  if (HP.value <= 0) {
    isGameOver.value = true
  }
}
function Calc(Num, formula) { //プレイヤーのHPを計算&適用
  switch (formula) {
    case "+":
      HP.value = HP.value + Num
      break
    case "-":
      HP.value = HP.value - Num
      break
    case "×":
      HP.value = HP.value * Num
      break
    case "÷":
      HP.value = HP.value / Num
      HP.value = Math.round(HP.value / Num)
  }
}

</script>

<style scoped>
#MainCanvas {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  /* background-color: rgb(221, 221, 221); */
  display: flex;
  align-items: flex-end;
  position: absolute;
}

.overlay {
  position: fixed;
  top: 0;
  z-index: 100;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay p {
  font-size: 5rem;
}

#startButton {
  background-color: rgb(70, 196, 255);
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: red;
  border-radius: 8px;
  height: 120px;
  width: 400px;
  position: relative;
}

#startButton p {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
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
  /* bottom: 20px; */
  /* left: 30px; */
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

/* Cursor */
* {
  cursor: url("@/assets/cursor/cursor.png"), auto;
}

.click *:active {
  cursor: url("@/assets/cursor/click.png"), auto;
}
</style> 