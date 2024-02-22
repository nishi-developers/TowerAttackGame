<template>
    <div id="GameStart" class="overlay" v-if="props.step == 'GameStart'">
        <p class="title"><b>{{props.stagename}}</b></p>
        <div class="menus">
            <div class="box" @click="Action('GameStart')">
                <p class="btext"><b>Start</b></p>
            </div>
        </div>
    </div>
    <div id="GameOver" class="overlay" v-if="props.step == 'GameOver'">
        <p class="title"><b>Game Over</b></p>
    </div>
    <div id="StageClear" class="overlay" v-if="props.step == 'StageClear'">
        <p class="title"><b>Stage Clear</b></p>
        <div class="menus">
            <RouterLink to="/menu" class="RouterLink">
                <div class="box">
                    <p class="btext">ステージセレクトに戻る</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(["step","stagename"]) //親コンポーネントからデータなどを取得
const emit = defineEmits(["re"]) //親コンポーネントから返答用の要素を取得
function Action(action) { // タワーのクリックした位置を親コンポーネントに送信
    emit("re", action)
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
    font-size: 6rem;
    text-align: center;
    width: 80%;
    /* margin: 50% 0 0% 0; */

}

.menus {
    position: absolute;
    bottom: 30%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    height: 10%;
    width: 80%;
    /* border: 10px #000 solid; */
}

.menus .box {
    border: 1px #000 solid;
    border-radius: 10px;
    height: 100%;
    position: relative;
}

.menus .btext{
    /* text-align: center; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%); 
}

/* GameStart */
#GameStart .menus .box {
    width: 50%;
    margin: auto;
    background-color: rgb(8, 164, 255);    
}


#GameStart .menus .btext {
    color: white;
    -webkit-text-stroke: 3px rgb(255, 230, 0);
    font-size: 3rem;
}

/* GameOver */

#GameOver .title {
    color: black;

}

/* StageClear */
#StageClear .title {
    color: rgb(255, 174, 0);
    -webkit-text-stroke: 3px rgb(255, 230, 0);

}




</style>