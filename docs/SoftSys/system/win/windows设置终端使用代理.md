# windows设置终端使用代理

## 服务端及客户端网页代理配置

略

## 终端配置代理

我的本地代理地址为: http://127.0.0.1:15732，请按照自己的地址在下述代码中进行修改。

### gitbash

`gitbash`使用的是`mingw64`linux模拟工具，因此对于该终端按照linux的方法进行配置：

**首先**，在任意目录`shift+右键`打开`gitbash`

**一次性使用**：直接在bash中执行以下命令

```shell
export http_proxy=http://127.0.0.1:15732
export https_proxy=http://127.0.0.1:15732
```

**稳定配置**，使系统变化后也能使用代理：

```shell
echo export http_proxy=http://127.0.0.1:15732 >> /etc/profile # 将代理配置输入配置文件中
echo export https_proxy=http://127.0.0.1:15732 >> /etc/profile # 将代理配置输入配置文件中
source /etc/profile # 使环境变量生效
```

进行验证:

```shell
curl www.google.com

>   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                   Dload  Upload   Total   Spent    Left  Speed
  100   219  100   219    0     0    538      0 --:--:-- --:--:-- --:--:--   538<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
  <TITLE>301 Moved</TITLE></HEAD><BODY>
  <H1>301 Moved</H1>
  The document has moved
  <A HREF="http://www.google.com/">here</A>.
  </BODY></HTML>
```

### cmd

**一次性使用**，打开cmd：

```shell
set http_proxy=http://127.0.0.1:15732
set https_proxy=http://127.0.0.1:15732
```

echo %https_proxy% 进行验证:

```shell
curl www.google.com

> <HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
  <TITLE>301 Moved</TITLE></HEAD><BODY>
  <H1>301 Moved</H1>
  The document has moved
  <A HREF="http://www.google.com/">here</A>.
  </BODY></HTML>
```

配置环境变量： 右键桌面的`我的电脑`=》`属性`=》`高级系统设置`=》`环境变量`=》`系统变量`=》`新建`:

第一个：

```txt
变量名: http_proxy
变量值: http://127.0.0.1:15732
```

第二个：

```txt
变量名: https_proxy
变量值: http://127.0.0.1:15732
```

环境变量配置完成后关闭重新打开cmd方可生效。

### powershell

#### 设置代理

```shell
netsh winhttp set proxy "127.0.0.1:1080"
```

#### 恢复默认

```shell
netsh winhttp reset proxy
```

### 参考

* [给 Windows 的终端配置代理](https://zcdll.github.io/2018/01/27/proxy-on-windows-terminal/)
* [命令行配置代理服务器](https://yevon-cn.github.io/2017/05/05/set-proxy-of-cmd.html)
* [windows下控制台代理设置](https://www.dazhuanlan.com/2020/05/19/5ec35bf3ceb9e/)
