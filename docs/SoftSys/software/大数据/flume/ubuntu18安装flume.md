# ubuntu18安装flume

## 基础环境

### JDK1.8

略

## 安装

### 下载

```shell
wget https://mirrors.tuna.tsinghua.edu.cn/apache/flume/1.8.0/apache-flume-1.8.0-bin.tar.gz
```

### 解压

将下载的压缩包解压到`/usr/local/share`

```shell
sudo tar -zxf ~/apache-flume-1.8.0-bin.tar.gz -C /usr/local/share
```

### 重命名并修改权限

```shell
cd /usr/local/share
sudo mv ./apache-flume-1.8.0-bin/ ./flume
sudo chown -R jelly ./flume
```

### 配置环境变量

```shell
sudo vim /etc/profile
```

在末尾添加：

```shell
export FLUME_HOME=/usr/local/share/flume
export PATH=${FLUME_HOME}/bin:$PATH
```

然后执行source命令：

```shell
source /etc/profile
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
