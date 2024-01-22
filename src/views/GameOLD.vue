<template>
  <canvas ref="canvas" id="MainCanvas">
    canvas要素をサポートしていません
  </canvas>
</template>

<script>
// import { ref } from "vue";
// const canvas = ref < HTMLCanvasElement > ("");
const canvas = document.getElementById("canvas");        
    let imagePath = "image.png";
    draw(canvas,imagePath);
    function draw(canvas,imagePath){
        console.log("draw");
        const image = new Image();
        image.addEventListener("load",function (){
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0);
            console.log("load!");
        });
        image.src = imagePath;
    }

</script>

<style scoped>
#MainCanvas {
  display: block;
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