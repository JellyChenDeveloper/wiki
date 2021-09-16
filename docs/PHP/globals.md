# $GLOBALS

$GLOBALS — 引用全局作用域中可用的全部变量

## 说明

一个包含了全部变量的全局组合数组。变量的名字就是数组的键。

## 范例

```php
<?php
function test() {
    $foo = "local variable";

    echo '$foo in global scope: ' . $GLOBALS["foo"] . "\n";
    echo '$foo in current scope: ' . $foo . "\n";
}

$foo = "Example content";
test();
?>
```

上例输出：

```shell
$foo in global scope: Example content
$foo in current scope: local variable
```

## 参 见

[Global关键字](/PHP/语言参考/变量/变量范围.md#Global关键字)
