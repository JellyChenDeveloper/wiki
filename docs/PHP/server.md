---
sidebarDepth: 2
---

# $_SERVER

## 参数

在 $_SERVER 中，你也许能够，也许不能够找到下面的这些元素。

**注意**，如果以命令行方式运行 PHP，下面列出的元素几乎没有有效的(或是没有任何实际意义的)。

### PHP_SELF

当前执行脚本的文件名，与 `document root` 有关。例如，在地址为 `http://example.com/test.php/foo.bar` 的脚本中使用 `$_SERVER['PHP_SELF']`
将得到 `/test.php/foo.bar`。[FILE](常量/魔术常量/FILE.md) 常量包含当前(例如包含)文件的完整路径和文件名。 从 PHP 4.3.0 版本开始，如果 PHP
以命令行模式运行，这个变量将包含脚本名。之前的版本该变量不可用。

#### 代码

```php
<?php
echo $_SERVER['PHP_SELF'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
/index.php
```

### argv

传递给该脚本的参数的数组。当脚本以命令行方式运行时，[argv](server/argv.md)变量传递给程序 C 语言样式的命令行参数。当通过 GET 方式调用时，该变量包含query string。

#### 代码

```php
<?php
print_r($_SERVER['argv']);
?>
```

#### 命令行运行

```php
php index.php a=1 b=2
```

#### 结果

```php
Array
(
    [0] => D:\Code\test\index.php
    [1] => a=1
    [2] => b=2
)
```

### argc

包含命令行模式下传递给该脚本的参数的数目(如果运行在命令行模式下)。

#### 代码

```php
<?php
echo $_SERVER['argc'];
?>
```

#### 命令行运行

```shell
    php index.php
```

#### 结果

```out
    1
```

### GATEWAY_INTERFACE

服务器使用的 CGI 规范的版本；例如，“CGI/1.1”。

### SERVER_ADDR

当前运行脚本所在的服务器的 IP 地址。

#### 代码

```php
<?php
echo $_SERVER['SERVER_ADDR'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
127.0.0.1
```

### SERVER_NAME

当前运行脚本所在的服务器的主机名。如果脚本运行于虚拟主机中，该名称是由那个虚拟主机所设置的值决定。

#### 代码

```php
<?php
echo $_SERVER['SERVER_NAME'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
www.test.com
```

### SERVER_SOFTWARE

服务器标识字符串，在响应请求时的头信息中给出。

#### 代码

```php
<?php
echo $_SERVER['SERVER_SOFTWARE'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
Apache/2.4.10 (Win32) OpenSSL/0.9.8zb PHP/5.3.29
```

### SERVER_PROTOCOL

请求页面时通信协议的名称和版本。例如，“HTTP/1.0”。

#### 代码

```php
<?php
echo $_SERVER['SERVER_PROTOCOL'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
HTTP/1.1
```

### REQUEST_METHOD

访问页面使用的请求方法；例如，“GET”, “HEAD”，“POST”，“PUT”。

#### 代码

```php
<?php
echo $_SERVER['REQUEST_METHOD'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
GET
```

### REQUEST_TIME

请求开始时的时间戳。从 PHP 5.1.0 起可用。

#### 代码

```php
<?php
echo $_SERVER['REQUEST_TIME'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
1467688208
```

### REQUEST_TIME_FLOAT

请求开始时的时间戳，微秒级别的精准度。 自 PHP 5.4.0 开始生效。

#### 代码

```php
<?php
echo $_SERVER['REQUEST_TIME_FLOAT'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
#无输出，本地环境是5.3
```

### QUERY_STRING

query string（查询字符串），如果有的话，通过它进行页面访问。

#### 代码

```php
<?php
echo $_SERVER['QUERY_STRING'];
?>
```

#### 请求

```out
http://www.test.com/?a=1
```

#### 结果

```out
a=1
```

### DOCUMENT_ROOT

当前运行脚本所在的文档根目录。在服务器配置文件中定义。

#### 代码

```php
<?php
echo $_SERVER['DOCUMENT_ROOT'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
D:/Code/test
```

### HTTP_ACCEPT

