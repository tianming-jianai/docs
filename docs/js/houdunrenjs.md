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

## 学习进度

- 开始时间：2022-05-30
- 结束时间：

|    日期    |             课程编号              |       学习时长       | 复习时间 |
| :--------: | :-------------------------------: | :------------------: | :------: |
| 2022-05-30 | 第一章：P1~P12<br />第二章：P1~P3 |   12:30~14:30  2h    |          |
| 2022-05-31 |          第二章：P4~P14           |   20:00~22:00  2h    |          |
| 2022-06-01 |           第三章：P1~P4           | 10:40~12:00  1h20min |          |
| 2022-06-02 |          第三章：P5~P14           |   21:30~23:30  2h    |          |

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

```html
<body>
    <input type="text" name="password" />
    <input type="text" name="confirm_password" />
    <span name="msg"></span>
    <script>
        function query(name) {
            return document.querySelector(`[name=${name}]`);
        }
        console.log(query('password'));

        let inputs = document.querySelectorAll("[name=password],[name=confirm_password]");
        console.log(inputs);
        [...inputs].map(item => {
            item.addEventListener('keyup', function () {
                let msg = '';
                if (query('password').value != query('confirm_password').value || query('password').value.length < 5) {
                    msg = '两次密码不一致或密码长度小于5位'
                }
                query('msg').innerHTML = msg
            })
        })
    </script>
</body>
```

### 5. 短路运算符的妙用

```js
let a = 3, b = 0;
console.log(a == true);
// 1. 短路与
if (a || b++) {
    console.log(b);
}

// 2. 赋值
let f = a || b;
console.log(f);
// 顺序很重要
let sex = prompt('请输入性别') || '保密';
console.log(sex);
// 提醒：有的语言是返回布尔值

// 3. 函数默认值
function start(num) {
    return '*'.repeat(num || 5);
}
console.log(start(3));

// 最新版js写法
function start2(num = 5) {
    return '*'.repeat(num);
}
```

### 6. 网站协议接受验证

```html
<body>
    <form action="/action" method="get" id="form">
      用户名：<input type="text" name="user" />
      <hr />
      <input type="checkbox" name="copyright" />接受协议
      <hr />
      <button>提交</button>
    </form>
    <script>
      function query(el) {
        return document.querySelector(el);
      }
      query("#form").addEventListener("submit",function(event){
          let user = query('[name=user]').value.trim();
          let copyright = query('[name=copyright]').checked;
          console.log(copyright);
          console.log(user);
          // 阻止默认事件，这样就提交不了了
          if(!user || copy === false){
              event.preventDefault();
                alert('请接受协议并添加用户名')
          }
      });
    </script>
  </body>
```

### 7. 使用if else判断密码强度

```js
if(passwd.length>10){
    clog('超级强度')
}else if(passwd.length>5){
    clog('中级轻度')
}else{
    clog('低级强度')
}
```

### 8. 三元表达式真的好可爱

```html
<body>
    <script>
      // let hd = true ? 2: 5;
      let hd = true ? (3 ? "hdr" : "hdr.com") : 5;
      console.log(hd);

      function div(options = {}) {
        let div = document.createElement('div');
        div.style.width = options.width ? options.width : '100px';
        div.style.height = options.height ? options.height : '100px';
        div.style.backgroundColor = options.bgcolor ? options.bgcolor : 'red';
        document.body.appendChild(div);
      }
      div({width:'300px',height:'50px',bgcolor:'green'});
    </script>
  </body>
```

### 9. switch循环控制

```js
let error = "notice";
switch (error) {
    case "notice":
    case "warning":
        console.log("提示或警告信息");
        break;
    case "error":
    default:
        console.log("错误消息");
}
// 向军大叔个人:能使用switch就不使用if，除非判断条件非常复杂
function message(age) {
    let msg = "";
    switch (age) {
        case age > 60:
            msg = "老年";
            break;
        case age > 40:
            msg = "中年";
            break;
        case age > 20:
            msg = "青年";
            break;
    }
    // if (age > 60) {
    //   msg = "老年";
    // } else if (age > 40) {
    //   msg = "青年";
    // } else if (age > 20) {
    //   msg = "少年";
    // }
    return msg;
}
console.log(message(32));
```

### 10. while循环控制

```js
// 创建table
let hd = {tr:10,td:5}
```

### 11. dowhile循环实例操作

```js
```

### 12. 使用for循环打印杨辉三角

