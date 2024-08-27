(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{337:function(t,v,_){"use strict";_.r(v);var r=_(12),a=Object(r.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"为什么要使用-docker"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用-docker"}},[t._v("#")]),t._v(" 为什么要使用 Docker")]),t._v(" "),v("p",[t._v("作为一种新兴的虚拟化方式，Docker 跟传统的虚拟化方式相比具有众多的优势。")]),t._v(" "),v("h2",{attrs:{id:"更高效的利用系统资源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更高效的利用系统资源"}},[t._v("#")]),t._v(" 更高效的利用系统资源")]),t._v(" "),v("p",[t._v("由于容器不需要进行硬件虚拟以及运行完整操作系统等额外开销，Docker 对系统资源的利用率更高。无论是应用执行速度、内存损耗或者文件存储速度，都要比传统虚拟机技术更高效。因此，相比虚拟机技术，一个相同配置的主机，往往可以运行更多数量的应用。")]),t._v(" "),v("h2",{attrs:{id:"更快速的启动时间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更快速的启动时间"}},[t._v("#")]),t._v(" 更快速的启动时间")]),t._v(" "),v("p",[t._v("传统的虚拟机技术启动应用服务往往需要数分钟，而 Docker 容器应用，由于直接运行于宿主内核，无需启动完整的操作系统，因此可以做到秒级、甚至毫秒级的启动时间。大大的节约了开发、测试、部署的时间。")]),t._v(" "),v("h2",{attrs:{id:"一致的运行环境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一致的运行环境"}},[t._v("#")]),t._v(" 一致的运行环境")]),t._v(" "),v("p",[t._v("开发过程中一个常见的问题是环境一致性问题。由于开发环境、测试环境、生产环境不一致，导致有些 bug 并未在开发过程中被发现。而 Docker 的镜像提供了除内核外完整的运行时环境，确保了应用运行环境一致性，从而不会再出现 「这段代码在我机器上没问题啊」 这类问题。")]),t._v(" "),v("h2",{attrs:{id:"持续交付和部署"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#持续交付和部署"}},[t._v("#")]),t._v(" 持续交付和部署")]),t._v(" "),v("p",[t._v("对开发和运维（DevOps）人员来说，最希望的就是一次创建或配置，可以在任意地方正常运行。")]),t._v(" "),v("p",[t._v("使用 Docker 可以通过定制应用镜像来实现持续集成、持续交付、部署。开发人员可以通过 Dockerfile 来进行镜像构建，并结合 持续集成(Continuous Integration) 系统进行集成测试，而运维人员则可以直接在生产环境中快速部署该镜像，甚至结合 持续部署(Continuous Delivery/Deployment) 系统进行自动部署。")]),t._v(" "),v("p",[t._v("而且使用 Dockerfile 使镜像构建透明化，不仅仅开发团队可以理解应用运行环境，也方便运维团队理解应用运行所需条件，帮助更好的生产环境中部署该镜像。")]),t._v(" "),v("h2",{attrs:{id:"更轻松的迁移"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更轻松的迁移"}},[t._v("#")]),t._v(" 更轻松的迁移")]),t._v(" "),v("p",[t._v("由于 Docker 确保了执行环境的一致性，使得应用的迁移更加容易。Docker 可以在很多平台上运行，无论是物理机、虚拟机、公有云、私有云，甚至是笔记本，其运行结果是一致的。因此用户可以很轻易的将在一个平台上运行的应用，迁移到另一个平台上，而不用担心运行环境的变化导致应用无法正常运行的情况。")]),t._v(" "),v("h2",{attrs:{id:"更轻松的维护和扩展"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更轻松的维护和扩展"}},[t._v("#")]),t._v(" 更轻松的维护和扩展")]),t._v(" "),v("p",[t._v("Docker 使用的分层存储以及镜像的技术，使得应用重复部分的复用更为容易，也使得应用的维护更新更加简单，基于基础镜像进一步扩展镜像也变得非常简单。此外，Docker 团队同各个开源项目团队一起维护了一大批高质量的 官方镜像，既可以直接在生产环境使用，又可以作为基础进一步定制，大大的降低了应用服务的镜像制作成本。")]),t._v(" "),v("h2",{attrs:{id:"对比传统虚拟机总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对比传统虚拟机总结"}},[t._v("#")]),t._v(" 对比传统虚拟机总结")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("特性")]),t._v(" "),v("th",[t._v("容器")]),t._v(" "),v("th",[t._v("虚拟机")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("启动")]),t._v(" "),v("td",[t._v("秒级")]),t._v(" "),v("td",[t._v("分钟级")])]),t._v(" "),v("tr",[v("td",[t._v("硬盘使用")]),t._v(" "),v("td",[t._v("一般为 "),v("code",[t._v("MB")])]),t._v(" "),v("td",[t._v("一般为 "),v("code",[t._v("GB")])])]),t._v(" "),v("tr",[v("td",[t._v("性能")]),t._v(" "),v("td",[t._v("接近原生")]),t._v(" "),v("td",[t._v("弱于")])]),t._v(" "),v("tr",[v("td",[t._v("系统支持量")]),t._v(" "),v("td",[t._v("单机支持上千个容器")]),t._v(" "),v("td",[t._v("一般几十个")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);