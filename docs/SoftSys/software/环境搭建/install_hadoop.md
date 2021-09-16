# ubuntu18中 hadoop环境搭建

## 安装ubuntu

略

## 安装配置ssh

略

## 安装JDK1.8

### 安装JDK

查看本地是否安装java

```shell
java -version
```

如果java没有安装，则安装java1.8

```shell
sudo apt-get install openjdk-8-jdk
```

```shell
jelly@jelly:~$ java -version
openjdk version "1.8.0_181"
OpenJDK Runtime Environment (build 1.8.0_181-8u181-b13-1ubuntu0.18.04.1-b13)
OpenJDK 64-Bit Server VM (build 25.181-b13, mixed mode)
```

安装好后查找jdk目录

```shell
jelly@jelly:~$ which java
/usr/bin/java
jelly@jelly:~$ ls -al /usr/bin/java
lrwxrwxrwx 1 root root 22 Nov 10 05:47 /usr/bin/java -> /etc/alternatives/java
jelly@jelly:~$ ls -al /etc/alternatives/java
lrwxrwxrwx 1 root root 46 Nov 10 05:47 /etc/alternatives/java -> /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java
jelly@jelly:~$
```

即可找到jdk的目录`/usr/lib/jvm/java-8-openjdk-amd64/`

### 配置JDK

```shell
sudo vim /etc/profile
```

在末尾添加：

```shell
export =/usr/lib/jvm/java-8-openjdk-amd64/
export =$PATH:$HOME/bin:$JAVA_HOME/bin
```

关闭保存后，重新加载环境配置文件：

```shell
source /etc/profile
```

## 安装Hadoop

### 下载Hadoop

[http://mirrors.tuna.tsinghua.edu.cn/apache/hadoop/common/hadoop-2.8.5/hadoop-2.8.5.tar.gz](http://mirrors.tuna.tsinghua.edu.cn/apache/hadoop/common/hadoop-2.8.5/hadoop-2.8.5.tar.gz)

下载hadoop2.8.5

```shell
wget http://mirrors.tuna.tsinghua.edu.cn/apache/hadoop/common/hadoop-2.8.5/hadoop-2.8.5.tar.gz
```

### 安装

将下载的压缩包解压到`/usr/local/share/hadoop`

```shell
sudo tar -zxf ~/hadoop-2.8.5.tar.gz -C /usr/local/share
```

重命名并修改权限：

```shell
cd /usr/local/share
sudo mv ./hadoop-2.8.5/ ./hadoop
sudo chown -R jelly ./hadoop
```

```shell
cd hadoop
./bin/hadoop version
>>>
Hadoop 2.8.5
Source code repository https://github.com/apache/hadoop -r 2b9a8c1d3a2caf1e733d57f346af3ff0d5ba529c
Compiled by leftnoteasy on 2018-08-02T04:26Z
Compiled with protoc 2.5.0
From source with checksum f76ac55e5b5ff0382a9f7df36a3ca5a0
This command was run using /usr/local/share/hadoop/share/hadoop/common/hadoop-common-2.8.5.jar
```

### 伪分布式配置

伪分布式需要修改2个配置文件`core-site.xml`和`hdfs-site.xml`，路径在`/usr/local/share/hadoop/etc/hadoop`

打开core-site.xml

```shell
vim core-site.xml
```

在`configuration`中添加如下配置：

```xml
<configuration>
        <property>
                <name>hadoop.tmp.dir</name>
                <value>/usr/local/share/hadoop/tmp</value>
                <description>Abase for other temporary directories.</description>
        </property>
        <property>
                <name>fs.defaultFS</name>
                <value>hdfs://localhost:9000</value>
        </property>
</configuration>
```

打开hdfs-site.xml

```shell
vim hdfs-site.xml
```

在`configuration`中添加如下配置：

```xml
<configuration>
        <property>
                <name>dfs.replication</name>
                <value>1</value>
        </property>
        <property>
                <name>dfs.namenode.name.dir</name>
                <value>/usr/local/share/hadoop/tmp/dfs/name</value>
        </property>
        <property>
                <name>dfs.datanode.data.dir</name>
                <value>/usr/local/share/hadoop/tmp/dfs/data</value>
        </property>
        <property>
                <name>dfs.http.address</name>
                <value>0.0.0.0:50070</value>
        </property>
</configuration>
```

这里的dfs.replication就是指备份的份数

切换回hadoop主目录：/usr/local/share/hadoop

NameNode的格式化

```shell
./bin/hdfs namenode -format
```

开启NameNode和DataNode守护进程

```shell
./sbin/start-dfs.sh
```

注意：如果报错没有没有JAVA_HOME,则手动添加即可：（当前目录是/usr/local/share/hadoop）

```shell
cd etc/hadoop/

vim hadoop-env.sh

# 添加
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
```

### 验证Hadoop

```shell
jps
# >>>
31334 DataNode
31594 SecondaryNameNode
31723 Jps
31115 NameNode
```

同时出现以上四个即成功。

### 备注

1）如果没有出现：SecondaryNameNode，重启，即运行`sbin/stop-dfs.sh`关闭进行，然后再次尝试启动尝试)

