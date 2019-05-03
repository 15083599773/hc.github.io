## Python 基本操作



#### 1. Python 安装



​	使用工具：Linux Shell、tar

​	操作步骤：

​		`$ tar –jxvf Python-....tar.bz2`

​		`$ cd Python-...`

​		`$ ./configure`

​		`$ make`

​		`$ make install`

​	提醒：	使用管理员权限

​	时间：	2019 年 04 月 05 日





#### 2. Python 程序打包发布



​	使用工具：Linux Shell、pip、pyinstaller

​	操作步骤：

​		`# Linux 下 Python 项目发布、打包`

​		`$ sudo pip install pyinstaller`

​		`# 安装最新版本 pyinstaller`

​		`$ sudo pip install --upgrade pyinstaller`

​		`# 生成单个可执行文件( dist 文件夹下)`

​		`$ pyinstaller -F xxx.py`

​		`# 生成可执行文件`

​		`$ pyinstaller xxx.py`

​	提醒：	按步骤操作

​	时间：	2019 年 04 月 05 日





#### 3. Python 程序注意事项



​	信息：注意事项

​	相关内容：

​		`# 进行编码声明`

​		`# -*- coding:utf-8 -*-`

​		`# init 边上前后都是两个下划线`

​		`def __init__(self):`

​		`# 安装 python3 使用的 pip`

​		`$ sudo apt-get install python3-pip`

​		`# 安装 BeautifulSoup`

​		`$ sudo apt-get install python-bs4`

​		`$ sudo pip3 install beautifulsoup4`

​	提醒：	随机应变

​	时间：	2019 年 04 月 05 日





4. #### Python 读写 Excel 文件



​	相关库类：

​		:black_circle: xlrd

​		:black_circle: xlwt

​	步骤：

​		:black_circle: 打开 Excel 文件

​			`readbook = xlrd.open_workbook(r'\test\canying.xlsx')`

​		:black_circle: 获取读入的文件的 Sheet

​			`# 索引的方式，从0开始`

​			`sheet = readbook.sheet_by_index(1)`

​			`# 名字的方式`

​			`sheet = readbook.sheet_by_name('sheet2')`

​		:black_circle: 获取 Sheet 的最大行数和列数

​			`# 行`

​			`nrows = sheet.nrows`

​			`# 列`

​			`ncols = sheet.ncols`

​		:black_circle: 获取某个单元格的值

​			`# 获取 i 行 3 列的表格值`

​			`lng = table.cell(i,3).value`

​			`# 获取 i 行 4 列的表格值`

​			`lat = table.cell(i,4).value`

​			`# 获取第i行，第一列的数据，当然，还有专门读取单元格的函数`

​			`value = table.row_values(i)[0]`

​		:black_circle: 打开将写的表并添加 Sheet

​			`# 打开一个 excel 文件`

​			`writebook = xlwt.Workbook()`

​			`# 在打开的 excel 中添加一个 sheet`

​			`sheet = writebook.add_sheet('test')`

​		:black_circle: 将数据写入 Excel 文件

​			`# 写入 excel 文件（i 行 0 列）`

​			`sheet.write(i,0,result[0])`	

​			`sheet.write(i,1,result[1])	`

​		:black_circle: 保存文件

​			`# 一定要记得保存`

​			`writebook.save('answer.xls')	`

​	提醒：	一定要记得保存

​	时间：	2019 年 04 月 05 日 16:14





#### 5. Python 数据抓取



​	使用工具：urllib、bs4

​	示例代码：

​		`# 导入需要的库类`

​		`from urllib.request import urlopen`

​		`from bs4 import BeautifulSoup`

​		`from urllib.error import HTTPError, URLError`

​		`try:`

​			`# 需要检测异常处理的代码`

​			`html = urlopen("URL 链接")`

​		`except (HTTPError, URLError) as e:`

​			`# 当 try 里面包含的代码发生 HTTPError, URLError 错误时执行`

​		`else:`

​			`# 无异常时才会执行 else 时的语句`

​		`try:`

​			`bs0bj = BeautifulSoup(html.read())`	

​			`namelist = bs0bj.findAll("div", {"class":"content"})`

​		`except AttributeError as e:`

​			`return None`

​	提醒：	做好错误处理

​	时间：	2019 年 04 月 05 日





#### 6. 示例标题_2



​	信息：示例信息

​	内容：

​		示例内容

​	结论：

​		示例结论

​	时间：xxxx 年 xx 月 xx 日





## Python 问题集



#### 1. 重定向输出错误



