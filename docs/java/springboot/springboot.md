# 黑马 SpringBoot

> TITLE：Springboot零基础到项目实战
>
> AUTHOR：黎老师
>
> SCHOOL：
>
> VIDEO：[BiliBili](https://www.bilibili.com/video/BV15b4y1a7yG)
>
> FILE：[初级](F:\STU\itcast\尚硅谷mysql高级\初级\课件pdf版\课件) [高级](F:\STU\itcast\尚硅谷mysql高级\高级\参考课件（供实操参考）)

> 废寝忘食
>
> disregard meal times and go without sleep; 
>
> 天道酬勤
>
> God helps those who help themselves.
>
> 学会反思，理解**记忆**

相关：[尚硅谷雷神SpringBoot2零基础入门springboot全套完整版](https://www.bilibili.com/video/BV19K4y1L7MT)

## 学习进度

- 开始时间：2022-05-16
- 结束时间：

|    日期    | 课程编号 |    学习时长     | 复习时间 |
| :--------: | :------: | :-------------: | :------: |
| 2022-05-25 |  P1~P12  | 18:30~20:30  2h |          |
|            |          |                 |          |
|            |          |                 |          |
|            |          |                 |          |

## 测验

- 题库

## 课程大纲

- 基础篇
  - 会用
- 应用篇
  - 补全知识树
  - 加强应用
  - 提高能力
  - 解决能力
- 原理篇
  - 提升理解层次
  - 能够自定义
- 番外篇
  - 丰富视野
  - 提升方案能力

### 学习目标

- 基础篇
  - 能够创建Spring Boot工程
  - 基于SpringBoot实现SSM整合
- 实用篇
  - 运维实用篇
    - 能够掌握SpringBoot程序多环境开发
    - 能够基于Linux系统发布SpringBoot工程
    - 能够解决线上灵活配置SpringBoot工程的需求
  - 开发实用篇
    - 能够基于springBoot整合任意第三方技术
- 原理篇
  - 掌握SpringBoot内部工作流程
  - 理解SpringBoot整合第三方技术的原理
  - 实现自定义开发整合第三方技术的组件

## 课程介绍

### 课程适用人群及收获

- 小白：完全没有用过SpringBoot技术
  - 初步掌握SpringBoot程序的开发流程，能够基于SpringBoot实现基础SSM框架整合
- 初学者：能使用SpringBoot技术完成基础的SSM整合
  - 掌握各式各样的第三方技术与SpringBoot整合的方案
  - 积累基于SpringBoot的实战开发经验
- 开发者：能使用SpringBoot技术实现常见的技术整合工作
  - 提升对Spring及SpringBoot原理的理解层次
  - 基于原理理解基础上，实现自主研发基于SpringBoot整合任意技术的开发方式

### SpringBoot课程学习前置知识

- 基础篇
  - Java基础语法
  - Spring与springMVC
    - 知道Spring是用来管理bean，能够基于Restful实现页面请求交互功能
  - Mybatis与Mybatis-Plus
    - 基于Mybatis和MybatisPlus能够开发出包含基础CRUD功能的标准Dao模块
  - 数据库MySQL
    - 能够读懂基础CRUD功能的SQL语句
  - 服务器
    - 知道服务器与web工程的关系，熟悉web服务器的基础配置
  - maven
    - 知道maven的依赖关系，知道什么是依赖范围，依赖传递，排除依赖，可选依赖，继承
  - web技术（含vue，ElementUI)
    - 知道vue如何发送ajax请求，如何获取响应数据，如何进行数据模型双向绑定

- 实用篇
  - Linux ( centeroS7)
    - 熟悉常用的Linux基础指令，熟悉Linux系统目录结构
  - 实用开发技术
    - 缓存:Redis、MongoDB、.....
    - 消息中间件:RocketMq、RabbitMq、.…
    - …
      .

- 原理篇
  - spring
    - 了解Spring加载bean的各种方式
    - 知道Spring容器底层工作原理，能够阅读简单的Spring底层源码

## 基础篇

## 快速上手SpringBoot

SpringBoot是由Pivotal团队提供的全新框架，其设计目的是用来`简化`Spring应用的`初始搭建`以及`开发过程`

- Spring程序与SpringBoot程序对比

| 类/配置文件            | Spring   | SpringBoot |
| ---------------------- | -------- | ---------- |
| pom文件种的坐标        | 手工添加 | 勾选添加   |
| web3.0配置类           | 手工制作 | 无         |
| Spring/SpringMVC配置类 | 手工制作 | 无         |
| 控制器                 | 手工制作 | 手工制作   |

1. 开发springBoot程序可以根据向导进行联网快速制作
   公
2. SpringBoot程序需要基于JDK8进行制作
3. SpringBoot程序中需要使用何种功能通过勾选选择技术
4. 运行SpringBoot程序通过运行Application程序入口进行

- 自定义项目创建网址

`http://start.aliyun.com`

- 创建SpringBoot工程的四种方式

1. 基于Idea创建SpringBoot工程
2. 基于官网创建SpringBoot工程
3. 基于阿里云创建SpringBoot工程
4. 手工创建Maven工程修改为SpringBoot工程

> 隐藏不想看到的文件
>
> Setting -> Editor -> File Types -> Ignore File and Folders
>
> 输入要隐藏的文件名，支持*号通配符

### SpringBoot 简介

- SpringBoot是由Pivotal团队提供的全新框架，其设计目的是用来`简化`Spring应用的`初始搭建`以及`开发过程`
  - Spring程序缺点
    - 依赖设置繁琐
    - 配置繁琐
  - Spring Boot程序有点
    - 起步依赖（简化依赖配置）
    - 自动配置（简化常用工程相关配置）
    - 辅助功能（内置服务器，。。。）

### 入门案例分析

- parent
- starter
- 引导类
- 内嵌tomcat

#### parent

![image-20220525194846290](../img/image-20220525194846290.png)

**小结**

1. 开发springBoot程序要继承spring-boot-starter-parent
2. spring-boot-starter-parent中定义了若干个依赖管理
3. 继承parent模块可以`避免`多个依赖使用相同技术时出现`依赖`版本`冲突`
4. 继承parent的形式也可以采用引入依赖的形式实现效果

#### starter

spring-boot-starter-web.pom

- starter
  - SpringBoot中常见项目名称，定义了当前项目使用的所有依赖坐标，以达到`减少依赖配置`的目的
- parent
  - 所有SpringBoot项目要继承的项目，定义了若干个坐标版本号（依赖管理，而非依赖），以达到`减少依赖冲突`的目的
  - spring-boot-starter-parent各版本间存在着诸多坐标版本不同

- 实际开发
  - 使用任意坐标时，仅书写GAV中的G和A，V由SpringBoot提供，除非SpringBoot未提供对应版本
  - 如发生坐标错误，再指定Version(要小心版本冲突)



**小结**

1. 开发SpringBoot程序需要导入坐标时通常导入对应的starter
2. 每个不同的starter根据功能不同，通常包含多个依赖坐标
3. 使用starter可以实现快速配置的效果，达到`简化配置`的目的

> startr parent 解决的是配置问题

#### 引导类

- 启动方式

```java
@SpringBootApplication
public class Spring0101QuickstartApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(Spring0101QuickstartApplication.class, args);
        BookController bean = context.getBean(BookController.class);
        System.out.println("bean === " + bean);
    }

}
```

- SpringBoot的引导类是Boot工程的执行入口，运行main方法就可以启动项目
- SpringBoot工程运行后初始化Spring容器，扫描引导类所在包加载bean

**小结**

1. SpringBoot工程提供引导类用来启动程序
2. SpringBoot工程启动后创建并初始化Spring容器

#### 内嵌tomcat

- 排除Tomcat 引入 Jetty

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>
```

- Jetty 比 Tomcat更轻量级．可扩展性更强（相较于Tomcat)，谷歌应用引擎〔GAE)已经全面切换为Jetty

**内置服务器**

- tomcat（默认）：apache出品，粉丝多，`应用面广`，负载了若干较重的组件
- jetty：`更轻量级`，负载性能远不及tomcat
- undertow：undertow，负载性能`勉强`跑赢tomcat

**小结**

1. 内嵌Tomcat服务器是SpringBoot辅助功能之一
2. 内嵌Tomcat工作原理是将Tomcat服务器作为对象运行，并将该对象交给Spring容器管理
3. 变更内嵌服务器思想是去除现有服务器，添加全新的服务器



## 知识加油站：REST开发

涉密课程:dog:

### REST 风格

- REST简介
- RESTful入门案例
- REST快速开发
- 案例:基于RESTful页面数据交互

#### REST 简介

- REST (Representational State Transfer)，表现形式状态转换

  - 传统风格资源描述形式

    http://localhost/user/getById?id=1

    http://localhost/user/saveUser

  - REST风格描述形式

    http://localhost/user/1

    http://localhost/user/

- 优点
  - 隐藏资源的访问行为，无法通过地址得知对资源是何种操作
  - 书写简化

按照REST风格访问资源时使用`行为动作`区分对资源进行了何种操作

| http: / / localhost/users   | 查询全部用户信息 | GET(查询)       |
| --------------------------- | ---------------- | --------------- |
| http: / / localhost/users/1 | 查询指定用户信息 | GET(查询)       |
| http: / / localhost/users   | 添加用户信息     | POST(新增/保存) |
| http: / / localhost/users   | 修改用户信息     | PUT(修改/更新)  |
| http: / / localhost/users/1 | 删除用户信息     | DELETE (删除)   |

> 注意：
>
> 上述行为是约定方式，约定不是规范，可以打破，所以称REST风格，而不是REST规范
>
> 描述模块的名称通常使用复数，也就是加s的格式描述，表示此类资源，而非单个资源，例如: users、books、account....

**小结**

1. REST
2. 动作4个
3. RESTful