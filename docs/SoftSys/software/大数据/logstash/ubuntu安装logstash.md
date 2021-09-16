# ubuntu安装logstash

## 基础环境

### JDK1.8

略

## 安装

### 下载

```shell
wget https://artifacts.elastic.co/downloads/logstash/logstash-6.5.3.tar.gz
```

### 解压

将下载的压缩包解压到`/usr/local/share`

```shell
sudo tar -zxf ~/logstash-6.5.3.tar.gz -C /usr/local/share
```

### 重命名并修改权限

```shell
cd /usr/local/share
sudo mv ./logstash-6.5.3/ ./logstash
sudo chown -R jelly ./logstash
```

### 配置环境变量

```shell
sudo vim /etc/profile
```

在末尾添加：

```shell
export LOGSTASH_HOME=/usr/local/share/logstash
export PATH=${LOGSTASH_HOME}/bin:$PATH
```

然后执行source命令：

```shell
source /etc/profile
```

### 验证

```shell
logstash -e 'input { stdin {} } output { stdout {} }'
```

## 配置

创建插件目录

```shell
mkdir ${LOGSTASH_HOME}/plugin
```

编辑配置文件`logstash.yml`：

```shell
vim ${LOGSTASH_HOME}/config/logstash.yml
```

```vim
node.name: cpy04.dev.xjh.com    #设置节点名称，一般写主机名
path.data: /usr/local/share/logstash/plugin    #创建logstash 和插件使用的持久化目录
config.reload.automatic: true    #开启配置文件自动加载
config.reload.interval: 10    #定义配置文件重载时间周期
```

## 安装插件

### 安装mysql插件

```shell
logstash-plugin install logstash-output-jdbc
```

### 安装mongo插件

```shell
logstash-plugin install logstash-output-mongodb
```

### 查看logstash的插件列表

```shell
logstash-plugin list | grep jdbc
logstash-plugin list | grep mongodb
```

## 使用

### 简单使用

创建配置文件:

```shell
mkdir ~/logstash_conf
cd ~/logstash_conf
vim test.conf
# >>>>>>>
input { stdin {} } output { stdout {} }
# >>>> :wq
```

启动该配置文件:

```shell
logstash -f ~/logstash_conf/test.conf
```

## 总结

logstash可以将mysql的数据全量备份到mongodb，但是对于更新的数据会产生新的记录，记录重复。

目前先搁置该方案。
