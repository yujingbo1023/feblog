(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{6142:function(n,s,a){"use strict";a.r(s);var t=a(15),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"_1-npm包管理工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-npm包管理工具"}},[n._v("#")]),n._v(" 1. npm包管理工具")]),n._v(" "),a("p",[a("strong",[n._v("包管理工具npm")])]),n._v(" "),a("ul",[a("li",[n._v("Node Package Manager，也就是Node包管理器，也是一个应用程序")]),n._v(" "),a("li",[n._v("Node.js 的包基本遵循 CommonJS 规范，将一组相关的模块组合在一起，形成一个完整的工具")]),n._v(" "),a("li",[n._v("npm属于node的一个管理工具，安装Node时，已帮我们安装好了")]),n._v(" "),a("li",[n._v("通过 NPM 可以对 Node 的工具包进行搜索、下载、安装、删除、上传。借助别人写好的包，可以让我们的开发更加方便")]),n._v(" "),a("li",[n._v("where npm   该命令可以查看 npm 安装的位置")]),n._v(" "),a("li",[n._v("一般在搜索工具包的时候，会到 https://npmjs.org 搜索")]),n._v(" "),a("li",[n._v("安装一个包时其实是从registry（NPM仓库）上面下载的包")]),n._v(" "),a("li",[n._v("发布自己的包其实是发布到registry（NPM仓库）上面的")])]),n._v(" "),a("h2",{attrs:{id:"_2-package配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-package配置文件"}},[n._v("#")]),n._v(" 2. package配置文件")]),n._v(" "),a("p",[a("strong",[n._v("一个项目，有非常多的包，我们需要通过一个配置文件（package.json）来管理这些包")])]),n._v(" "),a("ul",[a("li",[n._v("每一个项目都会有一个对应的配置文件，无论是前端项目（Vue、React）还是后端项目（Node）")]),n._v(" "),a("li",[n._v("配置文件会记录着你项目的名称、版本号、项目描述，项目所依赖的其他库的信息和依赖库的版本号")])]),n._v(" "),a("p",[a("strong",[n._v("生成配置文件")])]),n._v(" "),a("ul",[a("li",[n._v("方式一：npm init –y")]),n._v(" "),a("li",[n._v("方式二：通过脚手架创建项目，脚手架会帮助我们生成package.json")])]),n._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[n._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"1-npm"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v("      #包的名字(注意生成的包名不能使用中文，大写 ！！！ 不能使用 npm 作为包的名字)\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[n._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v("   #包的版本\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[n._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v("    #包的描述\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[n._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v("   #包的入口文件\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[n._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\t\t\t#脚本配置\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[n._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"echo \\"Error: no test specified\\" && exit 1"')]),n._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[n._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v("\t\t\t#作者\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[n._v('"license"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"ISC"')]),n._v("\t\t#版权声明\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br")])]),a("p",[a("strong",[n._v("package.json常见的属性")])]),n._v(" "),a("ul",[a("li",[n._v("name是项目的名称，必填")]),n._v(" "),a("li",[n._v("version是当前项目的版本号，必填")]),n._v(" "),a("li",[n._v("description是描述信息，很多时候是作为项目的基本描述")]),n._v(" "),a("li",[n._v("author是作者相关信息（发布时用到）")]),n._v(" "),a("li",[n._v("license是开源协议（发布时用到）\n"),a("ul",[a("li",[n._v("http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html(关于开源证书扩展阅读)")])])]),n._v(" "),a("li",[n._v("private属性记录当前的项目是否是私有的，当值为true时，npm是不能发布它的，这是防止私有项目或模块发布出去的方式")]),n._v(" "),a("li",[n._v("main属性，设置程序的入口，实际上是找到对应的main属性查找文件的")]),n._v(" "),a("li",[n._v("scripts属性用于配置一些脚本命令，以键值对的形式存在，配置后我们可以通过 npm run 命令的key来执行这个命令\n"),a("ul",[a("li",[n._v("npm start和npm run start 它们是等价的，对于常用的 start、 test、stop、restart可以省略掉run直接通过 npm start等方式运行；")])])]),n._v(" "),a("li",[n._v("dependencies属性\n"),a("ul",[a("li",[n._v("dependencies属性是指定无论开发环境还是生成环境都需要依赖的包")]),n._v(" "),a("li",[n._v("项目实际开发用到的一些库模块vue、vuex、vue-router、react、react-dom、axios等")])])]),n._v(" "),a("li",[n._v("devDependencies属性\n"),a("ul",[a("li",[n._v("在生成环境是不需要的，比如webpack、babel等")]),n._v(" "),a("li",[n._v("通过 npm install webpack --save-dev，将它安装到devDependencies属性中")])])])]),n._v(" "),a("p",[a("strong",[n._v("依赖的版本管理（版本规范是X.Y.Z）")])]),n._v(" "),a("ul",[a("li",[n._v("X主版本号（major）：当你做了不兼容的 API 修改（可能不兼容之前的版本）")]),n._v(" "),a("li",[n._v("Y次版本号（minor）：当你做了向下兼容的功能性新增（新功能增加，但是兼容之前的版本）")]),n._v(" "),a("li",[n._v("Z修订号（patch）：当你做了向下兼容的问题修正（没有新功能，修复了之前版本的bug）")]),n._v(" "),a("li",[n._v("x.y.z：表示一个明确的版本号")]),n._v(" "),a("li",[n._v("^x.y.z：表示x是保持不变的，y和z永远安装最新的版本")]),n._v(" "),a("li",[n._v("~x.y.z：表示x和y保持不变的，z永远安装最新的版本")]),n._v(" "),a("li",[n._v("package-lock.json  是包版本的锁文件，专门来固定包的版本的，不要手动修改")])]),n._v(" "),a("p",[a("strong",[n._v("npm install（安装npm包分两种情况）")])]),n._v(" "),a("ul",[a("li",[n._v("搜索包: npm search jquery (npm s jquery)")]),n._v(" "),a("li",[n._v("全局安装（global install）： npm install webpack -g\n"),a("ul",[a("li",[n._v("全局安装是直接将某个包安装到全局")]),n._v(" "),a("li",[n._v("全局安装命令在任意的命令行下, 都可以执行")]),n._v(" "),a("li",[n._v("全局命令的安装位置  C:\\Users\\你的用户名\\AppData\\Roaming\\npm\\node_modules")]),n._v(" "),a("li",[n._v("通常使用npm全局安装的包都是一些工具包：yarn、webpack等")]),n._v(" "),a("li",[n._v("全局安装axios之后并不能让我们在所有的项目中使用 axios等")])])]),n._v(" "),a("li",[n._v("局部安装（local install）： npm install webpack\n"),a("ul",[a("li",[n._v("项目安装会在当前目录下生成一个 node_modules 文件夹")]),n._v(" "),a("li",[n._v("局部安装分为开发时依赖和生产时依赖\n"),a("ul",[a("li",[n._v("npm install(i) axios  默认安装开发和生产依赖")]),n._v(" "),a("li",[n._v("npm install(i) axios --save（-S）  开发依赖")]),n._v(" "),a("li",[n._v("npm install(i) webpack --save-dev（-D）  开发依赖")]),n._v(" "),a("li",[n._v("npm install(i)  安装package.json中的依赖包")]),n._v(" "),a("li",[n._v("npm install(i) --production // 只安装 dependencies 中的依赖")]),n._v(" "),a("li",[n._v("npm remove jquery  移除包")])])])])])]),n._v(" "),a("p",[a("strong",[n._v("换源")])]),n._v(" "),a("ul",[a("li",[n._v("某些情况下我们没办法很好的从 https://registry.npmjs.org下载下来一些需要的包")]),n._v(" "),a("li",[n._v("查看npm镜像  npm config get registry")]),n._v(" "),a("li",[n._v("设置npm镜像  npm config set registry https://registry.npm.taobao.org")])]),n._v(" "),a("p",[a("strong",[n._v("npm其他命令之卸载某个依赖包")])]),n._v(" "),a("ul",[a("li",[n._v("npm uninstall package")]),n._v(" "),a("li",[n._v("npm uninstall package --save-dev")]),n._v(" "),a("li",[n._v("npm uninstall package -D")])]),n._v(" "),a("p",[a("strong",[n._v("npm其他命令之清除缓存")])]),n._v(" "),a("ul",[a("li",[n._v("npm cache clean")])]),n._v(" "),a("p",[a("strong",[n._v("npm更多命令")])]),n._v(" "),a("ul",[a("li",[n._v("https://docs.npmjs.com/cli-documentation/cli")]),n._v(" "),a("li",[n._v("更多的命令，可以根据需要查阅官方文档")])]),n._v(" "),a("h2",{attrs:{id:"_3-yarn、cnpm、npx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-yarn、cnpm、npx"}},[n._v("#")]),n._v(" 3. yarn、cnpm、npx")]),n._v(" "),a("p",[a("strong",[n._v("yarn是由Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具")])]),n._v(" "),a("ul",[a("li",[n._v("yarn 是为了弥补 早期npm 的一些缺陷而出现的")]),n._v(" "),a("li",[n._v("早期的npm存在很多的缺陷，比如安装依赖速度很慢、版本依赖混乱等等一系列的问题")]),n._v(" "),a("li",[n._v("从npm5版本开始，进行了很多的升级和改进，但是依然很多人喜欢使用yarn")]),n._v(" "),a("li",[n._v("yarn 安装   npm install yarn -g")]),n._v(" "),a("li",[n._v("yarn 修改仓库地址  yarn config set registry https://registry.npm.taobao.org")])]),n._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("yarn 的相关命令\n1)  yarn --version  检测是否安装成功\n2)  yarn init   初始化，生成package.json   \n3)  yarn global add  package    全局安装\n4)  yarn global remove less   全局删除 \n5)  yarn add package   局部安装  \n6)  yarn add package --dev   (相当于npm中的-D)\n7)  yarn remove package  删除局部包文件\n8)  yarn list      列出已经安装的包名 用的很少\n9)  yarn info packageName   获取包的有关信息  几乎不用\n10)  yarn  安装package.json中的所有依赖 \n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br")])]),a("p",[a("strong",[n._v("不想修改npm原本从官方下载包的渠道，可以使用cnpm，并且将cnpm设置为淘宝的镜像")])]),n._v(" "),a("ul",[a("li",[n._v("npm install -g cnpm --registry=https://registry.npm.taobao.org")]),n._v(" "),a("li",[n._v("cnpm config get registry")])]),n._v(" "),a("p",[a("strong",[n._v("npx工具")])]),n._v(" "),a("ul",[a("li",[n._v("npx是npm5.2之后自带的一个命令，使用它来调用项目中的某个模块的指令")]),n._v(" "),a("li",[n._v("npx的原理非常简单，它会到当前目录的node_modules/.bin目录下查找对应的命令")])]),n._v(" "),a("p",[a("strong",[n._v("局部命令的执行")])]),n._v(" "),a("ul",[a("li",[n._v("方式一：在终端中使用如下命令（在项目根目录下）    ./node_modules/.bin/webpack --version")]),n._v(" "),a("li",[n._v('方式二：修改package.json中的scripts      "webpack": "webpack --version"')]),n._v(" "),a("li",[n._v("方式三：使用npx    npx webpack --version")])]),n._v(" "),a("h2",{attrs:{id:"_4-发布自己的开发包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-发布自己的开发包"}},[n._v("#")]),n._v(" 4. 发布自己的开发包")]),n._v(" "),a("p",[a("strong",[n._v("流程")])]),n._v(" "),a("ol",[a("li",[n._v("修改为官方的地址 (  npm config set registry https://registry.npmjs.org/ )")]),n._v(" "),a("li",[n._v("创建文件夹，并创建文件 index.js， 在文件中声明函数，使用 module.exports 暴露")]),n._v(" "),a("li",[n._v("npm 初始化工具包，package.json 填写包的信息 （越复杂越容易提上去）")]),n._v(" "),a("li",[n._v("账号npm注册（激活账号）,==完成邮箱验证==")]),n._v(" "),a("li",[n._v("命令行下 『npm login』 填写相关用户信息 (一定要在包的文件夹下运行)")]),n._v(" "),a("li",[n._v("命令行下『 npm publish』 提交包 👌")]),n._v(" "),a("li",[n._v("npm 有垃圾检测机制，如果名字简单或做测试提交，很可能会被拒绝提交，可以尝试改一下包的名称来解决这个问题")])])])}),[],!1,null,null,null);s.default=e.exports}}]);