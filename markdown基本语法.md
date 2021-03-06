# Markdown基础语法

<!-- TOC -->

- [标题](#%E6%A0%87%E9%A2%98)
- [字体效果](#%E5%AD%97%E4%BD%93%E6%95%88%E6%9E%9C)
- [引用](#%E5%BC%95%E7%94%A8)
- [分割线](#%E5%88%86%E5%89%B2%E7%BA%BF)
- [图片](#%E5%9B%BE%E7%89%87)
- [超链接](#%E8%B6%85%E9%93%BE%E6%8E%A5)
- [列表](#%E5%88%97%E8%A1%A8)
- [表格](#%E8%A1%A8%E6%A0%BC)
- [代码](#%E4%BB%A3%E7%A0%81)
- [流程图](#%E6%B5%81%E7%A8%8B%E5%9B%BE)

<!-- /TOC -->

## 标题

> # 一级标题
> ## 二级标题
> ### 三级标题
> #### 四级标题
> ##### 五级标题
> ###### 六级标题

## 字体效果

> 普通
> 
> **加粗**
> 
> *倾斜*
> 
> ***斜体加粗***
> 
> ~~删除线~~

## 引用

> 引用内容
>> 嵌套引用
>>>>>>可无限嵌套

## 分割线

> ---
> ------
> ***
> ******

## 图片

> ![图片alt](图片地址 "图片title")
> 
> ![接头霸王](./seam-head.jpg "接头霸王")
> 
> 图床了解一下，[图床指引](https://www.jianshu.com/p/ea1eb11db63f)

## 超链接

> [超链接名](超链接地址 "超链接title")
> 
> [百度](https://baidu.com "百度一下你也不知道")

## 列表

- 无序列表
+ 无序列表
* 无序列表
---
1. 有序列表
2. 有序列表
3. 有序列表
---
- 一级列表
  + 二级列表
    * 三级列表
* 一级列表
----
1. 一级列表
   1. 二级列表
      1. 三级列表
   2. 二级列表
---

## 表格

表头 | 表头 | 表头
:--|:--:|--:
内容 | 内容 | 内容
内容 | 内容 | 内容

## 代码

`单行代码`

```
代码块
```

```javascript
console.log("Hello World!")
```

## 流程图

```flow
st=>start: start
op=>opration: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
&```