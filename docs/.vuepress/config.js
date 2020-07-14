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
        { text: 'Guide', link: '/guide/' }
      ]
    }
}
