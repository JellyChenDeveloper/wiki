# chgrp

变更文件或目录的所属群组

## 用法

```shell
chgrp [选项] 组文件... POSIX 选项: [-R] [--]
```

## 参数

```shell
用法：chgrp [选项]... 用户组 文件...
　或：chgrp [选项]... --reference=参考文件 文件...
变更文件或目录的所属群组.
参数 --reference, 根据指定文件改变文件的群组属性 .

-c, --changes          当发生改变时输出调试信息
-f, --silent, --quiet  不显示错误信息
-v, --verbose          运行时显示详细的处理信息
    --dereference      作用于符号链接的指向，而不是符号链接本身
-h, --no-dereference   作用于符号链接本身，而不是它所指向的. 仅可用于 lchown 系统调用被提供时.
    --no-preserve-root do not treat '/' specially (the default)
    --preserve-root    fail to operate recursively on '/'
    --reference=RFILE  根据指定文件改变文件的群组属性
-R, --recursive        处理指定目录以及其子目录下的所有文件

The following options modify how a hierarchy is traversed when the -R option is also specified.  If more than one is specified, only the final one takes effect.

-H                     if a command line argument is a symbolic link to a directory, traverse it
-L                     traverse every symbolic link to a directory encountered
-P                     do not traverse any symbolic links (default)

    --help     显示此帮助信息并退出
    --version  显示版本信息并退出
```

## 实例

```shell
chgrp staff /u        将 /u 的属组更改为"staff"。
chgrp -hR staff /u    将 /u 及其子目录下所有文件的属组更改为"staff"。
```

## 参见

[chown](chown.md)

[chmod](chmod.md)
