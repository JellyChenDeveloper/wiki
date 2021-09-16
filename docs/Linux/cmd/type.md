# type

显示指定命令的类型，判断给出的指令是内部指令还是外部指令。

## 用法

```shell
type type
```

## 详解

```shell
type: type [-afptP] 名称 [名称 ...]
显示命令类型的信息。

对于每一个 NAME 名称，指示如果作为命令它将如何被解释。

选项：
  -a 显示所有包含名称为 NAME 的可执行文件的位置；包括别名、内建和函数。仅当 `-p' 选项没有使用时
  -f 抑制 shell 函数查询
  -P 为每个 NAME 名称惊醒 PATH 路径搜索，即使它是别名、内建或函数，并且返回将被执行的磁盘上文件的名称。
  -p 返回将被执行的磁盘上文件的名称，或者当 `type -t NAME'不返回 `file' 时，不返回任何值。
  -t 输出“file”、“alias”或者“builtin”，分别表示给定的指令为“外部指令”、“命令别名”或者“内部指令”；

    磁盘文件或没有找到。

参数：
  NAME 将要解析的命令。

退出状态：
如果所有的 NAME 命令都找到则返回成功；任何找不到则失败。
```