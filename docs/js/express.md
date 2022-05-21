# Express

> TITLE：Node.js 系列教程之 Express
>
> AUTHOR：拉钩
>
> VIDEO：[BiliBili](https://www.bilibili.com/video/BV1mQ4y1C7Cn)
>
> Github：[Javascript/Express](https://github.com/tianming-jianai/JavaScript/tree/main/express)

## 学习进度

- 开始时间：2022-05-17
- 结束时间：

|    日期    | 课程编号 | 学习时长 | 复习时间 |
| :--------: | :------: | :------: | :------: |
| 2022-05-17 |  P1~P5   |    1h    |          |
| 2022-05-18 |  P6~P10  |    1h    |          |
|            |          |          |          |



## 初识 Express





```javascript
# app.js
const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    console.log(req.url)
    console.log(req.header)
    console.log(req.headers)
    // res.send('Hello World!')

    res.cookie('foo','bar')
    res.cookie('a','abc')
    res.status(202).send('Hello')
})

app.post('/',(req,res)=>{
    console.log('请求参数：',req.query)
    // res.send('Hello World!')

    // res.statusCode = 201
    // res.end()

    // res.write('a')
    // res.write('b')
    // res.write('c')
    // res.end()

    // res.end('Hello world!')

    // res.send({
    //     foo:'bar'
    // })
})

app.put('/user',(req,res)=>{
    res.send('put user')
})

app.delete('/user',(req,res)=>{
    res.send('deltet user')
})

app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000/')
})
```

## CRUD

