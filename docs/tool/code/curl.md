# Curl

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

