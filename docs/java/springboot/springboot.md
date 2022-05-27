# 黑马 SpringBoot

> TITLE：Springboot零基础到项目实战
>
> AUTHOR：黎老师
>
> SCHOOL：
>
> VIDEO：[BiliBili](https://www.bilibili.com/video/BV15b4y1a7yG)
>
> FILE：

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
| 2022-05-26 | P13~P21  | 14:40~16:40  2h |          |
| 2022-05-27 | P22~P31  | 15:30~17:30  2h |          |
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

## 01 快速上手SpringBoot

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

### parent

![image-20220525194846290](../img/image-20220525194846290.png)

**小结**

1. 开发springBoot程序要继承spring-boot-starter-parent
2. spring-boot-starter-parent中定义了若干个依赖管理
3. 继承parent模块可以`避免`多个依赖使用相同技术时出现`依赖`版本`冲突`
4. 继承parent的形式也可以采用引入依赖的形式实现效果

### starter

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

### 引导类

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

### 内嵌tomcat

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

### REST 简介

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

> DATE：2022-05-25

### RESTful 入门案例

1. 设定请求动作（动词）
2. 设定请求参数（路径变量）

```java
@Controller
public class UserController {

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public String save() {
        System.out.println("user save ...");
        return "{'module':'user save'}";
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
    public String delete(@PathVariable("id") Integer id) {
        System.out.println("user delete ..." + id);
        return "{'module':'user delete'}";
    }

    @RequestMapping(value = "/users", method = RequestMethod.PUT)
    public String update(@RequestBody User user) {
        System.out.println("user save ..." + user);
        return "{'module':'user update'}";
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public String getById(@PathVariable("id") Integer id) {
        System.out.println("user getById ..." + id);
        return "{'module':'user getById'}";
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public String getAll() {
        System.out.println("user getAll ...");
        return "{'module':'user getAll'}";
    }
}
```

### @RequestBody @RequestParam @PathVariable

- 区别
  - @RequestParam用于接收url地址传参或表单传参
  - @RequestBody用于接收json数据
  - @PathVariable用于接收路径参数，使用{参数名称}描述路径参数
- 应用
  - 后期开发中，发送请求参数超过1个时，以json格式为主，@RequestBody应用较广
  - 如果发送非json格式数据，选用@RequestParam接收请求参数
  - 采用RESTful进行开发，当参数数量较少时，例如1个，可以采用@PathVariable接收请求路径变量，通常用于传递id值

### RESTful 快速开发

```java
@RestController
@RequestMapping("/books")
public class BookController {

    @PostMapping
    public String save() {
        System.out.println("book save ...");
        return "{'module':'book save'}";
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") Integer id) {
        System.out.println("book delete ..." + id);
        return "{'module':'book delete'}";
    }

    @PutMapping
    public String update(@RequestBody Book book) {
        System.out.println("book save ..." + book);
        return "{'module':'book update'}";
    }

    @GetMapping("/{id}")
    public String getById(@PathVariable("id") Integer id) {
        System.out.println("book getById ..." + id);
        return "{'module':'book getById'}";
    }

    @GetMapping
    public String getAll() {
        System.out.println("book getAll ...");
        return "{'module':'book getAll'}";
    }
}
```

**小结**

1. RESTful快速开发（标准开发）
2. @RestController
3. 标准请求动作映射（4种）

## 02 基础配置

- 属性配置
- 配置文件分类
- yaml文件
- yaml数据读取

### 教你一招：复制工程

- 原则
  - 保留工程基础结构
  - 抹掉原始工程痕迹

**小结**

1. 在工作空间中复制对应工程，并修改工程名称
2. 删除与Idea相关配置文件，仅保留src目录与pom. xml文件
3. 修改pom. xm1文件中的artifactId与新工程/模块名相同
4. 删除name标签(可选)
5. 保留备份工程供后期使用

### 属性配置

- 修改服务端口

- SpringBoot默认配置文件application. properties,通过键值对配置对应属性

  ```properties
  server.port=80
  ```

```properties
# 服务器端口配置
server.port=80

# 修改banner
#spring.main.banner-mode=off
#spring.banner.image.location=logo.png

# 日志
logging.level.root=info
logging.level.com.itheima=warn
```



- SpringBoot内置属性查询

官方文档中参考文档第一项: Application Properties

[SpringBoot所有配置](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html)

**小结**

- SpringBoot中导入对应starter后，提供对应配置属性
- 书写SpringBoot配置采用关键字+提示形式书写



**SpringBoot提供了多种属性配置方式**

SpringBoot提供了3种配置文件的格式

- properties (传统格式/默认格式)
- `yml (主流格式)`
- yaml

### 配置文件加载优先级

`.properties > .yml > yaml`

不同配置文件中相同配置按照加载优先级相互覆盖，不同配
置文件中不同配置全部保留



### 自动提示功能消失解决方案

1. 指定SpringBoot配置文件
   - Setting  →  Project Structure  →  Facets
   - 选中对应项目/工程
   - Customize Spring Boot
   - 选择配置文件

### yaml

- YAML (YAML Ain't Markup Language) ，-种数据序列化格式
- 优点:
  - 容易阅读
    - 容易与脚本语言交互 .
    - 以数据为核心, 重数据轻格式
  - YAML文件扩展名
    - `.yml (主流)`
    - . yaml



**语法规则**

- 大小写敏感
- 属性层级关系使用多行描述，每行结尾使用冒号结束
- 使用缩进表示层级关系，同层级左侧对齐，只允许使用空格(不允许使用Tab键)
- 属性值前面添加空格(属性名与属性值之间使用冒号+空格作为分隔)
- #表示注释

核心规则：`数据前面要加空格与冒号隔开`



- 字面值表示方式

![image-20220526163108882](../img/image-20220526163108882.png)

- 数组表示方式

  ```yaml
  likes:
    - game
    - music
    - sleep
  
  likes2: [game,music,sleep]
  ```

- 对象数组格式

  ```yaml
  users:
    - name: zhangsan
      age: 18
    - name: lisi
      age: 17
  
  users:
    - 
    	name: zhangsan
      age: 18
    - 
    	name: lisi
      age: 17
      
  users2: [{name:zhangsan,age:18},{name:lisi,age:17}]
  ```

**小结**

1. yaml语法规则
   - 大小写敏感
   - 属性层级关 系使用多行描述，每行结尾使用冒号结束
   - 使用缩进表示层级关系, 同层级左侧对齐,只允许使用空格(不允许
     使用Tab键)
   - 属性值前面添加空格( 属性名与属性值之间使用冒号+空格作为分隔)
   - #表示注释
2. 注意属性名冒号后面与数据之间有一个空格
3. 字面值、对象数据格式、数组数据格式(略)

> DATE：2022-05-26

### 读取yaml配置数据

1. **使用@Value读取单个数据，属性名引用方式：`${一级属性名.二级属性名...}`**

```yam
server:
  port: 81

country: china
user:
  name: zhangsan

likes:
  - game
  - music
  - sleep

likes2: [game,music,sleep]

users:
  - name: zhangsan
    age: 18
  - name: lisi
    age: 17

users2: [{name:zhangsan,age:18},{name:lisi,age:17}]

baseDir: C:\windows
tempDir: ${baseDir}\temp
```

```java
@RestController
@RequestMapping("/books")
public class BookController {
    // 读取yaml单一数据
    @Value("${country}")
    private String country;
    @Value("${user.name}")
    private String name;
    @Value("${likes[1]}")
    private String likes1;
    @Value("${users[1].age}")
    private String age1;
    @Value("${server.port}")
    private String port;
    @Value("${tempDir}")
    private String tempDir;

    @GetMapping("/{id}")
    public String getById(@PathVariable("id") Integer id) {
        System.out.println("book getById ..." + id); // book getById ...1
        System.out.println("country: " + country); // country: china
        System.out.println("name: " + name); // name: shiga
        System.out.println("likes1: " + likes1); // likes1: music
        System.out.println("age1: " + age1); // age1: 17
        System.out.println("port: " + port); // port: 80
        System.out.println("tempDir: " + tempDir); // tempDir: C:\windows\temp
        return "{'module':'book getById'}";
    }
```

**小结**

1. 在配置文件中可以使用${属性名}方式引用属性值
2. 如果属性出现特殊符号，可以使用`双引号`包裹起来作为字符解析

2. **封装全部数据到Environment对象**

```java
	@Autowired
    private Environment env;

    @GetMapping
    public String getAll() {
        System.out.println("book getAll ...");
        System.out.println("port: " + env.getProperty("server.port")); // 80
        return "{'module':'book getAll'}";
    }
```

**小结**

1. 使用Environment对象封装全部配置信息
2. 使用@Autowired自动装配数据到Environment对象中



3. **自定义对象封装指定数据**

```yaml
datasource:
  driver: com.mysql.cj.jdbc.Driver
  url: jdbc:mysql://localhost/springboot_db
  username: root
  password: root666
```

```java
/**
 * 1. 定义数据模型封装yaml文件中对应的数据
 * 2. 定义为Spring管控的bean
 * 3. 指定加载的数据
 */
@Data
@Component
@ConfigurationProperties(prefix = "datasource")
public class MyDataSource {
    private String driver;
    private String url;
    private String username;
    private String password;
}
```

```java
@Autowired
private MyDataSource myDataSource;

@GetMapping
public String getAll() {
    System.out.println("book getAll ...");
    System.out.println("myDataSource: " + myDataSource);
    return "{'module':'book getAll'}";
}
// myDataSource: MyDataSource(driver=com.mysql.cj.jdbc.Driver, url=jdbc:mysql://localhost/springboot_db, username=root, password=root666)
```

**小结**

1. 实用@ConfigurationProperties注解绑定撇子信息到封装类中
2. 封装类需要定义为Spring管理的bean，否则无法进行属性注入



## 03 整合第三方技术

- 整合JUnit
- 整合Mybatis
- 整合MyBatis-Plus
- 整合Druid

### 整合JUnit

**小结**

1. 导入测试对应的starter
2. 测试类实用`@SpringBootTest`修饰
3. 实用自动装配的形式添加要测试的对象

- 名称：@SpringBootTest

- 类型：测试类注解

- 位置：测试类定义上方

- 作用：设置JUnit加载的`SpringBoot启动类`

- 范例：

  ```java
  @SpringBootTest(classes = SpringBoot04JunitApplication.class)
  class SpringBootApplicationTests{}
  ```

- 相关属性

  - classes：设置SpringBoot启动类

注意事项：
如果测试类在SpringBoot启动类的包或子包中，可以省略启动类配置，也就是省略`classes`的设定

**小结**

1. 测试类如果存在于引导类所在包或子包中无需指定引导类
2. 测试类如果不存在于引导类所在的包或子包中需要通过classes属性指定引导类

### 整合Mybatis

```mysql
CREATE TABLE `tbl_book` (
  `id` int DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL
)
```

```java
@Data
public class Book {
    private Integer id;
    private String type;
    private String name;
    private String description;
}
```

设置数据源参数

```yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/ssm_db
    username: zhangsan
    password: 2233
```

定义数据层接口与映射配置

```java
@Mapper
public interface BookDao {
    @Select("select * from tbl_book where id = #{id}")
    public Book getById(Integer id);
}
```

测试

```java
@Autowired
BookDao bookDao;

@Test
void contextLoads() {
    System.out.println(bookDao.getById(1));
}
```

**小结**

1. 勾选MyBatis技术，也就是导入MyBatis对应的starter
2. 数据库连接相关信息转换成配置
3. 数据库SQL映射需要添加@Mapper被容器识别到

**小结**

1. MySQL 8.X驱动强制要求设置时区
   - 修改url，添加`?serverTimezone=UTC`设定
   - 永久解决方案，修改MySQL数据库配置（略)
2. 驱动类过时，提醒更换为`com.mysql.cj.jdbc.Driver`

### 整合MyBatis-Plus

- MyBatis-Plus与Mybatis区别
  - 导入坐标不同
  - 数据层实现简化

1. 手动昂添加lSpringBoot整合MyBatis-Plus的坐标，可以通过mvnrepository获取

```xml
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>3.5.1</version>
</dependency>
```

注意事项：
由于SpringBoot中未收录MyBatis-Plus的坐标版本，需要指定对应的Version

2. XxxDao继承BaseMapper(Xxx)

```java
@Mapper
public interface BookDao extends BaseMapper<Book> {
}
```

3. 测试

```java
@Autowired
BookDao bookDao;

@Test
void contextLoads() {
    System.out.println(bookDao.selectById(1));
}

@Test
public void findAll(){
    System.out.println(bookDao.selectList(null));
}
```

**小结**

1. 手工添加MyBatis-Plus对应的starter
2. 数据层接口使用BaseMapper简化开发
3. 需要使用的第三方技术无法通过勾选确定时，需要手工添加坐标

### 整合Druid

```xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid-spring-boot-starter</artifactId>
    <version>1.1.21</version>
</dependency>
```

**通用性指定数据源**

```yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/test
    username: root
    password: 2233
    type: com.alibaba.druid.pool.DruidDataSource
```

**变更Druid的配置方式**

```yaml
spring:
  datasource:
  	druid:
      driver-class-name: com.mysql.cj.jdbc.Driver
      url: jdbc:mysql://localhost:3306/test
      username: root
      password: 2233
```

### 整合第三方技术

- 导入对应的starter
- 配置对应的设置或采用默认配置

**小结**

1. 整合Druid需要导入Druid对应的starter
2. 根据Druid提供的配置方式进行配置
3. 整合第三方技术通用方式
   - 导入对应的starter
   - 根据提供的配置格式，配置非默认值对应的配置项