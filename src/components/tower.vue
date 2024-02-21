<template>
    <div class="towers">
        <div>
            <div class="tower top" v-if="props.TowerData[0].character != 'Base' && props.TowerData[0].character != 'Goal'">
                <img class="towerImg top" src="@/assets/tower/tower-top.svg">
                <br class="hub">
            </div>
            <div @click="Move(n - 1)" class="tower middle" :class="{ 'click': props.TowerNum == 2 }"
                v-if="props.TowerData[0].character != 'Base' && props.TowerData[0].character != 'Goal'"
                v-for="n in props.TowerData.length" :key="n">
                <img class="towerImg middle" src="@/assets/tower/tower-middle.svg">
                <Character :CharaData="props.TowerData[n - 1]" /> <!--キャラクターを描画 子コンポーネントにこの部分のキャラの構成要素を送信-->
            </div>
            <div class="tower bottom"
                v-if="props.TowerData[0].character != 'Base' && props.TowerData[0].character != 'Goal'">
                <img class="towerImg bottom" src="@/assets/tower/tower-bottom.svg">
            </div>
        </div>
        <div>
            <div class="tower"
                v-if="props.TowerData[0].character == 'Base'">
                <img class="towerImg" src="@/assets/tower/camp.svg">
            </div>
            <div @click="Move(n - 1)" class="tower click"
                v-if="props.TowerData[0].character == 'Goal'">
                <img class="towerImg" src="@/assets/tower/castle.png">
                <img class="towerImg bottom" src="@/assets/tower/tower-bottom.svg">
            </div>
        </div>
    </div>
</template>
<script setup>
import Character from "@/components/character.vue"
const props = defineProps(["TowerData", "TowerNum"]) //親コンポーネントから1本の塔の構成データなどを取得
const emit = defineEmits(["clickTower"]) //親コンポーネントから返答用の要素を取得
function Move(parts) { // タワーのクリックした位置を親コンポーネントに送信
    emit("clickTower", parts)
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap');

.tower {
    position: relative;
    width: 150px;
}

.towerImg {
    width: 150px;
    margin-bottom: -4px;
}
</style>
<style>
.tower.middle .chara.npc {
    top: 5px;
    left: 50%;
    transform: translate(-50%, 0);
}

.tower.middle .text.npc {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 1.5rem;
}
</style>