module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@src",'src')
      .set('assets','src/assets')
  }
}