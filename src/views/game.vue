<template>
  <!-- <button type="button" @click="nextStep">nextStep</button> -->
  <!-- クリック時の画像を読ませることで、一回目のクリックから画像が表示されるようにする -->
  <img src="@/assets/cursor/cursor.png" style="display: none;">
  <img src="@/assets/cursor/click.png" style="display: none;">
  <!--  -->
  <div id="MainCanvas" :class="['background', BackgroundImage]">
    <Overlay :step="Step" :stageid="StageID" @re="reOverlay"></Overlay>
    <div id="heroPositionSys">
      <div id="hero" :style="{ 'left': HeroLeft + 'px', 'bottom': HeroBottom + 'px' }">
        <Character :CharaData="{ 'character': 'hero', 'formula': '', 'power': HP }" />
        <!--プレイヤー(position: absolute;) キャラコンポーネントから直接描画-->
      </div>
    </div>
    <Tower :TowerData=Tower1 :TowerNum=1 :key="key1" /> <!--描写する1つ目の塔 この塔の構成要素を送信-->
    <div id="spacer"></div>
    <Tower :TowerData=Tower2 :TowerNum=2 @clickTower="ClickChara" :key="key2" />
    <!--描写する2つ目の塔 この塔の構成要素を送信 2つめの塔のみクリックを受け付ける-->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Character from "@/components/character.vue"
import Tower from "@/components/tower.vue"
import Overlay from "@/components/gameoverlay.vue"
import StageData from "@/assets/StageData.json"
import { useRoute } from 'vue-router'

const route = useRoute()
const StageID = route.params.stageid //パラメーターからコース番号を取得
// const StageID = "01"

// 無いコースを指定された場合は404
// リロードせずにリダイレクトするとエラーを吐いて止まるため、js標準のリダイレクトで
if (!(StageData[StageID])) {
  location.href="/404"
}

const Stage = StageData[StageID]["Stage"]


// 背景
// const BackgroundImage = ref(new URL("../assets/background/"+StageData["FirstStage"]["background"], import.meta.url).pathname)
// CSSのclass名を指定することでstyleを切り替えて背景を変える
// 画像ファイルを直接指定する試みはvercelとの問題でできなかった
const BackgroundImage = ref(StageData[StageID]["BackgroundImage"])

const HP = ref(StageData[StageID]["PlayerHP"])

// 表示中の画面を管理
const Step = ref("GameStart")
/*
StepList = [
  "GameStart",
  "PlayingGame",
  "GameOver",
  "StageClear"
]
*/

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
function HeroPossition(x, tower, y) {
  if (x != undefined) {
    HeroLeft.value = x
  } else if (tower != undefined) {
    if (tower == 1) {
      HeroLeft.value = -150
    } else if (tower == 2) {
      HeroLeft.value = 50
    }
  }
  HeroBottom.value = y
}
HeroPossition(undefined, 1, 5)

function reOverlay(Action) {
  if (Action == "GameStart") {
    Step.value = "PlayingGame"
  }
}

function nextStep() { //次の塔を描画するように切り替え&ゴール処理
  // 次があるかどうかチェック
  TowerNum.value++
  if (TowerNum.value + 1 < Stage.length) {
    Tower1.value = Stage[TowerNum.value]
    Tower2.value = Stage[TowerNum.value + 1]
    HeroPossition(undefined, 1, 5)
  } else { //次がなければクリア
    HeroPossition(undefined, 2, 5)
    Step.value = "StageClear"
  }
}

function ClickChara(Floor) {
  Calc(Stage[TowerNum.value + 1][Floor]["power"], Stage[TowerNum.value + 1][Floor]["formula"])
  Stage[TowerNum.value + 1][Floor]["character"] = ""
  Stage[TowerNum.value + 1][Floor]["formula"] = ""
  Stage[TowerNum.value + 1][Floor]["power"] = ""
  // console.log(Stage);
  key2.value = key2.value == 3 ? 2 : 3 //塔2を明示的に再描画
  // プレイヤーの移動
  var UnderFloor = Stage[TowerNum.value + 1].length - Floor
  HeroPossition(undefined, 2, 100 * UnderFloor - 80)
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
function checkLive() { //プレイヤーの死をチェック
  if (HP.value <= 0) {
    Step.value = "GameOver"
  }
}
function Calc(Power, formula) { //プレイヤーのHPを計算&適用
  switch (formula) {
    case "+":
      HP.value = HP.value + Power
      break
    case "-":
      HP.value = HP.value - Power
      break
    case "×":
      HP.value = HP.value * Power
      break
    case "÷":
      HP.value = Math.round(HP.value / Power)
  }
}

</script>

<style scoped>
#MainCanvas {
  height: 90%;
  width: 100%;
  margin: 0;
  padding: 0;
  /* background-color: rgb(221, 221, 221); */
  display: flex;
  align-items: flex-end;
  position: absolute;
  justify-content: center;
}

#spacer {
  width: 50px;
}

/* 背景 */
.background {
  background-position-x: center;
  background-position-y: bottom;
  background-size: auto 100%;
}

.background.Mounten1 {
  background-image: url("@/assets/background/Mounten1.jpg");
}

.background.Mounten2 {
  background-image: url("@/assets/background/Mounten2.jpg");
}

.background.Mounten3 {
  background-image: url("@/assets/background/Mounten3.jpg");
}
</style>

<style>
html,
body,
div#app {
  height: 100%;
  width: 100%;
}

#heroPositionSys {
  position: absolute;
  left: 50%;
}

#hero {
  position: absolute;
  /* bottom: 20px; */
  /* left: 30px; */
  width: 100px;
  height: 100px;
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
#MainCanvas,
#MainCanvas *,
.overlay,
.overlay * {
  cursor: url("@/assets/cursor/cursor.png"), auto;
}

/* .click:active,
.click *:active { 
なぜかこれは使えない
  */
#MainCanvas:active,
#MainCanvas *:active {
  cursor: url("@/assets/cursor/click.png"), auto;
}
</style> 