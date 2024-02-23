<template>
    <img class="chara hero" v-if="props.CharaData.character == 'hero'" src="@/assets/character/hero.webp">
    <p class="text hero" v-if="props.CharaData.character == 'hero'">{{ props.CharaData.show }}</p>
    <img class="chara npc" v-if="props.CharaData.character == 'zombie'" src="@/assets/character/zombie.webp">
    <img class="chara npc" v-if="props.CharaData.character == 'witch'" src="@/assets/character/witch.webp">
    <img class="chara npc" v-if="props.CharaData.character == 'dragon'" src="@/assets/character/dragon.webp">
    <img class="chara npc" v-if="props.CharaData.character == 'drink'" src="@/assets/character/drink.webp">
    <img class="chara npc" v-if="props.CharaData.character == 'portion'" src="@/assets/character/portion.webp">
    <p class="text npc" v-if="props.CharaData.character != 'hero'">{{ props.CharaData.show }}
    </p>
</template>
<script setup>
const props = defineProps(["CharaData"])
</script>
<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap'); */

.chara {
    position: absolute;
    width: 80px;
}

.text {
    position: absolute;
    bottom: -10;
    z-index: 10;
    /* font-family: "Bungee Spice"; */
    color: rgba(0, 0, 0, 0);
    font-weight: 900;
    /* https://kouhekikyozou.com/css_text_gradation */
    background: linear-gradient(to bottom, #ff9100 40%, #ff0000 80%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-stroke: 0.3px #ffffff;
    overflow: visible;
    white-space: nowrap;
}
</style>