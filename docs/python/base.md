---
prev: /python/env
next: /python/spider
---



# Python 基础

Python是一种计算机编程语言。计算机编程语言和我们日常使用的自然语言有所不同，最大的区别就是，自然语言在不同的语境下有不同的理解，而计算机要根据编程语言执行任务，就必须保证编程语言写出的程序决不能有歧义，所以，任何一种编程语言都有自己的一套语法，编译器或者解释器就是负责把符合语法的程序代码转换成CPU能够执行的机器码

Python 是一个解释性、编译性、互动性和面向对象的脚本语言。
编译型语言：代码在编译之后，编译成2进制的文件，然后计算机就可用运行了。
解释型语言：它是在运行的时候才编译的。
脚本语言：指这个语言只有一个单一的功能



惯例：**4个空格**的缩进，确保不混用Tab和空格

Python程序是大小写敏感的

## Python 解释器

> 调用解释器

`Ctrl + D`：退出解释器  quit() exit()

解释器的行编辑功能包括交互式编辑、历史替换、代码补全等

`python3 -c 'command' [args]` 命令行执行python语句





## 数据类型

- **整数**

Python数字写成`10_000_000_000`和`10000000000`完全一样

十六进制数也可以写成`0xa1b2_c3d4`

**Python的整数没有大小限制**，而某些语言的整数根据其存储长度是有大小限制的，例如Java对32位整数的范围限制在`-2147483648`-`2147483647`

- **浮点数**

Python 全面支持浮点数；混合类型运算数的运算会把整数转换为浮点数

整数和浮点数在计算机内部存储的方式是不同的，整数运算永远是精确的（除法难道也是精确的？是的！），而浮点数运算则可能会有四舍五入的误差。

