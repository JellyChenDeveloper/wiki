# Jetbrains系列破解方法

参考：[https://github.com/daijiong/JetbrainsCrack](https://github.com/daijiong/JetbrainsCrack)

以下步骤以WebStorm为例，其它工具步骤一致。

## 破解补丁

破解补丁下载地址：[http://idea.lanyus.com/jar/JetbrainsIdesCrack-3.4-release-enc.jar](http://idea.lanyus.com/jar/JetbrainsIdesCrack-3.4-release-enc.jar)

或者从我的百度云进行下载：

链接: <https://pan.baidu.com/s/1C098gLVimCdV6UEBFh6sww> 提取码: uven

JetbrainsIdesCrack-3.4-release-enc.jar

将该文件放到安装WebStorm路径的bin目录下

```shell
cp JetbrainsIdesCrack-3.4-release-enc.jar /Applications/WebStorm.app/Contents/bin
cd /Applications/WebStorm.app/Contents/bin
```

找到webstorm.vmoptions，用文本编辑器打开它们，如果是windows上则可能还需要编辑webstorm64.vmoptions。

```shell
vim webstorm.vmoptions
```

在文件最后分别加上

```vim
-javaagent:/Applications/WebStorm.app/Contents/bin/JetbrainsIdesCrack-3.4-release-enc.jar
```

## 修改Activation Code

重启Intellij WebStorm，在Activation Code输入：

```vim
{
"licenseId":"ThisCrackLicenseId",
"licenseeName":"Jelly",
"assigneeName":"Jelly",
"assigneeEmail":"451453325@qq.com",
"licenseRestriction":"For This Crack, Only Test! Please support genuine!!!",
"checkConcurrentUse":false,
"products":[
{"code":"II","paidUpTo":"2099-12-31"},
{"code":"DM","paidUpTo":"2099-12-31"},
{"code":"AC","paidUpTo":"2099-12-31"},
{"code":"RS0","paidUpTo":"2099-12-31"},
{"code":"WS","paidUpTo":"2099-12-31"},
{"code":"DPN","paidUpTo":"2099-12-31"},
{"code":"RC","paidUpTo":"2099-12-31"},
{"code":"PS","paidUpTo":"2099-12-31"},
{"code":"DC","paidUpTo":"2099-12-31"},
{"code":"RM","paidUpTo":"2099-12-31"},
{"code":"CL","paidUpTo":"2099-12-31"},
{"code":"PC","paidUpTo":"2099-12-31"}
],
"hash":"2911276/0",
"gracePeriodDays":7,
"autoProlongated":false
}
```

________
其它系列软件同理
