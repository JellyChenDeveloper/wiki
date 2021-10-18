const {navbarConfig} = require('vuepress-theme-hope')

// 导航栏
module.exports = navbarConfig([
  {text: '首页', link: '/'},
  {text: '所有文章', link: '/article/'},
  {
    text: '开发语言',
    items: [
      {text: 'JavaScript', link: '/JavaScript/'},
      {text: 'HTML', link: '/html/'},
      {text: 'PHP', link: '/PHP/'}
    ]
  },
  {
    text: '开发环境',
    items: [
      {text: 'Linux', link: '/Linux/'},
      {text: 'Node', link: '/Node/'},
      {text: 'ElasticSearch', link: '/ElasticSearch/'}
    ]
  },
  {
    text: '软件系统',
    items: [
      {text: '软件系统', link: '/SoftSys/'},
      {text: '服务器配置记录', link: '/Server/'}
    ]
  },
  {text: 'vim', link: '/vim/'}
])
