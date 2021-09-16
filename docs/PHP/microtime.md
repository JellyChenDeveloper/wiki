# microtime

(PHP 4, PHP 5, PHP 7)

返回当前 Unix 时间戳和微秒数

## 说明

```php
mixed microtime ([ bool $get_as_float = false ] )
```

**microtime()** 返回当前 Unix 时间戳以及微秒数。本函数仅在支持 [gettimeofday()](gettimeofday.md) 系统调用的操作系统下可用。

## 参数

`get_as_float`

如果使用该参数并设置为TRUE，该函数将返回浮点数而不是字符串。具体参见下方[返回值](#返回值)描述

## 返回值

如果调用时不带可选参数，本函数以 `msec sec` 的格式返回一个字符串，其中 sec 是自 Unix 纪元（0:00:00 January 1, 1970 GMT）起到现在的秒数，msec 是微秒部分。字符串的两部分都是以秒为单位返回的。

如果给出了 get_as_float 参数并且其值等价于 TRUE，microtime() 将返回一个浮点数。

**Note: get_as_float 参数是 PHP 5.0.0 新加的。**

## 参见

[time()](time.md)

[gettimeofday()](gettimeofday.md)

## 范例

### 代码

```php
<?php
var_dump(microtime());
var_dump(microtime(TRUE));
?>
```

### 结果

```shell
string '0.44473500 1467703124' (length=21)
float 1467703124.4449
```
