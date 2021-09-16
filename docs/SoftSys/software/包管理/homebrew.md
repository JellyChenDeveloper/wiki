# Homebrew

[官网地址](https://brew.sh/index_zh-cn)

## 安装

终端执行

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## 常用命令

```shell
brew --help: 帮助
brew install wget: 安装wget包(Homebrew 会将软件包安装到独立目录, 并将其文件软链接至 /usr/local).
brew search mysql: 搜索.
brew info mysql: 主要看具体的信息. 比如目前的版本, 依赖, 安装后注意事项等.
brew update: 更新Homebrew.
brew outdated: 列出所有安装包里可以升级的包.
brew upgrade: 升级所有可以升级包.
brew cleanup: 清理不需要的版本极其安装包缓存.
brew reinstall mysql: 重新覆盖安装包.
brew uninstall mysql: 卸载
brew doctor: 检查有没有问题
```

## 替换清华源

[Homebrew 镜像使用帮助](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)

注:该镜像是 Homebrew 的 formula 索引的镜像（即 `brew update` 时所更新内容）。
本镜像站同时提供 Homebrew 二进制预编译包的镜像，请参考 [Homebrew bottles 镜像使用帮助](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew-bottles/)。

### 替换现有上游

```shell
git -C "$(brew --repo)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git

git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git

git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git

brew update
```

### 复原

(感谢Snowonion Lee提供说明)

```shell
git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew.git

git -C "$(brew --repo homebrew/core)" remote set-url origin https://github.com/Homebrew/homebrew-core.git

git -C "$(brew --repo homebrew/cask)" remote set-url origin https://github.com/Homebrew/homebrew-cask.git

brew update
```
