// GitHub Pagesを利用するため、Vueの出力ディレクトリを /dist -> /docs に変更
module.exports = {
  publicPath: "/water/",
  assetsDir: "",
  outputDir: "docs",
  devServer: {
    host: "localhost"
  }
};