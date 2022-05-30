# 后盾人JavaScript教程

> TITLE：ECMASCRIPT系统课程含盖 es5 / es6 / es7 / es8 等知识点
>
> AUTHOR：向军
>
> VIDEO：[BiliBili](https://www.bilibili.com/video/BV1yE411y7QZ)
>
> OFFICE SITE：[后盾人 (houdunren.com)](https://www.houdunren.com/front/system/show?id=10)
>
> DOC：[文档](https://doc.houdunren.com/js/)

> 后盾人理念：人人做后盾



## 第一章：走进 JAVASCRIPT 黑洞

### 1. 课程介绍与代码获取方式

TODO

### 2. JavaScript的过去与将来

### 3. ES开发工具选择

- VS Code
- Chrome

### 4. 让程序跑起来/避免延迟

- 避免延迟

  将引入的js放在body最后

  ```javascript
  <body>
      <h1>Hello World!</h1>
  	<script src="1.js" />
  </body>
  ```

  ```javascript
  # 1.js
  alert("Click me")
  ```

### 5. 前端访问流程基本分析

TODO

### 6. 注释与执行符

TODO

### 7. 变量声明基础知识

- 变量声明

字母、数字、下划线、不要用$

```js
var web = url = name = 'hdr'
```

- 变量弱类型

```js
var web = "hdms"
console.log(typeof web)
web = 99
console.log(typeof web)
web = {}
console.log(typeof web)
```

### 8. 体验解析过程与变量提升

- 解析过程

```js
var web = 'hdr'
console.log(web)
var class = 'hdms'
// >>>
并没有先输出在报错，而是直接报错
Uncaught SyntaxError: Unexpected token 'class'

```

- 变量提升

```js
var web;
console.log(web); // undefined
web = 'hdr'
console.log(web); // hdr
```

```js
function hd(){
    if(false){
        var name = 'hdr'
    }
    console.log(name); // undefined
}
hd()
```

```js
function hd(){
    if(false){
        // var name = 'hdr'
    }
    console.log(name); // ReferenceError: name is not defined
}
hd()
```

解决办法：只能使用var的话，在开头声明，先声明，后使用

### 9. let & const & 暂时性死区TDC

- let

```js
// 变量TDC
console.log(web);
let web = 'hdr' // ReferenceError: Cannot access 'web' before initialization
// 变量必须先定义再使用
// const 同理
```

- function

```js
// 函数TDC：函数体里面存在全局同名变量也必须先声明，后使用
let web = 'hdr'

function func(){
    console.log(web);
    let web = 'hdr.com'
}
```

- 函数参数

```js
function run(a = b,b=3){

}
run()
// ReferenceError: Cannot access 'b' before initialization
```

```js
function run(a = 3, b = a) {

}
run()
```

这是一种很好的警示作用，在保护我们的程序，能够让我们的程序运行正常

### 10. var - let - const的共同点

```js
// 公园
var web = 'hdr'
function show(){
    // web = 'hdr.com' 修改公有参数
    // 自己家花园
    var web = 'hdr.com'
    console.log(web);// hdr.com
}
show()
console.log(web)// hdr
```

函数内声明会重新开辟出一片内存空间，专门为这个函数服务

### 11. 可怕的全局污染

- 函数内声明，函数外可访问

```js
function show(){
    // 不声明变量
    web = 'hdr.com'
}
show()
console.log(web); // hdr.com
```

- 别的文件声明，本文件可访问

```js
// qjwr.js
function show(){
    web = 'hdr.com'
}
```

```html
<body>
    <script src="./qjwr.js"></script>
    <script>
        web = 'hdr' // Uncaught ReferenceError: web is not defined
        show() // 修改了本文件的变量
        console.log(web); // hdr.com
    </script>
</body>
```

解决办法：

1. 一定要用var声明一下
2. 使用严格模式，强制要求声明

```html
<body>
    <script src="./qjwr.js"></script>
    <script>
        "use strict"
        web = 'hdr' // Uncaught ReferenceError: web is not defined
        show() // 修改了本文件的变量
        console.log(web); // hdr.com
    </script>
</body>
```



### 12. 块作用域这个先进的特性 :dog:

- demo 01

```js
{
    var web = 'hdr'
}
console.log(web) // hdr
```

```js
{
    let web = 'hdr'
}
console.log(web) // ReferenceError: web is not defined
```

- demo 02

```js
var i = 99
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
// 0 1 2 3 4 5 // 影响到循环外同名变量
```

```js
var i = 99
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
// 0 1 2 3 4 99
```

### 13. const常量声明一探究竟

const 常量 值不可以改变
值为引用类型，只要内存地址不变是没关系的
标量，比如字符串，不允许改变
块级作用域中不可以修改，全局作用域、局部作用域、函数作用域可以声明同一个常量

```js
const URL = 'hdr.com'
{
    const URL = 'hdr'
}
console.log(123) // 123
```

### 14. window全局对象污染与重复声明

- window全局对象污染

```html
<body>
    <script>
        var web = 'hdr'
        console.log(window.web); // hdr
        // window对象保存了窗口的一些信息
        // 我们自己声明的普通变量，直接影响了window，显然不合理
        var screenLeft = 88 // 改变了window的属性
        console.log(window.screenLeft); // 88
    </script>
</body>
```

解决方法：使用let

```html
<body>
    <script>
        let web = 'hdr'
        console.log(window.web); // undefined
        let screenLeft = 88
        console.log(screenLeft); // 88
        console.log(window.screenLeft); // 实际窗口值
    </script>
</body>
```

- 重复声明的问题

```js
var web = 'hdr'

// n lines code
// ...

var web = 'hdr.com' // 重复声明不会报错
```

解决方法：使用let | const 重复声明报错

### 15. Object.freeze冻结变量

```js
const HOST = {
    url : 'https://hdr.com',
    port: 443
}
HOST.port = 80
console.log(HOST);
// { url: 'https://hdr.com', port: 80 } // 修改了对象的值
```

```js
const HOST = {
    url : 'https://hdr.com',
    port: 443
}
Object.freeze(HOST) // 冻结变量
HOST.port = 80
console.log(HOST);
// { url: 'https://hdr.com', port: 443 } // 对象的值没有变
```

```js
'use strict'
const HOST = {
    url : 'https://hdr.com',
    port: 443
}
Object.freeze(HOST)
HOST.port = 80
console.log(HOST);
//TypeError: Cannot assign to read only property 'port' of object '#<Object>'
```

### 16. 标量与引用类型的传值与传值特性

```js
// 传值 传址
let a = 1
let b = a
console.log(a, b); // 1 1
b = 3
console.log(a, b); // 1 3

let e = {
    name: 'hdr'
}
let f = e
console.log(e, f); // { name: 'hdr' } { name: 'hdr' }
f.name = 'hdr.com'
console.log(e, f); // { name: 'hdr.com' } { name: 'hdr.com' }
```

基本类型传值：方便计算，引用类型传址：节省内存

### 17. null 与 undefined详解

```js
let m = 324;
let n;
console.log(typeof m); // number
console.log(typeof n); // undefined

function start(num) {
    console.log(typeof name); // undefined
    num = num || 5
    // if (num == undefined) {
    //    num = 5
    //}
    for (let i = 0; i < num; i++) {
        console.log('*');
    }
}
start()
```

### 18. use strict 严格模式高质量代码守卫

```js
'use strict'
// 不声明就不行
// 不能使用关键字

// 严格模式可以放在函数中，严格模式作用域就是函数内部
function show(){
    'use strict'
    web = 'hdr.com'
}
show() // 报错

let {naming,url} = {naming:'hdr','url':'hdr.com'}
// 简写，这种写法不好，不标准，会造成：打包报错、在别人环境运行报错
({naming,url} = {naming:'hdr','url':'hdr.com'})
// 使用严格模式：ReferenceError: Cannot access 'naming' before initialization
console.log(naming);
```

## 第二章：JavaScript运算符与流程控制

### 1. 赋值运算符与算术运算符

```js
+ - * / += 
```

### 2. 一元运算符的前置与后置操作

```js
i++ ++i
```

### 3. 比较运算符注意事项

```js
> < >= <= 
1 == '1' // true
1 === '1' // false
```

```html
<body>
    <input type="text" name="age">
    <span id="msg"></span>
    <script>
        let a = 1, b = 2, c = '1';
        console.log(a > b);
        console.log(a == c);
        console.log(b>=2);
        
        let span = document.querySelector('#msg')
        document.querySelector('[name=age]').addEventListener('keyup',function(){
            // if (this.value >= 90){
            //     msg = '年龄不能超过90'
            // }
            // span.innerHTML= msg;
            // 简化为1行
            span.innerHTML = this.value >= 90 ? '年龄不能超过90岁' : '';
        })
    </script>
</body>
```

> DATE：2022-05-30

### 4. 逻辑运算符实例详解

```js
```

### 5. 短路运算符的妙用

```js
```

### 6. 网站协议接受验证

```js
```

### 7. 使用if else判断密码强度

```js
```

### 8. 三元表达式真的好可爱

```js
```

### 9. switch循环控制

```js
```

### 10. while循环控制

```js
```

### 11. dowhile循环实例操作

```js
```

### 12. 使用for循环打印杨辉三角

```js
```

### 13. break-continue与label标签的使用

```js
```

### 14. for-in与for-of使用方法操作

```js
```



































