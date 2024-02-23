<template>
    <div id="main">
        <p id="title">404 Not Found</p>
        <p class="sub">このサイト・ステージは存在しません。</p>
        <RouterLink to="/" class="RouterLink">
            <p class="sub">トップに戻る</p>
        </RouterLink>
    </div>
</template>
<style scoped>
#main {
    padding: 20px;
}

#title {
    font-size: 2rem;
    margin: 0 0 20px 0;
}

.sub {
    font-size: 1.5rem;
    color: #000;
}

.RouterLink {
    color: #000;
}
</style>