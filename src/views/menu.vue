<template>
  <div id="backimage">
    <div id="MainCanvas">
      <p id="title" class="titles">Tower Attack Game</p>
      <p id="subtitle" class="titles">ステージセレクト</p>
      <div id="stages">
        <a class="RouterLink" :href="'/game/' + StageID" v-for="StageID in Stages">
          <div class="stage">
            <p class="text Name"><b>{{ StageData[StageID]["StageName"] }}</b></p>
            <p class="text Description">{{ StageData[StageID]["Description"] }}</p>
          </div>
        </a>
        <!-- <RouterLink class="RouterLink" :to="'/game/' + StageID" v-for="StageID in Stages">
          <div class="stage">
            <p class="text Name"><b>{{ StageData[StageID]["StageName"] }}</b></p>
            <p class="text Description">{{ StageData[StageID]["Description"] }}</p>
          </div>
        </RouterLink> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import StageData from "@/assets/StageData.json"
const Stages = Object.keys(StageData)
</script>

<style scoped>
/* 画面全体 */
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
}

/* タイトル */
.titles {
  text-align: center;
}

#title{
font-size: 2rem;
}
#subtitle{
font-size: 1.5rem;
}

#stages {
  width: 70%;
  height: 100%;
  margin: 0 auto;
  overflow: auto;
}

.stage {
  width: 100%;
  margin: 20px 0px;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 10px;
  box-sizing: border-box;
}

.Name {
  font-size: 1.2rem;
}

.Description {
  font-size: 1rem;

}

.text {
  color: #000;
}

.RouterLink {
  text-decoration: none;
}
</style>