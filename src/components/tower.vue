<template>
    <div class="towers">
        <div class="tower top">
            <img class="towerImg top" src="@/assets/tower/tower-top.svg">
            <br class="hub">
        </div>
        <div @click="Move(n-1)" class="tower middle" v-if="props.Data[0].character != 'none'"
            v-for="n in props.Data.length" :key="n">
            <img class="towerImg middle" src="@/assets/tower/tower-middle.svg">
            <Character :Data=props.Data[n-1] />
            <br class="hub">
        </div>
        <!-- <div onclick="Move(part)" class="tower middle" v-if="props.Data[0].character != 'none'"
            v-for="part in props.Data" :key="part">
            <img class="towerImg middle" src="@/assets/tower/tower-middle.svg">
            <Character :Data=part />
            <br class="hub">
        </div> -->
        <div class="tower bottom">
            <img class="towerImg bottom" src="@/assets/tower/tower-bottom.svg">
        </div>
    </div>
</template>
<script setup>
// import { ref } from 'vue'
import Character from "@/components/character.vue"
const props = defineProps(["Data"])
const emit = defineEmits(["eventEmit"])
function Move(parts) {
    // console.log(parts)
    emit("eventEmit",parts)
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