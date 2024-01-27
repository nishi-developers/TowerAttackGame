<template>
    <div class="tower top">
        <img class="towerImg top" src="@/assets/tower-top.svg">
        <br class="hub">
    </div>
    <div class="tower middle" v-for="n in num" :key="n">
        <img class="towerImg middle" src="@/assets/tower-middle.svg">
        <br class="hub">
    </div>
    <div class="tower bottom">
        <img class="towerImg bottom" src="@/assets/tower-bottom.svg">
    </div>
</template>
<script setup>
const props = defineProps({
    num: Number
})
</script>
<style scoped>
.towerImg {
    width: 150px;
    margin-bottom: -4px;
}
</style>