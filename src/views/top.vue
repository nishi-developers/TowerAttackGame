<template>
    <div id="main">
        <p id="title"><b>Tower Attack Game</b></p>
        <RouterLink to="/menu" class="RouterLink">
            <div class="box">
                <p><b>Play</b></p>
            </div>
        </RouterLink>
    </div>
</template>
<script setup>
</script>
<style scoped>
#main {
    position: absolute;
    width: 100%;
    height: 90%;
    background-image: url("@/assets/top.webp");
    background-size: cover;
    background-position: center;
}
#title {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    text-align: center;
    width: 100%;
    font-size: 4rem;
    color: #ff0000;
    -webkit-text-stroke: 1px rgb(255, 255, 255);
}

.box {
    border-radius: 15px;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    height: 10%;
    width: 80%;
    box-sizing: border-box;
    margin: 10px auto;
    border: 1px #000 solid;
    background-color: rgb(255, 174, 0);
}

.box p {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    font-size: 3rem;
    color: #ff0000;
    -webkit-text-stroke: 2px rgb(255, 255, 255);
}
.RouterLink {
    text-decoration: none;
}
</style>