# ubuntu安装shadowsocks

## 安装shadowsocks

```shell
sudo apt-get install python
sudo apt-get install python-gevent python-pip
sudo pip install setuptools
sudo pip install shadowsocks
sudo apt-get install python-m2crypto
```

## 配置shadowsocks

创建shawdowsocks.json配置文件

```shell
mkdir /etc/shadowsocks
cd /etc/shadowsocks
vim /etc/shadowsocks/config.json
```

插入一下内容：

```vim
{
    "server": "0.0.0.0",
    "server_port": 8961,
    "local_port": 1080,
    "password": "451453325",
    "timeout": 300,
    "method": "aes-256-cfb"
}
```

备注：主机ip为﻿45.32.177.150

## 启动和停止

启动：

```shell
ssserver -c /etc/shadowsocks/config.json -d start
```

停止：

```shell
ssserver -c /etc/shadowsocks/config.json -d stop
```

### 创建启动和停止脚本

命令很有可能忘记，所以写了启动和停止的脚本放在家目录下，执行就好：

#### 启动脚本

创建脚本

```shell
touch ssr_start.sh
chmod +x ssr_start.sh
vim ssr_start.sh
```

编辑内容

```shell
#!/bin/bash
ssserver -c /etc/shadowsocks/config.json -d start
```

执行：

```shell
./ssr_start.sh
```

#### 停止脚本

创建脚本

```shell
touch ssr_stop.sh
chmod +x ssr_stop.sh
vim ssr_stop.sh
```

编辑内容

```shell
#!/bin/bash
ssserver -c /etc/shadowsocks/config.json -d stop
```

执行：

```shell
./ssr_stop.sh
```

#### 查看端口链接信息

```shell
netstat -apn | grep 8961
```

## 错误处理

### undefined symbol: EVP_CIPHER_CTX_cleanup错误

最近将kali升级到了最新版本，编译之后shadowsocks无法启动，报错如下：

```shell
2018-11-30 12:42:39 INFO     loading libcrypto from libcrypto.so.1.1
Traceback (most recent call last):
  File "/usr/local/bin/ssserver", line 11, in <module>
    load_entry_point('shadowsocks==2.8.2', 'console_scripts', 'ssserver')()
  File "/usr/local/lib/python2.7/dist-packages/shadowsocks/server.py", line 34, in main
    config = shell.get_config(False)
  File "/usr/local/lib/python2.7/dist-packages/shadowsocks/shell.py", line 262, in get_config
    check_config(config, is_local)
  File "/usr/local/lib/python2.7/dist-packages/shadowsocks/shell.py", line 124, in check_config
    encrypt.try_cipher(config['password'], config['method'])
  File "/usr/local/lib/python2.7/dist-packages/shadowsocks/encrypt.py", line 44, in try_cipher
    Encryptor(key, method)
  File "/usr/local/lib/python2.7/dist-packages/shadowsocks/encrypt.py", line 83, in __init__
    random_string(self._method_info[1]))
  File "/usr/local/lib/python2.7/dist-packages/shadowsocks/encrypt.py", line 109, in get_cipher
    return m[2](method, key, iv, op)
  File "/usr/local/lib/python2.7/dist-packages/shadowsocks/crypto/openssl.py", line 76, in __init__
    load_openssl()
  File "/usr/local/lib/python2.7/dist-packages/shadowsocks/crypto/openssl.py", line 52, in load_openssl
    libcrypto.EVP_CIPHER_CTX_cleanup.argtypes = (c_void_p,)
  File "/usr/lib/python2.7/ctypes/__init__.py", line 379, in __getattr__
    func = self.__getitem__(name)
  File "/usr/lib/python2.7/ctypes/__init__.py", line 384, in __getitem__
    func = self._FuncPtr((name_or_ordinal, self))
AttributeError: /usr/lib/x86_64-linux-gnu/libcrypto.so.1.1: undefined symbol: EVP_CIPHER_CTX_cleanup
```

这个问题是由于在openssl1.1.0版本中，废弃了EVP_CIPHER_CTX_cleanup函数，如官网中所说：

> EVP_CIPHER_CTX was made opaque in OpenSSL 1.1.0. As a result, EVP_CIPHER_CTX_reset() appeared and EVP_CIPHER_CTX_cleanup() disappeared.
> EVP_CIPHER_CTX_init() remains as an alias for EVP_CIPHER_CTX_reset().

修改方法：

1. 用vim打开文件：vim /usr/local/lib/python2.7/dist-packages/shadowsocks/crypto/openssl.py (该路径请根据自己的系统情况自行修改，如果不知道该文件在哪里的话，可以使用find命令查找文件位置)
2. 跳转到52行（shadowsocks2.8.2版本，其他版本搜索一下cleanup）
3. 进入编辑模式
4. 将第52行libcrypto.EVP_CIPHER_CTX_`cleanup`.argtypes = (c_void_p,)
5. 改为libcrypto.EVP_CIPHER_CTX_`reset`.argtypes = (c_void_p,)
6. 再次搜索 cleanup（全文件共2处，此处位于111行），将libcrypto.EVP_CIPHER_CTX_`cleanup`(self._ctx)
7. 改为libcrypto.EVP_CIPHER_CTX_`reset`(self._ctx)
8. 保存并退出
9. 启动shadowsocks服务：service shadowsocks start 或 sslocal -c ss配置文件目录
问题解决

## 附录

### vultr IP检测

国内扫描站：<http://coolaf.com/tool/port>

国外扫描站：<https://www.yougetsignal.com/tools/open-ports/>

全球ping测试：<https://tools.ipip.net/ping.php>
