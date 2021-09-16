// 侧边栏
module.exports = {
  '/html/': [
    '/html/',
    {
      text: '浏览器对象',
      children: [
        {
          text: 'window',
          link: '/html/browser/window',
          children: [
            {
              text: '函数',
              children: [
                '/html/browser/window/function/open.md'
              ]
            },
            {
              text: '属性',
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
      text: '系统包',
      children: [
        '/Node/system/npm.md'
      ]
    },
    {
      text: '控制台工具包',
      children: [
        '/Node/cli/argparse.md'
      ]
    },
    {
      text: '第三方包',
      children: [
        {
          text: 'markdownLint',
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
      text: '命令',
      children: [
        {
          text: '文件管理',
          children: [
            '/Linux/cmd/文件管理/cat.md',
            '/Linux/cmd/文件管理/chgrp.md',
            '/Linux/cmd/文件管理/rm.md',
            '/Linux/cmd/文件管理/touch.md',
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
    },
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
}
