# 最佳实践

## json

```python
import json
```

> JSON编码支持的基本数据类型为 None ， bool ， int ， float 和 str ， 以及包含这些类型数据的lists，tuples和dictionaries。 
> 对于dictionaries，keys需要是字符串类型(字典中任何非字符串类型的key在编码时会先转换为字符串)。 
> 为了遵循JSON规范，你应该只编码Python的lists和dictionaries。 
> 而且，在web应用程序中，顶层对象被编码为一个字典是一个标准做法。

| Python           | JSON   |
| ---------------- | ------ |
| dict             | object |
| list, tuple      | array  |
| str, unicode     | string |
| int, long, float | number |
| True             | true   |
| False            | false  |
| None             | null   |

### json 与 python数据结构之间的转换

- json.dumps  Python 对象 -> JSON 

```python
data = {
    'name':'acme',
    'shares':100,
    'price':542.23
}
json_str = json.dumps(data, ensure_ascii=False) # 保留汉字
json_str # '{"name": "acme", "shares": 100, "price": 542.23}'
```

- json.loads   JSON -> Python 对象

```python
json_str = '{"name": "acme", "shares": 100, "price": 542.23}'
data = json.loads(json_str)
data # {'name': 'acme', 'shares': 100, 'price': 542.23}
```

### 读写json文件

- 写

```json
# data.json
```

```python
data = {'name': 'acme', 'shares': 100, 'price': 542.23}
with open('data.json','w') as f:
    json.dump(data,f)
```

- 读

```python
with open('data.json','r') as f:
    data = json.load(f)
	print(data)
```

### True / False / None

```python
json.dumps(True) # true
json.dumps(False) # false
json.dumps(None) # null
```

### 指定创建对象类型

```python
# 一般来讲，JSON解码会根据提供的数据创建dicts或lists。 
# 如果你想要创建其他类型的对象，可以给 json.loads() 传递object_pairs_hook或object_hook参数
s = '{"name": "ACME", "shares": 50, "price": 490.1}'
from collections import OrderedDict
data = json.loads(s,object_pairs_hook=OrderedDict)
data # OrderedDict([('name', 'ACME'), ('shares', 50), ('price', 490.1)])
```

### 获得漂亮的格式化字符串后输出

```python
m = {"price": 542.23, "name": "ACME", "shares": 100}
json.dumps(m, indent=4)
```

```json
{
   "name": "acme",
   "shares": 100,
   "price": 542.23
}
```

### 按顺序输出json字符串

```python
a = '{"a":1,"e":2,"f":3,"b":4,"d":5,"c":6}'
a = json.loads(a)
b = json.dumps(a,sort_keys=True)
b # '{"a": 1, "b": 4, "c": 6, "d": 5, "e": 2, "f": 3}'
```

### 序列化对象实例

对象实例通常并不是**JSON**可序列化的

```python
class Point:
     def __init__(self, x, y):
         self.x = x
         self.y = y

def serialize_instance(obj):
    d = { '__classname__' : type(obj).__name__ }
    d.update(vars(obj))
    return d
classes = {
    'Point' : Point
}

def unserialize_object(d):
    clsname = d.pop('__classname__', None)
    if clsname:
        cls = classes[clsname]
        obj = cls.__new__(cls) # Make instance without calling __init__
        for key, value in d.items():
            setattr(obj, key, value)
        return obj
    else:
        return d
```

```python
# 序列化
p = Point(2,3)
s = json.dumps(p, default=serialize_instance)
s # '{"__classname__": "Point", "y": 3, "x": 2}'
# 反序列化
a = json.loads(s, object_hook=unserialize_object)
a # <__main__.Point object at 0x1017577d0>
a.x # 2
```



## 字符串格式化



- 用字典填充字符串占位符

```python
sql = "select * from userinfo where t.name = {name} and t.gender = {gender}"
req_data = {"name": "zhangsan", "gender": "man"}
res_data = sql.format(**req_data)
print(res_data )
# 结果:select * from userinfo where t.name = zhangsan and t.gender = man
```