​	错误代码：`UnicodeEncodeError: 'ascii' codec can't encode characters in position 0-8: ordinal not in range(128)`

​	错误原因：`未将系统编码设置为 utf-8`

​	解决方法：

​		`# 设置系统编码为 utf-8`

​		`import sys`

​		`reload(sys)`

​		`sys.setdefaultencoding('utf-8')`

​	时间：	2018 年 9 月 16 日





## Python 库类



#### 1. csv 库类

```Python
import csv

with open('文件') as f:

	# 读取文件
	reader = csv.reader(f)
	
	# 显示文件中的第一行
	header_row = next(reader)
	
	# 将文件第一行，按逗号分行显示
	for index, colum_header in enumerate(header_row):
		print(index, colum_header)
		
	# 显示除第一行的所有第一列
	for row in reader:
		print(row[1])
```





#### 2. matplotlib 库类

网址：http://matplotlib.org

```Python
import matplotlib.pyplot as plt

# 生成列表的方式
x_values = list(range(1, 101))
y_values = [value**2 for value in range(1, 101)]

# 折线图
plt.plot(参数列表, 与参数对应 X 轴坐标列表, linewidth=0, fontsize=0)
# 散点图（在 2.0.0 版本的 matplotlib 中，scatter() 函数的实参 edgecolor 默认为 'none'）
# c 的参数包含 3 个 0 - 1 的值，值越接近 1，指定的颜色越浅
plt.scatter(X 轴坐标列表, Y 轴坐标列表, edgecolor='none', s=0, c=(0, 0, 0), fontsize=0)
# c 的参数设置成了一个列表的值，可以配合之后的 cmap=plt.cm.Blues 使用，显示效果为所有点都显示为蓝色，对应列表值越大，颜色越深
plt.scatter(X 轴数字坐标列表, Y 轴坐标列表, X 轴文字坐标列表, edgecolor='none', s=0, c=y_values, cmap=plt.cm.Blues, fontsize=0)
# 设置标题
plt.title("标题", fontsize=0)
# X 轴提示信息
plt.xlabel("X 轴提示信息")
# Y 轴提示信息
plt.ylabel("Y 轴提示信息")
# 设置刻度标记大小
plt.tick_params(axis='both', labelsize=0)
# 设置每个坐标轴的取值范围，先 X 轴后 Y 轴
plt.axis([0, 100, 0, 100])
# 显示图表
plt.show()
# 此方法不能和 show() 一起出现，否则图像出错
# bbox_inches='tight' 表示裁剪空白区域，省略即不裁剪
plt.savefig('图片名称.png/.jpg/...', bbox_inches='tight')
# 隐藏坐标轴
plt.axes().get_xaxis().set_visible(False)
plt.axes().get_yaxis().set_visible(False)
# 设置绘图窗口的尺寸（以英寸为单位）
plt.figure(figsize=(10, 6))
fig = plt.figure(dpi=128, figsize=(10, 6))
# 绘制斜的日期标签
fig.autofmt_xdate()

# 打开交互模式
plt.ion
# 关闭交互模式（如果不将交互模式关闭，那显示将会自动关闭）
plt.ioff
```





#### 3. pygal 库类

```Python
import pygal

# 实例化一个直方图
hist = pygal.Bar()
# 设置直方图标题
hist.title = "标题"
# 设置 x 轴标签
hist.x_labels = ["字符列表"]
# 设置 x 轴标题
hist.x_title = "标题"
# 设置 y 轴标题
hist.y_title = "标题"

# 添加显示的数据
hist.add('名称', 数据列表)
# 导出直方图
hist.render_to_file('直方图.svg')
```





#### 4. unittest 库类

```Python
import unittest


class XXX(unittest.TestCase):
	def setUp(self):
		pass
	def test_xxx(self):
		pass
		
        
# 核实 a == b
assertEqual(a, b)
# 核实 a != b
assertNotEqual(a, b)
# 核实 x 为 True
assertTrue(x)
# 核实 x 为 False
assertFalse(x)
# 核实 item 在 list 中
assertIn(item, list)
# 核实 item 不在 list 中
assertNotIn(item, list)
```





## Python 常用函数



#### 1. id()

```Python
"""
返回变量在内存中的地址
id(obj, /)
Return the identity of an object.

This is guaranteed to be unique among simultaneously existing objects.
(CPython uses the object's memory address.)
"""
# 示例：
i = 10
print(id(i))
```



#### 2. bin()

```Python
"""
返回转换为二进制后的值
bin(number, /)
	Return the binary representation of an integer.

	>>> bin(2796202)
	'0b1010101010101010101010'
"""
# 示例：
i = 10
print(bin(i))
```



