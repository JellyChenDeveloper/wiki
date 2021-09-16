---
sidebar: auto
---

# Jscript 用户指南

## JScript 基础

### 什么是 JScript

JScript 是 Microsoft 公司对 ECMA 262 语言规范（ECMAScript 编辑器 3）的一种实现。除了少数例外（为了保持向后兼容），JScript 完全实现了 ECMA 标准。本概述的目的就是引导您学习使用
JScript。

### 使用 JScript

JScript 是一种解释型的、基于对象的脚本语言。尽管与 C++ 这样成熟的面向对象的语言相比，JScript 的功能要弱一些，但对于它的预期用途而言，JScript 的功能已经足够大了。

JScript 不是其他语言的精简版（例如，它只是与 Java 有点模糊而间接的关系），也不是任何事物的简化。不过，它有其局限性。例如，您不能使用该语言来编写独立运行的应用程序，并且没有对读写文件的内置支持。此外，JScript
脚本只能在某个解释器或“宿主”上运行，如 Active Server Pages（ASP）、Internet 浏览器或者 Windows 脚本宿主。

JScript 是一种宽松类型的语言。宽松类型意味着您不必显式定义变量的数据类型。事实上 JScript 更进一步。您无法在JScript上明确地定义数据类型。此外，在大多数情况下，JScript
将根据需要自动进行转换。例如，如果将一个数值添加到由文本组成的某项（一个字符串），该数值将被转换为文本。

本用户指南的其余部分是 JScript 特性概述。有关该语言实现的全部细节，请参考[语言参考](jscript_语言参考.md)。

注意 下面大多数示例的代码比实际 Web 页中的代码应该更明确，并且不是太复杂。其目的是阐明相关概念，而不是提供最优的简短编码和风格。在任何情况下，如果六个月以后您还能毫不费力地阅读和理解所编写的代码，则说明这些代码写得不错。

### 编写 JScript 代码

与其他许多编程语言一样， Microsoft JScript 是用文本方式编写的，并被组织成为语句、由相关的语句集组成的块、以及注释。在一条语句内可以使用变量、比如字符串和数字（称为“文字”）的立即数、以及表达式。

### 语句

JScript 程序是语句的集合。一条 Jscript 语句相当于英语中的一个完整句。Jscript 语句将表达式组合起来，完成一个任务。

一条语句由一个或多个表达式、关键字或者运算符（符号）组成。典型地，一条语句写一行，尽管一条语句可以超过两行或更多行。两条或更多条语句也可以写在同一行上，语句之间用分号“;”隔开。通常，每一新行开始一条新语句。不过显式地终止语句是一个好方法。这是用分号 (
;)来实现的，分号是 JScript 语句的终止字符。下面给出 Jscript 语句的两隔示例。

```javascript
aBird = "Robin"; //将文本“Robin”赋值给变量 aBird
var today = new Date(); // 将今天的日期赋值给变量 today
```

用大括号（{}）括起来的一组 JScript 语句称为一个语句块。分组到一个语句块中的语句通常可当作单条语句处理。这就是说在 JScript 期望有一条单个语句的大多数地方可以使用语句块。应该注意以 for 和 while
打头的循环语句是例外情况。注意，语句块中的原始语句以分号结束，但语句块本身并不以分号结束。

通常，在函数和条件语句中使用语句块。注意，Jscript 与 C++
以及其他某些语言不同，它不认为语句块是一个新的范围；只有函数创建新范围。在下面的示例中，第一条语句开始定义一个函数，该函数包含一个五条语句组成的语句块。语句块后的三条语句没有用大括号括起来；这些语句不是一个语句块，所以就不是函数定义的一部分。

```javascript
function convert (inches) {
  feet = inches / 12;  //  这五条语句属于一个语句块。
  miles = feet / 5280;
  nauticalMiles = feet / 6080;
  cm = inches * 2.54;
  meters = inches / 39.37;
}

km = meters / 1000;  //  这三条语句不在语句块内。
kradius = km;
mradius = miles;
```

### 注释

