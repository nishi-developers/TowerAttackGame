<template>
    <div class="towers">
        <div>
            <div class="tower top" v-if="props.TowerData[0].option != 'Base' && props.TowerData[0].option != 'Goal'">
                <img class="towerImg top" src="@/assets/tower/tower-top.svg">
            </div>
            <div @click="Move(n - 1)" class="tower middle"
                v-if="props.TowerData[0].option != 'Base' && props.TowerData[0].option != 'Goal'"
                v-for="n in props.TowerData.length" :key="n">
                <img v-if="n != props.TowerData.length" class="towerImg middle" src="@/assets/tower/tower-middle.svg">
                <img v-if="n == props.TowerData.length" class="towerImg middle" src="@/assets/tower/tower-bottom.svg">
                <Character :CharaData="props.TowerData[n - 1]" v-if="props.TowerNum == 2" />
                <!--キャラクターを描画 子コンポーネントにこの部分のキャラの構成要素を送信-->
            </div>
        </div>
        <div>
            <div class="tower" v-if="props.TowerData[0].option == 'Base'">
                <img class="towerImg" src="@/assets/tower/camp.svg">
            </div>
            <div @click="Move(0)" class="tower" v-if="props.TowerData[0].option == 'Goal'">
                <img class="towerImg" src="@/assets/tower/castle.svg">
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

.tower {
    position: relative;
    width: 150px;
}

.towerImg {
    width: 150px;
    /* ここを調整 */
    margin-bottom: -5px;
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
    font-size: 1.8rem;
}
</style>