# fun

> a blog base on vuejs

## target

spa blog

## how it works

>　`仓库A` == md(axios) ==> `FUN`== (md) markdown-it (html) ==> html展示

1. 在`仓库A`中存放一个索引json,描述了仓库中md博客的信息，还有一堆`md`文件，是文章文件。 

2. FUN通过获取index.json得到`md文件的信息`，当点击界面上的文章简介时，请求md文件，转换成html并展示出来

## ToDo

1. 要有toc
2. 要有tags
3. 要有后台生成index.json的工具

