<template>
  <div id="backimage" class="backgroundImage">
    <div id="MainCanvas">
      <RouterLink to="/" class="RouterLink">
        <p id="title" class="titles"><b>Tower Attack Game</b></p>
      </RouterLink>
      <p id="subtitle" class="titles">ステージセレクト</p>
      <div id="stages">
        <RouterLink class="RouterLink" :to="'/game/' + StageID" v-for="StageID in Stages">
          <div class="stage">
            <p class="text Name"><b>{{ StageData[StageID]["StageName"] }}</b></p>
            <p class="text Description">{{ StageData[StageID]["Description"] }}</p>
          </div>
        </RouterLink>
        <div id="spacer"></div>
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
  height: calc(100% - var(--footer));
  width: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  background-image: url("@/assets/background/Mounten1.webp");
}

#MainCanvas {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
}

/* タイトル */
.titles {
  text-align: center;
  color: #000;
}

#title {
  margin-top: 15px;
  font-size: 2.5rem;
}

#subtitle {
  font-size: 2rem;
}

#stages {
  width: 80%;
  height: 90%;
  margin: 0 auto;
  overflow: auto;
}

.stage {
  width: 100%;
  margin: 20px 0px;
  padding: 10px;
  border: 1.5px solid #000;
  border-radius: 15px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.5);
}

.Name {
  font-size: 2rem;
}

.Description {
  font-size: 1.5rem;
}

.text {
  color: #000;
}

#spacer {
  height: var(--footer);
}
</style>