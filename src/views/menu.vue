<template>
  <div id="backimage">
    <div id="MainCanvas">
      <p>ステージセレクト</p>
      <div id="stages">
        <div class="stage" v-for="StageID in Stages">
          <RouterLink :to="'/game/'+StageID">
            {{ StageData[StageID]["StageName"] }}
          </RouterLink>
          <p>{{ StageData[StageID]["Description"] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import StageData from "@/assets/StageData.json"
const Stages = Object.keys(StageData)
</script>

<style scoped>
#backimage {
  height: 90%;
  width: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  background-image: url("@/assets/background/Mounten1.jpg");
  background-position-x: center;
  background-position-y: bottom;
  background-size: auto 100%;
}

#MainCanvas {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: rgba(221, 221, 221, .5);
  position: absolute;
  /* display: flex; */
  /* align-items: flex-end; */
  /* justify-content: center; */
}
</style>