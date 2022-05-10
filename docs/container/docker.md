# Docker

## 认识 Docker

### Docker的思想

1. 集装箱:

   会将所有需要的内容放到不同的集装箱中，谁需要这些环境就直接拿到这个集装箱就可以了。

2. 标准化:

   1. 运输的标准化: Docker有一个码头，所有上传的集装箱都放在了这个码头上，当谁需要某一个环境，就直接指派大海疼去搬运这个集装箱就可以了。
   2. 命令的标准化: Docker提供了一些列的命令，帮助我们去获取集装箱等等操作。
   3. 提供了REST的API:衍生出了很多的图形化界面，Rancher。

3. 隔离性:
   Docker在运行集装箱内的内容时，会在Linux的内核中，单独的开辟一片空间，这片空间不会影响到其他程序。

- 注册中心。(超级码头，上面放的就是集装箱)

- 镜像。(集装箱)
- 容器。(运行起来的镜像)


### 安装Docker



```bash
# 1. 下载关于Docker的依赖环境
yum -y install yum-utils device-mapper-persistent-data lvm2
# 2. 设置下载Docker的镜像源
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 3.  安装Docker
yum makecache fast
yum -y install docker-ce
# 4. 启动,并设置为开机自动启动,测试
# 启动Docker服务
systemctl start docker
# 设置开机自启动
systemctl enable docker
# 测试
docker run hello-world
```

### 镜像的操作

```bash
# 1. 拉取镜像到本地
docker pull 镜像名称[:tag]
docker pull daocloud.ip/library/tomcat:8.5.15-jre8
# 2. 查看所有本地镜像
docker images
# 3. 删除本地镜像
docker rmi 镜像标识
# 4. 镜像的导入导出（不规范）
# 将本地的镜像导出
docker save -o ./tomcat.image b8
# 加载本地镜像
docker load -i 镜像文件
# 修改镜像名称
docker tag b8 tomcat:8.5
```

### 容器的操作

```bash
# 1. 运行容器
# 简单操作
docker run 镜像标识|镜像名称[:tag]
# 常用参数
docker run -d -p 宿主机端口:容器端口 --name 容器名称 镜像的标识|镜像名称[:tag]
# -d: 代表后台运行容器
# -p: 宿主机端口:容器端口:为了映射当前Linux的端口和容器的端口
# --name: 器名称:指定容器的名称

# 2. 查看运行的容器
docker ps [-qa]
# -a: 查看全部的容器,包括没有运行
# -q: 只查看容器得到标识
# 3. 查看容器的日志
docker logs --tail=100 -f 容器id
# -f: 可以滚动查看目志的最后几行
# 4. 进入到容器内部
docker exec -it 容器id /bin/bash
# 5. 删除容器
docker stop 容器id
docker rm 容器id
docker rm $(docker ps -qa)
# 6. 启动容器
docker start 容器id
```

### 数据卷

为了部署SSM的工程，需要使用到cp的命令将宿主机内的ssm.war文件复制到容器内部。

数据卷：将宿主机的一个目录映射到容器的一个目录中。

可以在宿主机中操作目录中的内容，那么容器内部映射的文件，也会跟着一起改变。

```bash
# 1. 创建数据卷
docker volume create 数据卷名称
# 创建数据卷之后，默认会存放在一个目录下/var/lib/docker/volumes/数据卷名称/_data
# 2. 查看数据卷详细信息
docker volume inspect 数据卷名称
# 3. 查看全部数据卷
docker volume ls
# 4. 删除数据卷
docker volume rm 数据卷名称
# 5. 应用数据卷
# 当你映射数据卷时，如果数据卷不存在。Docker会帮你自动创建，会将容器内部自带的文件，存储在默认的存放路径中。
docker run -v 数据卷名称:容器内部路径 镜像id
docker run -d -p 8080:8080 --name ssm_tomcat -v volume_ssm_tomcat:/usr/local/tomcat/webapps b8
# 直接指定一个路径作为数据卷的存放位置，这个路径下是空的（推荐这种指定路径的操作）
docker run -v 路径:容器内部的路径 镜像id
docker run -d -p 8080:8080 --name ssm_tomcat -v /opt/volume_ssm_tomcat:/usr/local/tomcat/webapps b8
```

