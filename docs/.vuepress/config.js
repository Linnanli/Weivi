const path = require('path')
const webpack = require('webpack')

const version = require('../../package.json').version

module.exports = {
    title: 'Hello VuePress',
    description: 'Hello, my friend!',
    plugins: ['demo-container'],
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
      sidebarDepth: 2,
      sidebar: [
        {
          title: 'Guide',
          collapsable: false,
          children: ['/guide/']
        }
      ],
      nav: [
        { text: 'Home', link: '/' },
        { text: '组件', link: '/guide/' }
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
