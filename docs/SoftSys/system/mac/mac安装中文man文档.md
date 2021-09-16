# mac安装中文man文档

<https://www.jianshu.com/p/5e35202fc59c>

<https://www.cnblogs.com/wujinhong/p/7251376.html>

中文文档项目维护地址：
<https://github.com/man-pages-zh/manpages-zh>

## 下载源码包

在github项目中下载最新发布包(我使用的是[v1.6.3.3](https://github.com/man-pages-zh/manpages-zh/archive/v1.6.3.3.tar.gz))

```shell
wget https://github.com/man-pages-zh/manpages-zh/archive/v1.6.3.3.tar.gz
```

## 安装依赖项

参考项目[README文档](https://github.com/man-pages-zh/manpages-zh)和[mac安装Issues](https://github.com/man-pages-zh/manpages-zh/issues/3)。

1. 安装brew (略)
2. 安装autoconf、automake、python3、opencc四个依赖

    ```shell
    brew install autoconf automake python3 opencc
    ```

3. 解压

    ```shell
    tar zxvf manpages-zh-1.6.3.3.tar.gz
    ```

4. 安装

    ```shell
    cd manpages-zh-1.6.3.3
   autoreconf --install
   ./configure --disable-zhtw
   make
   sudo make install
   ```

5. 配置命令

    ```shell
    # 编辑环境配置文件，我的是.zshrc
    vim .zshrc
    # 最后添加一句话
    alias cman='man -M /usr/local/share/man/zh_CN'
    # 保存退出后执行
    source .zshrc
    ```

6. 使用

    ```shell
    cman ls
    ```

## 中文乱码解决办法

1. 安装 groff

    ```shell
    brew install groff
    ```

2. 编辑 `/etc/man.conf` 文件末尾加上如下语句，然后保存、退出

```vim
NROFF preconv -e UTF8 | /usr/local/bin/nroff -Tutf8 -mandoc -c
```
