# Java SE 9

> FILE ：[写给大忙人的Java SE 9核心技术](F:/Book/java9.pdf)
>
> THEME：查漏补缺

在本书中，我不会详细介绍API，因为读者可以很方便地浏览API。如果你不能一直上网，就可下载文档，然后解压后离线浏览。

## 读书历程

| 日期             | 页码    | 概要 |
| ---------------- | ------- | ---- |
| 2022-05-23 18:15 | P16~P50 |      |
|                  |         |      |
|                  |         |      |





## Chapter 1

如何使用Java API中最有用的部分类控制常见的数据类型

Java不是用来快速完成几个命令的脚本语言。它明确定位为可以从组织有序的类和包以及模块中获益的大型程序的编程语言。

Java中，所有的一切都必须在类中声明。这种一致性会产生有些冗长的代码，但是它使得理解程序含义更加容易。

“编写一次，到处运行”的承诺是Java重要的设计准则。



### JShell

JShell 提供“读取、评估、打印”循环（REPL）模式，可以输入表达式

- 填写类型：`new Random` -> `Shift + Tab` -> `v` -> `Random | = new Random()`
- 自动补全：`Tab`
- 默认包

```
  s1 : import java.io.*;
  s2 : import java.math.*;
  s3 : import java.net.*;
  s4 : import java.nio.file.*;
  s5 : import java.util.*;
  s6 : import java.util.concurrent.*;
  s7 : import java.util.function.*;
  s8 : import java.util.prefs.*;
  s9 : import java.util.regex.*;
 s10 : import java.util.stream.*;
```

- 导包：`Duration` -> `Shift + Tab` -> `i` -> `1` -> `Imported: java.time.Duration` 
- 帮助：`/help`
- 退出：`/exit`

### 基本类型

Java有8个基本数据类型，4个有符号整型、两个浮点型、一个char型、一个boolean型

```java
byte short int long
float double
char
boolean
```

- 有符号整型

Java 中整型的范围不依赖程序锁运行的机器。

- 浮点类型

float类型有个F后缀（例如，3.14F)。没有F后缀的浮点类型被默认为double类型。使用D作为double类型的后缀（例如，3.14D ) 。

特殊浮点值：`Double.POSITIVE_INFINITY` 正无穷、`Double.NEGATIVE_INFINITY`负无穷、`Double.NaN`非数值

⚡所有“非数值”都被认为是彼此不相同的。不能`if(x == Double.NaN)`检查x是否为NaN.

可以：`if(Double.isNaN(x))` `Double.isInfinite`：是否正负无穷大、`Doublie.isFinite`：判断浮点数既不是无穷也不是NaN

浮点数不适合做金融计算，因为金融计算中舍入误差是不能被接受的。`2.0 - 1.1`

精确而无舍入误差的数字计算，使用`BigDecimal`类

- char类型

- 布尔型：true 、false

### 变量

java是强类型语言

```java
int total = 0, count;
```

大小写敏感

### 常量

常量：关键字final修饰一个值，一但赋值之后就不能改变了

根据习惯，常量使用大写字母

`System.out`：少数几个常量没有大写的情况之一

允许延迟final变量初始化（只要它在首次使用前恰好初始化了一次）

```java
final int DAYS_IN_FEBRARY;
if(leapYear){ DAYS_IN_FEBRARY = 29; } else { DAYS_IN_FEBRARY = 28; }
```

定义一组相关的常量，可以使用枚举值

```java
enum Weekday { MONDAY, TUESDAY, WENDESDAY }
Weekday startDay = Weekday.MONDAY;
```

### 算数操作

格外小心`/`操作符。如果两个操作数都是整型，就代表整除，而没有小数部分。例：`17/5`=`3`

`整数`除以0会导致异常。

`浮点数`除以0会产生`无限值`或`NaN`

- 数学方法

```java
Math.pow(x); // 平方
Math.pow(x, y); // x的y次方
Math.sqrt(x); // 平方根
// 三角函数
// 对数
Math.PI;
Math.E;
```

当`计算溢出`时，数学操作符会默默返回错误结果。10亿乘以3是负数，`最大int刚过20亿`

调用`Math.multiplyExact(10亿, 3)`方法，就会报错

处理无符号值：Integer或Long：compareUnsigned、divideUnsigned、remainderUnsigned

StrictMath类提供严格可重现浮点运算

- 数字类型转换

`double`  `float`  `long` 

- 关系操作符合逻辑操作符

如果你在程序中进行过位操作，就会明白它们的含义。如果没做过，你将不需要这些操作符。

- 大数

如果基本的整数类型和浮点类型的精确度还无法满足需求，那么你可以使用java.math包中的`BigInteger`和`BigDecimal`类。这些类的对象代表了数字，该数字有任意长序列的位数。BigInteger类实现了任意精度整数的计算，BigDecimal对浮点数有同样的实现。

Java不允许对象使用操作符，因此操作大数时，必须使用方法调用。

### 字符串

- 连接字符串

```java
String.join("，", "Peter", "Paul", "Mary"); // "Peter，Paul，Mary"
```

连接大量字符串，效率低下，这种情况最好使用`StringBuilder`替换

- 子字符串
- 字符串比较

要检查两个字符串是否相等，可使用equals方法，**不要使用==操作符比较字符串**。⚡

```java
"Hello" == "Hellommm".substring(0,5) // false
"Hello".equals("Hellosss".substring(0,5)) // true
```

比较字符串和文字串时，将文字串放在前面是一个好主意，避免变量为null抛出异常

```java
if ("World".equals(location)) ...
```

提示：对用户可读的字符串排序时，使用Collator对象（它知道关于特定语言的排序规则）。

- 数字与字符串转换

数字 -> 字符串：1）Integer.toString  2）"" + n

字符串 -> 数字：Integer.parseInt(str)

- String API

注意：在Java中，String类是不可变的。也就是任何String方法都不能修改自己的字符串。对字符串的修改都会创建新的字符串

- 编码点和编码单元

### 输入与输出

- 读取输入
- 格式化输出

> 第一天结束了

### 控制流

- 分支
- 循环
- 跳出循环与继续循环
- 局部变量作用域

### 数组和数组列表

- 使用数组
- 构造数组
- 数组列表
- 基本类型包装类
- 增强的for循环
- 数组与数组列表的复制
- 数组算法
- 命令行参数
- 多维数组

### 功能分解

- 静态方法的声明与调用
- 数组参数与返回值
- 可变参数

### 练习





## 第二章：面向对象编程

### 使用对象

#### 访问器方法和修改器方法

#### 对象引用



### 实现类

#### 实例变量

#### 方法头

#### 方法体



#### 实例方法调用

#### this引用

#### 值调用



### 构造对象

#### 实现构造函数

#### 重载

#### 调用另一个构造函数

#### 默认初始化

#### 实例变量的初始化

#### final实例变量

#### 无参构造函数



### 静态变量和方法

#### 静态变量

#### 静态常量

#### 静态初识块

#### 静态方法

#### 工厂方法



### 包

#### 包的声明

#### jar命令

#### 类路径

#### 包访问权限

#### 导入类

#### 静态导入



### 嵌套类

#### 静态嵌套类

#### 内部类

#### 内部类的特殊语法



### 文档注释

#### 插入注释

#### 类注释

#### 方法注释

#### 变量注释

#### 通用注释

#### 链接

#### 包、模块和概述注释

#### 注释的提取



### 练习



> 116

## 第三章：接口和lambda表达式

