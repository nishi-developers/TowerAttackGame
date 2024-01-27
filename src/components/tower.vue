<template>
    <div class="tower top">
        <img class="towerImg top" src="@/assets/tower/tower-top.svg">
        <br class="hub">
    </div>
    <div class="tower middle" v-if="TowerData[0].character != 'none'" v-for="part in TowerData" :key="part">
        <img class="towerImg middle" src="@/assets/tower/tower-middle.svg">
        <Character :Data=part.character />
        <p class="text">{{ part.formula }}{{ part.num }}</p>
        <br class="hub">
    </div>
    <div class="tower bottom">
        <img class="towerImg bottom" src="@/assets/tower/tower-bottom.svg">
    </div>
</template>
<script setup>
// import { ref } from 'vue'
import Character from "@/components/character.vue"
const props = defineProps(["Data"])
const TowerData = props.Data
// const TowerNum = ref(props.Data.length)
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

.tower .text {

    font-family: "Bungee Spice", sans-serif;
    font-size: 1.5rem;
    position: absolute;
    z-index: 10;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);

}
</style>
<style>
.chara {
    position: absolute;
    width: 80px;
    top: 5px;
    left: 50%;
    transform: translate(-50%, 0);
}
</style>