#### 3. oct()

```Python
"""
返回转换为八进制后的值
oct(number, /)
	Return the octal representation of an integer.

    >>> oct(342391)
    '0o1234567'
"""
# 示例：
i = 10
print(oct(i))
```



#### 4. hex()

```Python
"""
返回转换为十六进制后的值
hex(number, /)
    Return the hexadecimal representation of an integer.
    
    >>> hex(12648430)
    '0xc0ffee'
"""
# 示例：
i = 10
print(hex(i))
```



#### 5. ast.literal_eval()

```Python
"""
将字符串转换成元组
literal_eval(node_or_string)
    Safely evaluate an expression node or a string containing a Python
    expression.  The string or node provided may only consist of the following
    Python literal structures: strings, bytes, numbers, tuples, lists, dicts,
    sets, booleans, and None.
"""
# 示例：
import ast
string_test = "11111, 22222, 33333, 44444, 55555"
print(ast.literal_eval(string_test))
```





## IPython 快捷键

#### 1. 帮助和文档

	?		（例：len?）
	help()		（例：help(len)）
	??		（例：len??）



#### 2. 导航快捷键

	Ctrl + a	（将光标移到本行的开始处）
	Ctrl + e	（将光标移到本行尾处）
	Ctrl + b / 左	（将光标回退一个字符）
	Ctrl + f / 右	（将光标前进一个字符）



#### 3. 文本输入快捷键

	Backspace	（删除前一个字符）
	Ctrl + d	（删除后一个字符）
	Ctrl + k	（从光标开始剪切至行的末尾）
	Ctrl + u	（从行的开关剪切至光标）
	Ctrl + y	（yank 即粘贴之前剪切的文本）
	Ctrl + t	（transpose 即交换前两个字符）



#### 4. 命令历史快捷键

	Ctrl + p / 上	（获取前一个历史命令）
	Ctrl + n / 下	（获取后一个历史命令）
	Ctrl + r	（对历史命令的反向搜索）



#### 5. 其他快捷键

	Ctrl + l	（清除终端屏幕的内容）
	Ctrl + c	（中断当前的 Python 命令）
	Ctrl + d	（退出 Python 会话）



#### 6. 粘贴代码块

	%paste		（同时输入并执行该代码）
	%cpaste		（打开一个交互式多行输入提示）



#### 7. 执行外部代码

	%run		（重用文件中的所有函数）



#### 8. 计算代码运行时间

	%timeit		（自动计算接下来一行 Python 语句的执行时间）
	%%timeit	（处理多行输入）



#### 9. 魔法函数的帮助

	?		（例：%timeit?）
	%magic		（获得魔法函数的通用描述以及一些示例）
	%lsmagic	（获取所有可用魔法函数的列表）



#### 10. 输入和输出历史

	print()		（例：print(__)）
	Out[x]		（例：Out(2)）
	_x		（例：_2）
	;		（例：语句;）
	%history	（例：%history -n 1-4）



#### 11. Shell 命令

	！		（例：!ls）
	%		（例：%cd）
	%automagic	（例：%automagic on）



#### 12. 错误和调试

	%xmade		（控制异常[ Plain | Context | Verbose ]）
	%debug		（up、down、print(x)、quit）
	%pdb on		（自动启动调试器）
	# 部分调试命令
	list		（显示文件的当前路径）
	h(elp)		（显示命令列表，或查找特定命令的帮助信息）
	q(uit)		（退出调试器和程序）
	c(ontinue)	（退出调试器，继续运行程序）
	n(ext)		（跳出程序到下一步）
	<enter>		（重复前一个命令）
	p(rint)		（打印变量）
	s(tep)		（步入子进程）
	r(eturn)	（从子进程跳出）



#### 13. 代码的分析和计时

	%time		（对单个语句的执行时间进行计时）
	%timeit		（对单个语句的重复执行进行计时，以获得更高的准确度）
	%%timeit	（单元魔法）	
	%prun		（利用分析器运行代码）
	
	%lprun		（利用逐行分析器运行代码）
	>> pip install line_profiler
	>> %load_ext line_profiler
	>> %lprun -f ...
	
	%memit		（测量单个语句的内存使用）
	%mprun		（通过逐行的内存分析器运行代码）
	>> pip install memory_profiler
	>> %load_ext memory_profiler
	>> %memit ...
	>> %mprun -f ...



#### 14. 读写文件

```
%%file		(例：%%file ...)
```