单行的 JScript 注释以一对正斜杠(//)开始。下面给出一个单行注释的示例。

```javascript
aGoodIdea = "Comment your code thoroughly.";  //  这是一个单行注释。
```

多行注释以一个正斜杠加一个星号的组合(/*)开始,并以其逆向顺序 (*/)结束。

```javascript
/*
这是一个用来解释前面的代码语句的多行注释。

该语句将一个值赋给 aGoodIdea 变量。
用引号包含的这种值称为一个文字。
文字显式并直接包含信息；
而不是简接地引用信息。
（引号不属于该文字的内容。）
*/
```

**注意**   如果您试图将一个多行注释插入到另一个中，JScript 不能按正常的方式解释生成的多行注释。标明嵌入的多行注释结束的 */ 被认为是整个多行注释的结尾。这就意味着嵌入多行注释之后的文本不再被认为是注释；相应地，它将被解释为
JScript 代码，并会产生语法错误。

建议将所有的注释写为单行注释的语句块。这样您以后就能够将大段的代码与多行注释区分开。

```javascript
//这是另一种多行注释，写成一系列单行注释。

//  在执行完该语句后，可以使用 aGoodIdea 变量的名字来引用其内容，
//  如下一条语句那样，即采用连接操作将字符串文字添加到
//  aGoodIdea 变量，以创建一个新的变量。

var extendedIdea = aGoodIdea + " You never know when you'll have to figure out what it does.";
```

### 赋值和相等

JScript 语句中使用等号 (=)给变量赋值：等号是赋值运算符。= 运算符左边的操作项总是一个 Lvalue。Lvalue 可以是：

* 变量
* 数组元素
* 对象属性

= 运算符右边的操作项总是一个 Rvalue。Rvalues 可以是任何类型的一个任意值，包括表达式的值。下面给出一个 JScript 赋值语句的示例。

```javascript
anInteger = 3;
```

Jscript 编译器解释本语句的意义为：“将 3 赋给变量 anInteger”或“anInteger 的值为 3”。

确定您理解了 = 运算符（赋值）和 == 运算符（相等）的差异。在比较两个值是否相等时，应使用两个等于号 (==)。这些内容将在 控制程序的流程 中详细介绍。

#### 表达式

JScript 表达式是指 JScript 解释器能够计算生成值的 JScript “短语”。这个值可以是任何有效的 JScript 类型 — 数字、字符串、对象，等等。最简单的表达式是文字。下面给出 JScript 文字表达式的一些示例。

```
3.9                       // 数字文字
"Hello!"                  // 字符串文字
false                     // 布尔文字
null                      // 文字空值
{x:1, y:2}                // 对象文字
[1,2,3]                   // 数组文字
function(x){return x*x;}  // 函数文字
```

更多复杂的表达式中包含变量、函数、函数调用以及其他表达式。可以用运算符将表达式组合，创建复合表达式。运算符可以是：

```
+  // 加法
-  // 减法
*  // 乘法
/  // 除法
```

下面给出 JScript 复合表达式的一些示例。

```javascript
var anExpression = 3 * (4 / 5) + 6;
var aSecondExpression = Math.PI * radius * radius;
var aThirdExpression = aSecondExpression + "%" + anExpression;
var aFourthExpression = "(" + aSecondExpression + ") % (" + anExpression + ")";
```

### JScript 变量

任何编程语言中，用一块数据量化一个概念。

How old am I?

在 Jscript 中，变量是给概念的名称；它代表了给出瞬间的值。当使用该变量时，实际是用的它所代表的数据。给出示例：

```
NumberOfDaysLeft = EndDate – TodaysDate;
```

机械的理解是使用变量来存储、得到并操作脚本中出现的所有的不同值。创建有意义的变量名称；便于别人理解脚本。

### 变量声明

变量在脚本中的第一次出现是在声明中。变量在第一次用到时就设置于内存中，便于后来在脚本中引用。使用变量之前先进行声明。可以使用 var 关键字来进行变量声明。

```javascript
var count;  // 单个声明。
var count, amount, level;  // 用单个 var 关键字声明的多个声明。
var count = 0, amount = 100;  // 一条语句中的变量声明和初始化。
```

如果在 **var** 语句中没有初始化变量，变量自动取 JScript 值 **undefined**。尽管并不安全，但声明语句中忽略 **var** 关键字是合法的 JScript 语法。这时，JScript
解释器给予变量全局范围的可见度。当在过程级中声明一个变量时，它不能用于全局范围；这种情况下，变量声明必须用 **var** 关键字。

### 变量命名

变量名称是一个标识符。Jscript 中，用标识符来：

* 命名变量
* 命名函数
* 给出循环的标签

JScript 是一种区分大小写的语言。因此变量名称 myCounter 和变量名称 mYCounter 是不一样的。变量的名称可以是任意长度。创建合法的变量名称应遵循如下规则：

* 第一个字符必须是一个 ASCII 字母（大小写均可），或一个下划线(_)。注意第一个字符不能是数字。
* 后续的字符必须是字母、数字或下划线。
* 变量名称一定不能是 保留字。

下面给出合法变量名称的一些示例：

```javascript
_pagecount
Part9
Number_Items
```

下面给出无效变量名称的一些示例：

```javascript
99
Balloons // 不能以数字开头。
Smith & Wesson // “与”符号（&）字符用于变量名称是无效的。
```

当要声明一个变量并进行初始化，但又不想指定任何特殊值，可以赋值为 JScript 值 null。下面给出示例。

```javascript
var bestAge = null;
var muchTooOld = 3 * bestAge; // muchTooOld 的值为 0。
```

如果声明了一个变量但没有对其赋值，该变量存在，其值为Jscript 值 undefined。下面给出示例。

```javascript
var currentCount;
var finalCount = 1 * currentCount; // finalCount 的值为 NaN，因为 currentCount 为 undefined。
```

注意在 JScript 中 **null** 和 **undefined** 的主要区别是 **null** 的操作象数字 0，而 **undefined** 的操作象特殊值**NaN** （不是一个数字）。对 **null** 值和 **
undefined** 值作比较总是相等的。

可以不用 **var** 关键字声明变量，并赋值。这就是隐式声明。

```javascript
noStringAtAll = ""; // 隐式声明变量 noStringAtAll。
```

不能使用未经过声明的变量。

```javascript
var volume = length * width; // 错误 — length 和 width 并不存在。
```

### 强制转换

表达式中操作项的数据类型相同时 JScript 解释器才能对其求值。如果表达式不经过强制转换就试图对两个不同的数据类型（如一个为数字，另一个为字符串）执行运算，将产生错误结果。但在 Jscript 中情况就不同了。

JScript 是一种自由类型的语言。它的变量没有预定类型（相对于强类型语言，如 C++）。相反，JScript 变量的类型相应于他们包含的值的类型。这种操作的好处是能将值作为另一类型处理。

在 Jscript 中，可以对不同类型的值执行运算，不必担心 JScript 解释器产生异常。相反，JScript 解释器自动将数据类型之一改变（强制转换）为另一种数据类型，然后执行运算。例如：

| 运算 | 结果 |
| --- | --- |
|数值与字符串相加|将数值强制转换为字符串。|
|布尔值与字符串相加|将布尔值强制转换为字符串。|
|数值与布尔值相加|将布尔值强制转换为数值。|

考虑下面的示例。

```javascript
var x = 2000;      // 一个数字。
var y = "Hello";   // 一个字符串。
x = x + y;         // 将数字强制转换为字符串。
document.write(x); // 输出 2000Hello。
```

要想显式地将字符串转换为整数，使用 parseInt 方法。要想显式地将字符串转换为数字，使用 parseFloat 方法。请注意，比较大小时字符串自动转换为相等的数字，但加法（连接）运算时保留为字符串。

### JScript 数据类型

Jscript 有三种主要数据类型、两种复合数据类型和两种特殊数据类型。

主要（基本）数据类型是：

* 字符串
* 数值
* 布尔

复合（引用）数据类型是：

* 对象
* 数组

特殊数据类型是：

* Null
* Undefined

### 字符串数据类型

一个字符串值是排在一起的一串零或零以上的 Unicode 字符（字母、数字和标点符号）。字符串数据类型用来表示 JScript
中的文本。脚本中可以包含字符串文字，这些字符串文字放在一对匹配的的单引号或双引号中。字符串中可以包含双引号，该双引号两边需加单引号，也可以包含单引号，该单引号两边需加双引号。下面是字符串的示例：

```javascript
"Happy am I; from care I’m free!"
'"Avast, ye lubbers!" roared the technician.'
"42"
'c'
```

请注意，JScript 中没有表示单个字符的类型（如 C++ 的 **char**）。要表示 Jscript 中的单个字符，应创建一个只包含一个字符的字符串。包含零个字符（""）的字符串是空（零长度）字符串。

### 数值数据类型

在 Jscript 中整数和浮点值没有差别；JScript 数值可以是其中任意一种（JScript 内部将所有的数值表示为浮点值）。

### 整型值

整型值可以是正整数，负整数和 0。可以用 10 进制，8 进制和 16 进制来表示。在 Jscript 中大多数字是用十进制表示的。加前缀“0”表示 8 进制的整型值，只能包含 0 到 7
的数字。前缀为“0”同时包含数字“8”或“9”的数被解释为十进制数。

加前缀“0x”（零和x|X）表示 16 进制整型值。可以包含数字 0 到 9，以及字母 A 到 F（大写或小写）。使用字母 A 到 F 表示十进制 10 到 15 的单个数字。就是说 0xF 与 15 相等，同时 0x10 等于 16。

八进制和十六进制数可以为负，但不能有小数位，同时不能以科学计数法（指数）表示。

### 浮点值

浮点值为带小数部分的数。也可以用科学计数法来表示。这就是说，大写或小写“e”用来表示 10 的次方。Jscript用数值表示的八字节 IEEE754 浮点标准。这意味着数字最大可以到±1.7976931348623157x10<sup>
308</sup>，最小到±5x10<sup>-324</sup>。以“0”开始且包含小数点的数字被解释为小数浮点数。

注意以“0x”或“00”开始并包含小数点的数将发生错误。以下是 Jscript 中数字的例子。

|数字|描述|等价十进制数|
|---|---|---|
|.0001, 0.0001, 1e<sup>-4</sup>, 1.0e<sup>-4</sup> |四个相等的浮点数 |0.0001 |
|3.45e<sup>2</sup> |浮点数 |345 |
|42 |整数 |42 |
|0378 |整数。虽然看起来是八进制数（以0开头），但是8不是有效的八进制数字，所以为十进制数。 |378 |
|0377 |八进制整数。注意它虽然看起来比上面的数只小1，但实际数值有很大不同。 |255 |
|0.0001 |浮点数。虽然以零开头，但由于带有小数点所以不是八进制数。 |0.0001 |
|00.0001 |错误。两个零开头表示为八进制，但八进制数不能带有小数部分。 |N/A （编译错误） |
|0Xff |十六进制整数。 |255 |
|0x37CF |十六进制整数。 |14287 |
|0x3e<sup>7</sup> |十六进制整数。注意‘e’并不被认为指数。 |999 |
|0x3.45e<sup>2</sup> |错误。十六进制数不能有小数部分。 |N/A （编译错误） |

另外，JScript包含特殊值数字。它们是：

* NaN （不是数）。当对不适当的数据进行数学运算时使用，例如字符串或未定义值。
* 正无穷大。在JScript中如果一个正数太大的话使用它来表示。
* 负无穷大。在JScript中如果一个负数太大的话使用它来表示。
* 正0和负0。Jscript区分正0和负0。

### Boolean数据类型

尽管字符串和数字类型可以有无数不同的值，boolean 数据类型却只有两个值。它们是文字 **true** 和 **false**。Boolean值是一个真值，它表示一个状态的有效性（说明该状态为真或假）。

脚本中的比较通常得到一个 Boolean 结果。考虑下一行 Jscript 代码。

```javascript
y = (x == 2000);
```

这里要比较变量 x 的值是否与数字 2000 相等。如果相等，比较的结果为 Boolean 值 **true**，并将其赋给变量 y。如果x与2000不等，则比较的结果为boolean值**false**。

Boolean值在结构控制中尤其有用。可以将直接创建 boolean 值的比较与用使用该 boolean 值的语句相组合。考虑下面的JScript代码范例。

```javascript
if (x == 2000)
  z = z + 1;
else
  x = x + 1;
```

当 boolean 值为 **true** 时，Jscript 中的 **if/else** 语句执行一个操作（这样，z = z + 1），而当 boolean 值为 **false** 时执行另一个操作（x = x + 1）。

可以使用任意表达式作比较表达式。任何值为0、null、未定义或空字符串的表达式被解释为 **false**。其他任意值的表达式解释为 **true**。例如，可以使用如下表达式：

```javascript
if (x = y + z) { // 这可能不是想要的结果 – 如下！
}
```

注意上面的代码并不检查 x 是否与 y+z 相等，因为仅使用了一个等号（赋值）。相反的，上面的代码将 y+z 赋给变量 x，然后检查整个表达式的值是否为零。要检查 x 是否与 y+z 相等，使用如下代码。

```javascript
if (x == y + z) { // 这与上面的代码不同！
}
```

有关比较的详细信息，请参见控制程序的流程。

### Null 数据类型

在 Jscript 中数据类型 **null** 只有一个值：null。关键字 null 不能用作函数或变量的名称。

包含 null 的变量包含“无值”或“无对象”。换句话说，该变量没有保存有效的数、字符串、boolean、数组或对象。可以通过给一个变量赋 null 值来清除变量的内容。

请注意，在 Jscript 中，null 与 0 不相等（与在 C 和 C++ 中不同）。同时应该指出的是，Jscript中 **typeof** 运算符将报告 null 值为 **Object** 类型，而非类型
null。这点潜在的混淆是为了向下兼容。

### Undefined 数据类型

如下情况使返回 undefined 值：

* 对象属性不存在，
* 声明了变量但从未赋值。

注意不能通过与 undefined 做比较来测试一个变量是否存在，虽然可以检查它的类型是否为“undefined”。在以下的代码范例中，假设程序员想测试是否已经声明变量 x ：

```javascript
// 这种方法不起作用
if (x == undefined) {
  // 作某些操作
}

// 这个方法同样不起作用- 必须检查
// 字符串 "undefined"
if (typeof (x) == undefined) {
  // 作某些操作
}

// 这个方法有效
if (typeof (x) == "undefined") {
  // 作某些操作
}

```

考虑将 undefined 值与null做比较。

```javascript
someObject.prop == null;
```

如下情况时，比较的结果为 **true**:

* 如果属性 someObject.prop 包含 null 值，
* 如果属性 someObject.prop 不存在。
* 要检查一个对象属性是否存在，可以使用新的 **in** 运算符：

```javascript
if ("prop" in someObject) {
  // someObject 有属性 'prop'
}
```

### JScript 运算符

JScript 具有全范围的运算符,包括算术、逻辑、位、赋值以及其他某些运算符。

|计算||逻辑||位运算||赋值||杂项||
|---|---|---|---|---|---|---|---|---|---|
|描述 |符号 |描述 |符号 |描述 |符号 |描述 |符号 |描述 |符号|
|负值 |- |逻辑非 |! |按位取反 |~ |赋值 |= |删除 |delete |
|递增 |++  |小于 |< |按位左移 |<<  |运算赋值 |oP=  |typeof运算符 |typeof |
|递减 |--  |大于 |> |按位右移 |> >     | | |void  |void |
|乘法 |* |小于等于 |<= |无符号右移  |> > >  | |    |instanceof |instanceof |
|除法 |/ |大于等于 |> = |按位与  |&     | | |new |new |
|取模运算 |% |等于 |== |按位异或  |^   | |   |in |in |
|加法 |+ |不等于 |!= |按位或  ||          |
|减法 |- |逻辑与 |&&             |
| |   |逻辑或 |||             |
| |   |条件（三元运算符） |?:              |
| |   |逗号 |,             |
| |   |严格相等 |===             |
| |   |非严格相等 |!==              |

== （相等）与 === （严格相等）的区别在于恒等运算符在比较前强制转换不同类型的值。例如，恒等对字符串 "1" 与数值 1 的比较结果将为 true。而严格相等不强制转换不同类型的值，因此它认为字符串 "1" 与数值 1 不相同。

基本的字符串、数值和布尔值是按值比较的。如果它们的值相同，比较结果为相等。对象（包括**Array**、**Function**、**String**、**Number**、**Boolean**、**Error**、**Date**
以及 **RegExp** 对象）按引用比较。即使这些类型的两个变量具有相同的值，只有在它们正好为同一对象时比较结果才为 true。

例如：

```javascript
// 具有相同值的两个基本字符串。
var string1 = "Hello";
var string2 = "Hello";

// 具有相同值的两个 String 对象。
var StringObject1 = new String(string1);
var StringObject2 = new String(string2);

// 比较结果为 true。
if (string1 == string2) {
  // 执行某些命令（将要运行的）。
}

// 比较结果为 false。
if (StringObject1 == StringObject2) {
  //执行某些命令（不会运行）。
}

// 要比较 String 对象的值，
// 用 toString() 或者 valueOf() 方法。
if (StringObject1.valueOf() == StringObject2) {
  //执行某些命令（将要运行的）。
}

```

### 控制程序的流程

Jscript 脚本中的语句一般是按照写的顺序来运行的。这种运行称为顺序运行，是程序流的默认方向。

与顺序运行不同，另一种运行将程序流转换到脚本的另外的部分。也就是，不按顺序运行下一条语句，而是运行另外的语句。

要使脚本可用，该控制的转换必须以逻辑方式执行。程序控制的转换是基于一个“决定”，这个“决定”结果是真或假（返回 Boolean 型 **true** 或 **false**）。
创建一个表达式，然后测试其是否为真。主要有两种程序结构实现本功能。

第一种是选择结构。用来指明两种程序流方向，在程序中创建一个交叉点（像岔路）。在 Jscript 中有四种选择结构可用。

* 单一选择结构（**if**），
* 二路选择结构（**if/else**），
* 内联三元运算符 **?**:
* 多路选择结构（**switch**）。

第二种类型的程序控制结构是循环结构。使用循环结构来指明当某些条件保持为真时要重复的动作。当控制语句的条件得到满足时（通常在某些迭代的特定数字后），控制跳过循环结构传递到下条语句。在 Jscript 中有四种循环结构可用。

* 在循环的开头测试表达式（**while**），
* 在循环的末尾测试表达式（**do/while**），
* 对对象的每个属性都进行操作（**for/in**），
* 由计数器控制的循环（**or**）。

通过嵌套和堆栈选择、循环控制结构，可以创建相当复杂的脚本。

第三种形式的结构程序流由意外处理给出，本文档不作讨论。

### 使用条件语句

JScript 支持 **if** 和 **if...else** 条件语句。在 **if** 语句中将测试一个条件，如果该条件满足测试，执行相关的 JScript 编码。在 **if...else**
语句中，如果条件不满足测试，则将执行不同的代码。最简单的 if 语句格式可以在一行中写完，不过更常见的是多行的 **if** 和 **if...else** 语句。

下述示例演示了使用 **if** 和 **if...else** 语句的各种可能的语法。第一个示例演示了最简单的布尔测试。当（且仅当）括号之间的项的值为（或者可被强制转换为） **true** 时，**if**
后续的语句或语句块才会被执行。

```javascript
// smash() 函数是在该代码的其他地方定义的。
// 布尔测试，看 newShip 是否为 true。
if (newShip)
  smash(champagneBottle, bow);

// 在本示例中，除非两个条件都为真，否则该测试将不会被满足。
if (rind.color == "deep yellow " && rind.texture == "large and small wrinkles") {
  theResponse = ("Is it a Crenshaw melon?");
}

// 在本示例中，只要任何一个条件为真，则测试即会满足。
var theReaction = "";
if ((dayOfWeek == "Saturday") || (dayOfWeek == "Sunday")) {
  theReaction = ("I'm off to the beach!");
} else {
  theReaction = ("Hi ho, hi ho, it's off to work I go!");
}
```

==条件运算符==

JScript 也支持隐式的条件格式。该格式在要测试的条件后使用一个问号（而不是在条件前的 **if** ）。它也指定两个可选项，一个在满足条件时使用，另一个在条件不满足时使用。这两个选择项之间必须用一个冒号隔开。

```javascript
var hours = "";

// 下面的代码指定 hours 是包含 theHour 的内容，
// 还是包含 theHour - 12 的内容。

hours += (theHour >= 12) ? " PM" : " AM";
```

如果要一起测试多个条件，并且知道某个条件比其他条件更可能满足或不满足测试，可以使用称为“短路计算”的特性来加速脚本的运行速度。当 JScript 计算逻辑表达式时，只计算要得到结果所需的子表达式。

例如，如果有一个“与”表达式，如 ((x == 123) && (y == 42))，Jscript 首先检查 x 是否为 123。如果不是，即使 y 等于 42，整个表达式的值也不可能为 true。因此，并不对 y 作测试，Jscript
返回 **false** 值。

类似地，如果多个条件中只要有一个为真（使用 || 运算符），则当任何一个条件满足该测试时测试则停止。如果要测试的条件包括函数调用或其他复合表达式，这种处理方式就有效。出于此种想法，写 OR 表达式时，先写最有可能为 **true**
的条件。写 AND 表达式时，先写最有可能为 **false** 的条件。

以这种方式设计脚本的好处的一个示例是：在下例中如果 **runFirst()** 返回 **0** 或 **false**， 则不会运行 **runSecond()**。

```javascript
if ((runFirst() == 0) || (runSecond() == 0)) {
  // 若干代码。
}
```

### 使用循环

有多种方式来重复执行一条语句或语句块。通常重复执行被称为_循环_或_重复_。重复只是循环的一个运行。典型情况是用一个变量测试来进行控制，每执行一次循环变量的取值都会更改。JScript 支持四种循环： **for** 循环、 **
for...in** 循环、 **while** 循环、 **do...while** 循环。

#### 使用 for 循环

**for**
语句指定了一个计数器变量，一个测试条件，以及更新该计数器的操作。在每次循环的重复之前，都将测试该条件。如果测试成功，将运行循环中的代码。如果测试不成功，不运循环中的代码，程序继续运行紧跟在循环后的第一行代码。在执行该循环后，计算机变量将在下一次循环之前被更新。

如果循环条件永不会满足，则不执行该循环。如果测试条件始终满足，则将导致无限循环。在有些情况下，前者可能是合乎需要的，而后者几乎没有用处，因此在编写循环条件时一定要注意。

```javascript
/*
更新表达式 （下例中的 "icount++"）将在循环结束时被执行，即在构成循环主体的语句块被执行后，在测试条件之前。
*/

var howFar = 10;  // 将循环次数限制为 10。

var sum = new Array(howFar);  // 创建一个称为 sum 并具有 10 个成员的数组，这 10 个成员从 0 到 9。
var theSum = 0;
sum[0] = 0;

for (var icount = 0; icount < howFar; icount++) {        // 在本例中将从 0 到 9 进行计数。
  theSum += icount;
  sum[icount] = theSum;
}

var newSum = 0;
for (var icount = 0; icount > howFar; icount++) {        // 该循环根本不会被执行，因为 icount 不大于 howFar。
  newSum += icount;
}

var sum = 0;
for (var icount = 0; icount >= 0; icount++) {        // 这是一个无限循环。
  sum += icount;
}
```

#### 使用 for...in 循环

JScript 提供了一种特别的循环方式来遍历一个对象的所有用户定义的属性或者一个数组的所有元素。**for...in** 循环中的循环计数器是一个字符串，而不是数字。它包含当前属性的名称或者当前数组元素的下标。

下面的代码范例应在 Internet 浏览器中运行，因为它使用 **alert** 方法，该方法不属于 Jscript。

```javascript
// 创建具有某些属性的对象
var myObject = new Object();
myObject.name = "James";
myObject.age = "22";
myObject.phone = "555 1234";

// 枚举（循环）对象的所有属性
for (prop in myObject) {
  // 显示 "The property 'name' is James"，等等。
  window.alert("The property '" + prop + "' is " + myObject[prop]);
}
```

尽管 **for...in** 循环看起来像 VBScript 的 **For Each...Next** 循环，其实并不一样。JScript 的 **for...in** 循环重复Jscript 对象所有的属性。VBScript 的 **
For Each...Next** 循环重复集合中的所有项目。要循环 JScript 中的所有集合，需要用 **Enumerator** 对象。尽管某些对象（像 Internet 浏览器中的那些）支持 VBScript 的 **For
Each...Next** 和 Jscript 的 **for...in** 循环，但多数对象并不都支持。

#### 使用 while 循环

**while** 循环相似于 **for** 循环。其不同之处是 **while** 循环没有内置的计数器或更新表达式。如果希望控制语句或语句块的循环执行，需要不只是“运行该代码 n 次”，而是更复杂的规则，用 **while**
循环。下面的示例使用 Internet 浏览器对象模型和 **while** 循环来询问用户一个简单的问题。

```javascript
var x = 0;
while ((x != 42) && (x != null)) {
  x = window.prompt("What is my favourite number?", x);
}

if (x == null)
  window.alert("You gave up!");
else
  window.alert("Yep - it's the Ultimate Answer!");
```

**注意**   由于 **while** 循环没有显式的内置计数器变量，因此比其他类型的循环更容易产生无限循环。此外，由于不易发现循环条件是在何时何地被更新的，很容易编写一个实际上从不更新条件的 **while** 循环。因此在编写 **
while** 循环时应特别小心。

同上面所提到的，在 JScript 中还有 **do...while** 循环与 **while** 循环相似，不同处在于它总是至少运行一次，因为是在循环的末尾检查条件，而不是在开头。例如，上面的循环可以被改写为：

```javascript
var x = 0;
do {
  x = window.prompt("What is my favourite number?", x);
} while ((x != 42) && (x != null));

if (x == null)
  window.alert("You gave up!");
else
  window.alert("Yep - it's the Ultimate Answer!");
```

#### 使用 break 和 continue 语句

在 Microsoft Jscript 中当某些条件得到满足时，用 **break** 语句来中断一个循环的运行。（请注意，也用 **break** 语句退出一个 **switch** 块。）。如果是一个 **for** 或者 **
for...in** 循环，在更新计数器变量时使用 **continue** 语句越过余下的代码块而直接跳到下一个循环中。

下面的例子基于前面的示例用 **break** 和 **continue** 语句控制循环。

```javascript
var x = 0;
do {
  x = window.prompt("What is my favourite number?", x);

  // 判断用户是否选择取消？如果是，退出循环。
  if (x == null)
    break;

  // 是否输入一个数？
  // 如果是则无需要求输入一个数。
  if (Number(x) == x)
    continue;

  //  要求用户只输入数字。
  window.alert("Please only enter in numbers!");

} while (x != 42)

if (x == null)
  window.alert("You gave up!");
else
  window.alert("Yep - it's the Ultimate Answer!");
```

### JScript 函数

Microsoft Jscript 函数执行操作，也可以返回值。某些时候是计算或比较的结果。函数又被称为“全局方法”。

一个函数中包含有几个操作。这样可使得代码更合理化。可以写一组语句并给其命名，然后通过调用它并传递其需要的信息来运行整组语句。

给函数传递信息可以把信息放在函数名称后面的圆括号中。传递给函数的信息称作参数。某些函数根本不带任何参数，而其他函数带一个或者多个参数。在某些函数中，参数的个数取决于如何使用该函数。

Jscript 支持两种函数：一类是语言内部的函数，另一类是自己创建的。

### 特殊的内部函数

Jscript 语言包含很多内部函数。某些函数可以操作表达式和特殊字符，而其他函数将字符串转换为数值。一个有用的内部函数是 **eval()**。该函数可以对以字符串形式表示的任意有效的 Jscript代码求值。**eval()**
函数有一个参数，该参数就是想要求值的代码。下面给出一个使用本函数的示例。

```javascript
var anExpression = "6 * 9 % 7";
var total = eval(anExpression); // 将变量 total 赋值为 5。
var yetAnotherExpression = "6 * (9 % 7)";
total = eval(yetAnotherExpression) // 将变量 total 赋值为 12。
// 将一个字符串赋给 totality （注意嵌套引用）
var totality = eval("’...surrounded by acres of clams.’");
```

有关内部函数的详细信息请参考语言参考。

### 创建自己的函数

在必要的时候，可以创建并使用自己的函数。一个函数的定义中包含了一个函数语句和一个 Jscript 语句块。

下面示例中的 **CheckTriplet** 函数以三角形的边长为参数。通过查看三条边的长度是否可以组成一个毕达哥拉斯三元组（直角三角形斜边长度的平方等于其他两条边长的平方和）来计算该三角形是否为直角三角形。实际测试时
checkTriplet 函数要调用另两个函数中的一个函数。

注意在浮点数测试版本中极小数（“epsilon”）作为测试变量的使用。由于浮点运算的不确定性和舍入误差，除非问题中的三个值均已知为整数，直接测试这三个数是否组成毕达哥拉斯三元组是不可行的。因为直接的测试更为准确，本示例中的代码确定其是否可行，如果可行则使用它。

```javascript
var epsilon = 0.00000000001; // 一些需要测试的极小数字。

// 测试整数的函数。
function integerCheck (a, b, c) {
  // 测试。
  if ((a * a) == ((b * b) + (c * c)))
    return true;

  return false;
} // 整数检查函数的结尾。

// 测试浮点数的函数。
function floatCheck (a, b, c) {
  // 得到测试数值。
  var delta = ((a * a) - ((b * b) + (c * c)))

  // 测试需要绝对值
  delta = Math.abs(delta);

  // 如果差小于 epsilon，那么它相当接近。
  if (delta < epsilon)
    return true;

  return false;
} // 浮点检查函数的末尾。


// 三元检查。
function checkTriplet (a, b, c) {
  // 创建临时变量，用于交换值
  var d = 0;

  // 先将最长的移动到位置“a”。

  // 需要的话交换 a 和 b
  if (b > a) {
    d = a;
    a = b;
    b = d;
  }

  // 需要的话交换 a 和 c
  if (c > a) {
    d = a;
    a = c;
    c = d;
  }

  // 测试全部的 3 个值，看其是否为整数？
  if (((a % 1) == 0) && ((b % 1) == 0) && ((c % 1) == 0)) {
    // 如果成立，使用精确检查。
    return integerCheck(a, b, c);
  } else {
    // 如果不成立，取尽可能相近的。
    return floatCheck(a, b, c);
  }
} // 三元检查函数的末尾。

// 下面的三个语句赋给范例值，用于测试。
var sideA = 5;
var sideB = 5;
var sideC = Math.sqrt(50.001);

// 调用函数。调用后，'result' 中包含了结果。
var result = checkTriplet(sideA, sideB, sideC);
```

### JScript 对象

### 创建自己的对象

要创建自己的对象实例，必须首先为其定义一个构造函数。构造函数创建一个新对象，赋予对象属性，并在合适的时候赋予方法。例如，下面的示例为 pasta 对象定义了构造函数。注意 **this** 关键字的使用，它指向当前对象。

```javascript
// pasta 是有四个参数的构造器。
function pasta (grain, width, shape, hasEgg) {
  // 是用什么粮食做的？
  this.grain = grain;

  // 多宽？（数值）
  this.width = width;

  // 横截面形状？（字符串）
  this.shape = shape;

// 是否加蛋黄？（boolean）
  this.hasEgg = hasEgg;
}
```

定义了对象构造器后，用 **new** 运算符创建对象实例。

```javascript
var spaghetti = new pasta("wheat", 0.2, "circle", true);
var linguine = new pasta("wheat", 0.3, "oval", true);
```

可以给对象实例添加属性以改变该实例，但是用相同的构造器生成的其他对象定义中并不包括这些属性，而且除非你特意添加这些属性那么在其他实例中并不显示出来。如果要将对象所有实例的附加属性显示出来，必须将它们添加到构造函数或构造器原型对象（原型在高级文档中讨论）中。

```javascript
// spaghetti 的附加属性。
spaghetti.color = "pale straw";
spaghetti.drycook = 7;
spaghetti.freshcook = 0.5;

var chowFun = new pasta("rice", 3, "flat", false);
// chowFun 对象或其他现有的 pasta 对象
// 都没有添加到 spaghetti 对象
// 的三个新属性。


// 将属性‘foodgroup’加到 pasta 原型对象
// 中，这样 pasta 对象的所有实例都可以有该属性，
// 包括那些已经生成的实例。
pasta.prototype.foodgroup = "carbohydrates"

// 现在 spaghetti.foodgroup、chowFun.foodgroup，等等
// 均包含值“carbohydrates”。
```

#### 在定义中包含方法

可以在对象的定义中包含方法（函数）。一种方法是在引用别处定义的函数的构造函数中添加一个属性。例如，下面的示例扩充上面定义的 pasta 构造函数以包含 **toString** 方法，该方法将在显示对象的值时被调用。

```javascript
// pasta 是有四个参数的构造器。
// 第一部分与上面相同。
function pasta (grain, width, shape, hasEgg) {
  // 用什么粮食做的？
  this.grain = grain;

  // 多宽？（数值）
  this.width = width;

  // 横截面形状？（字符串）
  this.shape = shape;

  // 是否加蛋黄？（boolean）
  this.hasEgg = hasEgg;

  // 这里添加 toString 方法（如下定义）。
  // 注意在函数的名称后没有加圆括号；
  // 这不是一个函数调用，而是
  // 对函数自身的引用。
  this.toString = pastaToString;
}

// 实际的用来显示 past 对象内容的函数。
function pastaToString () {
  // 返回对象的属性。

  return "Grain: " + this.grain + "\n" +
    "Width: " + this.width + "\n" +
    "Shape: " + this.shape + "\n" +
    "Egg?: " + Boolean(this.hasEgg);
}

var spaghetti = new pasta("wheat", 0.2, "circle", true);
// 将调用 toString() 并显示 spaghetti 对象
// 的属性（需要Internet 浏览器）。
window.alert(spaghetti);
```

### 内部对象

Microsoft Jscript 提供了 11 个内部（或“内置”）对象。它们是**Array**、**Boolean**、**Date**、**Function**、**Global**、**Math**、**Number**、**
Object**、**RegExp**、**Error** 以及**String**对象。每一个对象有相关的方法和属性，这在语言参考中有详细的描述。本节中也描述了某些对象。

#### Array 对象

数组下标可以被认为是对象的属性，它是通过数字索引来引用的。注意添加到数组中的已命名的属性不能通过数字来索引；它们是与数组元素分离的。

使用 **new** 运算符和 **Array()** 构造器 生成一个新的数组，如下面的示例。

```javascript
var theMonths = new Array(12);
theMonths[0] = "Jan";
theMonths[1] = "Feb";
theMonths[2] = "Mar";
theMonths[3] = "Apr";
theMonths[4] = "May";
theMonths[5] = "Jun";
theMonths[6] = "Jul";
theMonths[7] = "Aug";
theMonths[8] = "Sep";
theMonths[9] = "Oct";
theMonths[10] = "Nov";
theMonths[11] = "Dec";
```

用关键字 **Array** 生成数组时，Jscript 包含了 **length** 属性，该属性记录了数组入口数。如果没有给该属性指定值，则设置长度为 0
且数组没有入口点。如果指定一个数值，则将长度设置为该数。如果指定了不止一个参数，则这些参数被用作数组的入口。另外，参数的数目被赋给 length 属性。如下面的示例与前一个示例是等价的。

```javascript
var theMonths = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
```

当向用关键字 **Array** 生成的数组中添加元素时，Jscript 自动改变属性 **length** 的值。Jscript 中的数组索引总是以 0 开始，而不是 1，所以属性 length 通常比数组的最大索引大 1。

#### String对象

在 Jscript 中，可以将字符串（和数）当作对象来处理。string 对象 有一些内置方法，可以和自己的字符串一起使用。其中一个是substring 方法，它返回字符串的一部分。该方法以两个数字作为参数。

```javascript
aString = "0123456789";
var aChunk = aString.substring(4, 7);  // 将 aChunk 设为 "456"。
var anotherChunk = aString.substring(7, 4);  // 将 anotherChunk 设为 "456"。
// 使用上面生成数组的示例：
firstLetter = theMonths[5].substring(0, 1);  // 将变量 firstLetter 设为“J”。
```

**String** 对象的另一个属性是 **length** 属性。本属性包含了字符串中的字符数（空字符串为 0）。它是一个数值，可以直接在计算中使用。

```javascript
var howLong = "Hello World".length  // 设置变量 howLong 为 11。
```

#### Math 对象

**Math** 对象有许多预定义属性和方法。属性是特殊的数字。这些特殊的数字之一是 pi 值（近似 3.14159…）。这是 **Math.PI** 属性，如下例所示。

```javascript
// 声明一个半径变量并赋数值。
var circleArea = Math.PI * radius * radius;  // 注意 Math 和 PI 大写。
```

**Math** 对象的一个内置方法是乘幂方法（或 **pow**），使用该方法求得指定数的幂次。下面的例子同时使用了 pi 和乘幂。

```javascript
// 本公式计算给定半径的球体的体积。
volume = (4 / 3) * (Math.PI * Math.pow(radius, 3));
```

#### Date 对象

**Date** 对象可以被用来表示任意的日期和时间，获取当前系统日期以及计算两个日期的间隔。它拥有一些预定义的属性和方法。通常，**Date** 对象给出星期；月份，天数和年份；以及以小时，分钟和秒表示的时间。该信息是基于 1970 年1
月 1 日 00:00:00.000 GMT 开始的毫秒数，其中 GMT 是格林威治标准时间（首选术语是 UTC，或者“全球标准时间”，它引用的信号是由“世界时间标准”发布的）。Jscript 可以处理 250,000 B.C. 到
255,000 A.D范围内的日期。

使用 **new** 运算符创建一个新的 **Date** 对象。下面的示例计算当年已过去的天数和今年剩下的天数。

```javascript
/*
本示例使用前面定义的月份名称数组。
第一条语句以“Day Month Date 00:00:00 Year”格式
对 thisIsToday 变量赋值。
*/
var thisIsToday = new Date();

var toDay = new Date();  //获取今天的日期。

// 提取年，月，日。
var thisYear = toDay.getFullYear();
var thisMonth = theMonths[toDay.getMonth()];
var thisDay = thisMonth + " " + toDay.getDate() + ", " + thisYear;
```

#### Number 对象

除了 **Math** 对象中可用的特殊数值属性（例如 **PI**）外，在 Microsoft Jscript 中， **Number** 对象有几个其他的数值属性。

|属性|描述|
|---|---|
|MAX_VALUE |可能的最大数大约为 1.79E+308；可以是正数或负数。（具体数值随系统不同而有微小差别。） |
|MIN_VALUE |可能的最小数大约为 2.22E-308；可以是正数或负数。（具体数值随系统不同而有微小差别。） |
|NaN |特殊非数量值，“不是数值”。 |
|POSITIVE_INFINITY |比最大正数（Number.MAX_VALUE）还要大的任意正值自动被转换为此值，代表正无穷大。 |
|NEGATIVE_INFINITY |比最小的负数（负的 Number.MAX_VALUE）还小的任意值被自动转换为此值，代表负无穷。 |

**Number.NaN** 是一个特殊的属性，被定义为“不是数值”。例如被 0 除返回 **NaN**。试图解析一个无法被解析为数字的字符串同样返回 **Number.NaN**。把 **NaN**
与任何数值或本身作比较的结果都是不相等。不能通过与 **Number.NaN** 比较来测试 **NaN** 结果，而应该使用 **isNaN()** 函数。

### JScript 保留字

Jscript 有一些保留字不能在标识符中使用。保留字对 Jscript 语言有特殊的含义，它们是语言语法的一部分。使用保留字在加载脚本的时候将产生编译错误。

Jscript 还有一些留作将来使用的保留字。这些字不是现在的 Jscript 语言的一部分，然而它们是为将来的使用保留的。

### 保留词

|break |delete |function |return |typeof | 
|--- |---|--- |--- |--- | 
|case |do |if |switch |var | 
|catch |else |in |this |void |
|continue |false |instanceof |throw |while |
|debugger |finally |new |true |with | 
|default |for |null |try | |

### 为将来保留的词

|abstract |double |goto |native |static | 
|--- |--- |--- |--- |--- |
|boolean |enum |implements |package |super |
|byte |export |import |private |synchronized |
|char |extends |int |protected |throws |
|class |final |interface |public |transient |
|const |float |long |short |volatile |

当选择标识符时避免使用已经在内部 Jscript 对象或函数中使用的词，如 **String** 或 **parseInt**。

## 高级 JScript

### 高级对象的创建

### 使用构造函数来创建对象

构造函数是一个函数，调用它来例示并初始化特殊类型的对象。可以使用 **new** 关键字来调用一个构造函数。下面给出了使用构造函数的新示例。

```javascript
var myObject = new Object();             // 创建没有属性的通用对象。
var myBirthday = new Date(1961, 5, 10);  // 创建一个 Date 对象。
var myCar = new Car();                   // 创建一个用户定义的对象，并初始化其属性。
```

通过构造函数将一个参数作为特定的 **this** 关键字的值传递给新创建的空对象。然后构造函数负责为新对象执行适应的初始化（创建属性并给出其初始值）。完成后，构造函数返回它所构造的对象的一个参数。

### 编写构造函数

可以使用 **new** 运算符结合像 **Object()**、**Date()** 和 **Function()**
这样的预定义的构造函数来创建对象并对其初始化。面向对象的编程其强有力的特征是定义自定义构造函数以创建脚本中使用的自定义对象的能力。创建了自定义的构造函数，这样就可以创建具有已定义属性的对象。下面是自定义函数的示例（注意 **this**
关键字的使用）。

```javascript
function Circle (xPoint, yPoint, radius) {
  this.x = xPoint;  // 圆心的 x 坐标。
  this.y = yPoint;  // 圆心的 y 坐标。
  this.r = radius;  // 圆的半径。
}
```

调用 Circle 构造函数时，给出圆心点的值和圆的半径（所有这些元素是完全定义一个独特的圆对象所必需的）。结束时 Circle 对象包含三个属性。下面是如何例示 Circle 对象。

```javascript
var aCircle = new Circle(5, 11, 99);
```

### 使用原型来创建对象

在编写构造函数时，可以使用原型对象（它本身是所有构造函数的一个属性）的属性来创建继承属性和共享方法。原型属性和方法将按引用复制给类中的每个对象，因此它们都具有相同的值。可以在一个对象中更改原型属性的值，新的值将覆盖默认值，但仅在该实例中有效。属于这个类的其他对象不受此更改的影响。下面给出了使用自定义构造函数的示例，Circle（注意 **
this** 关键字的使用）。

```javascript
Circle.prototype.pi = Math.PI;

function ACirclesArea () {
  return this.pi * this.r * this.r; // 计算圆面积的公式为 ?r2。
}

Circle.prototype.area = ACirclesArea; // 计算圆面积的函数现在是 Circle Prototype 对象的一个方法。
var a = ACircle.area();               // 此为如何在 Circle 对象上调用面积函数。
```

使用这个原则，可以给预定义的构造函数（都具有原型对象）定义附加属性。例如，如果想要能够删除字符串的前后空格（与 VBScript 的 **Trim** 函数类似），就可以给 **String** 原型对象创建自己的方法。

```javascript
// 增加一个名为 trim 的函数作为
// String 构造函数的原型对象的一个方法。
String.prototype.trim = function () {
  // 用正则表达式将前后空格
  // 用空字符串替代。
  return this.replace(/(^\s*)|(\s*$)/g, "");
}

// 有空格的字符串
var s = "    leading and trailing spaces    ";

// 显示 "    leading and trailing spaces     (35)"
window.alert(s + " (" + s.length + ")");

// 删除前后空格
s = s.trim();
// 显示"leading and trailing spaces (27)"
window.alert(s + " (" + s.length + ")");
```

### 递归

递归是一种重要的编程技术。该方法用于让一个函数从其内部调用其自身。一个示例就是计算阶乘。0 的阶乘被特别地定义为 1。 更大数的阶乘是通过计算 1\*2\* ...来求得的，每次增加 1，直至达到要计算其阶乘的那个数。

下面的段落是用文字定义的计算阶乘的一个函数。

“如果这个数小于零，则拒绝接收。如果不是一个整数，则将其向下舍入为相邻的整数。如果这个数为 0，则其阶乘为 1。如果这个数大于 0，则将其与相邻较小的数的阶乘相乘。”

要计算任何大于 0 的数的阶乘，至少需要计算一个其他数的阶乘。用来实现这个功能的函数就是已经位于其中的函数；该函数在执行当前的这个数之前，必须调用它本身来计算相邻的较小数的阶乘。这就是一个递归示例。

递归和迭代（循环）是密切相关的 — 能用递归处理的算法也都可以采用迭代，反之亦然。确定的算法通常可以用几种方法实现，您只需选择最自然贴切的方法，或者您觉得用起来最轻松的一种即可。

显然，这样有可能会出现问题。可以很容易地创建一个递归函数，但该函数不能得到一个确定的结果，并且不能达到一个终点。这样的递归将导致计算机执行一个“无限”循环。下面就是一个示例：在计算阶乘的文字描述中遗漏了第一条规则（对负数的处理）
，并试图计算任何负数的阶乘。这将导致失败，因为按顺序计算 -24 的阶乘时，首先不得不计算 -25 的阶乘；然而这样又不得不计算 -26 的阶乘；如此继续。很明显，这样永远也不会到达一个终止点。

因此在设计递归函数时应特别仔细。如果怀疑其中存在着无限递归的可能，则可以让该函数记录它调用自身的次数。如果该函数调用自身的次数太多，即使您已决定了它应调用多少次，就自动退出。

下面仍然是阶乘函数，这次是用 JScript 代码编写的。

```javascript
// 计算阶乘的函数。如果传递了
// 无效的数值（例如小于零），
// 将返回 -1，表明发生了错误。若数值有效，
// 把数值转换为最相近的整数，并
// 返回阶乘。
function factorial (aNumber) {
  aNumber = Math.floor(aNumber);  // 如果这个数不是一个整数，则向下舍入。
  if (aNumber < 0) {  // 如果这个数小于 0，拒绝接收。
    return -1;
  }
  if (aNumber == 0) {  // 如果为 0，则其阶乘为 1。
    return 1;
  } else return (aNumber * factorial(aNumber - 1));  // 否则，递归直至完成。
}
```

### 变量范围

JScript
有两种变量范围：全局和局部。如果在任何函数定义之外声明了一个变量，则该变量为全局变量，且该变量的值在整个持续范围内都可以访问和修改。如果在函数定义内声明了一个变量，则该变量为局部变量。每次执行该函数时都会创建和破坏该变量；且它不能被该函数外的任何事物访问。

像 C++ 这样的语言也有“块范围”。在这里，任何一对“{}”都定义新的范围。JScript 不支持块范围。

一个局部变量的名称可以与某个全局变量的名称相同，但这是完全不同和独立的两个变量。因此，更改一个变量的值不会影响另一个变量的值。在声明局部变量的函数内，只有该局部变量有意义。

```javascript
var aCentaur = "a horse with rider,";  // aCentaur 的全局定义。

// JScript 代码，为简洁起见有省略。
function antiquities ()  // 在这个函数中声明了一个局部 aCentaur 变量。
{

// JScript 代码，为简洁起见有省略。
  var aCentaur = "A centaur is probably a mounted Scythian warrior";

// JScript 代码，为简洁起见有省略。
  aCentaur += ", misreported; that is, ";  // 添加到局部变量。

// JScript 代码，为简洁起见有省略。
}  // 函数结束。

var nothingInparticular = antiquities();
aCentaur += " as seen from a distance by a naive innocent.";

/*
在函数内，该变量的值为 "A centaur is probably a mounted Scythian warrior,
misreported; that is, "；在函数外，该变量的值为这句话的其余部分：
"a horse with rider, as seen from a distance by a naive innocent."
*/  
```

很重要的一点是注意变量是否是在其所属范围的开始处声明的。有时这会导致意想不到的情况。

```javascript
tweak();
var aNumber = 100;

function tweak () {
  var newThing = 0;  // 显式声明 newThing 变量。

  // 本语句将未定义的变量赋给 newThing，因为已有名为 aNumber 的局部变量。
  newThing = aNumber;

  //下一条语句将值 42 赋给局部的 aNumber。aNumber = 42;
  if (false) {
    var aNumber;  // 该语句永远不会执行。
    aNumber = 123;  //  该语句永远不会执行。
  }  // 条件语句结束。

}  // 该函数定义结束。
```

当 JScript 运行函数时，首先查找所有的变量声明，

```javascript
var someVariable;
```

并以未定义的初始值创建变量。如果变量被声明时有值，

```javascript
var someVariable = "something";
```

那么该变量仍以未定义的值初始化，并且只有在运行了声明行时才被声明值取代，假如曾经被声明过。

JScript 在运行代码前处理变量声明，所以声明是位于一个条件块中还是其他某些结构中无关紧要。JScript 找到所有的变量后立即运行函数中的代码。如果变量是在函数中显式声明的 — 也就是说，如果它出现于赋值表达式的左边但没有用 var
声明 — 那么将把它创建为全局变量。

### 复制、传递和比较数据

在 JScript 中，对数据的处理取决于该数据的类型。

### 按值和按引用的比较

Numbers 和 Boolean 类型的值 (**true** 和 **false**)
是按值来复制、传递和比较的。当按值复制或传递时，将在计算机内存中分配一块空间并将原值复制到其中。然后，即使更改原来的值，也不会影响所复制的值（反过来也一样），因为这两个值是独立的实体。

对象、数组以及函数是按引用来复制、传递和比较的。
当按地址复制或传递时，实际是创建一个指向原始项的指针，然后就像拷贝一样来使用该指针。如果随后更改原始项，则将同时更改原始项和复制项（反过来也一样）。实际上只有一个实体；“复本”并不是一个真正的复本，而只是该数据的又一个引用。

当按引用比较时，要想比较成功，两个变量必须参照完全相同的实体。例如，两个不同的 **Array** 对象即使包含相同的元素也将比较为不相等。要想比较成功，其中一个变量必须为另一个的参考。要想检查两个数组是否包含了相同的元素，比较 **
toString()** 方法的结果。

最后，字符串是按引用复制和传递的，但是是按值来比较的。请注意，假如有两个 **String** 对象（用 **new String("something")**
创建的），按引用比较它们，但是，如果其中一个或者两者都是字符串值的话，按值比较它们。

**注意**   鉴于 ASCII和 ANSI 字符集的构造方法，按序列顺序大写字母位于小写字母的前面。例如 "Zoo" 小于 "aardvark"。如果想执行不区分大小写的匹配，可以对两个字符串调用 **toUpperCase()**
或 **toLowerCase()**。

### 传递参数给函数

按值传递一个参数给函数就是制作该参数的一个独立复本，即一个只存在于该函数内的复本。即使按引用传递对象和数组时，如果直接在函数中用新值覆盖原先的值，在函数外并不反映新值。只有在对象的属性或者数组的元素改变时，在函数外才可以看出。

例如（使用 IE 对象模式）：

```javascript
// 本代码段破坏（覆盖）其参数，所以
// 调用代码中反映不出变化。
function Clobber (param) {
  // 破坏参数；在调用代码中
  // 看不到。
  param = new Object();
  param.message = "This will not work";
}

// 本段代码改变参数的属性，
// 在调用代码中可看到属性改变。
function Update (param) {
  // 改变对象的属性；
  // 可从调用代码中看到改变。
  param.message = "I was changed";
}

// 创建一个对象，并赋给一个属性。
var obj = new Object();
obj.message = "This is the original";

// 调用 Clobber，并输出 obj.message。注意，它没有发生变化。
Clobber(obj);
window.alert(obj.message); // 仍然显示 "This is the original"。

// 调用 Update，并输出 obj.message。注意，它已经被改变了。
Update(obj);
window.alert(obj.message); // 显示 "I was changed"。
```

### 检验数据

当按值进行检验时，是比较两个截然不同的项以查看它们是否相等。通常，该比较是逐字节进行的。当按引用进行检验时，是看这两项是否是指向同一个原始项的指针。如果是，则比较结果是相等；如果不是，即使它们每个字节都包含完全一样的值，比较结果也为不相等。

按引用复制和传递字符串能节约内存；但是由于在字符串被创建后不能进行更改，因此可以按值进行比较。这样可以检查两个字符串是否包含相同的内容，即使它们是完全独立产生的。

### 使用数组

### 数组下标

JScript 中的数组是稀疏的。也就是说，如果一个数组具有三个元素，编号分别为 0、1 和 2，您就可以创建元素 50，而不必担心从 3 到 49 的参数。如果该数组有一个自动的 length
变量，（请参阅内部对象了解有关数组长度的自动监控的说明），该 length 变量被设为 51，而不是 4。当然您可以创建各元素的编号之间没有间隙的数组，不过没有必要这样做。

在 JScript 中，对象和数组几乎相同。两个主要差别是对象没有自动长度属性，而数组没有对象的属性和方法。

### 数组寻址

使用方括号“[]”来寻址数组。方括号中是一个数值或一个值为整数的表达式。下面的示例假定在脚本的其他地方已定义了//entryNum// 变量，且已赋值。

```javascript
theListing = addressBook[entryNum];
theFirstLine = theListing[1];
```

### 将对象作为关联数组

通常，使用点运算符“.”访问对象的属性。例如，

```javascript
myObject.aProperty
```

在这里，属性名称是一个标识符。也可以用索引运算符“[]”访问对象的属性。在这里，是把对象看作一个关联数组。关联数组是一种数据结构，它可以动态地将任意的数据的值与任意的字符串相关联。例如，

```javascript
myObject["aProperty"] // 与上面相同。
```

尽管索引运算符更多地用于访问数组元素，当用于对象时，索引总是以字符串文字表示的属性名称。

注意访问对象属性的两种方法的重要差异。

|  运算符  |  属性名称作为  |  对属性名称的处理  |
|---|---|---|
|点“.” |标识符 |不能作为数据处理 |
|索引“[]” |字符串文字 |能被作为数据处理 |

在运行之前并不知道属性名称时，这个差异会有用（比如基于用户输入构造对象时）。要想从一个关联数组提取所有的属性，必须用 **for … in** 循环。

### 特殊字符

JScript 提供了一些特殊字符，允许在字符串中包括一些无法直接键入的字符。每个字符都以反斜杠开始。反斜杠是一个转义字符，表示 JScript 解释器下面的字符为特殊字符。

|  转义序列  |  字符  |
|---|---|
|\b |退格 |
|\f |走纸换页 |
|\n |换行 |
|\r |回车 |
|\t |横向跳格 (Ctrl-I) |
|\' |单引号 |
|\" |双引号 |
|\\ |反斜杠 |

请注意，由于反斜杠本身用作转义符，因此不能直接在脚本中键入一个反斜杠。如果要产生一个反斜杠，必须一起键入两个反斜杠 (\\)。

```javascript
document.write('The image path is C:\\webstuff\\mypage\\gifs\\garden.gif.');
document.write('The caption reads, "After the snow of \'97. Grandma\'s house is covered."');
```

### 脚本疑难解答

如果不够细致，任何编程语言都有一些可能发生错误的地方，而且每种语言都有其特殊之处。例如，对于 **null** 值： JScript 中这个值与 C 或 C++ 语言中的 **Null** 值所起的作用是不一样的。

下面提供了一些在编写 JScript 脚本时可能遇到的问题。

### 语法错误

由于编程语言中的语法比自然语言的语法要严格得多，因此在编写脚本时对细节应倍加关注。例如，如果您本意是将字符串作为某个参数，但是在键入时忘了使用引号引起来，就会产生问题。

### 脚本解释顺序

对 JScript 的解释是 Web 浏览器的 HTML 语法分析处理的一部分。因此，如果在文档的 `<HEAD>` 标识中放置了一个脚本，则将在检查所有的 `<BODY>` 标识之前加以解释。如果在 `<BODY>`
标识中将创建对象，但由于在分析处理 `<HEAD>` 标识时这些对象尚不存在，因而不能被脚本操作。

**注意**   本情况特定于 IE。ASP 和 WSH 具有不同的运行模式（其他宿主亦是）。

### 自动类型强制

JScript 是一种具有自动强制的自由类型语言。因此，尽管实际上不同类型的值是不相等的，但对下述示例中的表达式求值都将得到 **true**。

```javascript
"100" == 100;
false == 0;
```

要核对类型与值都一致，用“严格相等”运算符（===）。下面两个表达式的值为 false：

```javascript
"100" === 100;
false === 0;
```

### 运算符优先级

在对表达式求值时某个特定运算符的执行主要是根据 运算符优先级 ，而不是表达式的位置。因此，在下面的示例中，乘法将先于减法执行，尽管在该表达式中第一个出现的运算符

```javascript
theRadius = aPerimeterPoint - theCenterpoint * theCorrectionFactor;
```

#### 对对象使用 for...in 循环

当使用 **for...in** 循环对某个对象的属性进行遍历时，不必预先确定或管理将要指定给该循环计数器变量的对象字段的顺序。此外，在该语言的不同实现方案中该顺序可能会不一样。

#### with 关键字

with 语句可以方便地用来引用某个特定对象中已有的属性，但是不能用来给对象添加属性。要给对象创建新的属性，必须明确地引用该对象。

#### this 关键字

尽管可以在对象的定义范围内使用 this 关键字来引用该对象本身，但是当函数不是该对象的定义时，就不能象普通情况那样使用 this 或类似的关键字来引用当前的执行函数。如果该函数被指定为某个对象的方法，则可以在该函数内使用 this
关键字来引用该对象。

#### 编写一个脚本，该脚本在 IE 中写脚本

当解释程序遇到`</SCRIPT>`标记时会终止当前脚本。要显示"`</SCRIPT>`" 本身，请将其改写为至少两个字符串，例如 "</SCR" 和 "IPT>"，这样就可以在输出语句中将其连接在一起。

#### IE 中的隐式窗口引用

由于同时可以打开多个窗口，任何隐式的窗口引用都被指向当前窗口。对于其他窗口必须使用显式引用。

### 条件编译

使用条件编译可以使用 Jscript 语言的新特性并且与不支持该特性的老版本兼容。

用 **@cc_on** 语句、**@if** 或 **@set** 语句来激活条件编译。条件编译的某些典型用途包括使用 Jscript 中的新特性、在脚本中嵌入调试支持以及跟踪代码的运行。

一般将条件编译代码放在注释中，所以不能理解条件编译的宿主（如 Netscape Navigator）就忽略了条件编译。下面是一个示例。

```javascript
/*@cc_on @*/
/*@if (@_jscript_version >= 4)
   alert("JScript version 4 or better");
   @else @*/
alert("You need a more recent script engine.");
/*@end @*/
```

本示例使用了特殊的注释分隔符，该分隔符只有在 **@cc_on** 语句激活条件编译时才使用。不支持条件编译的脚本引擎只能看到一个需要更新脚本引擎的信息。

### 条件编译变量

下面是条件编译可用的预定义变量。如果变量不是 **true**，就不被定义或者作为 **NaN** 处理。

|  变量  |  描述  |
|---|---|
|@_win32 |在 Win32 系统上运行为 true。 |
|@_win16 |在 Win16 系统上运行为 true。 |
|@_mac |在 Apple Macintosh 系统上运行为 true。 |
|@_alpha |在 DEC Alpha 处理器上运行为 true。 |
|@_x86 |在 Intel 处理器上运行为 true。 |
|@_mc680x0 |在 Motorola 680x0 处理器上运行为 true。 |
|@_PowerPC |在 Motorola PowerPC 处理器上运行为 true。 |
|@_jscript |永远为 true。 |
|@\_jscript\_build |包含 Jscript 脚本引擎创建号。 |
|@\_jscript\_version |包含以 major、minor 为格式的 Jscript 版本号。 |

## 在浏览器中显示信息

Microsoft JScript 提供了两种方式来在浏览器中直接显示数据。可以使用**write( )** 和 **writeln( )**，这两个函数是**document**
对象的方法。也可以在浏览器中以表格的方式显示信息，以及用 **警告、提示和确认** 消息框来显示信息。

### 使用document.write( ) 和 document.writeln( )

显示信息最常用的方式是 **document** 对象的 **write( )** 方法。该方法用一个字符串作为其参数，并在浏览器中显示。该字符串可以是普通文本或 HTML。

字符串可以用单引号或双引号引起来。这样可以引用那些包含引号或撇号的内容。

```javascript
document.write("Pi is approximately equal to " + Math.PI);
document.write();
```

**注意**   下面的简单函数可以避免在浏览器中显示信息时不得不键入 "document.write"。该函数不能告知要显示的信息是否未定义，而是发布给命令 "w();"，该命令将显示一个空行。

```javascript
function w (m) { // 编写函数。
  m = "" + m + ""; //  确保变量 m 是一个字符串。
  if ("undefined" != m) { // 判别是否为空或其它未定义的项。
    document.write(m);
  }
  document.write("<br>");
}

w('<IMG SRC="horse.gif">');
w();
w("This is an engraving of a horse.");
w();
```

**writeln( )** 方法与 **write( )** 方法几乎一样，差别仅在于是前者将在所提供的任何字符串后添加一个换行符。在 HTML 中，这通常只会在后面产生一个空格；不过如果使用了 `<PRE>` 和 `<XMP>`
标识，这个换行符会被解释，且在浏览器中显示。

在调用 **write( )** 方法时，如果该文档不处于在调用 **write( )**
方法时的打开和分析的过程中，该方法将打开并清除该文档，所以它可能是有危险的。该示例显示了一个每隔一分钟就显示时间的脚本，但是在第一次显示后由于它从过程中将自己清除，因此会导致失败。

```html

<html>
<head>
  <script language="JScript">
  function singOut () {
    var theMoment = new Date();
    var theHour = theMoment.getHours();
    var theMinute = theMoment.getMinutes();
    var theDisplacement = (theMoment.getTimezoneOffset() / 60);
    theHour -= theDisplacement;
    if (theHour > 23) {
      theHour -= 24
    }
    document.write(theHour + " hours, " + theMinute + " minutes, Coordinated Universal Time.");
    window.setTimeout("singOut();", 60000);
  }
  </script>
</head>
<body>
<script>
singOut();
</script>
</body>
</html>
```

如果使用 window 对象的 **alert()** 方法而不是 **document.write()**，则该脚本可以运行。

```javascript
window.alert(theHour + " hours, " + theMinute + " minutes, Coordinated Universal Time.");
window.setTimeout("singOut();", 60000);
```

### 清除当前文档

**document** 对象的 **clear()** 方法将清空当前文档。该方法也将清除您的脚本（随文档的其他部分一起），因此要特别注意该方法的使用方式及在什么时候使用该方法。

```javascript
document.clear();
```

### 使用消息框

### 使用警告、提示和确认

可以使用警告、确认和提示消息框来获得用户的输入。这些消息框是 **window** 对象的接口方法。由于 **window** 对象位于对象层次的顶层，因此实际应用中不必使用这些消息框的全名（例如 "window.alert()"
），不过采用全名是一个好注意，这样有助于您记住这些消息框属于哪个对象。

### 警告消息框

**alert** 方法有一个参数，即希望对用户显示的文本字符串。该字符串不是 HTML 格式。该消息框提供了一个“确定”按钮让用户关闭该消息框，并且该消息框是模式对话框，也就是说，用户必须先关闭该消息框然后才能继续进行操作。

```javascript
window.alert("欢迎！请按“确定”继续。");
```

### 确认消息框

使用确认消息框可向用户问一个“是-或-否”问题，并且用户可以选择单击“确定”按钮或者单击“取消”按钮。**confirm** 方法的返回值为 **true** 或 **false**
。该消息框也是模式对话框：用户必须在响应该对话框（单击一个按钮）将其关闭后，才能进行下一步操作。

```javascript
var truthBeTold = window.confirm("单击“确定”继续。单击“取消”停止。");
if (truthBeTold) {
  window.alert("欢迎访问我们的 Web 页！");
} else window.alert("再见啦！");
```

### 提示消息框

提示消息框提供了一个文本字段，用户可以在此字段输入一个答案来响应您的提示。该消息框有一个“确定”按钮和一个“取消”按钮。如果您提供了一个辅助字符串参数，则提示消息框将在文本字段显示该辅助字符串作为默认响应。否则，默认文本为 "`<undefined>`"
。

与**alert( )** 和 **confirm( )** 方法类似，**prompt** 方法也将显示一个模式消息框。用户在继续操作之前必须先关闭该消息框

```javascript
var theResponse = window.prompt("欢迎？", "请在此输入您的姓名。");
```
