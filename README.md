# FUN

> a blog base on vuejs

## target

spa blog

## how it works

>　`仓库A` == md(axios) ==> `FUN`== (md) markdown-it (html) ==> html展示

1. 在`仓库A`中存放一个索引json,描述了仓库中md博客的信息，还有一堆`md`文件，是文章文件. 将文章仓库https://github.com/imgss/mdblog

2. FUN通过获取index.json得到`md文件的信息`，当点击界面上的文章简介时，请求md文件，转换成html并展示出来


## 已实现

1. 博客文章列表

2. 标签云/文章标签

3. 回到顶部

4. 文章目录(TOC)

5. 代码高亮

## ToDo

1. 要有toc :white_check_mark:

2. 要有tags :white_check_mark:

3. 要有后台生成index.json的工具 :white_check_mark:

4. 要有标签云 :white_check_mark:

5. 要有works展示页面

6. about页面 ✔  

7. 美化UI,过渡等

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


