(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{565:function(t,s,e){"use strict";e.r(s);var n=e(12),a=Object(n.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"说说-exchanger-原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说说-exchanger-原理"}},[this._v("#")]),this._v(" 说说 Exchanger 原理")]),this._v(" "),t("p",[this._v("当一个线程到达 "),t("code",[this._v("exchange")]),this._v(" 调用点时，如果它的伙伴线程此前已经调用了此方法，那么它的伙伴会被调度唤醒并与之进行对象交换，然后各自返回。如果它的伙伴还没到达交换点，那么当前线程将会被挂起，直至伙伴线程到达——完成交换正常返回；或者当前线程被中断——抛出中断异常；又或者是等候超时——抛出超时异常。")])])}),[],!1,null,null,null);s.default=a.exports}}]);