```js
// 打印杨辉三角
function hd(row = 5) {
    for (let i = 1; i < row; i++) {
        for (let n = row - i; n > 0; n--) {
            document.write(`<span>*</span>`);
        }
        for (let m = i * 2 - 1; m > 0; m--) {
            document.write("*");
        }
        document.write("<br/>");
    }
}
hd(20);
```

### 13. break-continue与label标签的使用

```js
// 打印3个奇数
let count = 0
for(let i  = 1;i <= 10; i++){
    if(i % 2){
        if (count++ == 3) break;
        console.log(i)
    }
}

// 输出偶数
for(let i = 1; i <= 10; i++){
    if(i % 2) continue;
    console.log(i);
}

// 退出外层循环
hdr: for(let i = 1; i <= 10; i++){
    for(let n = 1; n <= 10; n++){
        if(n % 2 == 0){
            console.log(i,n)
        }
        if(n + i > 10){
            break hdr;
        }
    }
}
```

### 14. for-in与for-of使用方法操作

```js
// 以表格的形式展示
let hd = [
    { title: "第一章 走进JavaScript黑洞", lesson: 3 },
    { title: "ununtu19.10 配置工作站", lesson: 10 },
    { title: "媒体查询响应式布局", lesson: 6 },
];
document.write(`
        <table border='1' width='100%'>
        <thead><tr><th>标题</th><th>课程数量</th></tr></thead>
    `);
for (let i in hd) {
    document.write(`
        <tr>
            <td>${hd[i].title}</td>
            <td>${hd[i].lesson}</td>    
        </tr>
        `);
}
// for ... of ... 遍历可迭代对象
for (let video of hd) {
    document.write(`
        <tr>
            <td>${video.title}</td>
            <td>${video.lesson}</td>    
        </tr>
        `);
}
document.write("</table>");
```

点击li显示红色

```html
<style>
    ul {
        list-style: none;
    }

    li {
        border: solid 1px #ddd;
        height: 50px;
        width: 200px;
    }
</style>
<body>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <script>        
        let lis = document.querySelectorAll("li");
        for (const li of lis) {
            li.addEventListener("click", function () {
                li.style.backgroundColor = "red";
            });
        }
    </script>
</body>
```

> DATE：2022-05-31

## 第三章：JavaScript 值类型使用

### 1. 章节介绍与类型判断
```js
let hd = '3'
console.log(typeof hd);

hd = [];
let hdr = {};
console.log(hd instanceof Array); // true
console.log(hdr instanceof Object); // true

function User() {}
let xj = new User();
console.log(xj instanceof User); // true
console.log(xj instanceof Object); // true
```
### 2. 字符串转义与模板字面量使用
```js
// 声明字符串
let hd = new String("hdr.com");
console.log(hd);
console.log(hd.toString());
hd = "hdr.com"; // 这个显然更省力
console.log(hd);

// 字符转义
hd = "xj'hdr.com";
console.log(hd);
hd = 'xj"hdr.com';
console.log(hd);
hd = "xj\t\nhdr.com";
console.log(hd);

// 字符串拼接
let year = "2010年";
let site = "hdr";
console.log(site + "成立于" + year);

// 使用字面量
console.log(`${site} 成立 于 ${year}`);
```
### 3. 模板字面量嵌套使用技巧

字面量可以嵌套字面量

![image-20220602003305460](img/image-20220602003305460.png)

```js
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      ul {
        list-style: none;
      }
      li {
        padding: 10px;
      }
      li:nth-child(odd) {
        background: #16a085;
        color: white;
      }
    </style>
  </head>
  <body>
    <script>
      let str = "hdr.com";
      str += " 后盾人";
      console.log(str);

      function show() {
        return "hdr.com";
      }
      let hd = `www.${show()}`;
      console.log(hd);

      let lessons = [
        { title: "媒体查询响应式布局" },
        { title: "FLEX 弹性盒布局" },
        { title: "GRID 栅格系统" },
      ];
      function template() {
        return `<ul>${lessons
          .map((item) => `<li>${item.title}</li>`)
          .join("")}</ul>`;
      }
      document.body.innerHTML = template();
    </script>
  </body>
</html>
```
### 4. 神奇的标签模板实例操作

用函数处理模板字面量数据

```js
let name = "后盾人";
let web = "hdr.com";
console.log(tag`在线教程${name}，网址是${web}。`);
function tag(strings, name, web) {
    console.log(name);
    console.log(web);
}
// 如果不确定变量是什么，使用...语法
function show(strings, ...vars) {
    // strings : 获取字面量中的字符串部分
    // vars 将字面量中的变量收集到这一个变量中
    console.log(vars);
    console.log(strings);
}
console.log(show`${name}`);
```
给课程标题的`后盾人`关键字替换为`a标签`

