# ubuntu安装openvpn

## 服务端配置

### 安装openvpn

```shell
# 安装openvpn和easy_rsa
sudo apt-get install openvpn easy-rsa
```

### 配置easy-rsa

easy_rsa目录复制到openvpn配置文件目录

```shell
sudo cp -r /usr/share/easy-rsa /etc/openvpn
```

编辑vars文件

```shell
cd /etc/openvpn/easy-rsa
vim vars
# >>>
export KEY_COUNTRY="CN"
export KEY_PROVINCE="XJ"
export KEY_CITY="Urumchi"
export KEY_ORG="JellyOrg"
export KEY_EMAIL="1@1.com"
export KEY_OU="Community"
```

变量添加到系统变量中

```shell
source ./vars
```

清理秘钥目录

```shell
./clean-all
```

### 生成秘钥

生成授权秘钥

```shell
./build-ca
```

生成服务器秘钥

```shell
./build-key-server server
```

生成秘钥交换的dh秘钥及ta.key

```shell
./build-dh
openvpn –genkey –secret keys/ta.key
```

### 配置openvpn

将生成的秘钥复制到openvpn配置目录下

```shell
cd /etc/openvpn/easy-rsa/keys
sudo cp ca.crt ca.key server.crt server.key ta.key dh2048.pem /etc/openvpn
```

获取默认的conf文件

```shell
gunzip -c /usr/share/doc/openvpn/examples/sample-config-files/server.conf.gz | sudo tee /etc/openvpn/server.conf
```

编辑服务端配置文件

```shell
cd /etc/openvpn
# 查看配置文件信息
grep -vE "^#|^$|^;" server.conf
# 编辑配置文件
vim server.conf
# >>>
port 1194
proto tcp
dev tap
ca ca.crt
cert server.crt
key server.key  # This file should be kept secret
dh dh2048.pem
server 100.100.0.0 255.255.255.0 # 配置openvpn的ip段
ifconfig-pool-persist ipp.txt
push "route 100.100.0.0 255.255.0.0" # 配置该ip段走vpn流量
client-config-dir ccd   # 开启客户端自定义配置
client-to-client    # 开启客户端互相访问
keepalive 10 120
tls-auth ta.key 0 # This file is secret
key-direction 0
cipher AES-128-CBC   # AES
auth SHA256
comp-lzo
persist-key
persist-tun
status openvpn-status.log
log         openvpn.log
log-append  openvpn.log
verb 3
```

### 配置服务端ip转发

编辑/etc/sysctl.conf

```shell
sudo vim /etc/sysctl.conf
# >>>
# 找到net.ipv4.ip_forward，将前面的#去掉，也是取消注释的意思。
net.ipv4.ip_forward=1
```

保存关闭，并且重新让系统读取一遍这个文件

```shell
sudo sysctl -p
```

### 服务端启动openvpn

开启OpenVPN服务，并设置开机自动启动。

```shell
sudo systemctl start openvpn@server
sudo systemctl enable openvpn@server
```

验证

```shell
# 查看进程是否启动
ps -ef| grep openvpn
# 查看1194端口是否开放
netstat -npl
# 查看openvpn是否添加网卡
ifconfig
# 如果成功添加网卡，可在输出中看到tap0或tun0的网卡
```

如果启动失败，可查看程序状态查看是否有问题

```shell
sudo systemctl status openvpn@server
```

也可以前台启动进程查看是否有问题：

```shell
cd /etc/openvpn
openvpn --config server.conf
```

## 客户端

### 在服务端生成客户端的配置文件

#### 生成客户端证书

```shell
cd /etc/openvpn/easy-rsa
# 添加变量
source ./vars
# 生成证书
./build-key client
# 配置固定ip
vim /etc/openvpn/ccd/client
# >>>
ifconfig-push 100.100.0.9 255.255.255.0 # 配置固定ip
# 创建客户端配置文件目录
mkdir ~/client
# 复制秘钥
cd /etc/openvpn/easy-rsa/keys
cp ca.crt ta.key client.crt client.key .
# 复制配置文件
cd ~/client
cp /usr/share/doc/openvpn/examples/sample-config-files/client.conf .
```

#### 编辑配置文件

