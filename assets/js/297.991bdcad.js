(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{571:function(s,e,v){"use strict";v.r(e);var i=v(12),_=Object(i.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"session-分布式处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session-分布式处理"}},[s._v("#")]),s._v(" session 分布式处理")]),s._v(" "),e("h2",{attrs:{id:"session-复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session-复制"}},[s._v("#")]),s._v(" Session 复制")]),s._v(" "),e("p",[s._v("在支持 Session 复制的 Web 服务器上，通过修改 Web 服务器的配置，可以实现将 Session 同步到其它 Web 服务器上，达到每个 Web 服务器上都保存一致的 Session。")]),s._v(" "),e("ul",[e("li",[s._v("优点：代码上不需要做支持和修改。")]),s._v(" "),e("li",[s._v("缺点：需要依赖支持的 Web 服务器，一旦更换成不支持的 Web 服务器就不能使用了，在数据量很大的情况下不仅占用网络资源，而且会导致延迟。")]),s._v(" "),e("li",[s._v("适用场景：只适用于Web服务器比较少且 Session 数据量少的情况。")]),s._v(" "),e("li",[s._v("可用方案：开源方案 "),e("code",[s._v("tomcat-redis-session-manager")]),s._v("，暂不支持 "),e("code",[s._v("Tomcat8")]),s._v("。")])]),s._v(" "),e("h2",{attrs:{id:"session-粘滞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session-粘滞"}},[s._v("#")]),s._v(" Session 粘滞")]),s._v(" "),e("p",[s._v("将用户的每次请求都通过某种方法强制分发到某一个 Web 服务器上，只要这个 Web 服务器上存储了对应 Session 数据，就可以实现会话跟踪。")]),s._v(" "),e("ul",[e("li",[s._v("优点：使用简单，没有额外开销。")]),s._v(" "),e("li",[s._v("缺点：一旦某个 Web 服务器重启或宕机，相对应的 Session 数据将会丢失，而且需要依赖负载均衡机制。")]),s._v(" "),e("li",[s._v("适用场景：对稳定性要求不是很高的业务情景。")])]),s._v(" "),e("h2",{attrs:{id:"session-集中管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session-集中管理"}},[s._v("#")]),s._v(" Session 集中管理")]),s._v(" "),e("p",[s._v("在单独的服务器或服务器集群上使用缓存技术，如 Redis 存储 Session 数据，集中管理所有的 Session，所有的Web服务器都从这个存储介质中存取对应的 Session，实现 Session 共享。")]),s._v(" "),e("ul",[e("li",[s._v("优点：可靠性高，减少 Web 服务器的资源开销。")]),s._v(" "),e("li",[s._v("缺点：实现上有些复杂，配置较多。")]),s._v(" "),e("li",[s._v("适用场景：Web服务器较多、要求高可用性的情况。")]),s._v(" "),e("li",[s._v("可用方案：开源方案 "),e("code",[s._v("Spring Session")]),s._v("，也可以自己实现，主要是重写 "),e("code",[s._v("HttpServletRequestWrapper")]),s._v(" 中的 "),e("code",[s._v("getSession")]),s._v(" 方法。")])]),s._v(" "),e("h2",{attrs:{id:"基于-cookie-管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于-cookie-管理"}},[s._v("#")]),s._v(" 基于 Cookie 管理")]),s._v(" "),e("p",[s._v("这种方式每次发起请求的时候都需要将 Session 数据放到 Cookie 中传递给服务端。")]),s._v(" "),e("ul",[e("li",[s._v("优点：不需要依赖额外外部存储，不需要额外配置。")]),s._v(" "),e("li",[s._v("缺点：不安全，易被盗取或篡改；Cookie 数量和长度有限制，需要消耗更多网络带宽。")]),s._v(" "),e("li",[s._v("适用场景：数据不重要、不敏感且数据量小的情况。")])]),s._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("p",[s._v("这四种方式，相对来说，"),e("strong",[s._v("Session 集中管理")]),s._v(" 更加可靠，使用也是最多的。")])])}),[],!1,null,null,null);e.default=_.exports}}]);