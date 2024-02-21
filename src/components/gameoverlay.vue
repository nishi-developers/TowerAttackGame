<template>
    <div id="GameStart" class="overlay" v-if="props.step == 'GameStart'">
        <div id="startButton" class="click" @click="Action('GameStart')">
            <p>Start</p>
        </div>
    </div>
    <div id="GameOver" class="overlay" v-if="props.step == 'GameOver'">
        <p>GameOver</p>
    </div>
    <div id="GameClear" class="overlay" v-if="props.step == 'GameClear'">
        <p>StageClear</p>
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
    -webkit-text-stroke: 3px rgb(255, 230, 0);
    border-radius: 8px;
    height: 120px;
    width: 300px;
    position: relative;
}

#startButton p {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    font-size: 6rem;
}
</style>