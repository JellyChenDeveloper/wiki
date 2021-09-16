# shutdown

使系统关闭。

## 用法

```shell
sudo shutdown
```

## 详解

```shell
用法: shutdown [OPTION]...
关闭系统

Options:
  -r                          关机后重启
  -h                          系统停止后暂停或关闭电源
  -H                          系统关闭后停止(implies -h)
  -P                          系统关闭后关闭电源 (implies -h)
  -c                          取消正在运行的关机操作
  -k                          模拟关机（不是真的关机），只是向登录者发送警告信息出去！
  -q, --quiet                 仅输出错误信息
  -v, --verbose               输出更多的注释信息
      --help                  显示帮助信息
      --version               显示版本信息

时间 可以使用不同的格式，最常用的是简单的一个单词 “now”，其使系统立即关闭。
其它可用的格式有 +m ，此 m 是关机前等待的分钟数；hh:mm 其指定以 24 小时制中的时间。

已登录的用户被一条发送到他们终端的一条消息警告，您可以包含一条可选的 消息 到此项中。
使用 -k 选项可以发送警告而不真的关机。

如果给出 时间 ，此命令将留在前端指导关机发生。  可以使用 Control-C
取消它，或者被其他用户以 -c 选项取消。

系统默认进入维护状态 (单用户) 模式，你可以使用 -r 或 -h
更改此行为，其分别指定系统重启或关闭。-h 选项可以进一步由 -H 或 -P
来指定伺候是关机还是切断电源。  默认动作由 shutdown 脚本决定。
```

## 参见

[reboot](reboot.md)

[halt](halt.md)

[powerOff](poweroff.md)

[telinit](telinit.md)

[runlevel](runlevel.md)
