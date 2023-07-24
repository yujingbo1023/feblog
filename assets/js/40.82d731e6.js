(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{5977:function(t,i,s){"use strict";s.r(i);var v=s(15),a=Object(v.a)({},(function(){var t=this,i=t.$createElement,v=t._self._c||i;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"_1-小程序-起步"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-小程序-起步"}},[t._v("#")]),t._v(" 1, 小程序 - 起步")]),t._v(" "),v("h2",{attrs:{id:"_1-1-小程序项目结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-小程序项目结构"}},[t._v("#")]),t._v(" 1.1, 小程序项目结构")]),t._v(" "),v("p",[v("strong",[t._v("项目的基本组成结构")])]),t._v(" "),v("img",{staticStyle:{zoom:"70%"},attrs:{src:s(706)}}),t._v(" "),v("ul",[v("li",[t._v("pages 用来存放所有小程序的页面")]),t._v(" "),v("li",[t._v("utils 用来存放工具性质的模块（例如：格式化时间的自定义模块）")]),t._v(" "),v("li",[t._v("app.js 小程序项目的入口文件")]),t._v(" "),v("li",[t._v("app.json 小程序项目的全局配置文件")]),t._v(" "),v("li",[t._v("app.wxss 小程序项目的全局样式文件")]),t._v(" "),v("li",[t._v("project.config.json 项目的配置文件")]),t._v(" "),v("li",[t._v("sitemap.json 用来配置小程序及其页面是否允许被微信索引")])]),t._v(" "),v("img",{staticStyle:{zoom:"70%"},attrs:{src:s(707)}}),t._v(" "),v("p",[v("strong",[t._v("小程序页面的组成部分")])]),t._v(" "),v("ul",[v("li",[t._v("小程序官方建议把所有小程序的页面，都存放在 pages 目录中，以单独的文件夹存在，如图所示")])]),t._v(" "),v("img",{staticStyle:{zoom:"70%"},attrs:{src:s(708)}}),t._v(" "),v("ul",[v("li",[t._v("其中，每个页面由 4 个基本文件组成，它们分别是：")]),t._v(" "),v("li",[t._v(".js 文件（页面的脚本文件，存放页面的数据、事件处理函数等）")]),t._v(" "),v("li",[t._v(".json 文件（当前页面的配置文件，配置窗口的外观、表现等）")]),t._v(" "),v("li",[t._v(".wxml 文件（页面的模板结构文件）")]),t._v(" "),v("li",[t._v(".wxss 文件（当前页面的样式表文件）")])]),t._v(" "),v("h1",{attrs:{id:"_2-json-配置文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-json-配置文件"}},[t._v("#")]),t._v(" 2, JSON 配置文件")]),t._v(" "),v("h2",{attrs:{id:"_2-1-json-配置文件的作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-json-配置文件的作用"}},[t._v("#")]),t._v(" 2.1, JSON 配置文件的作用")]),t._v(" "),v("ul",[v("li",[t._v("小程序的很多开发需求被规定在了配置文件中。")]),t._v(" "),v("li",[t._v("JSON 是一种数据格式，在实际开发中，JSON 总是以配置文件的形式出现。小程序项目中也不例外：通过不同的 .json 配置文件，可以对小程序项目进行不同级别的配置。")]),t._v(" "),v("li",[t._v("这样做可以更有利于我们的开发效率")]),t._v(" "),v("li",[t._v("并且可以保证开发出来的小程序的某些风格是比较一致的，比如导航栏 – 顶部TabBar，以及页面路由等等")])]),t._v(" "),v("p",[v("strong",[t._v("小程序项目中有 4 种 json 配置文件，分别是：")])]),t._v(" "),v("ul",[v("li",[t._v("项目根目录中的 app.json 配置文件")]),t._v(" "),v("li",[t._v("项目根目录中的 project.config.json 配置文件")]),t._v(" "),v("li",[t._v("项目根目录中的 sitemap.json 配置文件")]),t._v(" "),v("li",[t._v("每个页面文件夹中的 .json 配置文件")])]),t._v(" "),v("h3",{attrs:{id:"app-json-文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#app-json-文件"}},[t._v("#")]),t._v(" app.json 文件")]),t._v(" "),v("ul",[v("li",[t._v("app.json 是当前小程序的全局配置，包括了小程序的所有页面路径、窗口外观、界面表现、底部 tab 等。")]),t._v(" "),v("li",[t._v("参考：https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html")])]),t._v(" "),v("img",{staticStyle:{zoom:"70%"},attrs:{src:s(709)}}),t._v(" "),v("p",[v("strong",[t._v("pages：用来记录当前小程序所有页面的路径")])]),t._v(" "),v("ul",[v("li",[t._v("小程序中所有的页面都是必须在pages中进行注册的。")])]),t._v(" "),v("p",[v("strong",[t._v("window：全局的默认窗口展示")])]),t._v(" "),v("ul",[v("li",[t._v("全局定义小程序所有页面的背景色、文字颜色等")]),t._v(" "),v("li",[t._v("用户指定窗口如何展示, 其中还包含了很多其他的属性")])]),t._v(" "),v("img",{staticStyle:{zoom:"70%"},attrs:{src:s(710)}}),t._v(" "),v("img",{staticStyle:{zoom:"60%"},attrs:{src:s(711)}}),t._v(" "),v("p",[v("strong",[t._v("tabBar:tab栏的展示")])]),t._v(" "),v("ul",[v("li",[t._v("tabBar 是移动端应用常见的页面效果，用于实现多页面的快速切换")]),t._v(" "),v("li",[t._v("小程序中通常将其分为：底部 tabBar和顶部 tabBar")]),t._v(" "),v("li",[t._v("tabBar中只能配置最少 2 个、最多 5 个 tab 页签")]),t._v(" "),v("li",[t._v("当渲染顶部 tabBar 时，不显示 icon，只显示文本")])]),t._v(" "),v("img",{staticStyle:{zoom:"90%"},attrs:{src:s(712)}}),t._v(" "),v("p",[v("strong",[t._v("tabBar 的 6 个组成部分")])]),t._v(" "),v("ul",[v("li",[t._v("backgroundColor：tabBar 的背景色")]),t._v(" "),v("li",[t._v("selectedIconPath：选中时的图片路径")]),t._v(" "),v("li",[t._v("borderStyle：tabBar 上边框的颜色")]),t._v(" "),v("li",[t._v("iconPath：未选中时的图片路径")]),t._v(" "),v("li",[t._v("selectedColor：tab 上的文字选中时的颜色")]),t._v(" "),v("li",[t._v("color：tab 上文字的默认（未选中）颜色")])]),t._v(" "),v("img",{staticStyle:{zoom:"70%"},attrs:{src:s(713)}}),t._v(" "),v("p",[v("strong",[t._v("tabBar 节点的配置项")])]),t._v(" "),v("img",{staticStyle:{zoom:"70%"},attrs:{src:s(714)}}),t._v(" "),v("p",[v("strong",[t._v("每个 tab 项的配置选项")])]),t._v(" "),v("img",{staticStyle:{zoom:"70%"},attrs:{src:s(715)}}),t._v(" "),v("p",[v("strong",[t._v("style")])]),t._v(" "),v("ul",[v("li",[t._v("全局定义小程序组件所使用的样式版本")])]),t._v(" "),v("p",[v("strong",[t._v("sitemapLocation")])]),t._v(" "),v("ul",[v("li",[t._v("用来指明 sitemap.json 的位置")])]),t._v(" "),v("h3",{attrs:{id:"project-config-json-文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#project-config-json-文件"}},[t._v("#")]),t._v(" project.config.json 文件")]),t._v(" "),v("ul",[v("li",[t._v("project.config.json 是项目配置文件，用来记录我们对小程序开发工具所做的个性化配置，例如：")]),t._v(" "),v("li",[t._v("setting 中保存了编译相关的配置")]),t._v(" "),v("li",[t._v("projectname 中保存的是项目名称")]),t._v(" "),v("li",[t._v("appid 中保存的是小程序的账号 ID")]),t._v(" "),v("li",[t._v("参考：https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html")])]),t._v(" "),v("h3",{attrs:{id:"sitemap-json-文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sitemap-json-文件"}},[t._v("#")]),t._v(" sitemap.json 文件")]),t._v(" "),v("ul",[v("li",[t._v("微信现已开放小程序内搜索，效果类似于 PC 网页的 SEO。sitemap.json 文件用来配置小程序页面是否允许微信索引。")]),t._v(" "),v("li",[t._v("当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索关键字和页面的索引匹配成功的时候，小程序的页面将可能展示在搜索结果中。")]),t._v(" "),v("li",[t._v("参考：https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html")])]),t._v(" "),v("img",{staticStyle:{zoom:"60%"},attrs:{src:s(716)}}),t._v(" "),v("ul",[v("li",[t._v("sitemap 的索引提示是默认开启的，如需要关闭 sitemap 的索引提示，可在小程序项目配置文件project.config.json 的 setting 中配置字段 checkSiteMap 为 false")])]),t._v(" "),v("h3",{attrs:{id:"页面的-json-配置文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#页面的-json-配置文件"}},[t._v("#")]),t._v(" 页面的 .json 配置文件")]),t._v(" "),v("ul",[v("li",[t._v("小程序中，app.json 中的 window 节点，可以全局配置小程序中每个页面的窗口表现")]),t._v(" "),v("li",[t._v("如果某些小程序页面想要拥有特殊的窗口表现，此时，“页面级别的 .json 配置文件”就可以实现这种需求")]),t._v(" "),v("li",[t._v("注意：当页面配置与全局配置冲突时，根据就近原则，最终的效果以页面配置为准")]),t._v(" "),v("li",[t._v("参考：https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html")])]),t._v(" "),v("img",{staticStyle:{zoom:"60%"},attrs:{src:s(717)}}),t._v(" "),v("h1",{attrs:{id:"_3-wxml"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-wxml"}},[t._v("#")]),t._v(" 3, WXML")]),t._v(" "),v("h2",{attrs:{id:"_3-1-什么是-wxml"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-什么是-wxml"}},[t._v("#")]),t._v(" 3.1, 什么是 WXML")]),t._v(" "),v("ul",[v("li",[t._v("WXML（WeiXin Markup Language）是小程序框架设计的一套标签语言，用来构建小程序页面的结构，其作用类似于网页开发中的 HTML")])]),t._v(" "),v("p",[v("strong",[t._v("WXML 和 HTML 的区别")])]),t._v(" "),v("ul",[v("li",[t._v("标签名称不同\n"),v("ul",[v("li",[t._v("HTML （div, span, img, a）")]),t._v(" "),v("li",[t._v("WXML（view, text, image, navigator），内置组件")])])]),t._v(" "),v("li",[t._v("属性节点不同\n"),v("ul",[v("li",[t._v("HTML （a标签上的href）")]),t._v(" "),v("li",[t._v("WXML （navigator组件上的url）")])])]),t._v(" "),v("li",[t._v("WXML提供了类似于 Vue 中的模板语法\n"),v("ul",[v("li",[t._v("数据绑定")]),t._v(" "),v("li",[t._v("列表渲染")]),t._v(" "),v("li",[t._v("条件渲染")])])])]),t._v(" "),v("h1",{attrs:{id:"_4-wxss-样式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-wxss-样式"}},[t._v("#")]),t._v(" 4, WXSS 样式")]),t._v(" "),v("h2",{attrs:{id:"_4-1-什么是-wxss"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-什么是-wxss"}},[t._v("#")]),t._v(" 4.1, 什么是 WXSS")]),t._v(" "),v("ul",[v("li",[t._v("WXSS (WeiXin Style Sheets)是一套样式语言，用于描述 WXML 的组件样式，类似于网页开发中的 CSS。")])]),t._v(" "),v("p",[v("strong",[t._v("WXSS 和 CSS 的区别")])]),t._v(" "),v("ul",[v("li",[t._v("新增了 rpx 尺寸单位\n"),v("ul",[v("li",[t._v("CSS 中需要手动进行像素单位换算，例如 rem")]),t._v(" "),v("li",[t._v("WXSS 在底层支持新的尺寸单位 rpx，在不同大小的屏幕上小程序会自动进行换算")])])]),t._v(" "),v("li",[t._v("提供了全局的样式和局部样式\n"),v("ul",[v("li",[t._v("项目根目录中的 app.wxss 会作用于所有小程序页面")]),t._v(" "),v("li",[t._v("局部页面的 .wxss 样式仅对当前页面生效")])])]),t._v(" "),v("li",[t._v("WXSS 仅支持部分 CSS 选择器\n"),v("ul",[v("li",[t._v(".class 和 #id")]),t._v(" "),v("li",[t._v("element")]),t._v(" "),v("li",[t._v("并集选择器、后代选择器")]),t._v(" "),v("li",[t._v("::after 和 ::before 等伪类选择器")])])])]),t._v(" "),v("h1",{attrs:{id:"_5-js-逻辑交互"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-js-逻辑交互"}},[t._v("#")]),t._v(" 5, JS 逻辑交互")]),t._v(" "),v("h2",{attrs:{id:"_5-1-小程序中的-js-文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-小程序中的-js-文件"}},[t._v("#")]),t._v(" 5.1, 小程序中的 .js 文件")]),t._v(" "),v("ul",[v("li",[t._v("一个项目仅仅提供界面展示是不够的，在小程序中，我们通过 .js 文件来处理用户的操作。例如：响应用户的点击、获取用户的位置等等")])]),t._v(" "),v("p",[v("strong",[t._v("小程序中的 JS 文件分为三大类，分别是")])]),t._v(" "),v("ul",[v("li",[t._v("app.js\n"),v("ul",[v("li",[t._v("是整个小程序项目的入口文件，通过调用 App() 函数来启动整个小程序")])])]),t._v(" "),v("li",[t._v("页面的 .js 文件\n"),v("ul",[v("li",[t._v("是页面的入口文件，通过调用 Page() 函数来创建并运行页面")])])]),t._v(" "),v("li",[t._v("普通的 .js 文件\n"),v("ul",[v("li",[t._v("是普通的功能模块文件，用来封装公共的函数或属性供页面使用")])])])]),t._v(" "),v("h1",{attrs:{id:"_6-注册小程序-app函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-注册小程序-app函数"}},[t._v("#")]),t._v(" 6, 注册小程序 – App函数")]),t._v(" "),v("h2",{attrs:{id:"_6-1-app函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-app函数"}},[t._v("#")]),t._v(" 6.1, App函数")]),t._v(" "),v("p",[v("strong",[t._v("小程序启动的过程")])]),t._v(" "),v("ul",[v("li",[t._v("把小程序的代码包下载到本地")]),t._v(" "),v("li",[t._v("解析 app.json 全局配置文件")]),t._v(" "),v("li",[t._v("执行 app.js 小程序入口文件，调用 App() 创建小程序实例")]),t._v(" "),v("li",[t._v("渲染小程序首页")]),t._v(" "),v("li",[t._v("小程序启动完成")])]),t._v(" "),v("p",[v("strong",[t._v("每个小程序都需要在 app.js 中调用 App 函数 注册小程序实例")])]),t._v(" "),v("ul",[v("li",[t._v("在注册时, 可以绑定对应的生命周期函数；")]),t._v(" "),v("li",[t._v("在生命周期函数中, 执行对应的代码；")]),t._v(" "),v("li",[t._v("参考：https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html")])]),t._v(" "),v("p",[v("strong",[t._v("注册App时，我们一般会做什么")])]),t._v(" "),v("ul",[v("li",[t._v("判断小程序的进入场景")]),t._v(" "),v("li",[t._v("监听生命周期函数，在生命周期中执行对应的业务逻辑，比如在某个生命周期函数中进行登录操作或者请求网络数据")]),t._v(" "),v("li",[t._v("因为App()实例只有一个，并且是全局共享的（单例对象），所以我们可以将一些共享数据放在这里")])]),t._v(" "),v("p",[v("strong",[t._v("App函数的参数")])]),t._v(" "),v("img",{staticStyle:{zoom:"70%"},attrs:{src:s(718)}}),t._v(" "),v("p",[v("strong",[t._v("作用一：判断打开场景")])]),t._v(" "),v("ul",[v("li",[t._v("常见的打开场景：群聊会话中打开、小程序列表中打开、微信扫一扫打开、另一个小程序打开")]),t._v(" "),v("li",[t._v("参考：https://developers.weixin.qq.com/miniprogram/dev/reference/scene-list.html")]),t._v(" "),v("li",[t._v("在onLaunch和onShow生命周期回调函数中，会有options参数，其中有scene值；")])]),t._v(" "),v("img",{staticStyle:{zoom:"70%"},attrs:{src:s(719)}}),t._v(" "),v("p",[v("strong",[t._v("作用二：定义全局App的数据")])]),t._v(" "),v("ul",[v("li",[t._v("可以在Object中定义全局App的数据")])]),t._v(" "),v("img",{staticStyle:{zoom:"70%"},attrs:{src:s(720)}}),t._v(" "),v("ul",[v("li",[t._v("定义的数据可以在其他任何页面中访问")])]),t._v(" "),v("img",{staticStyle:{zoom:"70%"},attrs:{src:s(721)}}),t._v(" "),v("p",[v("strong",[t._v("作用三：生命周期函数")])]),t._v(" "),v("ul",[v("li",[t._v("在生命周期函数中，完成应用程序启动后的初始化操作")]),t._v(" "),v("li",[t._v("比如登录操作")]),t._v(" "),v("li",[t._v("比如读取本地数据，类似于token，然后保存在全局方便使用")]),t._v(" "),v("li",[t._v("比如请求整个应用程序需要的数据；")])]),t._v(" "),v("h1",{attrs:{id:"_7-注册页面-page函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-注册页面-page函数"}},[t._v("#")]),t._v(" 7, 注册页面 – Page函数")]),t._v(" "),v("h2",{attrs:{id:"_7-1-page函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-page函数"}},[t._v("#")]),t._v(" 7.1, Page函数")]),t._v(" "),v("p",[v("strong",[t._v("页面渲染的过程")])]),t._v(" "),v("ul",[v("li",[t._v("加载解析页面的 .json 配置文件")]),t._v(" "),v("li",[t._v("加载页面的 .wxml 模板和 .wxss 样式")]),t._v(" "),v("li",[t._v("执行页面的 .js 文件，调用 Page() 创建页面实例")]),t._v(" "),v("li",[t._v("页面渲染完成")])]),t._v(" "),v("p",[v("strong",[t._v("小程序中的每个页面, 都有一个对应的js文件, 其中调用Page函数注册页面示例")])]),t._v(" "),v("ul",[v("li",[t._v("在注册时, 可以绑定初始化数据、生命周期回调、事件处理函数等")]),t._v(" "),v("li",[t._v("参考：https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html")])]),t._v(" "),v("p",[v("strong",[t._v("注册Page页面时，我们一般会做什么")])]),t._v(" "),v("ul",[v("li",[t._v("在生命周期函数中发送网络请求，从服务器获取数据")]),t._v(" "),v("li",[t._v("初始化一些数据，以方便被wxml引用展示")]),t._v(" "),v("li",[t._v("监听wxml中的事件，绑定对应的事件函数")]),t._v(" "),v("li",[t._v("其他一些监听（比如页面滚动、上拉刷新、下拉加载更多等）")])]),t._v(" "),v("img",{staticStyle:{zoom:"70%"},attrs:{src:s(722)}}),t._v(" "),v("p",[v("strong",[t._v("监听页面的下拉刷新和上拉加载更多")])]),t._v(" "),v("ul",[v("li",[t._v("步骤一：配置页面的json文件")]),t._v(" "),v("li",[t._v("步骤二：代码中进行监听")])])])}),[],!1,null,null,null);i.default=a.exports},706:function(t,i,s){t.exports=s.p+"assets/img/20.bb87789d.png"},707:function(t,i,s){t.exports=s.p+"assets/img/19.67985569.png"},708:function(t,i,s){t.exports=s.p+"assets/img/21.6980c890.png"},709:function(t,i,s){t.exports=s.p+"assets/img/22.37f3ae8e.png"},710:function(t,i,s){t.exports=s.p+"assets/img/58.0a74ca42.png"},711:function(t,i,s){t.exports=s.p+"assets/img/59.51b8f39b.png"},712:function(t,i){t.exports="data:image/png;base64,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"},713:function(t,i,s){t.exports=s.p+"assets/img/61.a4c67234.png"},714:function(t,i,s){t.exports=s.p+"assets/img/62.626b9c4f.png"},715:function(t,i,s){t.exports=s.p+"assets/img/63.36ed9131.png"},716:function(t,i,s){t.exports=s.p+"assets/img/23.7a44c86d.png"},717:function(t,i,s){t.exports=s.p+"assets/img/64.3ffe6322.png"},718:function(t,i,s){t.exports=s.p+"assets/img/27.f58c42e5.png"},719:function(t,i,s){t.exports=s.p+"assets/img/28.5cc2dfff.png"},720:function(t,i,s){t.exports=s.p+"assets/img/29.96766574.png"},721:function(t,i,s){t.exports=s.p+"assets/img/30.208d384b.png"},722:function(t,i,s){t.exports=s.p+"assets/img/31.4ae15e96.png"}}]);