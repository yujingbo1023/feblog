(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1235:function(t,a,_){t.exports=_.p+"assets/img/84.85a5812d.png"},1236:function(t,a,_){t.exports=_.p+"assets/img/85.dd25d525.png"},5983:function(t,a,_){"use strict";_.r(a);var s=_(15),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_1-使用-npm-包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-npm-包"}},[t._v("#")]),t._v(" 1, 使用 npm 包")]),t._v(" "),s("h2",{attrs:{id:"_1-1-小程序对-npm-的支持与限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-小程序对-npm-的支持与限制"}},[t._v("#")]),t._v(" 1.1, 小程序对 npm 的支持与限制")]),t._v(" "),s("p",[s("strong",[t._v("目前，小程序中已经支持使用 npm 安装第三方包，从而来提高小程序的开发效率。但是，在小程序中使用npm 包有如下 3 个限制")])]),t._v(" "),s("ul",[s("li",[t._v("不支持依赖于 Node.js 内置库的包")]),t._v(" "),s("li",[t._v("不支持依赖于浏览器内置对象的包")]),t._v(" "),s("li",[t._v("不支持依赖于 C++ 插件的包")])]),t._v(" "),s("p",[s("strong",[t._v("总结：虽然 npm 上的包有千千万，但是能供小程序使用的包却“为数不多”")])]),t._v(" "),s("h2",{attrs:{id:"_1-2-vant-weapp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-vant-weapp"}},[t._v("#")]),t._v(" 1.2, Vant Weapp")]),t._v(" "),s("p",[s("strong",[t._v("Vant Weapp 是有赞前端团队开源的一套小程序 UI 组件库，助力开发者快速搭建小程序应用。它所使用的是MIT 开源许可协议，对商业使用比较友好。")])]),t._v(" "),s("ul",[s("li",[t._v("官方文档地址 https://youzan.github.io/vant-weapp")]),t._v(" "),s("li",[t._v("扫描下方的小程序二维码，体验组件库示例")])]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:_(1235)}}),t._v(" "),s("p",[s("strong",[t._v("在小程序项目中，安装 Vant 组件库主要分为如下 3 步")])]),t._v(" "),s("ul",[s("li",[t._v("通过 npm 安装（建议指定版本为@1.3.3）")]),t._v(" "),s("li",[t._v("构建 npm 包")]),t._v(" "),s("li",[t._v("修改 app.json")]),t._v(" "),s("li",[t._v("参考：https://youzan.github.io/vant-weapp/#/quickstart#an-zhuang")])]),t._v(" "),s("p",[s("strong",[t._v("使用 Vant 组件")])]),t._v(" "),s("ul",[s("li",[t._v("安装完 Vant 组件库之后，可以在 app.json 的 usingComponents 节点中引入需要的组件，即可在 wxml 中直接使用组件")])]),t._v(" "),s("p",[s("strong",[t._v("定制全局主题样式")])]),t._v(" "),s("ul",[s("li",[t._v("Vant Weapp 使用 CSS 变量来实现定制主题")]),t._v(" "),s("li",[t._v("在 app.wxss 中，写入 CSS 变量，即可对全局生效")]),t._v(" "),s("li",[t._v("参考：https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties")]),t._v(" "),s("li",[t._v("参考：https://github.com/youzan/vant-weapp/blob/dev/packages/common/style/var.less")])]),t._v(" "),s("h1",{attrs:{id:"_2-全局数据共享"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-全局数据共享"}},[t._v("#")]),t._v(" 2, 全局数据共享")]),t._v(" "),s("h2",{attrs:{id:"_2-1-什么是全局数据共享"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-什么是全局数据共享"}},[t._v("#")]),t._v(" 2.1, 什么是全局数据共享")]),t._v(" "),s("p",[s("strong",[t._v("全局数据共享（又叫做：状态管理）是为了解决组件之间数据共享的问题。")])]),t._v(" "),s("ul",[s("li",[t._v("开发中常用的全局数据共享方案有：Vuex、Redux、MobX 等")])]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:_(1236)}}),t._v(" "),s("h2",{attrs:{id:"_2-2-小程序中的全局数据共享方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-小程序中的全局数据共享方案"}},[t._v("#")]),t._v(" 2.2, 小程序中的全局数据共享方案")]),t._v(" "),s("p",[s("strong",[t._v("在小程序中，可使用 mobx-miniprogram 配合 mobx-miniprogram-bindings 实现全局数据共享")])]),t._v(" "),s("ul",[s("li",[t._v("mobx-miniprogram 用来创建 Store 实例对象")]),t._v(" "),s("li",[t._v("mobx-miniprogram-bindings 用来把 Store 中的共享数据或方法，绑定到组件或页面中使用")])]),t._v(" "),s("p",[s("strong",[t._v("安装 MobX 相关的包")])]),t._v(" "),s("ul",[s("li",[t._v("在项目中运行如下的命令，安装 MobX 相关的包")]),t._v(" "),s("li",[t._v("安装：npm install --save mobx-miniprogram@4.13.2 mobx-miniprogram-bindings@1.2.1")]),t._v(" "),s("li",[t._v("MobX 相关的包安装完毕之后，记得删除 miniprogram_npm 目录后，重新构建 npm")])])])}),[],!1,null,null,null);a.default=n.exports}}]);