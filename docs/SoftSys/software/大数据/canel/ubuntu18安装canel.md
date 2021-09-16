# ubuntu18安装canel

## 基础环境

### JDK1.8

略

## 安装

### 下载

```shell
wget https://github.com/alibaba/canal/releases/download/canal-1.1.2/canal.deployer-1.1.2.tar.gz
```

### 解压

将下载的压缩包解压到`/usr/local/share/canel`

```shell
sudo mkdir -p /usr/local/share/canel/deployer
sudo tar -zxf ~/canal.deployer-1.1.2.tar.gz -C /usr/local/share/canel/deployer
```

### 修改权限

```shell
cd /usr/local/share/canel
sudo chown -R jelly ./deployer
```

### 修改配置

```shell
vim conf/example/instance.properties
```

```vim
#################################################
## mysql serverId
canal.instance.mysql.slaveId = 1234
#position info，需要改成自己的数据库信息
canal.instance.master.address = 127.0.0.1:3306
canal.instance.master.journal.name =
canal.instance.master.position =
canal.instance.master.timestamp =


#canal.instance.standby.address =
#canal.instance.standby.journal.name =
#canal.instance.standby.position =
#canal.instance.standby.timestamp =


#username/password，需要改成自己的数据库信息
canal.instance.dbUsername = canal

canal.instance.dbPassword = canal
canal.instance.defaultDatabaseName =
canal.instance.connectionCharset = UTF-8


#table regex
canal.instance.filter.regex = .\..


#################################################
```

### 准备启动

```shell
sh bin/startup.sh
```

### 查看日志

```shell
vim logs/canal/canal.log
```

### 关闭

```shell
sh bin/stop.sh
```

### 配置flume配置变量

```shell
cp ${FLUME_HOME}/conf/flume-env.sh.template ${FLUME_HOME}/conf/flume-env.sh
vim ${FLUME_HOME}/conf/flume-env.sh
```

配置JAVA_HOME：

```vim
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/
```

### 验证

```shell
flume-ng version
```

## 其它配置

添加mysql环境依赖包

### MySQL JDBC驱动JAR包

下载并配置mysql-connector-java:
下载地址：[https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-5.1.47.tar.gz](https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-5.1.47.tar.gz)

以下命令用于提取mysql-connector-java tar包并将mysql-connector-java-5.1.47.tar.gz移动到/usr/local/share/flume/lib目录。

```shell
tar -zxf mysql-connector-java-5.1.47.tar.gz

cd mysql-connector-java-5.1.47/
cp mysql-connector-java-5.1.47-bin.jar /usr/local/share/flume/lib
```

### flume-ng-sql-source

在github上下载源码:[https://github.com/keedio/flume-ng-sql-source.git](https://github.com/keedio/flume-ng-sql-source.git)

使用maven进行打包

```shell
mvn package
```

将生成的jar包上传到服务器`~/flume-ng-sql-source-1.5.2.jar`

将该jar包移动到`/usr/local/share/flume/lib`目录

```shell
cp flume-ng-sql-source-1.5.2.jar /usr/local/share/flume/lib
```

### 安装mongodb驱动包

下载

```shell
wget http://central.maven.org/maven2/org/mongodb/mongo-java-driver/2.9.3/mongo-java-driver-2.9.3.jar

cp mongo-java-driver-2.9.3.jar /usr/local/share/flume/lib/
```

### flume-ng-mongodb-sink

在github上下载源码:[https://github.com/leonlee/flume-ng-mongodb-sink](https://github.com/leonlee/flume-ng-mongodb-sink)

使用maven进行打包

```shell
mvn package
```

将生成的jar包上传到服务器`~/flume-ng-mongodb-sink-1.0.0.jar`

将该jar包移动到`/usr/local/share/flume/lib`目录

```shell
cp flume-ng-mongodb-sink-1.0.0.jar /usr/local/share/flume/lib
```
