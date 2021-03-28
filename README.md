# water
水量計算アプリ（PWA）


## 構成
* Vue.js
  * vue cli
  * プロジェクト作成時に `Progressive Web App (PWA) Support` を選択
    * register-service-worker
    * @vue/cli-plugin-pwa


## メモ
* GitHub Pagesで配信するため、Vueの出力ディレクトリを変更
  * vue.config.js
* src/manifest.js は、`npm run build` すると docs/ に作成される