---
prev: /python
next: /python/spider
---



# Python 基础



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

