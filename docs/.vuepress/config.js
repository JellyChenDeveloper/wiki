const themeConfig = require('./config/themeConfig')
const plugins = require('./config/plugins')
const head = require('./config/head')

module.exports = {
  lang: 'zh-CN',
  title: 'Jelly\'s Wiki',
  description: '个人知识收集管理小站',
  base: 'wiki',
  head,
  themeConfig,
  plugins
}
