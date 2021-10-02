---
sidebar: auto
---

# 修改centos源镜像

我的版本为centos 8.2, 修改为腾讯源.

## 参考

参考下方centos源使用手册：

腾讯： [https://mirrors.tencent.com/help/centos.html](https://mirrors.tencent.com/help/centos.html)

阿里： [https://developer.aliyun.com/mirror/centos](https://developer.aliyun.com/mirror/centos)

中科大： [https://mirrors.ustc.edu.cn/help/centos.html](https://mirrors.ustc.edu.cn/help/centos.html)

清华： [https://mirrors.tuna.tsinghua.edu.cn/help/centos/](https://mirrors.tuna.tsinghua.edu.cn/help/centos/)

## 配置

### 备份系统旧配置文件

```bash
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```

### 获取对应版本的CentOS-Base.repo 到/etc/yum.repos.d/目录

#### 各版本源配置列表

##### CentOS5

```bash
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.cloud.tencent.com/repo/centos5_base.repo
```

##### CentOS6

```bash
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.cloud.tencent.com/repo/centos6_base.repo
```

##### CentOS7

```bash
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.cloud.tencent.com/repo/centos7_base.repo
```

##### CentOS8

```bash
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.cloud.tencent.com/repo/centos8_base.repo
```

### 更新缓存

```bash
yum clean all
yum makecache
```
