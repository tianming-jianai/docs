# 最佳实践



## Linux 删除 JDK8 安装 JDK11

```bash
# 搜索已用RPM安装的jdk
rpm -qa | grep jdk

# 根据列表中的jdk名字来删除
rpm -e --nodeps  jdk1.8-1.8.0_xxxxxx_x86_64

# 最后再跑一下搜索看看是否成功
rpm -qa | grep jdk
```

```bash
# 先看下yum库里有没有，有的话叫什么
yum list jdk*

# 例如我这里能查到一堆叫 java-11-openjdk-xxxxx
# 那我要安装的对象就是这个 java-11-openjdk
# 安装
yum install java-11-openjdk

# 检查一下是否已安装配置成功
java -version
```

