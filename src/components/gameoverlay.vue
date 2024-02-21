<template>
    <div id="GameStart" class="overlay" v-if="props.step == 'GameStart'">
        <div id="startButton" class="click" @click="Action('GameStart')">
            <p><b>Start</b></p>
        </div>
    </div>
    <div id="GameOver" class="overlay" v-if="props.step == 'GameOver'">
        <p><b>Game Over</b></p>
    </div>
    <div id="StageClear" class="overlay" v-if="props.step == 'StageClear'">
        <p><b>Stage Clear</b></p>
    </div>
</template>
<script setup>
const props = defineProps(["step"]) //親コンポーネントから1本の塔の構成データなどを取得
const emit = defineEmits(["re"]) //親コンポーネントから返答用の要素を取得
function Action(action) { // タワーのクリックした位置を親コンポーネントに送信
    emit("re", action)
}
</script>
<style scoped>
.overlay {
    position: fixed;
    top: 0;
    z-index: 100;
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
}

#startButton {
    background-color: rgb(70, 196, 255);
    border-radius: 8px;
    height: 120px;
    width: 300px;
    position: relative;
}



#startButton p {
    color: white;
    -webkit-text-stroke: 3px rgb(255, 230, 0);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    font-size: 6rem;
}

#GameOver p {
    color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    font-size: 6rem;
    text-align: center;
}


#StageClear p {
    color: rgb(255, 174, 0);
    -webkit-text-stroke: 3px rgb(255, 230, 0);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    font-size: 6rem;
    text-align: center;
}
</style>