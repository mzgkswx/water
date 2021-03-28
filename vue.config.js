// outputDir: GitHub Pagesを利用するため、Vueの出力ディレクトリを /dist -> /docs に変更
// publishPath: GitHub Pagesが .io/リポジトリ名（water）のサブディレクトリなので /water/
module.exports = {
  publicPath: "/water/",
  assetsDir: "",
  outputDir: "docs",
  devServer: {
    host: "localhost"
  }
};