当前请求头中 Accept: 项的内容，如果存在的话。

#### 代码

```php
<?php
echo $_SERVER['HTTP_ACCEPT'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
```

### HTTP_ACCEPT_CHARSET

当前请求头中 Accept-Charset: 项的内容，如果存在的话。例如：“iso-8859-1,*,utf-8”。

#### 代码

```php
<?php
echo $_SERVER['HTTP_ACCEPT_CHARSET'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out

```

### HTTP_ACCEPT_ENCODING

当前请求头中 Accept-Encoding: 项的内容，如果存在的话。例如：“gzip”。

#### 代码

```php
<?php
echo $_SERVER['HTTP_ACCEPT_ENCODING'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
gzip, deflate, sdch
```

### HTTP_ACCEPT_LANGUAGE

当前请求头中 Accept-Language: 项的内容，如果存在的话。例如：“en”。

#### 代码

```php
<?php
echo $_SERVER['HTTP_ACCEPT_LANGUAGE'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
zh-CN,zh;q=0.8
```

### HTTP_CONNECTION

当前请求头中 Connection: 项的内容，如果存在的话。例如：“Keep-Alive”。

#### 代码

```php
<?php
echo $_SERVER['HTTP_CONNECTION'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
keep-alive
```

### HTTP_HOST

当前请求头中 Host: 项的内容，如果存在的话。

#### 代码

```php
<?php
echo $_SERVER['HTTP_HOST'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
www.test.com
```

### HTTP_REFERER

引导用户代理到当前页的前一页的地址（如果存在）。由 user agent 设置决定。并不是所有的用户代理都会设置该项，有的还提供了修改 HTTP_REFERER 的功能。简言之，该值并不可信。

#### 代码

```php
<?php
echo $_SERVER['SERVER_NAME'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out

```

### HTTP_USER_AGENT

当前请求头中 User-Agent: 项的内容，如果存在的话。该字符串表明了访问该页面的用户代理的信息。一个典型的例子是：Mozilla/4.5 [en] (X11; U; Linux 2.2.9 i586)
。除此之外，你可以通过 [get_browser()](../函数参考/其他基本扩展/Misc/get_browser.md)来使用该值，从而定制页面输出以便适应用户代理的性能。

#### 代码

