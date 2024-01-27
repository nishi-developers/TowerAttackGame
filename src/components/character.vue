<template>
    <img class="chara" v-if="character == 'zombie'" src="@/assets/character/zombie.png">
    <img class="chara" v-if="character == 'witch'" src="@/assets/character/witch.png">
    <img class="chara" v-if="character == 'dragon'" src="@/assets/character/dragon.png">
    <img class="chara" v-if="character == 'drink'" src="@/assets/character/drink.png">
    <img class="chara" v-if="character == 'portion'" src="@/assets/character/portion.png">
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps(["Data"])
const character = ref(props.Data)
</script>