![image-20220602003157962](img/image-20220602003157962.png)

```html
<body>
    <style>
        ul {
            list-style: none;
        }

        li {
            border: solid 1px #ddd;
            margin-bottom: 10px;
            padding: 10px;
        }

        li>a {
            color: green;
        }
    </style>
    <script>
        let lessons = [
            { title: "后盾人媒体查询响应式布局", author: '后盾人向军' },
            { title: "FLEX 弹性盒布局", author: '后盾人' },
            { title: "GRID 栅格系统后盾人教程", author: '古老师' },
        ];
        function template() {
            return `<ul>${lessons.map(item => links`<li>作者：${item.title}，课程${item.author}</li>`).join('')}</ul>`;
        }
        function links(strings, ...vars) {
            return strings.map((str, key) => {
                return str + (
                    vars[key] ? vars[key].replace('后盾人', '<a href="hdr.com">后盾人</a>') : ''
                );
            }).join('');
        }
        document.body.innerHTML += template();
    </script>
</body>
```

> DATE：2022-06-01

### 5. 字符串基本函数使用

```html
  <body>
		密码：<input type="password" name="password" />
		<span>
		</span>
		<script>
			let name = 'houDUNren'
			console.log(name.length);
			console.log(name.toUpperCase());
			console.log(name.toLowerCase());

			let site = '  houdunren    '
			console.log(site.trim().length);

			let ps = document.querySelector('[name=password]')
			ps.addEventListener('keyup', function() {
				this.value = this.value.trim()
				let error = ''
				let span = document.getElementsByTagName('span')
				if (this.value.length < 5) {
					error = '密码不能小于5位'
				}
				span[0].innerHTML = error
			})

			// 获取某个字符
			let hd = 'houdunren'
			console.log(hd[0]);
			for (var i = 0; i < hd.length; i++) {
				let span = document.createElement('span')
				span.style.fontSize = (i + 1) * 10 + 'px'
				span.innerHTML = hd[i]
				document.body.append(span)
			}
		</script>
	</body>
```
### 6. 字符串截取操作
```js
let hd = 'houdunren.com'
// slice substr substring

// 只有一个证书参数时，效果相同
console.log(hd.slice(1));
console.log(hd.substring(1));
console.log(hd.substr(1));

// 两个正数参数时
console.log(hd.slice(1, 3)); // 截取第一位到第三位
console.log(hd.substring(1, 3)); // 同上
console.log(hd.substr(1, 3)); // 截取3位

// 第一位是负数,第二位数也是负数
console.log(hd.slice(-3, -1)); // co
console.log(hd.substring(-3, -1)); // 负数就从0开始,第二位是负数则截取不到数据
console.log(hd.substr(-3, 2)); // co
```
### 7. 检索字符串使用技巧
```js
const hd = 'houdunren.com'
console.log(hd.indexOf('o')); // 1 从左边开始查找
console.log(hd.indexOf('o', 8)); // 11 从左边的第八个字符查找
console.log(hd.indexOf('@')); // 找不到返回 -1
console.log(hd.indexOf('h')); // 起始位置是0

// 是否包含某个字符
// ES5
if (hd.indexOf('h') != -1) {
    console.log('找到了1');
}
// ES6
if (hd.includes('h')) { // 返回布尔值
    console.log('找到了2');
}

// 从右边开始查找
console.log(hd.lastIndexOf('o'));
console.log(hd.lastIndexOf('o', 8)); // 从第8个字符向前查找

console.log(hd.startsWith('ho')); // 是否以某些字符开始，区分大小写
console.log(hd.toLowerCase().startsWith('ho')); // 不区分大小写
console.log(hd.endsWith('om')); // 以...为结尾

// 是否出现了某些关键字
const word = ['jav1a', 'javascript']
const string = '我喜欢编程，尤其是java和javascript'
// 短路与
const status = word.some(item => {
    console.log(item);
    return string.includes(item);
})
console.log(status ? '找到了关键词' : '');
```
### 8. 字符串替换标题关键字
```js
const hd = 'houdunren.com'
console.log(hd.replace('houdunren', 'hdr'));

// 替换字符串中的关键词为链接
const word = ['java', 'javascript']
const string = '我喜欢编程，尤其是java和javascript'
const replaces = word.reduce((pre, next) => {
    return pre.replace(next, `<a href='?w=${next}'>${next}</a>`)
}, string)
console.log(replaces);
document.body.innerHTML += replaces
```
### 9. 电话号码模糊处理
```js
console.log('*'.repeat(3));
			
function phone(mobile, len = 3){
    return String(mobile).slice(0,len*-1)+'*'.repeat(len)
}
console.log(phone(98765432101,8));
console.log(phone('98765432101',8));
```
### 10. 类型转换使用技巧
```js
// 字符数字参与运算
const string = '99'
console.log(typeof string);
console.log(string * 1 + 78);
console.log(Number(string) + 78);

// 数值转字符串
const number = 66
console.log(typeof number);
const str = number + ''
console.log(typeof str);
console.log(typeof String(number));

// 字符串转数字，只把前面是数字的转成功
let strs = '99hdr'
console.log(parseInt(string));
strs = '99.99hdr'
console.log(parseFloat(strs));

// 字符串转数组
const cms = 'hdcms'
console.log(cms.split(''));

// 数组转字符串
const array = ['hdr', 'hdr.com', 'xj']
console.log(array.join(' '));

console.log('---------');
// js中基本都是对象，对象和值类型都能调用方法
let st = 'houdunren.com'
console.log(typeof st);
console.log(st.substr(3));

let hc = new String('houdunren.com')
console.log(typeof hc);
console.log(hc.substr(3));
// 原因：系统会将值类型隐式转换为对象进行调用

const num = 99
const newnum = num.toString()
console.log(typeof newnum);
console.log(newnum + 78);
```
### 11. Boolean隐式转换原理
```js
// 对象形式
let boolean = new Boolean(false)
console.log(typeof boolean); // object
console.log(boolean.valueOf());
if(boolean.valueOf()){
    console.log('hdr.com');
}
// 字面量形式 推荐
boolean = true
console.log(typeof boolean); // boolean
if(boolean){
    console.log('hdr');
}

let num = 99
if(num){// 表达式运算时，不为0都为真
    console.log(num);
}
// 数字和布尔值比较时，布尔值会转换为数值 true 1 false 0
console.log(num == true); // false
console.log(Boolean(num) == true); // true

let array = []
console.log(Number(array)); // 0
console.log(array == 0); // true
console.log(Boolean([])); // true
if([]) console.log('hdr.com');

console.log(Boolean({}));
if({}) console.log('hdr.com');
// 比较和转换是两个问题
```
**结论：数字除了0都是真，字符串除了空字符都是真，引用类型都是真**

