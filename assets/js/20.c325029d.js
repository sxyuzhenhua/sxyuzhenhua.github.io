(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{203:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"主要记录平时工作中遇到的一些点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要记录平时工作中遇到的一些点"}},[t._v("#")]),t._v(" 主要记录平时工作中遇到的一些点")]),t._v(" "),a("h3",{attrs:{id:"window-addeventlistener-pushstate-handler-不管用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-addeventlistener-pushstate-handler-不管用"}},[t._v("#")]),t._v(" window.addEventListener('pushstate', handler) 不管用")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 拦截 pushState 等事件\nconst patchHistoryMethod = (method) => {\n    const history = window.history;\n    const original = history[method];\n  \n    history[method] = function (state) {\n      const result = original.apply(this, arguments);\n      const event = new Event(method.toLowerCase());\n  \n      (event as any).state = state;\n  \n      window.dispatchEvent(event);\n  \n      return result;\n    };\n};\n\n  patchHistoryMethod('pushState');\n  patchHistoryMethod('replaceState');\n")])])]),a("h3",{attrs:{id:"低代码："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#低代码："}},[t._v("#")]),t._v(" 低代码：")]),t._v(" "),a("p",[t._v("web excel:")]),t._v(" "),a("ol",[a("li",[t._v("dom Grid: 虚拟列表（对象池）技术, 类似轮播图，创建几个对象， 反复使用， 会出现空白列表; ag-grid;\nhttps://www.ag-grid.com/")]),t._v(" "),a("li",[t._v("canvas Grid: 不会出现空白列表\nhttps://www.airtable.com/")])]),t._v(" "),a("p",[t._v("表单搭建类：宜搭\nhttps://www.aliwork.com/")]),t._v(" "),a("p",[t._v("简道云")]),t._v(" "),a("p",[t._v("大型企业低代码：\nhttps://www.clickpaas.com/")]),t._v(" "),a("p",[t._v("前端提效：\nhttps://www.nocobase.com/")]),t._v(" "),a("h3",{attrs:{id:"收藏博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#收藏博客"}},[t._v("#")]),t._v(" 收藏博客")]),t._v(" "),a("p",[t._v("https://anonymity94.github.io/articles/2022-inverview.html#%E4%B8%80%E9%9D%A2")]),t._v(" "),a("p",[t._v("https://github.com/Anonymity94/demo-better-scroll-react")]),t._v(" "),a("h3",{attrs:{id:"导出包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出包"}},[t._v("#")]),t._v(" 导出包")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  if (typeof exports == "object") {\n    module.exports = vueTouch\n  } else if (typeof define == "function" && define.amd) {\n    define([], function(){ return vueTouch })\n  } else if (window.Vue) {\n    window.VueTouch = vueTouch\n    Vue.use(vueTouch)\n  }\n')])])]),a("h3",{attrs:{id:"记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记录"}},[t._v("#")]),t._v(" 记录")]),t._v(" "),a("p",[t._v("unpkg: 可以把npm上的文件都以url的形式获取到，也有开源的，就可以跟自己公司的私有npm仓库绑定。")]),t._v(" "),a("h3",{attrs:{id:"proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[t._v("#")]),t._v(" Proxy")]),t._v(" "),a("p",[t._v("创建对象的代理，实现拦截（属性查找，赋值，枚举，函数调用等）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const p = new Proxy(target, handler);\n")])])]),a("ul",[a("li",[t._v("handler.has: in 操作符的捕捉器")]),t._v(" "),a("li",[t._v("handler.get(): 属性读取操作的捕捉器,可以设置默认值，但不能改变只读属性")]),t._v(" "),a("li",[t._v("handler.set(): 属性设置操作的捕捉器，校验器,也不能改变只读属性")]),t._v(" "),a("li",[t._v("handler.deleteProperty(): delete 操作符的捕捉器，不能删除不可配置属性")]),t._v(" "),a("li",[t._v("handler.ownKeys(): Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器")]),t._v(" "),a("li",[t._v("handler.apply(): 函数调用操作的捕捉器")]),t._v(" "),a("li",[t._v("handler.construct(): new 操作符的捕捉器")])]),t._v(" "),a("p",[t._v("react hook 写法，函数试编程，每个组件的渲染是自己实现的，\nhttps://usegpu.live/")])])}],!1,null,null,null);e.default=s.exports}}]);