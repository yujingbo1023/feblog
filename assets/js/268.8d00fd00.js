(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{6192:function(s,a,e){"use strict";e.r(a);var t=e(15),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_1-vue单页面应用中刷新页面-vuex数据丢失"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue单页面应用中刷新页面-vuex数据丢失"}},[s._v("#")]),s._v(" 1. Vue单页面应用中刷新页面，Vuex数据丢失")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Vuex特点\n1.Vuex数据保存在运行内存中，vue实例初始化的时候为其分配内存\n2.当刷新页面的时候重新初始化Vue实例，所以重新为Vuex分配内存导致之前保存的数据丢失\n\n如何解决\n1.Vuex的数据都是每次组件加载时候动态请求获取数据保存\na)优点： 保证数据不会丢失\nb)缺点: 性能差，因为网络问题可能有网络延迟\n\n2.将Vuex中的数据每次同步更新保存到sessionStorage中\na)优点: 每次页面刷新后从sessionStorage中获取保存的数据，不会丢失\nb)缺点: state中的数据是动态的，就需要一直要同步到sessionStorage中，性能差\n\n3.在页面刷新之前获取Vuex的数据，将数据保存在sessionStorage中，页面加载后从sessionStorage中获取\na)优点: 减少动态更新sessionStorage的次数，性能好\nb)重点: 给window绑定beforeupload事件监听\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("h2",{attrs:{id:"_2-项目中你是如何封装axios的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-项目中你是如何封装axios的"}},[s._v("#")]),s._v(" 2. 项目中你是如何封装axios的")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("简单的封装：\n    实现请求拦截：\n        在发送请求的时候可能需要携带一些信息在请求头上，比如 token 等\n    实现响应拦截\n        axios 请求的返回结果里面包含了很多东西，我们的业务层面通常只需要后端返回的数据即可\n    常见错误信息处理\n        在响应拦截器中封装，常见的错误信息处理\n    请求头设置\n        在请求拦截器中，设置一些请求头\n    api 集中式管理\n\n复杂的封装：\n    取消重复请求（https://juejin.cn/post/6955610207036801031）：\n        原生的话，调用abort方法来取消请求\n        axios的话，调用axios中的CancelToken来取消请求\n\n        当请求参数和请求url一样的，就认为请求是一样的，根据url和参数生成一个唯一的key,为\n        每个请求都创建一个专属的CancelToken，把key和cancel函数存储在Map中，使用Map可以判断\n        是否有重复的请求，出现请求请求时，就可以使用cancel函数取消前面发生的请求。\n\n        在请求拦截器中做取消重复请求。\n\n    请求失败自动重试\n        https://juejin.cn/post/6968487137670856711\n\n    请求接口数据缓存\n        https://juejin.cn/post/6968487137670856711\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br")])]),e("h2",{attrs:{id:"_3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3"}},[s._v("#")]),s._v(" 3.")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4"}},[s._v("#")]),s._v(" 4.")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5"}},[s._v("#")]),s._v(" 5.")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6"}},[s._v("#")]),s._v(" 6.")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7"}},[s._v("#")]),s._v(" 7.")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8"}},[s._v("#")]),s._v(" 8.")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_9"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9"}},[s._v("#")]),s._v(" 9.")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_9-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-2"}},[s._v("#")]),s._v(" 9.")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10"}},[s._v("#")]),s._v(" 10.")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_11"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11"}},[s._v("#")]),s._v(" 11.")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_12"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12"}},[s._v("#")]),s._v(" 12.")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_13"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13"}},[s._v("#")]),s._v(" 13.")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);