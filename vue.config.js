module.exports = {
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       prependData: `
  //         @import "@/scss/index.scss";
  //       `
  //     }
  //   }
  // },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:9091',
        changeOrigin: true
      },
    }
  }
}