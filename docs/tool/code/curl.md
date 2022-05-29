# Curl

![](https://www.wangbase.com/blogimg/asset/201909/bg2019090501.jpg)

[curl 的用法指南 - 阮一峰](https://www.ruanyifeng.com/blog/2019/09/curl-reference.html)

## 常见用法

```bash
curl https://www.baidu.com
# 省略进度条
curl -s https://www.baidu.com
# 下载到指定文件
curl -s -o 1.txt https://www.baidu.com
# -H 指定请求头
curl https://www.baidu.com -H "a:b" -X POST 
# -d 指定请求内容
# -X 指定请求的方式
curl https://www.baidu.com -H "a:b" -X POST  -d "age=22"
# querystring
curl https://www.baidu.com?name=kk -H "a:b" -X POST  -d "age=22"

curl https://www.baidu.com?name=kk -H "Content-Type:application/json" -X POST  -d "{\"age\":\"24\"}"
```

## RESTful CRUD

```bash
# save
curl -X POST -H 'Content-Type: application/json' -d '{"type":"tool","name":"curl","description":"web_req"}' localhost/books

# update
curl -X PUT -H 'Content-Type: application/json' -d '{"id":"2","type":"tool","name":"idea","description":"java ide"}' localhost/books

# delete
curl -X DELETE http://localhost/books/1

# getById
curl http://localhost/books/11

# getAll
curl http://localhost/books

# getByPage
curl http://localhost/books/1/5
```

## 参数

