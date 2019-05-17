---
layout: post
title:  "Python - hello world!(你的第一个 Pyhon 程序)"
date:   2019-05-17 13:51:00 +0800
categories: Python
---



视频教程：

​	[bilibili](https://www.bilibili.com/video/av52711391)	[腾讯视频](https://v.qq.com/x/page/u0871q3zdgn.html)




文字说明：

### 1. 新建文本文档

​	先让我们在桌面上新建一个文本文档 (helloWorld.txt)

### 2. 键入代码
​	现在我们在桌面上已经有了一个空白的文本文档 helloWorld.txt，接下来我们打开 helloWorld.txt 键入下面这这行代码

​	print (“Hello world”)

​	当我们成功键入这行代码时你已经离你的第一个 Python 程序不远了，接下来将这个文件进行保存和退出

### 3. 修改后缀
​	我们找到我们刚开始创建的 helloWorld.txt 这个文件，将这个文件的后缀更改为 .py (也就是 Python 文件的文件后缀)，更改后的文件名为 helloWorld.py
​	若你的计算机没有显示出后缀，可进行以下操作：
​		WIN8/WIN10：打开 资源管理器 -> 点击 查看 菜单 -> 勾选 文件扩展名
​		WIN7：打开 资源管理器 -> 点击 工具 菜单-> 单击 文件夹选项 -> 在弹出的对话框中点击 查看 选项卡 -> 在 高级设置 下方的显示框中取消勾选 隐藏已知文件类型的扩展名

### 4. 执行程序

​	我们已经写好了我们的第一个程序，现在，让我们的第一个 Python 程序和这个世界打个招呼
​	打开 命令提示符(WIN+R - 键入 cmd - 单击执行)
​	用 cd 命令来到我们刚刚创建文件所在的位置，也就是系统桌面(cd Desktop)
​	dir 命令用于显示路径上的文件和文件夹
​	键入 python helloWorld.py
​	python 表示调用 python 执行命令， helloWorld.py 表示要执行的程序
​	按下回车键，你将会看到 命令提示符 的界面上显示出了Python执行后的结果Hello world!

​	恭喜你，到此为止你已经成功的创建了你的第一个 Python 程序

### 5. 附加内容
​	下面展示一个更加常用的示例(这里学过 c 语言的人应该会感觉到很熟悉)，该示例的功能也是输出 Hello world!

```Python
def main()
# '#'表示注释
# 声明一个函数，用于输出 Hello world!
# print 前的空格数为 4 个
    print(“Hello world”)


if __name__ == “__main__”
# 进行判断，如果函数名称为 main 则执行 main 函数
# main 前的空格数为 4 个
    main()
```



