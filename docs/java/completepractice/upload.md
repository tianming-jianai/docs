# 文件上传

对于文件上传，浏览器在上传的过程中是将文件以流的形式提交到服务器端的。
一般选择采用[apache](https://so.csdn.net/so/search?q=apache&spm=1001.2101.3001.7020)的开源工具common-fileupload这个文件上传组件。
common-fileupload是依赖于common-io这个包的，所以还需要下载这个包。

# SpringBoot 上传

从Spring3.1开始，Spring提供了两个`MultipartResolver`的实现用于处理multipart请求，分别是：`CommonsMultipartResolver`和`StandardServletMultipartResolver`。

CommonsMultipartResolver使用common fileupload来处理multipart请求，所以在使用的时候必须引入相应的jar包。

StandardServletMultipartResolver是基于Servlet3.0来处理multipart请求的，所以不需要引用其他jar包，但是必须使用支持Servlet3.0的容器才可以。

[参考](https://www.cnblogs.com/senlinyang/p/8612148.html) [参考](https://www.cnblogs.com/fanqisoft/p/10261536.html)

### 单文件上传

```html
<h3>上传单个文件</h3>
<form action="/users/upload" enctype="multipart/form-data" method="post">
    <input type="file" name="file" required><br>
    <input type="submit" value="上传单个文件">
</form>
```

```java
@PostMapping("/blog/book")
public String uploadBook(@RequestParam("file") MultipartFile file) {
    if (file.isEmpty()) {
        return "上传失败，请选择文件";
    }
    String fileName = file.getOriginalFilename();
    String filePath = Constants.BOOK_PATH;
    File dest = new File(filePath + fileName);
    try {
        file.transferTo(dest);
        return "上传成功！";
    } catch (IOException e) {
        log.error(e.toString());
    }
    return "上传失败！";
}
```

### 多文件上传

```html
<h3>上传多个文件</h3>
<form action="/users/multiUpload" enctype="multipart/form-data" method="post">
    <input type="file" name="file" required><br>
    <input type="file" name="file" required><br>
    <input type="file" name="file" required><br>
    <input type="submit" value="上传多个文件">
</form>
```

```java
@PostMapping("/blog/books")
    public String uploadBooks(@RequestParam("file")MultipartFile[] files) {
        String filePath = "./temp/";
        int i = 0;
        for (MultipartFile file : files) {
            i++;
            if (file.isEmpty()) {
                return String.format("上传第%d个文件失败！", i);
            }
            String fileName = file.getOriginalFilename();
            File dest = new File(filePath + fileName);
            try {
                file.transferTo(dest);
            } catch (IOException e) {
                log.info(e.toString());
                return String.format("上传第%d个文件失败！", i);
            }
        }
        return "上传成功！";
    }
```

### 上传中出现的问题

#### 1. 找不到上传组件

java.lang.IllegalStateException: Unable to process parts as no multi-part configuration has been provided

```xml
<dependency>
    <groupId>commons-fileupload</groupId>
    <artifactId>commons-fileupload</artifactId>
    <version>1.4</version>
</dependency>
```

```java
@Configuration
public class UploadConfig {
    @Bean(name = "multipartResolver")
    public MultipartResolver multipartResolver() {
        return new CommonsMultipartResolver();
    }
}
```

#### 2. [SpringMVC 文件上传模块失败](http://iloveqyc.com/2016/06/03/springmvc-upload-file-fail-servlet/)

#### 3. [Tomcat 临时文件夹被删除](https://blog.csdn.net/liuy521/article/details/121797531)

#### 4. 请求文件大小超过限制

the request was rejected because its size (15791174) exceeds the configured maximum 

[参考](https://mkyong.com/spring/spring-mvc-how-to-handle-max-upload-size-exceeded-exception/)

> In Spring, you can declare a `@ControllerAdvice` to catch the ugly max upload size exceeded exception like this :

- Solution

Depends the types of `multipartResolver` :

1. `StandardServletMultipartResolver` – catch `MultipartException`, refer to [this example](http://www.mkyong.com/spring-mvc/spring-mvc-file-upload-example/).
2. `CommonsMultipartResolver` – catch `MaxUploadSizeExceededException` – refer to [this example](http://www.mkyong.com/spring/spring-mvc-file-upload-example-commons-fileupload/).

### 文件上传的注意事项

1. 为保证服务器安全，上传文件应该放在外界无法直接访问的目录下，比如放于WEB-INF目录下。
2. 为防止文件覆盖的现象发生，要为上传文件产生一个唯一的文件名
3. 要限制上传文件的最大值。
4. 可以限制上传文件的类型，在收到上传文件名时，判断后缀名是否合法。

### 文件上传持久化到数据库



### 其他

[springboot框架下基于commons-fileupload实现上传，下载组件](https://www.jianshu.com/p/4197ef9a4488)