2）如果没有DataNode，这个情况的发生是由于虚拟机和linux共同作用的结果，虚拟机本身不稳电工。会虚拟机假死的情况，如果说页面已经出现了DataNode的话，那么重启一下，假死现象消失，jps后出现DataNode.

3）如果datanode确实没有启动，可以试着将`/usr/local/share/hadoop/tmp/dfs`下的data目录删除，然后重新启动dfs

```shell
rm -rf data
./sbin/start-dfs.sh
jps
```

因为在配置`core-site.xml`和`hdfs-site.xml`两个文件时，手动出错，所以多次修改，然后多次使用

`./bin/hdfs namenode -format`进行NameNode的格式化，但是这样的话每次都会为NameNode生成新的namespaceID,，但是在hadoop.tmp.dir目录下的DataNode还是保留上次的namespaceID，因为namespaceID的不一致，而导致DataNode无法启动，所以手动删除（删除`/usr/local/share/hadoop/tmp/dfs`目录下的data），重新生成datanode

所以格式化成功后，后续再也不要进行格式化了

-----

### hadoop操作

关闭Hadoop:

```shell
./sbin/stop-dfs.sh
```

下次开启Hadoop：

```shell
./sbin/start-dfs.sh
```

从以上可以看出：每次操作hadoop时都得切换到目录`/usr/local/share/hadoop/bin`或是`/usr/local/share/hadoop/sbin`下，所以还是给hadoop配置一下环境变量比较方便：

```shell
sudo vim /etc/profile
```

在末尾添加：

```shell
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/
export JRE_HOME=${JAVA_HOME}/jre
export HADOOP_HOME=/usr/local/share/hadoop
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:${HADOOP_HOME}/bin:${HADOOP_HOME}/sbin:$PATH
```

然后执行source命令：

```shell
source /etc/profile
```

最后在任意位置试一下hadoop

```shell
hadoop version
```

启动yarn：

```shell
start-yarn.sh
```

### 管理页面