```shell
vim client.conf
# >>>
client
dev tap
proto tcp
remote 47.52.94.36 1194
resolv-retry infinite
nobind
persist-key
persist-tun
ca ca.crt
cert client.crt
key client.key
remote-cert-tls server
tls-auth ta.key 1
cipher AES-128-CBC
auth SHA256
comp-lzo
verb 3
```

### 客户端安装

假如客户端是ubuntu：
安装openvpn

```shell
apt install openvpn
```

### 客户端获取配置文件

下载~/client内所有文件

```shell
cd /etc/openvpn
sudo scp -r root@47.52.94.36:~/client/ .
```

### 客户端启动

开启OpenVPN服务，并设置开机自动启动。

```shell
sudo systemctl start openvpn@home_ubuntu
sudo systemctl enable openvpn@home_ubuntu
```

验证

```shell
# 查看进程是否启动
ps -ef| grep openvpn
# 查看openvpn是否添加网卡
ifconfig
# 如果成功添加网卡，可在输出中看到tap0或tun0的网卡
```

如果启动失败，可查看程序状态查看是否有问题

```shell
sudo systemctl status openvpn@client
```

也可以前台启动进程查看是否有问题：

```shell
cd /etc/openvpn
openvpn --config client.conf
```

## 自动生成客户端配置脚本

### 创建脚本

在用户目录下创建openvpn_client文件夹

```shell
mkdir ~/openvpn_client
cd openvpn_client/
vim generate_openvpn_client.sh
```

进入vim后执行

```vim
:set paste
```

复制以下脚本内容：

```shell
#!/bin/bash
# ScriptName: generate_openvpn_client
# Auth: JellyChen
#
# OpenVpn automated generate client config file, only test on ubuntu, other OS please modify yourself.

client_user=''
read -p "please input client user name: " client_user

server_ip=$(curl -s4 canhazip.com)
server_port=1194
client_conf_file=/tmp/${client_user}.ovpn
client_ip=''
base_dir=$(pwd)
file_dir=${base_dir}/${client_user}
go_on='y'

if [[ -d "$file_dir" ]];then
    echo -ne "\033[1;33m This directory $file_dir has existed. \033[0m  continue? (y/n):"
    read go_on
    if [[ ${go_on} -ne "y" ]]; then
        exit 1
    fi
fi

if [[ -f "$file_dir/$client_user.crt" ]];then
    echo "\033[1;33m Configure file $file_dir/$client_user.crt has existed, break.\n \033[0m"
    exit 2
fi

set -x

cd /etc/openvpn/easy-rsa
source ./vars >/dev/null 2>&1
./pkitool ${client_user} >/dev/null 2>&1
cd /etc/openvpn/easy-rsa/keys
mkdir ${file_dir}
cp ta.key ca.crt ${file_dir}
mv ${client_user}.crt ${client_user}.key ${file_dir}
rm ${client_user}.csr *.pem *.old index.txt.attr

set +x

read -p "Input the ip you hope to use (in 100.100.0.0) : " client_ip
echo -ne "The ip you want to config is \033[1;32m$client_ip\033[0m, are you sure?(y/n). "
read go_on
if [[ ${go_on} -ne 'y' ]]; then
    exit 3
fi

echo "ifconfig-push $client_ip 255.255.255.0" > /etc/openvpn/ccd/${client_user}


echo -ne "The server ip is \033[1;32m $server_ip \033[0m, press return to continue, or input new server ip: "
read new_server_ip
if [[ $new_server_ip -ne '' ]]; then
    server_ip=new_server_ip
fi

cat>${file_dir}/${client_user}.conf<<EOF
client
dev tap
proto tcp
remote ${server_ip} ${server_port}
resolv-retry infinite
nobind
persist-key
persist-tun
ca ca.crt
cert ${client_user}.crt
key ${client_user}.key
remote-cert-tls server
tls-auth ta.key 1
cipher AES-128-CBC
auth SHA256
comp-lzo
verb 3
EOF

echo -e "The process is finished, the config files is in $file_dir."
```

保存并赋予可执行权限：

```shell
chmod +x generate_openvpn_client.sh
```

### 使用脚本

进入~/openvpn_client

执行该脚本：

```shell
cd ~/openvpn_client
./generate_openvpn_client.sh
```

客户端获取配置文件

```shell
sudo scp -r root@47.52.94.36:/root/openvpn_client/home_ubuntu/* .
```
