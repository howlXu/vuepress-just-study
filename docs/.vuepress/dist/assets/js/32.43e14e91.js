(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{297:function(t,s,a){"use strict";a.r(s);var r=a(13),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"项目创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目创建"}},[t._v("#")]),t._v(" 项目创建")]),t._v(" "),s("h2",{attrs:{id:"vuepress项目搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress项目搭建"}},[t._v("#")]),t._v(" VuePress项目搭建")]),t._v(" "),s("h3",{attrs:{id:"vuepress介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress介绍"}},[t._v("#")]),t._v(" VuePress介绍")]),t._v(" "),s("p",[t._v("VuePress 由两部分组成：一个以 Vue 驱动的主题系统的简约静态网站生成工具，和一个为编写技术文档而优化的默认主题。它是为了支持 Vue 子项目的文档需求而创建的。"),s("br"),t._v("\n由 VuePress 生成的每个页面，都具有相应的预渲染静态 HTML，它们能提供出色的加载性能，并且对 SEO 友好。然而，页面加载之后，Vue 就会将这些静态内容，接管为完整的单页面应用程序(SPA)。当用户在浏览站点时，可以按需加载其他页面。"),s("br")]),t._v(" "),s("h3",{attrs:{id:"vuepress如何工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress如何工作"}},[t._v("#")]),t._v(" VuePress如何工作")]),t._v(" "),s("p",[t._v("VuePress 网站实际上是由 Vue, Vue Router 和 webpack 驱动的单页面应用程序。如果你以前使用过 Vue，那么在编写或开发自定义主题时（甚至可以使用 Vue DevTools 来调试你的自定义主题！），你会融入到熟悉的开发体验中！"),s("br"),t._v("\n在构建过程中，我们会创建应用程序的服务器渲染版本，并且实际上是通过访问每个路由，来渲染相应的 HTML。这种方式受到 Nuxt 的 nuxt generate 命令以及 Gatsby 等其他项目的启发。"),s("br"),t._v("\n每个 markdown 文件都使用 markdown-it 编译为 HTML，然后作为 Vue 组件的模板进行处理。这允许你直接在 markdown 文件中使用 Vue，在需要嵌入动态内容时，这种使用方式非常有用。"),s("br")]),t._v(" "),s("h3",{attrs:{id:"vuepress项目创建过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress项目创建过程"}},[t._v("#")]),t._v(" VuePress项目创建过程")]),t._v(" "),s("h4",{attrs:{id:"_1-使用npm包管理器进行初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用npm包管理器进行初始化"}},[t._v("#")]),t._v(" 1.使用npm包管理器进行初始化")]),t._v(" "),s("p",[t._v("在项目路径下打开cmd控制台，输入"),s("strong",[t._v("npm init")]),t._v("指令进行初始化 "),s("br"),t._v(" "),s("img",{attrs:{src:"/vuepress-just-study/images/program/create/01.png",alt:"01_npm初始化项目"}}),s("br"),t._v("\n查看项目，可以发现内部多了一个package.json文件，至此，一个npm项目就创建完成了")]),t._v(" "),s("h4",{attrs:{id:"_2-将vuepress安装为本地依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-将vuepress安装为本地依赖"}},[t._v("#")]),t._v(" 2.将VuePress安装为本地依赖")]),t._v(" "),s("p",[t._v("使用"),s("strong",[t._v("npm install -D vuepree")]),t._v(" 指令将VuePress安装为本地依赖\n"),s("img",{attrs:{src:"/vuepress-just-study/images/program/create/02.png",alt:"02_安装VuePress依赖"}}),s("br"),t._v("\n安装完毕后，项目里会添加node_modules模块以及package-lock.json文件")]),t._v(" "),s("h4",{attrs:{id:"_3-创建你的第一篇文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建你的第一篇文档"}},[t._v("#")]),t._v(" 3.创建你的第一篇文档")]),t._v(" "),s("p",[t._v("在项目里创建一个文件夹，命名为docs，在文件夹中创建一个markdown文件，命名为README.md，同时在文件里写入“# VuePress”\n"),s("img",{attrs:{src:"/vuepress-just-study/images/program/create/03.png",alt:"03_创建第一篇文档"}}),s("br")]),t._v(" "),s("h4",{attrs:{id:"_4-在package-json中添加启动以及部署脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-在package-json中添加启动以及部署脚本"}},[t._v("#")]),t._v(" 4.在package.json中添加启动以及部署脚本")]),t._v(" "),s("p",[t._v("将如下的启动脚本片段添加到package.json中")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"docs:dev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"docs:build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_5-本地启动项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-本地启动项目"}},[t._v("#")]),t._v(" 5.本地启动项目")]),t._v(" "),s("p",[t._v("通过npm run docs:dev指令启动项目，VuePress会在http://localhost:8080 启动一个热部署的开发服务器，在浏览器中输入http://localhost:8080访问项目，能看到“VuePress”即代表VuePress项目创建完成"),s("br"),t._v(" "),s("img",{attrs:{src:"/vuepress-just-study/images/program/create/04.png",alt:"04_启动项目"}}),s("br")]),t._v(" "),s("h2",{attrs:{id:"vuepress主题设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress主题设置"}},[t._v("#")]),t._v(" VuePress主题设置")]),t._v(" "),s("h3",{attrs:{id:"前置工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前置工作"}},[t._v("#")]),t._v(" 前置工作")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("参照VuePress的官方指导文档设置主题，在这里我们在docs目录下添加.vuepress文件夹，.vuepress/public文件夹，.vuepress/public/assets文件夹，assets文件夹下添加hero.png图片"),s("br"),t._v(" "),s("img",{attrs:{src:"/vuepress-just-study/images/program/create/05.png",alt:"05_添加主题图片"}}),s("br")])]),t._v(" "),s("li",[s("p",[t._v("在docs目录下添加program文件夹，program/introduction文件夹，以及program/introduction/README.md文件\n"),s("img",{attrs:{src:"/vuepress-just-study/images/program/create/06.png",alt:"06_项目介绍"}}),s("br")])])]),t._v(" "),s("h3",{attrs:{id:"设置主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置主题"}},[t._v("#")]),t._v(" 设置主题")]),t._v(" "),s("ul",[s("li",[t._v("参照VuePress官方文档，将根路径下README.md (docs文件夹) 修改为如下内容")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("home")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("heroImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /hero.png\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("heroText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Just Study\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tagline")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 规范制定、技巧归纳、经验分享的聚集地\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("actionText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 开始了解 →\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("actionLink")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /program/introduction/\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("features")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 开发规范\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("details")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 制定本项目的开发规范。\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 经验技巧\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("details")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 总结前端、后端开发经验与技巧\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 协作共享\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("details")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 分享交流，协作共享\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ISC Licensed "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" Copyright © 2022"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("present Howl Xu\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),s("h3",{attrs:{id:"查看主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看主题"}},[t._v("#")]),t._v(" 查看主题")]),t._v(" "),s("p",[t._v("使用"),s("strong",[t._v("npm install docs:dev")]),t._v("指令启动项目，即可看到到对应的主题\n"),s("img",{attrs:{src:"/vuepress-just-study/images/program/create/07.png",alt:"07_查看主题"}}),s("br")]),t._v(" "),s("h2",{attrs:{id:"其他vuepress设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他vuepress设置"}},[t._v("#")]),t._v(" 其他VuePress设置")]),t._v(" "),s("h3",{attrs:{id:"标题设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标题设置"}},[t._v("#")]),t._v(" 标题设置")]),t._v(" "),s("p",[t._v("在项目的.vuepress文件夹下新建config.js文件，将如下js脚本添加到config.js后，重启应用，即可添加项目标题")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'JustStudy'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"/vuepress-just-study/images/program/create/08.png",alt:"08_项目标题"}}),s("br")]),t._v(" "),s("h3",{attrs:{id:"启动端口设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动端口设置"}},[t._v("#")]),t._v(" 启动端口设置")]),t._v(" "),s("p",[t._v("将port:8099添加到config.js中即可修改项目的启动端口(这里一般不修改，默认使用8080端口即可，而且这个属性一般不会不生效，这里就不展示了)")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'JustStudy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8099")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"侧边栏设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#侧边栏设置"}},[t._v("#")]),t._v(" 侧边栏设置")]),t._v(" "),s("p",[t._v("侧边栏的设置我们使用VuePress自动生成功能生成即可，自动生成侧边栏，我们只需要在themeConfig下添加sidebar:'auto'即可")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'JustStudy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sidebar")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"/vuepress-just-study/images/program/create/09.png",alt:"09_侧边栏生成"}}),s("br")]),t._v(" "),s("h3",{attrs:{id:"导航栏设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导航栏设置"}},[t._v("#")]),t._v(" 导航栏设置")]),t._v(" "),s("p",[t._v("导航栏的需要在themeConfig下添加nav导航设置，代码如下")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'JustStudy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Just Study'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//publicPath:'/',")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("assetsPublicPath")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sidebar")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("nav")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Home'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'关于本项目'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/program/introduction'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("items")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'立项初衷'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/program/introduction/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NodeJs安装'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/program/nodejsinstall/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Nginx安装'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/program/nginxinstall/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'项目创建'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/program/create/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'项目部署'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/program/arrange/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"/vuepress-just-study/images/program/create/10.png",alt:"10_导航栏生成"}}),s("br")]),t._v(" "),s("h3",{attrs:{id:"减少内容区留白"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少内容区留白"}},[t._v("#")]),t._v(" 减少内容区留白")]),t._v(" "),s("p",[t._v("现在的VuePress项目里内容区留白过多，需要修改样式降低内容区留白（图中红框部分为内容留白）\n"),s("img",{attrs:{src:"/vuepress-just-study/images/program/create/11.png",alt:"11_内容区留白"}}),s("br")]),t._v(" "),s("p",[t._v("在项目的.vuepress目录下增加styles文件夹以及styles/palette.styl文件，填充下面的css文件到样式文件中，重启应用即可生效")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".page .theme-default-content:not(.custom)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"/vuepress-just-study/images/program/create/12.png",alt:"12_内容区留白变小"}}),s("br")]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress官网"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);