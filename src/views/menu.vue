<template>
  <div id="backimage">
    <div id="MainCanvas">
    </div>
  </div>
</template>
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