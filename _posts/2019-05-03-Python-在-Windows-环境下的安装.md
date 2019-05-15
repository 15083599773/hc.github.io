---
layout: post
title:  "Python 在 Windows 环境下的安装"
date:   2019-05-15 20:01:00 +0800
categories: Python
---



视频教程：

<iframe 
    height=450 
    width=800 
    src="http://v.qq.com/x/page/p0870tzjjh5.html" 
    frameborder=0 
    allowfullscreen>
</iframe>



文字说明：

### 1. 我们先去下载 Python 的安装包

在官网下载：

​	我们可以选择 Python 3.x 的版本，或是 Python 2.7.x 的版本，这里推荐下载 Python 3.x 的版本，除非你有什么特别的需求。



​	如果你是 32 位的系统，下载 x86 ...

​	如果你是 64 位的系统，下载 x86-64 ...



​	embeddable zip file 表示嵌入式版本

​	executable installer 表示以可执行文件(*.exe)方式安装

​	web-based installer 表示需要通过联网进行安装的



​	官网下载速度实在是难以忍受。

​	无法忍受的话，可以换一个地方下载（腾讯软件中心）

​	在腾讯软件中心，搜索 Python 然后根据系统位数和需要的版本进行下载，    点击普通下载就能直接下载到你想要的软件了。



### 2. 我们可以开始安装 Python 了

​	安装的时候将 Add Python 版本号 to PATH 勾选上，之后就可以不用再去配置环境变量了。

​	单击 Install Now 开始安装，当我们看到 Setup was successful 的时候我们就已经安装好了，单击下方的 Close 按钮关闭对话框。

​	如果安装的时候没有勾选到 Add Python 版本号 to PATH，将需要去系统中配置环境变量。



### 3. 测试是否安装和配置成功

​    在命令提示符中 输入 Python --version，如果显示出 Python 版本号，那么恭喜你，安装成功了。



### 4. 配置环境变量

​	如果未显示则可能是环境变量未配置成功，将 Python 程序所在的目录路径添加到计算机中的 PATH 环境变量中即可。