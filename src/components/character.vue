<template>
    <img class="chara" v-if="props.Data == 'zombie'" src="@/assets/character/zombie.png">
    <img class="chara" v-if="props.Data == 'witch'" src="@/assets/character/witch.png">
    <img class="chara" v-if="props.Data == 'dragon'" src="@/assets/character/dragon.png">
    <img class="chara" v-if="props.Data == 'drink'" src="@/assets/character/drink.png">
    <img class="chara" v-if="props.Data == 'portion'" src="@/assets/character/portion.png">
</template>
<script setup>
const props = defineProps(["Data"])
</script>