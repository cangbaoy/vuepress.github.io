(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{568:function(t,s,l){"use strict";l.r(s);var n=l(12),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"讲讲线程池的实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讲讲线程池的实现原理"}},[t._v("#")]),t._v(" 讲讲线程池的实现原理")]),t._v(" "),s("p",[t._v("当提交一个新任务到线程池时，线程池的处理流程如下：")]),t._v(" "),s("ol",[s("li",[t._v("线程池判断核心线程池里的线程是否都在执行任务。如果不是，则创建一个新的工作线程来执行任务。如果核心线程池里的线程都在执行任务，则进入下个流程。")]),t._v(" "),s("li",[t._v("线程池判断工作队列是否已经满。如果工作队列没有满，则将新提交的任务存储在这个工作队列里。如果工作队列满了，则进入下个流程。")]),t._v(" "),s("li",[t._v("线程池判断线程池的线程是否都处于工作状态。如果没有，则创建一个新的工作线程来执行任务。如果已经满了，则交给饱和策略来处理这个任务。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);