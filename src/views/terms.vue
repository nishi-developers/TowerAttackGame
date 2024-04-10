<template>
  <div id="backimage" class="backgroundImage">
    <div id="MainCanvas">
      <RouterLink to="/" class="RouterLink">
        <p id="title" class="titles"><b>Tower Attack Game</b></p>
      </RouterLink>
      <p id="subtitle" class="titles">利用規約</p>
      <div id="contents">
        <p class="heading">アクセス解析ツールについて</p>
        <p class="text">
          　当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス(Google Analytics)」を使用しています。
          このGoogleアナリティクスではトラフィックデータ収集のため、Cookie、広告識別子などの識別情報、データの収集に使われる類似の技術を使用しています。
          これらにより収集されたデータは匿名のものであり、個人を特定するものではありません。
          <br>
          　なお、Cookieなどの一部の機能は、ユーザーにより無効にすることが可能です。お使いのブラウザの設定などをご確認ください。
          <br>
          　これらのことに関して、詳しくは<a href="https://www.google.com/intl/ja/policies/privacy/partners/" target="_blank"
            rel="noopener noreferrer">「ユーザーが
            Googleパートナーのサイトやアプリを使用する際の Googleによるデータ使用」</a>をご確認ください。
          Googleアナリティクスに関しては、<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank"
            rel="noopener noreferrer">「Googleアナリティクス利用規約」</a>もご確認ください。
        </p>
      </div>
    </div>
  </div>
</template>
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

#contents {
  margin: 15px;
}

#contents .heading {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

#contents .text {
  font-size: 1rem;
  word-wrap: break-word;
}

#contents a {
  color: #000;
}
</style>