# water
水量計算アプリ（PWA）


## 構成
* Vue.js
  * vue cli
  * プロジェクト作成時に `Progressive Web App (PWA) Support` を選択
    * register-service-worker
    * @vue/cli-plugin-pwa


## メモ
* vue.config.js
  * outputDir: GitHub Pagesで配信するため、Vueの出力ディレクトリを変更
  * publicPath: GitHub Pagesで .io/リポジトリ名 のサブディレクトリ形式で配信するためリポジトリ名を設定
* src/manifest.js は、`npm run build` すると docs/ に作成される