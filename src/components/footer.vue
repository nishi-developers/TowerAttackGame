<template>
  <div id="Footer">
    <a class="github" href="https://github.com/nishi-developers/TowerAttackGame"><font-awesome-icon
        :icon="['fab', 'github']" /></a>
    <p>Powered by <b>504</b> </p>
  </div>
</template>
<style scoped>
#Footer {
  width: 100%;
  height: 10%;
  background-color: rgb(50, 50, 50);
  position: absolute;
  bottom: 0;
  /* padding: 10px; */
}

#Footer p {
  color: white;
  display: inline-block;
  position: absolute;
  font-size: 1.5rem;
  margin: auto;
  top: 50%;
  right: 20px;
  transform: translate(0, -50%)
}

#Footer p b {
  font-size: 2rem;
}

.github {
  /* color: #1f2328; */
  color: white;
  font-size: 3rem;
  margin: auto;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translate(0, -50%)
}
</style>