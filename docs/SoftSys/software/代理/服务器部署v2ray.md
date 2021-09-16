# 服务器部署v2ray

官网:[Project V](https://www.v2ray.com/)

## 测速

[https://tor-ca-ping.vultr.com/](https://tor-ca-ping.vultr.com/)

在服务器位置中选择不同位置的服务器，在自己电脑上ping ip地址，查看延时和丢包率。

| 位置 | ip | 延迟 | 丢包率| 测试文件下载速度(/s)|
|---|---|---|---|---|
| 达拉斯 | 108.61.224.175 | 331.475 | 5.0% | 2M |
| 纽约 | 108.61.219.200 | 334.775 | 8.1% | 2M |
| 西雅图 | 108.61.194.105 | 270.027 | 0.0% | 2M |
| 亚特兰大 | 108.61.193.166 | 365.606 | 4.4% | 2M |
| 硅谷 | 104.156.230.107 | 313.314 | 55.3% | 3M |

## 服务器安装

```shell
bash <(curl -L -s https://install.direct/go.sh)
```

此脚本会自动安装以下文件：

1. /usr/bin/v2ray/v2ray：V2Ray 程序；
2. /usr/bin/v2ray/v2ctl：V2Ray 工具；
3. /etc/v2ray/config.json：配置文件；
4. /usr/bin/v2ray/geoip.dat：IP 数据文件
5. /usr/bin/v2ray/geosite.dat：域名数据文件

此脚本会配置自动运行脚本。自动运行脚本会在系统重启之后，自动运行 V2Ray。目前自动运行脚本只支持带有 Systemd 的系统，以及 Debian / Ubuntu 全系列。

运行脚本位于系统的以下位置：

1. /etc/systemd/system/v2ray.service: Systemd
2. /etc/init.d/v2ray: SysV

脚本运行完成后，你需要：

编辑 `/etc/v2ray/config.json` 文件来配置你需要的代理方式；

运行 `service v2ray start` 来启动 V2Ray 进程；

之后可以使用 `service v2ray start|stop|status|reload|restart|force-reload` 控制 V2Ray 的运行。

## 关闭服务器防火墙

。。。
