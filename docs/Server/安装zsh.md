---
sidebar: auto
---

# 安装zsh

## 安装

```bash
yum install -y zsh
```

## 验证当前是否包含zsh

```bash
cat /etc/shells
```

## 切换默认shell为zsh. Changing shell for 当前用户

```bash
chsh -s /bin/zsh
```

## 验证

```bash
echo $SHELL
```

## 安装oh-my-zsh

```bash
# 1. 安装git
sudo yum install git
# 2. 安装oh-my-zsh
sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
# 3. 查看主题
ls ~/.oh-my-zsh/themes
```
