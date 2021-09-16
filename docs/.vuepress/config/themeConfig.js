const navbar = require('./navbar')
const sidebar = require('./sidebar')
// themeConfig
module.exports = {
  logo: '/img/logo.png', // logo
  home: '/', // 首页路径
  navbar: navbar,
  sidebar: sidebar,
  repo: 'https://gitee.com/JellyChen/vuepress-wiki',
  editLinkText: '编辑此页',
  // docsRepo: 'https://gitee.com/JellyChen/vuepress-wiki',
  docsBranch: 'master',
  docsDir: 'docs',
  editLinkPattern: ':repo/edit/:branch/:path',
  lastUpdatedText: '最近更新',
  contributorsText: '贡献者'
}