### 12. 显示转换Boolean类型

```js
// 县式转换boolean类型
let num = 0
console.log(typeof num); // number
num = !!num
console.log(num); // false
console.log(Boolean(num)); // false

let string = 'hdr'
console.log(!!string); // true
console.log(Boolean(string)); // true

let array = []
console.log(!![]); // true
console.log(Boolean([])); // true

let obj = {}
console.log(!!{}); // true
console.log(Boolean({})); // true

let date = new Date()
console.log(!!date); // true
console.log(Boolean(date)); // true
```
### 13. boolean实例操作
```js
while (true) {
    const year = prompt('后盾人是哪年成立的').trim()
    if (!year) continue
    console.log(year == '2010' ? '回答正确' : '回答错误');
    break
}
```
### 14. Number声明方式与基本函数
```js
let num = new Number(99)
console.log(typeof num); // object
console.log(num.valueOf()+1); // 100

num = 99
console.log(typeof num); // number
let hd = num.toString()
console.log(typeof hd); // string

num = 99.99
console.log(Number.isInteger(num)); // false
console.log(num.toFixed(1)); // 100.1
```
### 15. 数值类型转换技巧与NaN类型
```js
// NaN Not a Number
console.log(Number('hdr')); // NaN
console.log(2 / 'hdr'); // NaN

console.log(NaN == NaN); // false

console.log(Number.isNaN(2 / 'hdr')); // true
console.log(Object.is(2 / 'hdr', NaN)); // true

// 转换
console.log(Number(false));// 0
let hd = '99'
console.log(Number(hd)); // 99

// 后台或表单都是字符串
let num = document.querySelector('[name=num]').value
console.log(typeof num); // string

// 字符串以整数或小数开头
let numstr = '89.99abc'
console.log(Number(numstr)); // NaN
console.log(parseInt(numstr)); // 89
console.log(parseFloat(numstr)); // 89.99

let arr = []
console.log(Number(arr)); // 0
arr = [1]
console.log(Number(arr)); // 1
arr = [1,2,3]
console.log(Number(arr)); // NaN

console.log(Number({})); // NaN
console.log(Number({a:123})); // NaN
console.log(Number({valueOf:function(){return 99}})); // 99
```
### 16. Math数学计算
```js
// Math
console.log(Math.min(1,2,3,4,5,)); // 1
let grade = [12,3,2,124]
// 不支持数组参数
console.log(Math.max(grade)); // NaN
console.log(Math.max.apply(null,grade)); // 124

// 天花板
console.log(Math.ceil(5.01)); // 6
// 地板
console.log(Math.floor(5.01)); // 5

// 格式化
console.log((95.556).toFixed(2)); // 95.56

console.log(Math.round(5.56)); // 6
```
### 17. Math.random随机点名操作
```js
// [0,1)
console.log(Math.random());
// 0 ~ 5     0 ~ 0.9  *5  Math.floor(0 5.4) 0 ~ 4
console.log(Math.random() * 5);

// 2 ~ 5
// 公式：min + Math.floor(Math.random()*(Max - min + 1))
console.log(2 + Math.floor(Math.random() * (5 - 2 + 1)));

// 任意选择一个人
const stus = ['zs', 'ls', 'ww', 'zl', 'xj']
console.log(stus.length);
console.log(stus[4]);

// 0 ~
let index = Math.floor(Math.random() * stus.length)
console.log(stus[index]); // 随机任何一个名字

// 2 ~ ww zl xj
index = 2 + Math.floor(Math.random() * (stus.length - 2))
console.log(stus[index]);

// 2 ~ 3 ww zl
index = 2 + Math.floor(Math.random() * (4 - 2))
console.log(stus[index]);

// 封装为函数
function arrayRandomValue(array, start = 1, end) {
    end = end ? end : array.length;
    start--;
    const index = start + Math.floor(Math.random() * (end - start))
    console.log('index'+index);
    return array[index];
}
console.log(arrayRandomValue(stus));
console.log(arrayRandomValue([1,2,3,4,5],2,3));
```
### 18. 日期时间戳的使用与计算脚本执行时间
```js
const date = new Date()
console.log(date); // ISO 时间
console.log(typeof date); // object
console.log(date * 1); // 时间戳：毫秒数

const hd = Date()
console.log(hd); // ISO 时间
console.log(typeof hd); // string
console.log(hd * 1); // NaN

// 直接获取时间戳
let d = Date.now()
console.log(d);

// 计算时间差
for (let i = 0; i < 100000000; i++) {}
const end = Date.now()
console.log((end - d) / 1000 + '秒'); // 0.246秒

// 另一种计算时间差
console.time('for')
for (let i = 0; i < 100000000; i++) {}
console.timeEnd('for'); // for: 100.155...

// 操作日期
d = new Date('1990-09-22 3:22:18')
console.log(d); // ISO时间
console.log(d.getMonth()); // 8

d = new Date(1990, 2, 22, 13, 22, 11)
console.log(d); // ISO 时间

const param = [1990, 2, 22, 13, 22, 11]
d = new Date(...param) // 数组展开
console.log(d); // ISO 时间
```
### 19. ISO与TIMESTAMP格式互换
```js
// 时间对象转换为时间戳
const date = new Date('1990-09-22 3:22:18')
console.log(date*1);
console.log(Number(date));
console.log(date.valueOf());
console.log(date.getTime());

// 时间戳转换为时间
const timestamp = date.valueOf();
console.log(new Date(timestamp));
```

### 20. 封装日期格式函数

```js
const date = new Date('1990-09-22 3:22:18')

function dateFormat(date, format = 'YYYY-MM-DD HH:mm:ss') {
    const config = {
        YYYY: date.getFullYear(),
        MM: date.getMonth(),
        DD: date.getDate(),
        HH: date.getHours(),
        mm: date.getMinutes(),
        ss: date.getSeconds()
    }
    for (const key in config) {
        format = format.replace(key, config[key])
    }
    return format;
}
console.log(dateFormat(date));
```

### 21. 优秀的日期处理库momentjs

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.3/moment.min.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
    console.log(moment('1990-09-22 03:22:18').format('YYYY-MM-DD HH:mm:ss'));
    const date = moment('1990-09-22 03:22:18')
    console.log(date.add(10, 'days').format('YYYY-MM-DD HH:mm:ss'));
</script>
```

> 2022-06-02



























