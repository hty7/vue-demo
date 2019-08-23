# to_github

[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A Vue.js project demo

## 前言

项目旨在构造一个合理通用的VUE项目文件架构，能快速搭建生成业务模块

## 说明

>  🚧  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^ 

>  👉 开发环境 window10 Chrome 64  nodejs 9.2.0 

>  ⚠️ [node 下载安装配置](https://nodejs.org/en/download/)

>   或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>   该分支为vue-cli2版本搭建，部分同学反应无法初始化，由于无更多时间进行维护，现添加vue-cli3的分支https://github.com/hty7/vue-demo/tree/v2.x


## 部分页面效果图

<p align="center"><img align="center" src="https://github.com/hty7/vue-demo/blob/master/screenshots/home.png"/></p>

<p align="center"><img align="center" src="https://github.com/hty7/vue-demo/blob/master/screenshots/map.png"/></p>

<p align="center"><img align="center" src="https://github.com/hty7/vue-demo/blob/master/screenshots/mobile-1.png"/></p>

## 技术栈

vue2 + vuex + vuetify + vue-router + webpack + ES6/7 + axios + sass


## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8060
$ npm run dev

# mock serve
$ npm run nei-run

# build for production with minification
$ npm run build

# build for production and view the bundle analyzer report
$ npm run build --report

# run unit tests
$ npm run unit

# run e2e tests
$ npm run e2e

# run all tests
$ npm test
```


## 项目布局

```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── dist                                        // 打包项目文件
├── mock.data                                   // NEI模拟接口
├── src                                         // 源码目录
│   ├── components                              // 自定义组件
│   ├── config                                  // 基本配置
│   ├── directives                              // 自定义指令
│   ├── filters                                 // 自定义过滤器
│   ├── lang                                    // I18n静态资源
│   ├── mixin                                   // 混入
│   ├── plugins                                 // 自定义插件
│   ├── router                                  // 路由配置
│   ├── service                                 // 数据交互API
│   ├── store                                   // vuex的状态管理
│   ├── style                                   // 公共样式文件
│   ├── utils                                   // 公共函数/变量
│   ├── view                                    // 业务模块
│   ├── App.vue                                 // 页面入口文件
│   └── main.js                                 // 程序入口文件，加载各种公共组件
├── static                                      // 静态文件
├── index.html                                  // 入口html文件
.
```

## 技术文档

> [vue2](https://cn.vuejs.org/v2/guide/)

> [vuex](https://vuex.vuejs.org/zh-cn/)

> [vuetify](https://vuetifyjs.com/zh-Hans/)

> [vue-router](https://router.vuejs.org/zh-cn/)

> [ES6/7](http://es6.ruanyifeng.com/)

> [axios](https://www.npmjs.com/package/axios)

> [sass](https://www.sass.hk/)

## 技术说明 :fire:

### 📘  components 自定义组件

#### 自定义全局组件

通过抽取业务逻辑相同的模块全局注册，任何新创建的Vue根实例模板可以使用

main.js
```js
    import SectionContent from '@/components/SectionContent'
    Vue.component('section-content', SectionContent)
```
业务组件
     
    <section-content></section-content>

#### 自定义局部组件
如自定义地图组件、可视化组件

[学习更多（vue地图可视化）](https://segmentfault.com/a/1190000014337634)


### directives 自定义指令

官方详细文档：[https://cn.vuejs.org/v2/guide/custom-directive.html](https://cn.vuejs.org/v2/guide/custom-directive.html)

通过directive就可以在Vue上注册指令

#### 注册一个全局自定义指令 `v-focus`
```js
    Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
    })
```

#### 🐦 指令模块化
 [学习更多 v-stealth元素显示隐藏](https://segmentfault.com/a/1190000014370906)

例如：我们的想法是注册一个指令，通过给钩子函数传递参数true 或 false去改变节点的display的值

![](https://github.com/hty7/picture/blob/master/directives.png)

stealth.js

元素隐藏显示指令
```js
    export default {
      // 只调用一次，指令第一次绑定到元素时调用
      bind (el, binding, vnode) {
    	el.style.display = binding.value ? 'block' : 'none'
      },
      // 被绑定元素插入父节点时调用
      inserted (el, binding, vnode) {
    	console.log('inserted')
      },
      // 所在组件的 VNode 更新时调用
      update (el, binding, vnode) {
    	console.log('update')
    	el.style.display = binding.value ? 'block' : 'none'
      },
      // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
      componentUpdated (el, binding, vnode) {
    	console.log('componentUpdated')
      },
      unbind (el, binding, vnode) {
    	console.log('unbind')
      }
    }
```

指令模块化，通过index.js管理自定义指令。添加新指令只需在modules中加入模块，并引入

index.js

    import stealth from './modules/stealth'
    export {stealth}

全局Vue中通过directive绑定全部指令

mian.js
```js
    import * as directives from './directives'
    // 注册指令
    Object.keys(directives).forEach(k => Vue.directive(k, directives[k]))
```

业务组件中，加入v-*(指令名)

    <div v-stealth="true"></div>

### 📦 filters 自定义过滤器

使用自定义的原因是后端获取的数据不一定满足前端文本格式化显示的要求，因此需要对数据进行二次

index.js

// 字符串转化为数值
```js
	export const toNumber = value ={
		if (value) return parseInt(value)
		return ''
	}
```

全局Vue中通过filter注册过滤器

main.js
```js
    import * as filters from './filters'
    Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
```

业务页面中使用双花括号插值和 v-bind 表达式使用
```js
    <!-- 在双花括号中 -->
    {{ message | toNumber }}
    
    <!-- 在 `v-bind` 中 -->
    <div v-bind:id="rawId | toNumber"></div>
```

## 项目优化 🌶️:

项目打包上线后我们会发现部分页面加载过慢，因此项目生产环境进行必要的优化

首先我们先安装`webpack-bundle-analyzer`插件，她可以将打包后的内容束展示为方便交互的直观树状图，有利于我们进行接下来的项目优化分析

启动命令： `npm run build --report`

官方图例
<p align="center"><img align="center" src="https://github.com/hty7/vue-demo/blob/master/screenshots/webpack-bundle-analyzer.gif"/></p>

### 🚦  路由优化

### 📦  打包优化

