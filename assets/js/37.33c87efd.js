(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{2321:function(t,s,a){t.exports=a.p+"assets/img/1675155996026.cac4afa2.png"},2322:function(t,s,a){t.exports=a.p+"assets/img/1675156018890.0ca68829.png"},2323:function(t,s,a){t.exports=a.p+"assets/img/1675156105158.cf9772d7.png"},2324:function(t,s,a){t.exports=a.p+"assets/img/1675156139236.30a60a14.png"},2325:function(t,s,a){t.exports=a.p+"assets/img/1675156245623.715bc54b.png"},2326:function(t,s,a){t.exports=a.p+"assets/img/1675156537368.8593f460.png"},2327:function(t,s,a){t.exports=a.p+"assets/img/1675156568875.73fb14ea.png"},2328:function(t,s,a){t.exports=a.p+"assets/img/1675156625432.1cd39375.png"},2329:function(t,s,a){t.exports=a.p+"assets/img/1675156651984.c978b539.png"},2330:function(t,s,a){t.exports=a.p+"assets/img/1675156702581.563f9718.png"},2331:function(t,s,a){t.exports=a.p+"assets/img/1675156875614.9196fe11.png"},2332:function(t,s,a){t.exports=a.p+"assets/img/1675156886204.19634370.png"},2333:function(t,s,a){t.exports=a.p+"assets/img/1675157057049.23d8b157.png"},2334:function(t,s,a){t.exports=a.p+"assets/img/1675157143607.dcbbd1a5.png"},2335:function(t,s,a){t.exports=a.p+"assets/img/1675157154272.a689825c.png"},2336:function(t,s,a){t.exports=a.p+"assets/img/1675157224266.1c797095.png"},2337:function(t,s,a){t.exports=a.p+"assets/img/1675157255400.f1a6db06.png"},2338:function(t,s,a){t.exports=a.p+"assets/img/1675157382287.94fd3cf1.png"},2339:function(t,s,a){t.exports=a.p+"assets/img/1675157403503.6de5b5e3.png"},6008:function(t,s,a){"use strict";a.r(s);var n=a(15),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"一-表单绑定-列表渲染"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-表单绑定-列表渲染"}},[t._v("#")]),t._v(" 一，表单绑定，列表渲染")]),t._v(" "),n("p",[t._v("关于表单绑定和列表渲染，我们集成到todolist中讲解。")]),t._v(" "),n("h3",{attrs:{id:"_1-类组件实现todolist"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-类组件实现todolist"}},[t._v("#")]),t._v(" 1，类组件实现todolist")]),t._v(" "),n("p",[t._v("把表单变成受控表单，收集表单中的数据，如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2321),alt:"1675155996026"}})]),t._v(" "),n("p",[t._v("此时，我们就可以收集表单的数据，如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2322),alt:"1675156018890"}})]),t._v(" "),n("p",[t._v("在React中，收集数据，需要写一个value，还需要写一个onInput，如果不写onInput，会后错，如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2323),alt:"1675156105158"}})]),t._v(" "),n("p",[t._v("根据人家建议，换成onChange，如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2324),alt:"1675156139236"}})]),t._v(" "),n("p",[t._v("当点击添加按钮，就需要把收集到的todo存起来，如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2325),alt:"1675156245623"}})]),t._v(" "),n("p",[t._v("把每一个todo存储到数组中，如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2326),alt:"1675156537368"}})]),t._v(" "),n("p",[t._v("浏览器测试如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2327),alt:"1675156568875"}})]),t._v(" "),n("p",[t._v("添加完数据，需要把数据清空，如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2328),alt:"1675156625432"}})]),t._v(" "),n("p",[t._v("测试如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2329),alt:"1675156651984"}})]),t._v(" "),n("p",[t._v("需要把list中的数据渲染出来：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2330),alt:"1675156702581"}})]),t._v(" "),n("p",[t._v("我们把数据一片html代码，浏览器渲染出来，在vue中通过v-for，在react中，渲染数据，99%都通过map方法，")]),t._v(" "),n("p",[t._v("map方法可以对数据进行加工，代码如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2331),alt:"1675156875614"}})]),t._v(" "),n("p",[t._v("浏览器测试如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2332),alt:"1675156886204"}})]),t._v(" "),n("p",[t._v("刚才是点击按钮实现添加，现在想按回车键实现添加，如下 ：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2333),alt:"1675157057049"}})]),t._v(" "),n("p",[t._v("实现对应的方法，如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2334),alt:"1675157143607"}})]),t._v(" "),n("p",[t._v("浏览器测试如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2335),alt:"1675157154272"}})]),t._v(" "),n("p",[t._v("我要实现删除功能，如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2336),alt:"1675157224266"}})]),t._v(" "),n("p",[t._v("浏览器测试效果如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2337),alt:"1675157255400"}})]),t._v(" "),n("p",[t._v("实现对应的删除方法，如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2338),alt:"1675157382287"}})]),t._v(" "),n("p",[t._v("测试OK，如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2339),alt:"1675157403503"}})]),t._v(" "),n("p",[t._v("总结：")]),t._v(" "),n("ul",[n("li",[t._v("受控表单：一个表单的value或checked由state来决定，通过控制state就可以修改表单数据，这样的表单叫受控表单。")]),t._v(" "),n("li",[t._v("受控组件：一个组件的自定义属性由状态来控制，只有这个状态发生变化，组件才能更新。后面讲。")]),t._v(" "),n("li",[t._v("列表渲染：在React中，通过map方法实现。因为map方法，可以对数据进行加工，返回新的数据（jsx）;")])]),t._v(" "),n("h3",{attrs:{id:"_2-函数组件实现todolist"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-函数组件实现todolist"}},[t._v("#")]),t._v(" 2，函数组件实现todolist")]),t._v(" "),n("p",[t._v("直接上代码如下：")]),t._v(" "),n("div",{staticClass:"language-jsx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useState "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DemoA")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("todo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setTodo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("confirm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("todo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("trim")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Date"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("task")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" todo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTodo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("delTodo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ele")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("addByEnter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keyCode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("confirm")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n            ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n                ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("todo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onChange")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTodo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onKeyUp")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addByEnter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n                ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onClick")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("confirm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("添加")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n                ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("hr")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n                ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n                    ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n                                ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n                                ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n                                ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("task"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n                                ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onClick")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("delTodo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("X")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n                            ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n                ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n            ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n        ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" DemoA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br")])]),n("p",[t._v("作业：")]),t._v(" "),n("p",[t._v("todlist打完，部署，上线，发连接到群里，必须的。")]),t._v(" "),n("p",[t._v('jsx元素本质是一个对象，是React.createElement调用的返回值，这个返回值是一个对象，JSX对象可以叫做”fiber单元"，很多很多的嵌套的”fiber单元"就会构成”fiber树"。')])])}),[],!1,null,null,null);s.default=p.exports}}]);