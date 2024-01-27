<template>
    <p>{{ props.Data }}</p>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps(["Data"])
const character = ref(props.Data)
</script>