# Junit 5

[JUnit 5](https://junit.org/junit5/)

[用户指南 - Junit 5官方文档中文版 (gitbook.io)](https://doczhcn.gitbook.io/junit5/index)

## Junit5是什么？

与以前的JUnit版本不同，JUnit 5由三个不同子项目的多个不同模块组成。

**JUnit 5 =** ***JUnit Platform*** **+** ***JUnit Jupiter*** **+** ***JUnit Vintage***

**JUnit Platform**为在JVM上[启动测试框架](https://doczhcn.gitbook.io/junit5/index/index-6/launcher-api)提供基础。它还定义了[TestEngine](http://junit.org/junit5/docs/current/api/org/junit/platform/engine/TestEngine.html) API, 用来开发在平台上运行的测试框架。此外，平台提供了一个[控制台启动器](https://doczhcn.gitbook.io/junit5/index/index-3/console-launcher)，用于从命令行启动平台，并为[Gradle](https://doczhcn.gitbook.io/junit5/index/index-3/build#gradle)和[Maven](https://doczhcn.gitbook.io/junit5/index/index-3/build#maven)提供构建插件以及[基于JUnit 4的Runner](https://doczhcn.gitbook.io/junit5/index/index-3/junit-platform-runner)，用于在平台上运行任意`TestEngine`。

**JUnit Jupiter**是在JUnit 5中编写测试和扩展的新型[编程模型](https://github.com/doczhcn/junit5/tree/dfdaeec4bbec44a13deafe218412ab241c6e8de6/guide/writing-tests/README.md)和[扩展模型][]的组合.Jupiter子项目提供了`TestEngine`，用于在平台上运行基于Jupiter的测试。

**JUnit Vintage**提供`TestEngine`，用于在平台上运行基于JUnit 3和JUnit 4的测试。

---

JUnit 5在运行时需要Java 8（或更高版本）。当然，您仍然可以测试使用以前版本的JDK编译的代码。

---

