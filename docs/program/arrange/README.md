# 项目部署
VuePress基于Vue实现，因此，部署方式也和Vue一致，基本都是通过将Vue项目转换成静态资源(html,css,js,图片等前端静态资源)，将前端资源部署到web服务器来部署

## 部署到GitEE
考虑到这只是一个个人项目，且项目基于静态资源构成，因此，我们基于GitEE部署，通过GitEE提供的域名以及CDN解析功能来提供给其他人访问即可

### 项目打包
VuePress的项目打包比较简单，只需要执行**npm run docs:build**指令即可完成项目的打包，打包完成后会在项目里生成dist目录以及相关的静态资源文件<br/>
![01_vuepress项目打包](/vuepress-just-study/images/program/arrange/01.png)<br/>
![02_部署包路径](/vuepress-just-study/images/program/arrange/02.png)<br/>

### 部署到GitEE环境
* 1.首先将生成的待发布资源(/docs/.vuepress/dist)提交到自己的远程仓<br/>
![03_提交待发布资源到远程仓](/vuepress-just-study/images/program/arrange/03.png)<br/>

* 2.进入GitEE服务发布页面<br/>
![04_GitEE发布页面](/vuepress-just-study/images/program/arrange/04.png)<br/>

* 3.部署应用<br/>
选择部署分支以及部署目录后点击启动按钮部署应用<br/>
![05_部署应用](/vuepress-just-study/images/program/arrange/05.png)<br/>

* 4.部署成功<br/>
应用部署完成后，会生成对应的访问路径，点击即可访问<br/>
![06_部署成功](/vuepress-just-study/images/program/arrange/06.png)<br/>

* 5.访问应用<br/>
如果照教程操作，这里部署完成之后直接访问应用，会出现一堆黑框，我这里已经做了很多处理去解决这个问题，参考下面的踩坑记录即可<br/>
![07_访问应用](/vuepress-just-study/images/program/arrange/07.png)<br/>

### 踩坑记录

* 打包后无法加载静态资源 <br/>
不做任何操作的情况下直接部署应用到GitEE,访问应用的时候会出现黑框，如下图（F12查看报错发现是提示找不到对应的静态资源）<br/>
![08_访问应用](/vuepress-just-study/images/program/arrange/08.png)<br/>

参照baidu 关键词:"vuepress 找不到静态资源"，大部分答案都是修改config.js,增加base属性，修改为"./"，考虑到实际部署是在linux等环境操作，我这里直接修改成了项目路径'/vuepress-just-study/'<br/>
![09_base属性修改](/vuepress-just-study/images/program/arrange/09.png)<br/>

修改完成之后，加载静态资源(css，js，不包括图片)的时候就不再报错了，但是直接访问应用又会报'404 not found 页面'
![10_404 not found](/vuepress-just-study/images/program/arrange/10.png)<br/>

* 打包后页面报404<br/>
参照baidu 关键词:"vuepress 404 not found",找到的结果清一色的都是将node_modules/@vuepress/core/lib/client/app.js第69行注释掉，即从history模式访问调整为hash模式访问(亲测不可用，解决一个问题的同时又会引入更多的问题，在基于vuepress1.9.7版本下在gitee部署，会出现页面无法刷新的严重bug),尝试之后发现页面可以访问，以为自己不是完成了，实际测试发现又引入了新问题
![11_调整history模式为hash模式](/vuepress-just-study/images/program/arrange/11.png)<br/>
![12_页面可以访问](/vuepress-just-study/images/program/arrange/12.png)<br/>

### 出坑思路<br/>

#### 放弃修改history模式 <br/>
将history模式修改为hash模式的方案根本不可行，这个方案直接导致的结果是hash模式下运行项目，页面无法刷新，且锚点无法跳转，页面上input搜索框图标不能正常显示,因此，放弃修改history模式为hash模式,总之一句话，这个方案至少在我这里不可行<br/>

#### 参照官网部署方案 <br/>
既然二手解决方案(baidu)不可行，我们直接去vuepress官网找部署方案 <br/>
在官网搜索部署，选择GitHub(官网没有推荐GitEE的部署，不过GitHub和GitEE没有本质区别)
![13_搜索部署](/vuepress-just-study/images/program/arrange/13.png)<br/>
可以看到官网有指导在GitHub环境下部署，base属性如何设置，所以在我的项目中，它的值应该是/vuepress-just-study/，设置完成后重新打包部署即可<br/>
![14_获取解决方案](/vuepress-just-study/images/program/arrange/14.png)<br/>

#### 图片无法显示问题修复 <br/>
参照官网部署方案部署完成后，应用可以正常访问,hash模式的bug也都不存在了，不过图片资源还是无法加载，报错是在/vuepress-just-study/assets路径下找不到图片，这里尝试把dist目录下的assets放一份到项目根路径，发现可以正常加载图片，至此问题基本解决。<br/>

#### 部署流程 <br/>
我自己的环境本地运行没有问题，但是打dist包之后，需要对dist包进行调整,需要将dist/vuepress-just-study目录下的资源调整到dist目录，同时删除这里的vuepress-just-study文件夹，算是遗留的一个小坑~
![15_部署路径调整](/vuepress-just-study/images/program/arrange/15.png)<br/>

## 部署到Nginx
使用**npm run docs:build** 指令生成静态资源，将静态资源放置到Nginx上，启动Nginx即可，这里不详细展开