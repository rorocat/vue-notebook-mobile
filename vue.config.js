module.exports = {
  //配置项目根目录
  publicPath: process.env.NODE_ENV === 'production' ? '/notebook/' :'/'
  ,
  chainWebpack: config => {
    config.resolve.alias
      .set("@src", 'src')
      .set('assets', 'src/assets')
  }
}