yarn:
[http://111.111.111.6:8088/cluster](http://111.111.111.6:8088/cluster)

hdfs:
[http://111.111.111.6:50070/](http://111.111.111.6:50070/)

## Hive安装

### 下载安装Hive

下载地址：[https://mirrors.tuna.tsinghua.edu.cn/apache/hive/hive-3.1.1/apache-hive-3.1.1-bin.tar.gz](https://mirrors.tuna.tsinghua.edu.cn/apache/hive/hive-3.1.1/apache-hive-3.1.1-bin.tar.gz)

```shell
wget https://mirrors.tuna.tsinghua.edu.cn/apache/hive/hive-3.1.1/apache-hive-3.1.1-bin.tar.gz
```

下载好后解压到：`/usr/local/share`

```shell
sudo tar zxvf apache-hive-3.1.1-bin.tar.gz  -C /usr/local/share/
```

删除安装包：

```shell
rm apache-hive-3.1.1-bin.tar.gz
```

进入到解压目录并重命名：

```shell
cd /usr/local/share/
sudo mv apache-hive-3.1.1-bin hive
sudo chown -R jelly ./hive
```

配置环境变量：

```shell
sudo vim /etc/profile

# ---
export HIVE_HOME=/usr/local/share/hive
export PATH=$PATH:$HIVE_HOME/bin
# ---

source /etc/profile

```

验证：

```shell
hive --version

# 可能出现包冲突，如果出现，则删除log4j-slf4j-impl-2.10.0.jar
rm $HIVE_HOME/lib/log4j-slf4j-impl-2.10.0.jar
```

### 配置hive

复制mysql的驱动程序到hive/lib下面：

```shell
cp ~/mysql-connector-java-5.1.47-bin.jar $HIVE_HOME/lib/
```

修改hive-env.sh：

```shell
cd $HIVE_HOME/conf/
cp hive-env.sh.template hive-env.sh

vim hive-env.sh

---------------
export HADOOP_HOME=/usr/local/share/hadoop
export HIVE_CONF_DIR=/usr/local/share/hive
export HIVE_AUX_JARS_PATH=/usr/local/share/hive/lib
---------------
```

修改hive-site.xml：

```shell
cd $HIVE_HOME/conf/
cp hive-default.xml.template hive-site.xml

vim hive-site.xml

其他的property都删了，只保留下面几个property配置就好了
---------------
<configuration>
    <property>
        <name>javax.jdo.option.ConnectionUserName</name>
        <value>xlink</value>
    </property>
    <property>
        <name>javax.jdo.option.ConnectionPassword</name>
        <value>xliance707</value>
    </property>
    <property>
        <name>javax.jdo.option.ConnectionURL</name>
        <value>jdbc:mysql://39.106.51.216:3306/hive</value>
    </property>
    <property>
        <name>javax.jdo.option.ConnectionDriverName</name>
        <value>com.mysql.jdbc.Driver</value>
    </property>
    <property>
        <name>hive.metastore.schema.verification</name>
        <value>false</value>
    </property>
    <property>
        <name>datanucleus.schema.autoCreateAll</name>
        <value>true</value>
    </property>
</configuration>
---------------
在hive目录下创建iotmp目录

将hive-site.xml这种所有{system:java.io.tmpdir}替换成/root/hive-3.1.0/iotmp
```

配置日志:

```shell
cd $HIVE_HOME/conf/
cp hive-log4j2.properties.template hive-log4j2.properties

vim hive-log4j2.properties

# 配置property.hive.log.dir
# ---------------
property.hive.log.dir = /usr/local/share/hive/logs
# ---------------
# 注意：logs需要自己创建，在hive目录下 mkdir logs

# 将hive-site.xml这种所有{system:java.io.tmpdir}替换成/root/hive-3.1.0/iotmp
```

创建hive仓库目录:

```shell
hadoop fs -mkdir -p /user/hive/warehouse
hadoop fs -chmod g+w /user/hive/warehouse
hadoop fs -ls /user
```

始化数据库:

```shell
schematool -dbType mysql -initSchema
# ---------------
# 看看mysql hive数据库，这个时候可以看到创建了一堆新表，这些即是管理元数据的表，
```

启动hive，show databases;出现数据，安装成功

## Scala安装

下载好后解压到：`/usr/local/share`

```shell
sudo tar zxvf scala-2.11.8.tgz  -C /usr/local/share/
```

删除安装包：

```shell
rm scala-2.11.8.tgz
```

进入到解压目录并重命名：

```shell
cd /usr/local/share/
sudo mv scala-2.11.8 scala
sudo chown -R jelly ./scala
```

配置环境变量：

```shell
sudo vim /etc/profile

# ---
export SCALA_HOME=/usr/local/share/scala
export PATH=${SCALA_HOME}/bin:$PATH
# ---

source /etc/profile
```

验证：

```shell
scala -version
```

## spark

### 下载spark

下载地址：[http://spark.apache.org/downloads.html](http://spark.apache.org/downloads.html)

下载

```shell
wget http://mirrors.hust.edu.cn/apache/spark/spark-2.4.0/spark-2.4.0-bin-hadoop2.7.tgz
```

下载好后解压到：`/usr/local/share/`

```shell
sudo tar zxvf spark-2.4.0-bin-hadoop2.7.tgz  -C /usr/local/share/
```

删除安装包：

```shell
rm spark-2.4.0-bin-hadoop2.7.tgz
```

进入到解压目录并重命名：

```shell
cd /usr/local/share/
sudo mv spark-2.4.0-bin-hadoop2.7 spark
sudo chown -R jelly ./spark
```

### 配置环境

配置环境变量：

```shell
sudo vim /etc/profile

# ---
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/
export JRE_HOME=${JAVA_HOME}/jre
export HADOOP_HOME=/usr/local/share/hadoop
export SPARK_HOME=/usr/local/share/spark
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:${HADOOP_HOME}/bin:${HADOOP_HOME}/sbin:${SPARK_HOME}/bin:${SPARK_HOME}/sbin:$PATH
# ---


source /etc/profile
```

配置spark运行变量：

```shell
cd spark/conf/

cp spark-env.sh.template spark-env.sh

vim spark-env.sh

# ------
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export HADOOP_HOME=/usr/local/share/hadoop
export HADOOP_CONF_DIR=/usr/local/share/hadoop/etc/hadoop
export SCALA_HOME=/usr/local/share/scala
export SPARK_HOME=/usr/local/share/spark
export SPARK_MASTER_IP=127.0.0.1
export SPARK_MASTER_PORT=7077
export SPARK_MASTER_WEBUI_PORT=8099
export SPARK_WORKER_CORES=3
export SPARK_WORKER_INSTANCES=1
export SPARK_WORKER_MEMORY=5G
export SPARK_WORKER_WEBUI_PORT=8081
export SPARK_EXECUTOR_CORES=1
export SPARK_EXECUTOR_MEMORY=1G
export LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:$HADOOP_HOME/lib/native
# ------
```

配置Slave:

```shell
cp slaves.template  slaves

vim slaves

# ----
localhost
# ----

```

默认就是localhost

### 启动

启动sbin目录下的`start-master.sh`以及`start-slaves.sh`

### 界面

Spark的web界面：[http://111.111.111.6:8099/](http://111.111.111.6:8099/)

### 运行

启动bin目录下的`spark-shell`

spark-shell的web界面[http://111.111.111.6:4040](http://111.111.111.6:4040)

### 简略日志

spark将所有日志都会输出，很详细，所以屏幕打印很多，由于混合了很多日志不利于寻找程序执行的结果，所以要将info，改为warn，这样打印结果简单明了了许多。

```shell
cd $SPARK_HOME/conf
cp log4j.properties.template log4j.properties
sudo vim log4j.properties

# ----
log4j.rootCategory=INFO, console
# 改为：
log4j.rootCategory=WARN, console

# ----
```

## python开发

教程：[https://blog.csdn.net/weixin_42001089/article/details/82383856](https://blog.csdn.net/weixin_42001089/article/details/82383856)

```shell
pyspark
```

## 数据同步工具Sqoop安装配置

### 安装Sqoop

下载地址：[https://mirrors.tuna.tsinghua.edu.cn/apache/sqoop/1.4.7/sqoop-1.4.7.bin__hadoop-2.6.0.tar.gz](https://mirrors.tuna.tsinghua.edu.cn/apache/sqoop/1.4.7/sqoop-1.4.7.bin__hadoop-2.6.0.tar.gz)

将下载的压缩包解压到`/usr/local/share/sqoop`

```shell
sudo tar -zxf ~/sqoop-1.4.7.bin__hadoop-2.6.0.tar.gz -C /usr/local/share
```

重命名并修改权限：

```shell
cd /usr/local/share
sudo mv ./sqoop-1.4.7.bin__hadoop-2.6.0/ ./sqoop
sudo chown -R jelly ./sqoop
```

配置环境变量：

```shell
sudo vim /etc/profile

# ---
export SQOOP_HOME=/usr/local/share/sqoop
export PATH=$PATH:$SQOOP_HOME/bin
# ---

source /etc/profile
```

### 配置Sqoop

打开 $SQOOP_HOME/conf/sqoop-env.sh

```shell
cp $SQOOP_HOME/conf/sqoop-env-template.sh $SQOOP_HOME/conf/sqoop-env.sh
vim $SQOOP_HOME/conf/sqoop-env.sh

# -------------
export HADOOP_COMMON_HOME=/usr/local/share/hadoop
export HADOOP_MAPRED_HOME=/usr/local/share/hadoop
# -----------
```

下载并配置mysql-connector-java:

下载地址：[https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-5.1.47.tar.gz](https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-5.1.47.tar.gz)

以下命令用于提取mysql-connector-java tarball并将mysql-connector-java-5.1.47.tar.gz移动到/usr/local/share/sqoop/lib目录。

```shell
tar -zxf mysql-connector-java-5.1.47.tar.gz

cd mysql-connector-java-5.1.47/
cp mysql-connector-java-5.1.47-bin.jar /usr/local/share/sqoop/lib
```

### 验证Sqoop

```shell
cd $SQOOP_HOME/bin
sqoop version
```

### 导入

```shell
sqoop import \
--connect "jdbc:mysql://39.106.51.216:3306/xlink?useUnicode=true&characterEncoding=utf-8" \
--username root \
--password 1wv72swg \
--table xpt_flow_position_1 \
--check-column inner_update_time \
--incremental lastmodified \
--input-fields-terminated-by '\t' \
--input-lines-terminated-by '\n' \
--input-escaped-by '\\' \
--input-null-string '\\N' \
--input-null-non-string '\\N' \
--last-value "2018-11-01 00:00:00" \
--merge-key id \
-m 1


sqoop job \
-Dorg.apache.sqoop.splitter.allow_text_splitter=true \
--create person_job1 -- import \
--connect "jdbc:mysql://39.106.51.216:3306/xlink?useUnicode=true&characterEncoding=utf-8" \
--username root \
--password 1wv72swg \
--table xpt_flow_position_1 \
--null-non-string '0' \
--null-string '' \
--check-column inner_update_time \
--incremental lastmodified \
--last-value "2018-11-01 00:00:00" \
--merge-key id \
-m 5


sqoop job --create person_job1 -- import --connect "jdbc:mysql://39.106.51.216:3306/xlink?useUnicode=true&characterEncoding=utf-8" --username root --password 1wv72swg  --table xpt_flow_position_1 --null-non-string '0' --null-string '' --check-column inner_update_time --incremental lastmodified --last-value "2018-11-01 00:00:00" --merge-key id





sqoop job --help
sqoop job --list
sqoop job --exec person_job1
sqoop job --delete person_job1


sqoop import \
--connect "jdbc:mysql://39.106.51.216:3306/xlink?useUnicode=true&characterEncoding=utf-8" \
--username root \
--password 1wv72swg \
--table xpt_flow_position_1 \
--check-column inner_update_time \
--incremental lastmodified \
--last-value "2018-11-01 00:00:00" \
--merge-key id \
-m 1

sqoop import \
--connect "jdbc:mysql://39.106.51.216:3306/xlink?useUnicode=true&characterEncoding=utf-8" \
--username root \
--password 1wv72swg \
--table xpt_flow_position_1 \
--check-column inner_update_time \
--incremental lastmodified \
--last-value "2018-11-01 00:00:00" \
--merge-key id \
--as-parquetfile \
-m 1


```

验证：

```shell
hadoop fs -ls /user/jelly/
hadoop fs -ls /user/jelly/xpt_flow_position_1
hadoop fs -cat /user/jelly/xpt_flow_position_1/*

# 删除
hadoop fs -rm -r -skipTrash /user/jelly
```

## parquet格式文件查看

下载地址：[http://logservice-resource.oss-cn-shanghai.aliyuncs.com/tools/parquet-tools-1.6.0rc3-SNAPSHOT.jar](http://logservice-resource.oss-cn-shanghai.aliyuncs.com/tools/parquet-tools-1.6.0rc3-SNAPSHOT.jar)

用例：

```shell
hadoop jar ./parquet-tools-1.6.0rc3-SNAPSHOT.jar head -n 100 hdfs://localhost:9000/user/jelly/xpt_flow_position_1/*
```
