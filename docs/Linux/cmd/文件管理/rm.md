# rm

删除文件或目录。

## 用法

```shell
rm [选项]... 文件...
```

## 参数

```shell
  -f, --force           强制删除文件或目录。
  -i                    强制删除文件或目录。
  -I   在删除超过三个文件或者递归删除前要求确认。此选项比-i 提
   示内容更少，但同样可以阻止大多数错误发生
      --interactive[=WHEN] 根据指定的WHEN 进行确认提示：never，once (-I)，
    或者always (-i)。如果此参数不加WHEN 则总是提示
      --one-file-system  递归删除一个层级时，跳过所有不符合命令行参
    数的文件系统上的文件
      --no-preserve-root  不对根目录'/'特殊对待
      --preserve-root   不删除根目录'/'(默认)
  -r, -R, --recursive   递归处理，将指定目录下的所有文件及子目录一并处理。
  -d, --dir             直接把欲删除的目录的硬连接数据删成0，删除该目录。
  -v, --verbose         显示指令执行过程。
      --help  显示此帮助信息并退出
      --version  显示版本信息并退出

默认时，rm 不会删除目录。使用--recursive(-r 或-R)选项可删除每个给定
的目录，以及其下所有的内容。

To remove a file whose name starts with a '-', for example '-foo',
use one of these commands:
  rm -- -foo

  rm ./-foo

请注意，如果使用rm 来删除文件，通常仍可以将该文件恢复原状。如果想保证
该文件的内容无法还原，请考虑使用shred。
```

## 参见

[shred](shred.md)
