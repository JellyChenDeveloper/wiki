# Ubuntu16.04 由于已经达到 MaxReports 限制，没有写入 apport 报告

我的问题为：

```shell
dpkg: 处理软件包 libzbar-dev:amd64 (--configure)时出错：
 依赖关系问题 - 仍未被配置
由于已经达到 MaxReports 限制，没有写入 apport 报告。

E: Sub-process /usr/bin/dpkg returned an error code (1)
```

从网上找到的解决方案为：

```shell
cd /var/lib/dpkg
sudo mv info/ info-bak
sudo mkdir info
sudo apt-get update
sudo apt-get install -f
```

就解决了问题，然后恢复info-bak

```shell
sudo mv info/* info-bak/
sudo rm -rf info
sudo mv info-bak/ info
```

一切就ok
