<template>
  <div id="MainCanvas">
    <div id="Base">
      <Tower :num=0 />
    </div>

  </div>
</template>

<script setup>
import Tower from "@/components/tower.vue"
</script>

<style scoped>
#MainCanvas {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: gray;
}
</style>
<style>
html,
body,
div#app {
  height: 100%;
  width: 100%;
}
</style> 