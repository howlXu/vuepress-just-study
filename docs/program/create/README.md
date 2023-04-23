# 项目创建

## VuePress项目搭建

### VuePress介绍
VuePress 由两部分组成：一个以 Vue 驱动的主题系统的简约静态网站生成工具，和一个为编写技术文档而优化的默认主题。它是为了支持 Vue 子项目的文档需求而创建的。<br/>
由 VuePress 生成的每个页面，都具有相应的预渲染静态 HTML，它们能提供出色的加载性能，并且对 SEO 友好。然而，页面加载之后，Vue 就会将这些静态内容，接管为完整的单页面应用程序(SPA)。当用户在浏览站点时，可以按需加载其他页面。<br/>

### VuePress如何工作
VuePress 网站实际上是由 Vue, Vue Router 和 webpack 驱动的单页面应用程序。如果你以前使用过 Vue，那么在编写或开发自定义主题时（甚至可以使用 Vue DevTools 来调试你的自定义主题！），你会融入到熟悉的开发体验中！<br/>
在构建过程中，我们会创建应用程序的服务器渲染版本，并且实际上是通过访问每个路由，来渲染相应的 HTML。这种方式受到 Nuxt 的 nuxt generate 命令以及 Gatsby 等其他项目的启发。<br/>
每个 markdown 文件都使用 markdown-it 编译为 HTML，然后作为 Vue 组件的模板进行处理。这允许你直接在 markdown 文件中使用 Vue，在需要嵌入动态内容时，这种使用方式非常有用。<br/>


### VuePress项目创建过程

#### 1.使用npm包管理器进行初始化
在项目路径下打开cmd控制台，输入**npm init**指令进行初始化 <br/>
![01_npm初始化项目](/vuepress-just-study/images/program/create/01.png)<br/>
查看项目，可以发现内部多了一个package.json文件，至此，一个npm项目就创建完成了

#### 2.将VuePress安装为本地依赖
使用**npm install -D vuepree** 指令将VuePress安装为本地依赖
![02_安装VuePress依赖](/vuepress-just-study/images/program/create/02.png)<br/>
安装完毕后，项目里会添加node_modules模块以及package-lock.json文件

#### 3.创建你的第一篇文档
在项目里创建一个文件夹，命名为docs，在文件夹中创建一个markdown文件，命名为README.md，同时在文件里写入“# VuePress”
![03_创建第一篇文档](/vuepress-just-study/images/program/create/03.png)<br/>

#### 4.在package.json中添加启动以及部署脚本
将如下的启动脚本片段添加到package.json中
``` js
 "scripts": {
    "docs:dev":"vuepress dev docs",
    "docs:build":"vuepress build docs"
  }
```

#### 5.本地启动项目
通过npm run docs:dev指令启动项目，VuePress会在http://localhost:8080 启动一个热部署的开发服务器，在浏览器中输入http://localhost:8080访问项目，能看到“VuePress”即代表VuePress项目创建完成<br/>
![04_启动项目](/vuepress-just-study/images/program/create/04.png)<br/>

## VuePress主题设置

### 前置工作
* 参照VuePress的官方指导文档设置主题，在这里我们在docs目录下添加.vuepress文件夹，.vuepress/public文件夹，.vuepress/public/assets文件夹，assets文件夹下添加hero.png图片<br/>
![05_添加主题图片](/vuepress-just-study/images/program/create/05.png)<br/>

* 在docs目录下添加program文件夹，program/introduction文件夹，以及program/introduction/README.md文件
![06_项目介绍](/vuepress-just-study/images/program/create/06.png)<br/>

### 设置主题
* 参照VuePress官方文档，将根路径下README.md (docs文件夹) 修改为如下内容
``` yaml
---
home: true
heroImage: /hero.png
heroText: Just Study
tagline: 规范制定、技巧归纳、经验分享的聚集地
actionText: 开始了解 →
actionLink: /program/introduction/
features:
- title: 开发规范
  details: 制定本项目的开发规范。
- title: 经验技巧
  details: 总结前端、后端开发经验与技巧
- title: 协作共享
  details: 分享交流，协作共享
footer: ISC Licensed | Copyright © 2022-present Howl Xu
---
```

### 查看主题
使用**npm install docs:dev**指令启动项目，即可看到到对应的主题
![07_查看主题](/vuepress-just-study/images/program/create/07.png)<br/>

## 其他VuePress设置
### 标题设置
在项目的.vuepress文件夹下新建config.js文件，将如下js脚本添加到config.js后，重启应用，即可添加项目标题
``` js
module.exports = {
  title:'JustStudy'
}
```
![08_项目标题](/vuepress-just-study/images/program/create/08.png)<br/>

### 启动端口设置
将port:8099添加到config.js中即可修改项目的启动端口(这里一般不修改，默认使用8080端口即可，而且这个属性一般不会不生效，这里就不展示了)
``` js
module.exports = {
  title:'JustStudy',
  port:8099
}
```

### 侧边栏设置
侧边栏的设置我们使用VuePress自动生成功能生成即可，自动生成侧边栏，我们只需要在themeConfig下添加sidebar:'auto'即可
``` js
module.exports = {
  title:'JustStudy',
  port:8080,
  themeConfig: {
  sidebar:'auto'
  }
}
```
![09_侧边栏生成](/vuepress-just-study/images/program/create/09.png)<br/>

### 导航栏设置
导航栏的需要在themeConfig下添加nav导航设置，代码如下
``` js
module.exports = {
  title:'JustStudy',
  description:'Just Study',
  port:8080,
  //publicPath:'/',
  assetsPublicPath:'/',
  themeConfig: {
  sidebar:'auto',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '关于本项目',
        link:'/program/introduction',
        items: [
          { text: '立项初衷', link: '/program/introduction/' },
          { text: 'NodeJs安装', link: '/program/nodejsinstall/' },
          { text: 'Nginx安装', link: '/program/nginxinstall/' },
          { text: '项目创建', link: '/program/create/' },
          { text: '项目部署', link: '/program/arrange/' }
        ]
      }
    ]
  }
}
```
![10_导航栏生成](/vuepress-just-study/images/program/create/10.png)<br/>

### 减少内容区留白
现在的VuePress项目里内容区留白过多，需要修改样式降低内容区留白（图中红框部分为内容留白）
![11_内容区留白](/vuepress-just-study/images/program/create/11.png)<br/>

在项目的.vuepress目录下增加styles文件夹以及styles/palette.styl文件，填充下面的css文件到样式文件中，重启应用即可生效
``` css
.page .theme-default-content:not(.custom) {
  max-width:none;
}
```
![12_内容区留白变小](/vuepress-just-study/images/program/create/12.png)<br/>

## 参考资料
[VuePress官网](https://vuepress.vuejs.org/zh/)