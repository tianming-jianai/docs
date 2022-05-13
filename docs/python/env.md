---
prev: /python/
next: /python/base
---
# Python 环境搭建

```bash
yum provides python
yum install python39
```



## conda

```bash
# 查看版本
conda --version
# 更新至最新版本
conda update conda

# 创建环境
conda create --name your-env
# 创建环境并安装包
conda create --name your-env python=3.9
# 激活环境
conda activate your-env
# 取消激活
donda deactivate

# 查看已创建环境
conda info --envs
conda info -e
conda env list
# 完整删除一个环境
conda remove --name envname --all
# 复制一个环境
conda create --clone envname --name newenv
# 将环境导出大yaml，用于创建新的环境
conda env create -f=/path/to/env.yml -n your-env

# 查看环境中安装了哪些包
conda list
# 查看某个环境修订版
conda list --revisions
```
```bash
# 对虚拟环境中安装额外的包
conda install -n env_name [package]  # 未激活环境
conda install -y [package]  # 如果已经激活环境
# 删除包
conda remove --name $env_name  $package_name 
```
- 清华配置conda镜像

[Anaconda 镜像使用帮助](https://mirror.tuna.tsinghua.edu.cn/help/anaconda/)

## conda & jupyter notebook

```bash
conda create --name jupyter python=3.9
conda activate jupyter
conda install jupyter
# 生成配置文件
jupyter notebook --generate-config
# 修改配置
vim jupyter notebook --generate-config
```

```properties
# 配置项
# 允许以root用户启动notebook
c.NotebookApp.allow_root = True
# 开启远程访问
c.NotebookApp.ip = '*'
# ‘’ 禁用token和密码登录，自己用方便，公网最好要有密码
c.NotebookApp.token = ''
c.NotebookApp.password = ''
# notebook 默认目录
c.NotebookApp.notebook_dir = ''
# notebook启动时不要打开浏览器
c.NotebookApp.open_browser = False
# 修改端口
c.NotebookApp.port = 8888
```



```bash
# 启动
jupyter notebook
# 后台启动
nohup jupyter notebook --allow-root > jupyter.log 2>&1 &
# 查看进程
ps -ef | grep jupyter-notebook
# 杀死进程
kill -9 pid
```
[Online jupyter notebook](http://180.76.136.251:8888/tree)