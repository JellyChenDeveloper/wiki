const navbar = require('./navbar')
const sidebar = require('./sidebar')
// themeConfig
module.exports = {
  logo: '/img/logo.png', // logo
  home: '/', // 首页路径
  nav: navbar,
  sidebar: sidebar,
  // repo: 'https://gitee.com/JellyChen/vuepress-wiki',
  repo: 'https://github.com/JellyChenDeveloper/wiki',
  repoDisplay: false,
  docsBranch: 'main',
  docsDir: 'docs',
  editLinkPattern: ':repo/edit/:branch/:path',
  editLinkText: '编辑此页',
  lastUpdatedText: '最近更新',
  contributorsText: '贡献者',
  searchPlaceholder: 'Search...',
  mdEnhance: {
    enableAll: true
  },
  footer: {
    display: true,
    content: '<a href="/" target="_self">Jelly WIKI</a> | <a href="http://jellychen.cn" target="_blank">jellychen.cn</a>',
    copyright: 'Copyright © 2015-present | <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">京ICP备18020599号-1</a>'
  },
  author: 'JellyChen',
  copyCode: {
    showInMobile: true
  },
  feed: false,
  git: {
    timezone: 'Asia/Shanghai'
  },
  encrypt: {
    config: {
      '/person/': ['admin888', '451453325']
    }
  },
  search: true,
  searchMaxSuggestions: 10
}
