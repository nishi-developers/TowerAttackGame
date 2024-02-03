<template>
    <img class="chara hero" v-if="props.Data.character == 'hero'" src="@/assets/character/hero.png">
    <p class="text hero" v-if="props.Data.character == 'hero'">{{ props.Data.num }}</p>
    <img class="chara npc" v-if="props.Data.character == 'zombie'" src="@/assets/character/zombie.png">
    <img class="chara npc" v-if="props.Data.character == 'witch'" src="@/assets/character/witch.png">
    <img class="chara npc" v-if="props.Data.character == 'dragon'" src="@/assets/character/dragon.png">
    <img class="chara npc" v-if="props.Data.character == 'drink'" src="@/assets/character/drink.png">
    <img class="chara npc" v-if="props.Data.character == 'portion'" src="@/assets/character/portion.png">
    <p class="text npc" v-if="props.Data.character != 'hero'">{{ props.Data.formula }}{{ props.Data.num }}</p>
</template>
<script setup>
const props = defineProps(["Data"])
</script>
<style scoped>
.chara {
    position: absolute;
    width: 80px;
}

.text {
    position: absolute;
    z-index: 10;
    font-family: "Bungee Spice", sans-serif;
}
</style>