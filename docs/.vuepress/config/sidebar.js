const {sidebarConfig} = require('vuepress-theme-hope')

// 侧边栏
module.exports = sidebarConfig({
  '/html/': [
    '/html/',
    {
      title: '浏览器对象',
      children: [
        {
          title: 'window',
          link: '/html/browser/window',
          children: [
            {
              title: '函数',
              children: [
                '/html/browser/window/function/open.md'
              ]
            },
            {
              title: '属性',
              children: [
                '/html/browser/window/property/closed.md',
                '/html/browser/window/property/defaultstatus.md',
                '/html/browser/window/property/innerheight.md'
              ]
            }
          ]
        }
      ]
    }
  ],
  '/Node/': [
    '/Node/',
    {
      title: '系统包',
      children: [
        '/Node/system/npm.md'
      ]
    },
    {
      title: '控制台工具包',
      children: [
        '/Node/cli/argparse.md'
      ]
    },
    {
      title: '第三方包',
      children: [
        {
          title: 'markdownLint',
          link: '/Node/tool/markdownLint',
          children: [
            '/Node/tool/markdownLint/cli.md',
            '/Node/tool/markdownLint/rule.md'
          ]
        }
      ]
    }
  ],
  '/Linux/': [
    '/Linux/',
    '/Linux/tips/',
    {
      title: '命令',
      children: [
        {
          title: '文件管理',
          children: [
            '/Linux/cmd/文件管理/cat.md',
            '/Linux/cmd/文件管理/chgrp.md',
            '/Linux/cmd/文件管理/rm.md',
            '/Linux/cmd/文件管理/touch.md'
          ]
        },
        '/Linux/cmd/du.md',
        '/Linux/cmd/halt.md',
        '/Linux/cmd/ls.md',
        '/Linux/cmd/poweroff.md',
        '/Linux/cmd/reboot.md',
        '/Linux/cmd/shutdown.md',
        '/Linux/cmd/type.md'
      ]
    }
  ],
  '/PHP/': [
    '/PHP/',
    '/PHP/从html中分离.md',
    '/PHP/microtime.md',
    '/PHP/PHP标记.md',
    '/PHP/server.md',
    '/PHP/globals.md'
  ],
  '/MyWork/': [
    '/MyWork/',
    '/MyWork/person/',
    '/MyWork/xlink/',
    '/MyWork/cuiwen/',
    '/MyWork/meishubao/',
    '/MyWork/inspur/',
    '/MyWork/tdh/',
    '/MyWork/neusoft/'
  ]
})
