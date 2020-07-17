const path = require('path')
const webpack = require('webpack')

const version = require('../../package.json').version

module.exports = {
    title: 'Weivi',
    description: '这是一个vue组件库',
    plugins: ['demo-container', 'auto-sidebar'],
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { text: '组件', link: '/ui/' }
      ]
    },
    chainWebpack: (config, isServer) => {
      if (!isServer) {
        config.resolve.alias.set('@src', path.resolve(__dirname, '../../src'))
        config.plugin('DefineVersionENV')
              .use(webpack.DefinePlugin, [
                {
                  'process.env.VUE_APP_VERSION': JSON.stringify(version)
                }
              ])
      }
    }
}
