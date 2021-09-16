# reboot

重启系统，该操作执行需要root权限。

## 用法

```shell
sudo reboot
```

## 详解

```shell
用法: reboot [OPTION]...
重新启动

Options:
  -n, --no-sync               重开机之前不检查是否有未结束的程序
  -f, --force                 强制重新开机，不调用shutdown指令的功能
  -p, --poweroff              类似于调用halt，关闭系统
  -w, --wtmp-only             仅做测试，并不真正将系统重新开机，只会把重开机的数据写入/var/log目录下的wtmp日志文件
  -q, --quiet                 仅输出错误信息
  -v, --verbose               输出更多的注释信息
      --help                  显示帮助信息
      --version               显示版本信息

此命令将指示内核重启或关闭系统；在没有 -f 选项运行时，或当处于系统运行级别不是 0 或 6
时，其将真的执行 /sbin/shutdown。
```

## 参见

[halt](halt.md)

[powerOff](poweroff.md)

[shutdown](shutdown.md)

[telinit](telinit.md)

[runlevel](runlevel.md)
