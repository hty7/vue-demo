# to_github

> A Vue.js project demo

# 前言

项目旨在构造一个合理通用的VUE项目文件架构

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8060
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```


## 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目





## 项目布局

```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── dist                                        // 打包项目文件
├── mock.data                                   // NEI模拟接口
├── src                                         // 源码目录
│   ├── components                              // 组件
│   ├── config                                  // 基本配置
│   ├── directives                              // 自定义指令
│   ├── filters                                 // 过滤器
│   ├── images                                  // 公共图片
│   ├── plugins                                 // 自定义插件
│   ├── router                                  // 路由配置
│   ├── service                                 // 数据交互API
│   ├── store                                   // vuex的状态管理
│   ├── style                                   // 公共样式文件
│   ├── utils                                   // 公共函数/变量
│   └── view                                    // vue模块
│   ├── App.vue                                 // 页面入口文件
│   └── main.js                                 // 程序入口文件，加载各种公共组件
├── static                                      // 静态文件
├── index.html                                  // 入口html文件
.
