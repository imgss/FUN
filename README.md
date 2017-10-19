# FUN

> a blog base on vuejs

## target

spa blog，hash router(不怕~F5~)

## how it works

>　`仓库A` == md(axios) ==> `FUN`== (md) markdown-it (html) ==> html展示

1. 在`仓库A`中存放一个索引json,描述了仓库中md博客的信息，还有一堆`md`文件，是文章文件. 将文章仓库https://github.com/imgss/mdblog

2. FUN通过获取index.json得到`md文件的信息`，当点击界面上的文章简介时，请求md文件，转换成html并展示出来

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

9. 实现转载功能

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


