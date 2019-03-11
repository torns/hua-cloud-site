module.exports = {
  title: '华云中盛 前端文档',
  description: '加速你的开发',
  base: '/hua-cloud-site/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: './logo.png'
      }
    ]
  ],
  themeConfig: {
    repo: 'https://github.com/hua-cloud/cloud-template',
    docsRepo: 'https://github.com/hua-cloud/hua-cloud-site',
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    sidebarDepth: 4,
    lastUpdated: '最后更新',
    nav: [{
        text: '指南',
        link: '/guide/'
      },
      {
        text: '规范',
        link: '/styleguide/'
      },
      {
        text: '生态系统',
        items: [{
          text: '项目',
          items: [
            { text: 'vue-hua-cloud-template', link: 'https://github.com/hua-cloud/cloud-template' },
            { text: 'eslint-config-hua-cloud', link: 'https://github.com/hua-cloud/eslint-config-hua-cloud' },
            { text: 'vue-cli-plugin-cloud-template', link: 'https://github.com/hua-cloud/vue-cli-plugin-cloud-template' },
          ]
        }]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '基础',
          collapsable: false,
          children: [
            '/guide/',
          ]
        },
        {
          title: '高级',
          collapsable: false,
          children: [
            '/guide/advanced/',
          ]
        }
      ],
      '/styleguide/': [
        '/styleguide/',
        '/styleguide/javascript.md',
        '/styleguide/git.md',
      ]
    },
    markdown: {
      lineNumbers: true
    },
    plugins: [
      '@vuepress/active-header-links',
      '@vuepress/back-to-top',
      '@vuepress/medium-zoom',
      '@vuepress/nprogress'
    ]
  }
}
