<template>
  <!-- <button type="button" @click="nextStep">nextStep</button> -->
  <!--  -->
  <div id="MainCanvas" :class="['background', BackgroundImage]">
    <Overlay :step="Step" :stageid="StageID" :stagedata=StageData @re="reOverlay"></Overlay>
    <div id="heroPositionSys">
      <div id="hero" :style="{ 'left': HeroLeft + 'px', 'bottom': HeroBottom + 'px' }">
        <Character :CharaData="{ 'character': 'hero', 'show': HP }" />
        <!--プレイヤー(position: absolute;) キャラコンポーネントから直接描画-->
      </div>
    </div>
    <Tower :TowerData=Tower1 :TowerNum=1 /> <!--描写する1つ目の塔 この塔の構成要素を送信-->
    <div id="spacer"></div>
    <Tower :TowerData=Tower2 :TowerNum=2 @clickTower="ClickChara" />
    <!--描写する2つ目の塔 この塔の構成要素を送信 2つめの塔のみクリックを受け付ける-->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Character from "@/components/character.vue"
import Tower from "@/components/tower.vue"
import Overlay from "@/components/gameoverlay.vue"
import StageData from "@/assets/StageData.json"
import { useRoute, useRouter } from 'vue-router'
import { event } from 'vue-gtag'
import { cloneDeep } from 'lodash'

const route = useRoute()
const router = useRouter()
const StageID = route.params.stageid //パラメーターからコース番号を取得

// 無いコースを指定された場合は404
// リロードせずにリダイレクトするとエラーを吐いて止まるため、js標準のリダイレクトで
// if (!(StageData[StageID])) {
//   // location.href = "/404"
//   router.push("/404")
// }

const Stage = ref()
const BackgroundImage = ref()
const HP = ref()

// 表示中の画面を管理
const Step = ref()
/*
StepList = [
  "GameStart",
  "PlayingGame",
  "GameOver",
  "StageClear"
]
*/
const TowerNum = ref()
const Tower1 = ref()
const Tower2 = ref()

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

// 初期化処理
// ゲーム状況のリセット
function init() {
  Stage.value = cloneDeep(StageData[StageID])
  BackgroundImage.value = StageData[StageID]["BackgroundImage"]// 背景
  // const BackgroundImage = ref(new URL("../assets/background/"+StageData["FirstStage"]["background"], import.meta.url).pathname)
  // CSSのclass名を指定することでstyleを切り替えて背景を変える
  // 画像ファイルを直接指定する試みはvercelとの問題でできなかった
  HP.value = Stage.value["PlayerHP"]
  Step.value = "GameStart"
  TowerNum.value = 0 //何番目の塔が描画されているか
  Tower1.value = Stage.value["Stage"][TowerNum.value]
  Tower2.value = Stage.value["Stage"][TowerNum.value + 1]
  // Playerの位置
  HeroPossition(undefined, 1, 5)
}
init()

// Overlayからの受信
function reOverlay(Action) {
  switch (Action) {
    case "GameStart":
      Step.value = "PlayingGame"
      event("StageStart")
      event(`StageStart(${StageID})`)
      break
    case "restart":
      init()
  }
}

function nextStep() { //次の塔を描画するように切り替え&ゴール処理
  // 次があるかどうかチェック
  TowerNum.value++
  if (TowerNum.value + 1 < Stage.value["Stage"].length) {
    Tower1.value = Stage.value["Stage"][TowerNum.value]
    Tower2.value = Stage.value["Stage"][TowerNum.value + 1]
    HeroPossition(undefined, 1, 5)
  } else { //次がなければクリア
    HeroPossition(undefined, 2, 5)
    Step.value = "StageClear"
    event("StageClear")
    event(`StageClear(${StageID})`)
  }
}

function ClickChara(Floor) {
  Calc(Stage.value["Stage"][TowerNum.value + 1][Floor]["power"], Stage.value["Stage"][TowerNum.value + 1][Floor]["formula"])
  Stage.value["Stage"][TowerNum.value + 1][Floor]["character"] = ""
  Stage.value["Stage"][TowerNum.value + 1][Floor]["show"] = ""
  Stage.value["Stage"][TowerNum.value + 1][Floor]["formula"] = ""
  Stage.value["Stage"][TowerNum.value + 1][Floor]["power"] = ""
  // console.log(Stage.value["Stage"]);
  // key2.value = key2.value == 3 ? 2 : 3 //塔2を明示的に再描画
  // プレイヤーの移動
  var UnderFloor = Stage.value["Stage"][TowerNum.value + 1].length - Floor
  HeroPossition(undefined, 2, 100 * UnderFloor - 80)
  // 生きているかをチェック 死んでいれば以降の処理は行わない
  if (HP.value <= 0) {
    Step.value = "GameOver"
    event("StageMiss")
    event(`StageMiss(${StageID})`)
  } else {
    // 敵がいるかを確認し、塔内の全ての敵がいなければ次の塔へ
    let count = 0
    for (let i = 0; i < Stage.value["Stage"][TowerNum.value + 1].length; i++) {
      if (Stage.value["Stage"][TowerNum.value + 1][i]["character"] != "") {
        count++
        break
      }
    }
    if (count == 0) {
      nextStep()
    }
  }
}
function Calc(Power, formula) { //プレイヤーのHPを計算&適用
  // "break"忘れずに!!!
  switch (formula) {
    case "+":
      HP.value = HP.value + Power
      break
    case "-":
      HP.value = HP.value - Power
      break
    case "*":
      HP.value = HP.value * Power
      break
    case "/":
      HP.value = Math.round(HP.value / Power)
      break
    case "^":
      HP.value = HP.value ** Power
      break
    case "sqrt":
      HP.value = Math.round(Math.pow(HP.value, 1 / Power))
      break
    case "mod":
      HP.value = Math.round(HP.value % Power)
      break
    case "random":
      // for (let index = 0; index < 100; index++) {}
      var selectednum = Math.floor(Math.random() * Power.length)
      var selected = Power[selectednum]
      // console.log(selected);
      Calc(selected["power"], selected["formula"])
      // console.log(selectednum);
      break
  }
}

</script>

<style scoped>
#MainCanvas {
  height: calc(100% - var(--footer));
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
  background-image: url("@/assets/background/Mounten1.webp");
}

.background.Mounten2 {
  background-image: url("@/assets/background/Mounten2.webp");
}

.background.Mounten3 {
  background-image: url("@/assets/background/Mounten3.webp");
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
  font-size: 2.2rem;
}
</style>