### Docker 自定义镜像

中央仓库上的镜像，也是Docker的用户自己上传过去的。

```bash
# 1. 创建一个Dockerfile文件，并且指定自定义镜像信息
# Dockerfile文件常用内容
from：指定当前自定义镜像的环境
copy：将路径下的内容复制到自定义镜像中
workdir：声明镜像默认工作目录
cmd：需要执行的命令（在workdir下执行，cmd可以写多个，只以最后一个为准）
```

```bash
# 举个栗子：自定义一个tomcat镜像，并且将ssm.war部署到tomcat中
from daocloud.io/libarary/tomcat:8.5.15
copy ssm.war /usr/local/tomcat/webapps
```

```bash
# 2. 将准备好的Dockerfile和响应的文件拖拽到linux系统中，通过Docker的命令制作镜像
docker build -t 镜像名称[:tag]
```

### Docker-Compose

```text
之前运行一个镜像，需要添加大量的参数。
可以通过Docker-Compose编写这些参数。
Docker-Compose可以帮助我们批量的管理容器。
只需要通过一个docker-compose.yml文件去维护即可。
```

```bash
1. 去github官网搜索docker-compose 下载1.24.1版本Docker-Compose
2. 将下载好的文件，拖拽到linux操作系统中
3. 需要将DockerCompose文件的名称修改一下，基于docker-compose
mv docker-compose-Linux-x86_64 docker-compose
chmod 777 docker-compose
4. 方便后期操作，配置环境变量
将docker-compose文件移动到/usr/local/bin 中，修改了/etc/profile文件， 给/usr/local/bin配置到PATH中
mv docker-compose /use/local/bin
	export PATH=$JAVA_HOME:/usr/local/bin:$PATH
source /etc/profile
5. 测试一下
	在任意目录下输入docker-compose
```

- Docker-compose 管理MySQL 和 Tomcat容器

```yaml
version: "3.1"
services:
	mysql: # 服务名称
		restart: always # 代表只要docker启动，name这个容器就跟着要一起启动
		image: daocloud.io/library/mysql:5.7.4 # 指定容器路径
		container_name: mysql # 指定容器名称
		ports:
			- 3306:3306 # 指定端口号映射
		environment:
			MYSQL_ROOT_PASSWORD: root # mysqlroot用户登录密码
			TZ: Asia/Shanghai # 指定时区
		volumes:
			- /opt/docker_mysql/data:/var/lib/mysql/  # 映射数据卷
	tomcat:
		restart: always
		image: daocloud.io/library/tomcat:8.5.15-jre8
		container_name: tomcat
		ports:
			- 8080:8080
		environment:
			TZ: Asia/Shanghai
		volumes:
			- /opt/docker_tomcat/tomcat_webapps:/usr/local/tomcat/webapps
			- /opt/docker_tomcat/tomcat_logs:/usr/local/tomcat/logs
```

```bash
# 在使用docker-compose的命令时，默认会在当前目录下找docker-compose.yml文件

# 1. 基于docker-compose.yml启动管理的容器
docker-compose up -d
docker ps # 查看容器名称 端口你映射
# 2. 关闭并删除容器
docker-compose down
# 3. 开启、关闭、重启已经存在的docker-compose维护的容器
docker-compose start|stop|restart
# 4. 查看docker-compose 管理的容器
docker-compose ps
# 5. 查看日志
docker-compose logs -f
```

## 常见应用 Docker 部署命令

- MySQL

```bash
# 运行mysql容器
docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root daocloud.io/library/mysql:5.7.4
```

- Tomcat

```bash
# 运行Tomcat容器，前面已经搞定，只需要将SSM项目的war包部署到Tomcat容器内部即可
docker pull daocloud.ip/library/tomcat:8.5.15-jre8
docker run -d -p 8080:8080 --name tomcat b8
# 可以通过命令将宿主机的内容复制到容器内部
docker cp 文件名称 容器id:容器内部路径
#举个栗子
docker cp ssm.war fe:/usr/local/tomcat/webapps/
```



## Docker 容器备份



