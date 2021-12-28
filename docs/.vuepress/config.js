const themeConfig = require('./config/themeConfig')
const plugins = require('./config/plugins')
const head = require('./config/head')
const {config} = require('vuepress-theme-hope')

module.exports = config({
  locales: {
    '/': {
      // 设置需要的语言
      lang: 'zh-CN'
    }
  },
  title: 'Jelly\'s Wiki',
  description: '个人知识收集管理小站',
  base: '/wiki/',
  head,
  themeConfig
  // plugins
})
