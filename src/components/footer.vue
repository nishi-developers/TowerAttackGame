<template>
  <div id="Footer">
    <div id="contents">
      <a id="githubs" href="https://github.com/nishi-developers/TowerAttackGame">
        <font-awesome-icon id="github" :icon="['fab', 'github']" />
      </a>
      <RouterLink to="/terms" class="RouterLink">
        <p id="terms">利用規約</p>
      </RouterLink>
    </div>
    <div id="credit">
      <a href="https://504hp.vercel.app/" target="_blank" rel="noopener noreferrer" id="main">created by <b>504</b>
      </a><br>
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

/* クレジット */
#Footer #credit {
  text-align: right;
  position: absolute;
  right: 20px;
  margin: auto;
  top: 50%;
  transform: translate(0, -50%)
}

#Footer #credit a {
  color: white;
  display: inline-block;
  text-decoration: none;
}

#Footer #credit #main {
  font-size: 1.5rem;
}

#Footer #credit #main b {
  font-size: 2.5rem;
}

#Footer #credit #sub {
  font-size: 1rem;
}

#Footer #credit #sub b {
  font-size: 1.3rem;

}

/* コンテンツ */
#contents {
  position: absolute;
  left: 20px;
  top: 50%;
  margin: auto;
  transform: translate(0, -50%);
}


#github {
  color: white;
  font-size: 3rem;
  margin: auto;
  display: inline;
  vertical-align: middle;
}

#contents #terms {
  display: inline;
  color: white;
  margin-inline-start: 15px;
  font-size: 1rem;
  vertical-align: middle;
  text-decoration: underline;
}
</style>