module.exports = {
  head: [[
    // 这里href需要写死32x32的格式，不然部署之后找不到图标
    'link', { rel: 'icon', href: '/images/favicon/favicon-32x32.png' }
  ]],
  title: 'JustStudy',
  description: 'Just Study',
  port: 8080,
  base:'/vuepress-just-study/',// 为了gitee部署方便，这里需要写成gitee项目的根路径，即/vuepress-just-study/
  // publicPath:'/vuepress-just-study/',
  // assetsPublicPath: '/',
  themeConfig: {
    logo: '/images/logo.png',
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'JAVA',
        items: [
          { text: '基础', link: '/java/base/' },
          { text: '集合', link: '/java/collections/' },
          { text: 'IO', link: '/java/io/' },
          { text: '并发编程', link: '/java/concurrent/' },
          { text: '网络编程', link: '/java/net/' }
        ]
      },
      {
        text: '数据库',
        items: [
          { text: 'mysql', link: '/databases/mysql/' },
          { text: 'redis', link: '/databases/redis/' },
          { text: 'mongodb', link: '/databases/mongodb/' },
          { text: 'elasticsearch', link: '/databases/elasticsearch/' }
        ]
      },
      {
        text: 'Servlet规范',
        items: [
          { text: '应用', link: '/servlet-specification/application/' },
          { text: '服务', link: '/servlet-specification/server/' }
        ]
      },
      {
        text: '框架',
        items: [
          { text: 'Spring', link: '/framework/spring/' }
        ]
      },
      {
        text: '微服务',
        items: [
          { text: '注册中心', link: '/microservices/registration-center/' },
          { text: '负载均衡', link: '/microservices/load-balance/' },
          { text: '网关', link: '/microservices/gateway/' },
          { text: '限流熔断', link: '/microservices/current-limiting-and-fusing/' },
          { text: '链路跟踪', link: '/microservices/link-tracking/' },
          { text: '配置中心', link: '/microservices/configuration-center/' },
          { text: '消息队列', link: '/microservices/message-quque/' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: '数据结构', link: '/others/datastructure/' },
          { text: '算法', link: '/others/algorithm/' },
          { text: '操作系统', link: '/others/operating_system/' },
          { text: '设计模式', link: '/others/design_pattern/' }
        ]
      },
      {
        text: '书籍推荐',
        link: '/books/',
        items: [
          { text: 'C.O.D.E编码', link: '/books/code/' }
        ]
      },
      {
        text: '关于我',
        link: '/about-me/'
      },
      {
        text: '关于本项目',
        items: [
          { text: '立项初衷', link: '/program/introduction/' },
          { text: 'NodeJs安装', link: '/program/nodejsinstall/' },
          { text: '项目创建', link: '/program/create/' },
          { text: '项目部署', link: '/program/arrange/' }
        ]
      }
    ]
  }
}