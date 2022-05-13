# MySQL

## 备份/恢复数据

- 备份
```bash
# 单库备份
mysqldump -uroot -p123 dbname > /path/dbname.sql
# 备份数据库中部分表
mysqldump -uroot -p123 dbname table1 table2 > /path/dbname.sql
# 多库备份
mysqldump -uroot -p123 --databases db1 db2 db3 > /path/mysql.sql
# 备份所有库
mysqldump -uroot -p123 --all-databases > /path/all.sql
```

- 跨计算机传输
```mysql
# 方式一
scp [-r] file|folder root@192.168.0.1:/desc/folder
输入密码 
# 方式二

```


- 恢复备份
```bash
# 恢复多个库
mysqldump -uroot -p123 < /path/all.sql
# 恢复单个库
mysqldump -uroot -p123 dbname < /path/dbname.sql
```
> 终端进入mysql恢复 :thumbsup:
```bash
mysql> use db1;
mysql> source /path/dbname.sql
# 注：如果备份/恢复单个库时，可以修改sql文件
```
> mysql8 config.conf 外部命令执行sql :thumbsdown:
```properties
[client]
hostname=127.0.0.1
user=root
password=m123
port=3306
```
```mysql
echo 'use luckyframe;show tables;' | mysql --defaults-file=/home/sql/config.conf
```

- 测试

```bash
# 不进入mysql，直接在终端执行mysql语句
mysql -uroot -e "use school;show tables;"
# windows 下必须是双引号
```

[参考：**mysql数据备份与恢复**](https://blog.51cto.com/u_15505761/5166669?b=totalstatistic)

