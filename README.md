# FUN

> a blog

## how it works

>　博客从另一个放md文件的仓库中请求数据，借助marked渲染成html并显示

1. 在`仓库A`中存放一个索引json,由[一个js文件](https://github.com/imgss/FUN_)生成，json描述了仓库中md博客的信息，还有一堆`md`文件，是文章文件. 文章仓库https://github.com/imgss/mdblog

2. FUN首先获取index.json,然后通过获取index.json得到文章的url,描述等信息，当点击界面上的文章简介时，axios向github请求对应的md文件，经过marked转换成html并展示在页面上

## 配置
  在`src/config.json`中配置你自己的md文件根目录，获得自己的

## 已实现

1. 博客文章列表

2. 标签云/文章标签

3. 回到顶部

4. 文章目录(TOC)

5. 代码高亮

6. 有toc :white_check_mark:

7. 有tags :white_check_mark:

8. 有后台生成index.json的工具 :white_check_mark:

9. 有标签云 :white_check_mark:

1. 简历 :bookmark_tabs:

## ToDo


5. 要有works展示页面

6. about页面 ✔  

7. 美化UI,过渡等

8. 加入分享？？

9. 实现转载功能（未实现）
  如： 转载`https://raw.githubusercontent.com/AllThingsSmitty/css-protips/master/translations/zh-CN/README.md`

## 截图

* 切换上一篇，下一篇
![上一篇，下一篇](https://github.com/imgss/FUN/blob/master/img/blog.gif?raw=true)

* 从文章页到索引页
![文章页到索引页](https://github.com/imgss/FUN/blob/master/img/blog2.gif?raw=true)

* 各标签下的文章

![各标签下的文章](https://github.com/imgss/FUN/blob/master/img/blog4.gif?raw=true)

* [更多](https://imgss.github.io)

## 运行

```bash
git clone https://github.com/imgss/FUN.git

npm install

npm run dev
```

## 部署
```
//配置

npm run build
```
## license
MIT


