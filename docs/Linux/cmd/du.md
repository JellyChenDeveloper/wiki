# du

报告磁盘空间使用情况

## 用法

```shell
du --help
```

## 详解

```shell
用法: du [OPTION]... [FILE]...
  或:  du [OPTION]... --files0-from=F
报告磁盘空间使用情况

长参数和短参数皆可使用。
  -0, --null            输出结果结尾用空字符替代换行符（即将所有结果输出在一行）。
  -a, --all             统计所有文件及目录的大小，不只是目录。
      --apparent-size   输出实际大小而不是硬盘占用量，实际大小通常比较硬盘占用量小很多，这可能由于小文件过多，磁盘内部碎片，间接块等。
  -B, --block-size=SIZE 输出结果之前缩放文件大小的单位。例如：‘-bm’参数的输出以1,048,576字节大小为单位。
                        见下文文件大小的格式。
  -b, --bytes           等同于'--apparent-size --block-size=1'，该语句意思为以1字节为单位显示目标的实际大小。
  -c, --total           生产总计。
  -D, --dereference-args  废弃仅在命令行中列出的符号链接。
  -d, --max-depth=N     print the total for a directory (or file, with --all)
                          only if it is N or fewer levels below the command
                          line argument;  --max-depth=0 is the same as
                          --summarize
      --files0-from=F   summarize disk usage of the NUL-terminated file
                          names specified in file F;
                          If F is - then read names from standard input
  -H                    equivalent to --dereference-args (-D)
  -h, --human-readable  print sizes in human readable format (e.g., 1K 234M 2G)
  -k                    like --block-size=1K
  -L, --dereference     dereference all symbolic links
  -l, --count-links     count sizes many times if hard linked
  -m                    like --block-size=1M
  -P, --no-dereference  don't follow any symbolic links (this is the default)
  -S, --separate-dirs   do not include size of subdirectories
      --si              like -h, but use powers of 1000 not 1024
  -s, --summarize       display only a total for each argument
  -t, --threshold=SIZE  exclude entries smaller than SIZE if positive,
                          or entries greater than SIZE if negative
      --time            show time of the last modification of any file in the
                          directory, or any of its subdirectories
      --time=WORD       show time as WORD instead of modification time:
                          atime, access, use, ctime or status
      --time-style=STYLE  show times using style STYLE:
                          full-iso, long-iso, iso, +FORMAT
                          FORMAT is interpreted like 'date'
  -X, --exclude-from=FILE  exclude files that match any pattern in FILE
      --exclude=PATTERN    exclude files that match PATTERN
  -x, --one-file-system    skip directories on different file systems
      --help     display this help and exit
      --version  output version information and exit

Display values are in units of the first available SIZE from --block-size,
and the DU_BLOCK_SIZE, BLOCK_SIZE and BLOCKSIZE environment variables.
Otherwise, units default to 1024 bytes (or 512 if POSIXLY_CORRECT is set).

SIZE is an integer and optional unit (example: 10M is 10*1024*1024).  Units
are K, M, G, T, P, E, Z, Y (powers of 1024) or KB, MB, ... (powers of 1000).

Report du bugs to bug-coreutils@gnu.org
GNU coreutils home page: <http://www.gnu.org/software/coreutils/>
General help using GNU software: <http://www.gnu.org/gethelp/>
For complete documentation, run: info coreutils 'du invocation'

```
