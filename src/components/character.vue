<template>
    <img class="chara hero" v-if="props.CharaData.character == 'hero'" src="@/assets/character/hero.png">
    <p class="text hero" v-if="props.CharaData.character == 'hero'">{{ props.CharaData.power }}</p>
    <img class="chara npc" v-if="props.CharaData.character == 'zombie'" src="@/assets/character/zombie.png">
    <img class="chara npc" v-if="props.CharaData.character == 'witch'" src="@/assets/character/witch.png">
    <img class="chara npc" v-if="props.CharaData.character == 'dragon'" src="@/assets/character/dragon.png">
    <img class="chara npc" v-if="props.CharaData.character == 'drink'" src="@/assets/character/drink.png">
    <img class="chara npc" v-if="props.CharaData.character == 'portion'" src="@/assets/character/portion.png">
    <p class="text npc" v-if="props.CharaData.character != 'hero'">{{ props.CharaData.formula }}{{ props.CharaData.power }}
    </p>
</template>
<script setup>
const props = defineProps(["CharaData"])
</script>
<style scoped>
.chara {
    position: absolute;
    width: 80px;
}

.text {
    position: absolute;
    bottom: -10;
    z-index: 10;
    font-family: "Bungee Spice";
}
</style>