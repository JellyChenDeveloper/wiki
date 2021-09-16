# argparse

[![Build Status](https://secure.travis-ci.org/nodeca/argparse.svg?branch=master)](http://travis-ci.org/nodeca/argparse)
[![NPM version](https://img.shields.io/npm/v/argparse.svg)](https://www.npmjs.org/package/argparse)

适用于node.js的CLI参数解析器. Javascript端的python的[argparse](http://docs.python.org/dev/library/argparse.html)
模块(original version 3.2). 这是一个全部的版本，除了一些极其稀有的选项。这些在问题追踪中提现。

**注意：和原版的不同之处:**

- 方法名变为驼峰命名法. 参见 [generated docs](http://nodeca.github.com/argparse/).
- 使用 `defaultValue` 代替 `default`.
- 使用 `argparse.Const.REMAINDER` 代替 `argparse.REMAINDER`, 类似的常量值为 `OPTIONAL`,
`ZERO_OR_MORE`, `ONE_OR_MORE` (别名 `nargs` 的值分别为 `'?'`, `'*'`, `'+'`) 和 `SUPPRESS`.

## 例子

test.js 文件:

```javascript
#!/usr/bin/env node
'use strict';

var ArgumentParser = require('../lib/argparse').ArgumentParser;
var parser = new ArgumentParser({
  version: '0.0.1',
  addHelp:true,
  description: 'Argparse example'
});
parser.addArgument(
  [ '-f', '--foo' ],
  {
    help: 'foo bar'
  }
);
parser.addArgument(
  [ '-b', '--bar' ],
  {
    help: 'bar foo'
  }
);
parser.addArgument(
  '--baz',
  {
    help: 'baz bar'
  }
);
var args = parser.parseArgs();
console.dir(args);
```

显示帮助信息:

```shell
$ ./test.js -h
usage: example.js [-h] [-v] [-f FOO] [-b BAR] [--baz BAZ]

Argparse example

Optional arguments:
  -h, --help         Show this help message and exit.
  -v, --version      Show program's version number and exit.
  -f FOO, --foo FOO  foo bar
  -b BAR, --bar BAR  bar foo
  --baz BAZ          baz bar
```

解析参数:

```shell
$ ./test.js -f=3 --bar=4 --baz 5
{ foo: '3', bar: '4', baz: '5' }
```

更多 [例子](https://github.com/nodeca/argparse/tree/master/examples).

## ArgumentParser 对象

```javascript
new ArgumentParser({parameters, hash});
```

创建一个 ArgumentParser 对象.

**支持的参数:**

- ```description``` - 参数帮助信息之前显示的文本.
- ```epilog``` - 参数帮助信息之后显示的文本.
- ```addHelp``` - 添加 -h/–help 选项到解析器之中. (默认为true)
- ```argumentDefault``` - 为参数设置全局默认值. (默认: null)
- ```parents``` - 一系列应该被包含的参数的 ArgumentParser 对象列表.
- ```prefixChars``` - 参数选项前缀字符的集. (默认: ‘-‘)
- ```formatterClass``` - 自定义帮助信息输出类.
- ```prog``` - 程序的名称 (默认: `path.basename(process.argv[1])`)
- ```usage``` - 程序用法描述的字符串 (默认: generated)
- ```conflictHandler``` - 通常不需要使用，定义解决冲突选项的策略.

**还不支持的选项:**

- ```fromfilePrefixChars``` - The set of characters that prefix files from which
additional arguments should be read.

Details in [original ArgumentParser guide](http://docs.python.org/dev/library/argparse.html#argumentparser-objects)

### addArgument() method

```javascript
ArgumentParser.addArgument(name or flag or [name] or [flags...], {options})
```

Defines how a single command-line argument should be parsed.

- `name or flag or [name] or [flags...]` - Either a positional name
  (e.g., `'foo'`), a single option (e.g., `'-f'` or `'--foo'`), an array
  of a single positional name (e.g., `['foo']`), or an array of options
  (e.g., `['-f', '--foo']`).

Options:

- `action` - The basic type of action to be taken when this argument is
encountered at the command line.
- `nargs`- The number of command-line arguments that should be consumed.
- `constant` - A constant value required by some action and nargs selections.
- `defaultValue` - The value produced if the argument is absent from the command
line.
- `type` - The type to which the command-line argument should be converted.
- `choices` - A container of the allowable values for the argument.
- `required` - Whether or not the command-line option may be omitted (optionals only).
- `help` - A brief description of what the argument does.
- `metavar` - A name for the argument in usage messages.
- `dest` - The name of the attribute to be added to the object returned by parseArgs().

Details in [original add_argument guide](http://docs.python.org/dev/library/argparse.html#the-add-argument-method)

### Action (some details)

ArgumentParser objects associate command-line arguments with actions.
These actions can do just about anything with the command-line arguments associated
with them, though most actions simply add an attribute to the object returned by
parseArgs(). The action keyword argument specifies how the command-line arguments
should be handled. The supported actions are:

- `store` - Just stores the argument’s value. This is the default action.
- `storeConst` - Stores value, specified by the const keyword argument.
  (Note that the const keyword argument defaults to the rather unhelpful None.)
  The 'storeConst' action is most commonly used with optional arguments, that
  specify some sort of flag.
- `storeTrue` and `storeFalse` - Stores values True and False
  respectively. These are special cases of 'storeConst'.
- `append` - Stores a list, and appends each argument value to the list.
  This is useful to allow an option to be specified multiple times.
- `appendConst` - Stores a list, and appends value, specified by the
  const keyword argument to the list. (Note, that the const keyword argument defaults
  is None.) The 'appendConst' action is typically used when multiple arguments need
  to store constants to the same list.
- `count` - Counts the number of times a keyword argument occurs. For example,
  used for increasing verbosity levels.
- `help` - Prints a complete help message for all the options in the current
  parser and then exits. By default a help action is automatically added to the parser.
  See ArgumentParser for details of how the output is created.
- `version` - Prints version information and exit. Expects a `version=`
  keyword argument in the addArgument() call.

Details in [original action guide](http://docs.python.org/dev/library/argparse.html#action)

## Sub-commands

ArgumentParser.addSubparsers()

Many programs split their functionality into a number of sub-commands, for
example, the svn program can invoke sub-commands like `svn checkout`, `svn update`,
and `svn commit`. Splitting up functionality this way can be a particularly good
idea when a program performs several different functions which require different
kinds of command-line arguments. `ArgumentParser` supports creation of such
sub-commands with `addSubparsers()` method. The `addSubparsers()` method is
normally called with no arguments and returns an special action object.
This object has a single method `addParser()`, which takes a command name and
any `ArgumentParser` constructor arguments, and returns an `ArgumentParser` object
that can be modified as usual.

Example:

sub_commands.js

```javascript
#!/usr/bin/env node
'use strict';

var ArgumentParser = require('../lib/argparse').ArgumentParser;
var parser = new ArgumentParser({
  version: '0.0.1',
  addHelp:true,
  description: 'Argparse examples: sub-commands',
});

var subparsers = parser.addSubparsers({
  title:'subcommands',
  dest:"subcommand_name"
});

var bar = subparsers.addParser('c1', {addHelp:true});
bar.addArgument(
  [ '-f', '--foo' ],
  {
    action: 'store',
    help: 'foo3 bar3'
  }
);
var bar = subparsers.addParser(
  'c2',
  {aliases:['co'], addHelp:true}
);
bar.addArgument(
  [ '-b', '--bar' ],
  {
    action: 'store',
    type: 'int',
    help: 'foo3 bar3'
  }
);

var args = parser.parseArgs();
console.dir(args);

```

Details in [original sub-commands guide](http://docs.python.org/dev/library/argparse.html#sub-commands)

## Contributors

- [Eugene Shkuropat](https://github.com/shkuropat)
- [Paul Jacobson](https://github.com/hpaulj)

[others](https://github.com/nodeca/argparse/graphs/contributors)

## License

Copyright (c) 2012 [Vitaly Puzrin](https://github.com/puzrin).
Released under the MIT license. See
[LICENSE](https://github.com/nodeca/argparse/blob/master/LICENSE) for details.