```php
<?php
echo $_SERVER['HTTP_USER_AGENT'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

### HTTPS

如果脚本是通过 HTTPS 协议被访问，则被设为一个非空的值。 Note: 注意当使用 IIS 上的 ISAPI 方式时，如果不是通过 HTTPS 协议被访问，这个值将为 off。

#### 代码

```php
<?php
echo $_SERVER['HTTPS'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out

```

### REMOTE_ADDR

浏览当前页面的用户的 IP 地址。

#### 代码

```php
<?php
echo $_SERVER['REMOTE_ADDR'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
127.0.0.1
```

### REMOTE_HOST

浏览当前页面的用户的主机名。DNS 反向解析不依赖于用户的 ''REMOTE_ADDR''。 Note: 你的服务器必须被配置以便产生这个变量。例如在 Apache 中，你需要在 httpd.conf 中设置 HostnameLookups
On 来产生它。参见 gethostbyaddr()。

#### 代码

```php
<?php
echo $_SERVER['REMOTE_HOST'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out

```

### REMOTE_PORT

用户机器上连接到 Web 服务器所使用的端口号。

#### 代码

```php
<?php
echo $_SERVER['REMOTE_PORT'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
62027
```

### REMOTE_USER

经验证的用户

### REDIRECT_REMOTE_USER

验证的用户，如果请求已在内部重定向。

### SCRIPT_FILENAME

当前执行脚本的绝对路径。 Note:如果在命令行界面（Command Line Interface, CLI）使用相对路径执行脚本，例如 `file.php` 或 `../file.php`
，那么 `$_SERVER['SCRIPT_FILENAME']` 将包含用户指定的相对路径。

#### 代码

```php
<?php
echo $_SERVER['SCRIPT_FILENAME'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
D:/Code/test/index.php
```

### SERVER_ADMIN

该值指明了 Apache 服务器配置文件中的 SERVER_ADMIN 参数。如果脚本运行在一个虚拟主机上，则该值是那个虚拟主机的值。

#### 代码

```php
<?php
echo $_SERVER['SERVER_ADMIN'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
admin@phpStudy.net
```

### SERVER_PORT

Web 服务器使用的端口。默认值为 “80”。如果使用 SSL 安全连接，则这个值为用户设置的 HTTP 端口。

#### 代码

```php
<?php
echo $_SERVER['SERVER_PORT'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
80
```

### SERVER_SIGNATURE

包含了服务器版本和虚拟主机名的字符串。

### PATH_TRANSLATED

当前脚本所在文件系统（非文档根目录）的基本路径。这是在服务器进行虚拟到真实路径的映像后的结果。 Note: 自 PHP 4.3.2 起，PATH_TRANSLATED 在 Apache 2 SAPI 模式下不再和 Apache 1
一样隐含赋值，而是若 Apache 不生成此值，PHP 便自己生成并将其值放入 SCRIPT_FILENAME 服务器常量中。这个修改遵守了 CGI 规范，PATH_TRANSLATED 仅在 PATH_INFO 被定义的条件下才存在。
Apache 2 用户可以在 httpd.conf 中设置 `AcceptPathInfo = On` 来定义 PATH_INFO。

### SCRIPT_NAME

包含当前脚本的路径。这在页面需要指向自己时非常有用。[__FILE__](../常量/魔术常量/__FILE__.md) 常量包含当前脚本(例如包含文件)的完整路径和文件名。

#### 代码

```php
<?php
echo $_SERVER['SCRIPT_NAME'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
/index.php
```

### REQUEST_URI

URI 用来指定要访问的页面。例如 “/index.html”。

#### 代码

```php
<?php
echo $_SERVER['REQUEST_URI'];
?>
```

#### 请求

```out
http://www.test.com
```

#### 结果

```out
/
```

### PHP_AUTH_DIGEST

当作为 Apache 模块运行时，进行 HTTP Digest 认证的过程中，此变量被设置成客户端发送的“Authorization” HTTP 头内容（以便作进一步的认证操作）。

### PHP_AUTH_USER

当 PHP 运行在 Apache 或 IIS（PHP 5 是 ISAPI）模块方式下，并且正在使用 HTTP 认证功能，这个变量便是用户输入的用户名。

#### 代码

```php
<?php
$authorization = false;
if($_SERVER['PHP_AUTH_USER'] == "admin" && $_SERVER['PHP_AUTH_PW'] == "admin888"){
    echo $_SERVER['PHP_AUTH_USER'];
    $authorization = true;
    exit;
}
if(!$authorization){
    header("WWW-Authenticate:Basic realm='Private'");
    header('HTTP/1.0 401 Unauthorized');
    print "You are unauthorized to enter this area.";
}
?>
```

### PHP_AUTH_PW

当 PHP 运行在 Apache 或 IIS（PHP 5 是 ISAPI）模块方式下，并且正在使用 HTTP 认证功能，这个变量便是用户输入的密码。

### AUTH_TYPE

当 PHP 运行在 Apache 模块方式下，并且正在使用 HTTP 认证功能，这个变量便是认证的类型。

### PATH_INFO

包含由客户端提供的、跟在真实脚本名称之后并且在查询语句（query string）之前的路径信息，如果存在的话。例如，如果当前脚本是通过
URL `http://www.example.com/php/path_info.php/some/stuff?foo=bar` 被访问，那么 `$_SERVER['PATH_INFO']` 将包含 `/some/stuff`。

#### 代码

```php
<?php
echo $_SERVER['PATH_INFO'];
?>
```

#### 请求

```out
http://www.test.com/index.php/wd/qwd/af?awd=1&aw&asd
```

#### 结果

```out
/wd/qwd/af
```

### ORIG_PATH_INFO

在被 PHP 处理之前，“PATH_INFO” 的原始版本。

## 更新日志

|版本|说明|
|---|---|
|4.1.0|引入 $_SERVER，弃用 $HTTP_SERVER_VARS。|
