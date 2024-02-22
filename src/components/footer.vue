<template>
  <div id="Footer">
    <a class="github" href="https://github.com/nishi-developers/TowerAttackGame"><font-awesome-icon
        :icon="['fab', 'github']" /></a>
    <div id="credit">
      <p id="main">created by <b>504</b> </p><br>
      <!-- <p id="sub">supported by <b>数学研究同好会</b></p> -->
    </div>
  </div>
</template>
<style scoped>
#Footer {
  width: 100%;
  height: var(--footer);
  background-color: rgb(50, 50, 50);
  position: absolute;
  bottom: 0;
  padding: 5px;
  box-sizing: border-box;
}

#Footer #credit {
  text-align: right;
  position: absolute;
  right: 20px;
  margin: auto;
  top: 50%;
  transform: translate(0, -50%)
}

#Footer p {
  color: white;
  display: inline-block;
}

#Footer #main {

  font-size: 2rem;
}

#Footer #main b {
  font-size: 2.5rem;
}

#Footer #sub {
  font-size: 1rem;
}

#Footer #sub b {
  font-size: 1.3rem;

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
}</style>