> 除了 [`int`](https://docs.python.org/zh-cn/3.9/library/functions.html#int) 和 [`float`](https://docs.python.org/zh-cn/3.9/library/functions.html#float)，Python 还支持其他数字类型，例如 [`Decimal`](https://docs.python.org/zh-cn/3.9/library/decimal.html#decimal.Decimal) 或 [`Fraction`](https://docs.python.org/zh-cn/3.9/library/fractions.html#fractions.Fraction)。Python 还内置支持 [复数](https://docs.python.org/zh-cn/3.9/library/stdtypes.html#typesnumeric)，后缀 `j` 或 `J` 用于表示虚数（例如 `3+5j` ）

- **字符串**

以单引号`'`或双引号`"`括起来的任意文本

如果`'`本身也是一个字符，那就可以用`""`括起来

既包含`'`又包含`"`用转义字符`\`来标识  

用`r''`表示`''`内部的字符串默认不转义

用`'''...'''`或`"""..."""`表示多行内容。字符串中将自动包括行结束符，但也可以在换行的地方添加一个 `\` 来避免此情况

字符串可以用 `+` 合并（粘到一起），也可以用 `*` 重复

相邻的两个或多个 *字符串字面值* （引号标注的字符）会自动合并

```bash
# 拆分长字符串时，这个功能特别实用：
>>> text = ('Put several strings within parentheses '
...         'to have them joined together.')
>>> text
'Put several strings within parentheses to have them joined together.'
# 这项功能只能用于两个字面值，不能用于变量或表达式; 合并多个变量，或合并变量与字面值，要用 +
```

字符串支持 *索引* （下标访问），第一个字符的索引是 0。单字符没有专用的类型，就是长度为一的字符串

索引还支持负数，用负数索引时，从右边开始计数

除了索引，字符串还支持 *切片*。索引可以提取单个字符，*切片* 则提取子字符串；切片索引的默认值很有用；省略开始索引时，默认值为 0，省略结束索引时，默认为到字符串的结尾；输出结果包含切片开始，但不包含切片结束。因此，`s[:i] + s[i:]` 总是等于 `s`	；对于使用非负索引的切片，如果两个索引都不越界，切片长度就是起止索引之差；切片会自动处理越界索引；

Python 字符串不能修改，是 [immutable](https://docs.python.org/zh-cn/3.9/glossary.html#term-immutable) 的。因此，为字符串中某个索引位置赋值会报错

内置函数 [`len()`](https://docs.python.org/zh-cn/3.9/library/functions.html#len) 返回字符串的长度



- **布尔值**

布尔值和布尔代数的表示完全一致，布尔值只有`True`、`False`

布尔值可以用`and`（与）、`or`（或）和`not`（非）运算

- **空值**

空值用`None`表示。`None`不能理解为`0`，因为`0`是有意义的，而`None`是一个特殊的空值



## 变量

变量名必须是大小写英文、数字和`_`的组合

变量本身类型不固定的语言称之为*动态语言*，与之对应的是*静态语言*。

静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。

和静态语言相比，动态语言更灵活



- 常量

是不能变的变量，比如常用的数学常数π就是一个常量。Python中，全部大写的变量名表示常量

```python
PI = 3.14159265359
```

但事实上`PI`仍然是一个变量，Python根本没有任何机制保证`PI`不会被改变，所以，用全部大写的变量名表示常量只是一个习惯上的用法，如果你一定要改变变量`PI`的值，也没人能拦住你



- 整数的除法为什么也是精确的

`/`除法计算结果是浮点数，即使是两个整数恰好整除，结果也是浮点数

```python
>>> 10 / 3
3.3333333333333335
```

还有一种除法是`//`，称为地板除，两个整数的除法仍然是整数

```python
>>> 10 // 3
3
```

整数的地板除`//`永远是整数，即使除不尽。要做精确的除法，使用`/`就可以。

因为`//`除法只取结果的整数部分，所以Python还提供一个余数运算，可以得到两个整数相除的余数

```python
>>> 10 % 3
1
```

无论整数做`//`除法还是取余数，结果永远是整数，所以，整数运算结果永远是精确的



## 字符编码

在计算机内存中，统一使用Unicode编码，当需要保存到硬盘或者需要传输的时候，就转换为UTF-8编码。

用记事本编辑的时候，从文件读取的UTF-8字符被转换为Unicode字符到内存里，编辑完成后，保存的时候再把Unicode转换为UTF-8保存到文件

浏览网页的时候，服务器会把动态生成的Unicode内容转换为UTF-8再传输到浏览器

所以你看到很多网页的源码上会有类似`<meta charset="UTF-8" />`的信息，表示该网页正是用的UTF-8编码。

- Python 的字符串

Python提供了`ord()`函数获取字符的整数表示，`chr()`函数把编码转换为对应的字符

```python
>>> ord('A')
65
>>> ord('中')
20013
>>> chr(66)
'B'
>>> chr(25991)
'文'
>>> '\u4e2d\u6587'
'中文'
```

由于Python的字符串类型是`str`，在内存中以Unicode表示，一个字符对应若干个字节。如果要在网络上传输，或者保存到磁盘上，就需要把`str`变为以字节为单位的`bytes`。

Python对`bytes`类型的数据用带`b`前缀的单引号或双引号表示：

```
x = b'ABC'
```

要注意区分`'ABC'`和`b'ABC'`，前者是`str`，后者虽然内容显示得和前者一样，但`bytes`的每个字符都只占用一个字节。

以Unicode表示的`str`通过`encode()`方法可以编码为指定的`bytes`，例如：

```python
>>> 'ABC'.encode('ascii')
b'ABC'
>>> '中文'.encode('utf-8')
b'\xe4\xb8\xad\xe6\x96\x87'
>>> '中文'.encode('ascii')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
UnicodeEncodeError: 'ascii' codec can't encode characters in position 0-1: ordinal not in range(128)
```

反过来，如果我们从网络或磁盘上读取了字节流，那么读到的数据就是`bytes`。要把`bytes`变为`str`，就需要用`decode()`方法

```python
>>> b'ABC'.decode('ascii')
'ABC'
>>> b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8')
'中文'
```

如果`bytes`中只有一小部分无效的字节，可以传入`errors='ignore'`忽略错误的字节



计算`str`包含多少个字符，可以用`len()`函数

`len()`函数计算的是`str`的字符数，如果换成`bytes`，`len()`函数就计算字节数

```python
>>> len(b'ABC')
3
>>> len(b'\xe4\xb8\xad\xe6\x96\x87')
6
>>> len('中文'.encode('utf-8'))
6
```

可见，1个中文字符经过UTF-8编码后通常会占用3个字节，而1个英文字符只占用1个字节

当Python解释器读取源代码时，为了让它按UTF-8编码读取，我们通常在文件开头写上这两行：

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
```

申明了UTF-8编码并不意味着你的`.py`文件就是UTF-8编码的，必须并且要确保文本编辑器正在使用UTF-8 without BOM编码

- 格式化

```python
>>> 'Hello, %s' % 'world'
'Hello, world'
>>> 'Hi, %s, you have $%d.' % ('Michael', 1000000)
'Hi, Michael, you have $1000000.'
```

| 占位符 | 替换内容     |
| ------ | ------------ |
| %d     | 整数         |
| %f     | 浮点数       |
| %s     | 字符串       |
| %x     | 十六进制整数 |

如果你不太确定应该用什么，`%s`永远起作用，它会把任何数据类型转换为字符串

```python
>>> 'Age: %s. Gender: %s' % (25, True)
'Age: 25. Gender: True'
```

字符串里面的`%`是一个普通字符怎么办？这个时候就需要转义，用`%%`来表示一个`%`

format()

```python
>>> 'Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125)
'Hello, 小明, 成绩提升了 17.1%'
```

f-string

最后一种格式化字符串的方法是使用以`f`开头的字符串，称之为`f-string`，它和普通字符串不同之处在于，字符串如果包含`{xxx}`，就会以对应的变量替换

`:`后面的`.2f`指定了格式化参数（即保留两位小数）

```python
>>> r = 2.5
>>> s = 3.14 * r ** 2
>>> print(f'The area of a circle with radius {r} is {s:.2f}')
The area of a circle with radius 2.5 is 19.62
```

## 复合数据类型

### list 列表

*列表* 可以包含不同类型的元素，但一般情况下，各个元素的类型相同

列表也支持索引和切片，切片操作返回包含请求元素的新列表

`sequence[:]`：返回列表的 [浅拷贝](https://docs.python.org/zh-cn/3.9/library/copy.html#shallow-vs-deep-copy)

列表还支持合并操作：`squares + [36, 49, 64, 81, 100]`

`append()` *方法* 可以在列表结尾添加新元素

为**切片赋值**可以改变列表大小，甚至清空整个列表

内置函数 [`len()`](https://docs.python.org/zh-cn/3.9/library/functions.html#len) 也支持列表

还可以嵌套列表（创建包含其他列表的列表）

list是一种有序的集合，可以随时添加和删除其中的元素

```python
classmates = ['Michael', 'Bob', 'Tracy']
# list是一个可变的有序表，所以，可以往list中追加元素到末尾
classmates.append('Adam')
# 要删除list末尾的元素，用pop()方法
classmates.pop()
# 要删除指定位置的元素，用pop(i)方法，其中i是索引位置
classmates.pop(1)
# 把某个元素替换成别的元素，可以直接赋值给对应的索引位置
classmates[1] = 'Sarah'
```

```python
# list里面的元素的数据类型也可以不同
s = ['python', 'java', ['asp', 'php'], 'scheme']
# list元素也可以是另一个list
p = ['asp', 'php']
s = ['python', 'java', p, 'scheme']
# 要拿到'php'可以写p[1]或者s[2][1]，因此s可以看成是一个二维数组，类似的还有三维、四维……数组

# list中一个元素也没有，就是一个空的list，它的长度为0
L = []
```

### tuple 元组

tuple和list非常类似，但是tuple一旦初始化就不能修改

```python
classmates = ('Michael', 'Bob', 'Tracy')
```

你可以正常地使用`classmates[0]`，`classmates[-1]`，但不能赋值成另外的元素

不可变的tuple有什么意义？因为tuple不可变，所以代码更安全。如果可能，能用tuple代替list就尽量用tuple

```python
# 定义一个空的tuple
t = ()
# 定义一个只有1个元素的tuple
# t = (1) 定义的不是tuple，是1这个数！这是因为括号()既可以表示tuple，又可以表示数学公式中的小括号，这就产生了歧义；只有1个元素的tuple定义时必须加一个逗号,，来消除歧义
t = (1,)

# “可变的”tuple
t = ('a', 'b', ['A', 'B'])
t[2][0] = 'X'
# 表面上看，tuple的元素确实变了，但其实变的不是tuple的元素，而是list的元素。tuple一开始指向的list并没有改成别的list，所以，tuple所谓的“不变”是说，tuple的每个元素，指向永远不变。即指向'a'，就不能改成指向'b'，指向一个list，就不能改成指向其他对象，但指向的这个list本身是可变的！
```

### dict 字典

Python内置了字典：dict的支持，dict全称dictionary，在其他语言中也称为map，使用键-值（key-value）存储，具有极快的查找速度

```python
d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
d['Michael']
```

dict就是第二种实现方式，给定一个名字，比如`'Michael'`，dict在内部就可以直接计算出`Michael`对应的存放成绩的“页码”，也就是`95`这个数字存放的内存地址，直接取出来，所以速度非常快

```python
# 把数据放入dict
d['Adam'] = 67
# 一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值冲掉
d['Adam'] = 77
# key不存在，dict就会报错
d['Thomas']

# 避免key不存在的错误
# 1) 通过in判断key是否存在
'Thomas' in d
# 2) 通过dict提供的get()方法，如果key不存在，可以返回None，或者自己指定的value
d.get('Thomas')
d.get('Thomas', -1)

# 删除一个key，用pop(key)方法
d.pop('Bob')

```

注意：返回`None`的时候Python的交互环境不显示结果

请务必注意，dict内部存放的顺序和key放入的顺序是没有关系的

和list比较，dict有以下几个特点：

1. 查找和插入的速度极快，不会随着key的增加而变慢；
2. 需要占用大量的内存，内存浪费多。

而list相反：

1. 查找和插入的时间随着元素的增加而增加；
2. 占用空间小，浪费内存很少。

所以，dict是用空间来换取时间的一种方法。



dict可以用在需要高速查找的很多地方，在Python代码中几乎无处不在，正确使用dict非常重要，需要牢记的第一条就是dict的key必须是**不可变对象**。

这是因为dict根据key来计算value的存储位置，如果每次计算相同的key得出的结果不同，那dict内部就完全混乱了。这个通过key计算位置的算法称为哈希算法（Hash）。

要保证hash的正确性，作为key的对象就不能变。在Python中，字符串、整数等都是不可变的，因此，可以放心地作为key。而list是可变的，就不能作为key

### set 集合

set和dict类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在set中，没有重复的key

```python
# 要创建一个set，需要提供一个list作为输入集合
s = set([1, 2, 3])
# 通过add(key)方法可以添加元素到set中，可以重复添加，但不会有效果
s.add(4)
# 通过remove(key)方法可以删除元素
s.remove(4)
```

```python
# # set可以看成数学意义上的无序和无重复元素的集合，因此，两个set可以做数学意义上的交集、并集等操作
>>> s1 = set([1, 2, 3])
>>> s2 = set([2, 3, 4])
>>> s1 & s2
{2, 3}
>>> s1 | s2
{1, 2, 3, 4}
```

set和dict的唯一区别仅在于没有存储对应的value，但是，set的原理和dict一样，所以，同样不可以放入可变对象，因为无法判断两个可变对象是否相等，也就无法保证set内部“不会有重复元素”



## 分支与循环

- if

```
if <条件判断1>:
    <执行1>
elif <条件判断2>:
    <执行2>
elif <条件判断3>:
    <执行3>
else:
    <执行4>
```

- for

```python
# 循环遍历字符串
for s in 'hello':
    print(s)
# 循环遍历列表
fruits = ['apple','banana','orange']
fro fruit in fruits:
    print(fruit)
# 循环遍历5次
for i in range(5):
    print(i)
# 设置range()函数起始位置与步长
for i in range(1,10,2):
    print(i)
```

- while

```python
count = 9
while count < 9:
    print("count is",count)
    count += 1
```



在循环中，`break`语句可以提前退出循环

在循环过程中，也可以通过`continue`语句，跳过当前的这次循环，直接开始下一次循环





*要特别注意*，不要滥用`break`和`continue`语句。`break`和`continue`会造成代码执行逻辑分叉过多，容易出错。大多数循环并不需要用到`break`和`continue`语句，上面的两个例子，都可以通过改写循环条件或者修改循环逻辑，去掉`break`和`continue`语句



有些时候，如果代码写得有问题，会让程序陷入“死循环”，也就是永远循环下去。这时可以用`Ctrl+C`退出程序，或者强制结束Python进程

## 函数



### 函数参数

- 位置参数

  按照位置一一对应的关系来传递参数

  ```python
  def sum(a,b):
      res = a+b
      print(res)
  sum(10,20)
  ```

- 关键字参数

  可以不按照参数顺序写

  ```python
  sum(b=100,a=200)
  ```

- a



### 局部变量

在函数内部定义的变量

特点：其作用域范围是函数内部，而函数的外部是不可以使用

```python
def f1():
    a = 1
    print(a)
f1()
# print(a) # 报错
```



### 全局变量

定义在函数外部的变量

特点：可以在函数外部使用，也可以在函数内部使用

```python
def f1():
    a = 1
    print(a)
f1()
print(a)
```

**在满足条件的情况下，要使用作用域最小的那个变量**

## 文件

### 打开文件/创建文件

使用open函数，可以打开一个已经存在的文件，或者创建一个新文件

open(文件路径，访问模式)

```python
f = open('test.txt','w')
```

### 文件路径

- 绝对路径
- 相对路径

### 访问模式

|      |                          |
| ---- | ------------------------ |
| r    | 只读，不存在则报错       |
| w    | 覆盖、不存在则新建       |
| a    | 追加，不存在则新建       |
| r+   | 读写，不存在则报错       |
| w+   | 读写，覆盖，不存在则新建 |
| a+   | 读写，追加，不存在则新建 |

```python
fp = open('test.txt','w')
fp.write('Hello world')
fp.close()
```

### 读数据

```python
fp = open('test.txt','r')
# 默认情况下 read 是一字节一字节的读 效率比较低
# 读全部
content = fp.read()
print(content)
```

```python
# readline 是一行一行的读取 
# 只能读一行
content = fp.readline()
```

```python
# readlines 可以按照行来读，但会将所有的数据都读取到 并且以一个列表的形式返回
# 列表的元素是一行一行的数据
content = fp.readlines()
```



### 序列化和反序列化

通过文件操作，我们可以将字符串写入到一个本地文件。但是，如果是一个对象(例如列表、字典、元组等)，就无法直接写入到一个文件里，需要对这个对象进行序列化，然后才能写入到文件里。
设计—套协议，按照某种规则，把内存中的数据转换为字节序列，保存到文件，这就是序列化，反之，从文件的字节序列恢复到内存中，就是反序列化。
Python中提供了JSON这个模块用来实现数据的序列化和反序列化。

**JSON模块**

JSON(JavaScriptObjectNotation, JS对象简谱)是一种轻量级的数据交换标准。JSON的本质是字符串。

**使用JSON实现序列化**

JSON提供了dump和dumps方法，将一个对象进行序列化。

dumps方法的作用是把对象转换成为字符串，它本身不具备将数据写入到文件的功能。

#### 序列化

- dump

```python
fp = open('test.txt','w')
name_list = ['zs','ls']
# 导入json模块
import json
# 将Python对象 变成 字符串
names = json.dumps(name_list)
# 将names写入到文件中
fp.write(names)
fp.close()
```

- dumps

在将对象转换为字符串的同时，指定一个文件的对象 然后把转换后的字符串写入到这个文件里

```python
fp = open('text.txt','w')
name_list = ['zs','ls']
import json
json.dumps(name_list,fp)
fp.close()
```

#### 反序列化

将json的字符串变成一个python对象

```python
fp = open('text.txt','r')
content = fp.read()

# loads 转换字符串为python对象
result = json.loads(content)

# load 加载文件为python对象
result = json.load(fp)

fp.close()
```



## 异常

程序在运行过程中，由于我们的编码不规范，或者其他原因一些客观原因，导致我们的程序无法继续运行，此时,程序就会出现异常。如果我们不对异常进行处理，程序可能会由于异常直接中断掉。为了保证程序的健壮性，我们在程序设计里提出了异常处理这个概念。

### 读取文件异常

```python
try:
    fp = open('text.txt','r')
    fp.read()
except FileNotFoundError:
    print('系统正在升级，请稍后再试....')
```

