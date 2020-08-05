process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  // config
  chainWebpack (config) {
    config.externals({
      vue: 'Vue'
    })
  }
}
