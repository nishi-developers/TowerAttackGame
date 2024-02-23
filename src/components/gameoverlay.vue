<template>
    <div id="GameStart" class="overlay" v-if="props.step == 'GameStart'">
        <p class="title"><b>[ {{ stagename }} ]</b></p>
        <div class="menus">
            <div class="box" @click="Action('GameStart')">
                <p class="btext"><b>Start</b></p>
            </div>
            <RouterLink to="/menu" class="RouterLink">
                <div class="box box2">
                    <p class="btext btext2">ステージセレクトに戻る</p>
                </div>
            </RouterLink>
        </div>
    </div>
    <div id="GameOver" class="overlay" v-if="props.step == 'GameOver'">
        <p class="title"><b>Game Over</b></p>
        <div class="menus">
            <RouterLink to="/menu" class="RouterLink">
                <div class="box">
                    <p class="btext">ステージセレクトに戻る</p>
                </div>
            </RouterLink>
            <div class="box" @click="Restart()">
                <p class="btext">やり直す</p>
            </div>
        </div>
    </div>
    <div id="StageClear" class="overlay" v-if="props.step == 'StageClear'">
        <p class="title"><b>Stage Clear</b></p>
        <div class="menus">
            <a :href="'/game/' + nextStageID" class="RouterLink" v-if="nextButton">
                <div class="box">
                    <p class="btext">次のステージへ</p>
                </div>
            </a>
            <!-- <RouterLink :to="'/game/' + nextStageID" class="RouterLink">
                <div class="box">
                    <p class="btext">次のステージへ</p>
                </div>
            </RouterLink> -->
            <RouterLink to="/menu" class="RouterLink">
                <div class="box">
                    <p class="btext">ステージセレクトに戻る</p>
                </div>
            </RouterLink>
            <div class="box" @click="Restart()">
                <p class="btext">やり直す</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import StageData from "@/assets/StageData.json"
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()


const props = defineProps(["step", "stageid"]) //親コンポーネントからデータなどを取得
const emit = defineEmits(["re"]) //親コンポーネントから返答用の要素を取得
function Action(action) { // タワーのクリックした位置を親コンポーネントに送信
    emit("re", action)
}
var nextButton = true
if (StageData.length <= Number(props.stageid) + 1) {
    nextButton = false
}
// console.log(StageData.length);
// console.log( Number(props.stageid));

const stagename = StageData[props.stageid]['StageName']
const nextStageID = String(Number(props.stageid) + 1)

function Restart() {
    router.go({ path: route.path, force: true })
}
</script>
<style scoped>
/* 全体 */
.overlay {
    position: absolute;
    top: 0;
    z-index: 100;
    height: 100%;
    width: 100%;
    /* display: flex;
    justify-content: center; */
    /* align-items: center; */
    background-color: rgba(255, 255, 255, 0.5);
}

.RouterLink {
    text-decoration: none;
}

.title {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    text-align: center;
    width: 100%;
}

.menus {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    height: 45%;
    width: 80%;
    /* background-color: #000; */
}

.menus .box {
    border-radius: 15px;
    position: relative;
    box-sizing: border-box;
}

.menus .btext {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
}

/* GameStart */
/* タイトル */
#GameStart .title {
    font-size: 3rem;
    color: #000000;
}

/* ボタンの枠 */
#GameStart .menus .box {
    width: 100%;
    height: 35%;
    margin: 10px auto;
    border: 1px #000 solid;
    background-color: rgb(35, 174, 255);
}

/* ボタンの文字 */
#GameStart .menus .btext {
    font-size: 4rem;
    color: white;
    /* -webkit-text-stroke: 3px rgb(255, 230, 0); */
}

/* ボタンの枠 */
#GameStart .menus .box2 {
    width: 100%;
    height: 15%;
    margin: 50px auto;
    border: 1px #000 solid;
    background-color: rgb(35, 174, 255);
}

/* ボタンの文字 */
#GameStart .menus .btext2 {
    font-size: 1.5rem;
    color: white;
    /* -webkit-text-stroke: 3px rgb(255, 230, 0); */
}

/* GameOver */
/* タイトル */
#GameOver .title {
    font-size: 5.5rem;
    color: #ca0000;
}

/* ボタンの枠 */
#GameOver .menus .box {
    width: 100%;
    height: 25%;
    margin: 10px auto;
    border: 1px #000 solid;
    background-color: rgb(35, 174, 255);
}

/* ボタンの文字 */
#GameOver .menus .btext {
    font-size: 1.4rem;
    color: white;
    /* -webkit-text-stroke: 3px rgb(255, 230, 0); */
}

/* StageClear */
/* タイトル */
#StageClear .title {
    font-size: 5.5rem;
    color: #ffbb00;
    -webkit-text-stroke: 2px rgb(255, 255, 255);
}

/* ボタンの枠 */
#StageClear .menus .box {
    width: 100%;
    height: 25%;
    margin: 10px auto;
    border: 1px #000 solid;
    background-color: rgb(35, 174, 255);
}

/* ボタンの文字 */
#StageClear .menus .btext {
    font-size: 1.4rem;
    color: white;
    /* -webkit-text-stroke: 3px rgb(255, 230, 0); */
}
</style>