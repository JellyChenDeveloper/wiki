# ubuntu18安装mongodb

## 导入公钥

```shell
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
```

通过如下代码创建/etc/apt/sources.list.d/mongodb-org-4.0.list文件

```shell
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
```

## 安装

```shell
sudo apt-get update
sudo apt-get install -y mongodb-org

# 或者可以指定版本安装：
sudo apt-get install -y mongodb-org=4.0.1 mongodb-org-server=4.0.1 mongodb-org-shell=4.0.1 mongodb-org-mongos=4.0.1 mongodb-org-tools=4.0.1
```

## 启动

启动MongoDB并将其添加为在启动时启动的服务：

```shell
systemctl start mongod
systemctl enable mongod
```

现在用netstat命令检查MongoDB是否已经在端口27017上启动。

```shell
netstat -plntu
```

## 配置MongoDB

### 配置MongoDB用户名和密码

打开mongo shell

```shell
mongo
```

切换到数据库管理员

```shell
use admin
```

创建root用户

```shell
db.createUser({user:"root", pwd:"root888", roles:[{role:"root", db:"admin"}]})
```

退出

```shell
exit
```

启用mongodb身份验证

用您的编辑器编辑mongodb服务文件`/lib/systemd/system/mongod.service`。

```shell
vim /lib/systemd/system/mongod.service
```

在`ExecStart`第9行中，添加新选项`–auth`。

```vim
ExecStart=/usr/bin/mongod –auth –config /etc/mongod.conf
```

配置外网访问：
编辑文件`/etc/mongod.conf`：

```shell
sudo vim /etc/mongod.conf
```

```vim
# 将绑定ip修改为0.0.0.0
bindIp: 0.0.0.0
# 开启账户验证
security:
  authorization: enabled
```

重新加载systemd服务

```shell
systemctl daemon-reload
```

重新启动MongoDB并尝试连接

```shell
sudo service mongod restart
```

并使用以下命令连接到MongoDB shell：

```shell
mongo -u root -p root888 --authenticationDatabase admin
```
