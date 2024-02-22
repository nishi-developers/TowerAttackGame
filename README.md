# JunkGame

79 期向け新入生歓迎会を目標に作成された WEB ゲーム

新歓の映像で流すため、動画配信サービスの広告にあるクソゲーを再現する

現在は個人アカウント(M_Haruki)より Vercel で公開中
[TowerAttackGame](https://tower-attack-game.vercel.app/)

## Docker

リアルタイムで更新されないため、利用をおすすめはしない。
コードを改変したら`docker-compose restart`が必須

[docker-compose のコマンドについて](https://knowledge.sakura.ad.jp/16862/)
[docker のコマンドについて](https://www.kagoya.jp/howto/cloud/container/dockercommand/)
[docker ファイルとかについて](https://qiita.com/Dai_Kentaro/items/de26054e8cf1e019a667)

## vercel.json

[Site](https://scrapbox.io/daikiojm/vue-router%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A3%E3%81%9FVue%E3%81%AESPA%E3%82%92Vercel%E3%81%AB%E3%83%9B%E3%82%B9%E3%83%88%E3%81%99%E3%82%8B%E3%81%A8%E3%81%8D%E3%81%AE%E6%B3%A8%E6%84%8F%E7%82%B9)

## Vue + vite

This template should help get you started developing with Vue 3 in Vite.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```
