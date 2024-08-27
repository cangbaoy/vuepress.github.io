(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{407:function(_,v,a){"use strict";a.r(v);var t=a(12),r=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"spring-事务管理简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#spring-事务管理简介"}},[_._v("#")]),_._v(" Spring 事务管理简介")]),_._v(" "),v("h2",{attrs:{id:"概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[_._v("#")]),_._v(" 概述")]),_._v(" "),v("p",[_._v("事务原本是数据库中的概念，用于数据访问层。但一般情况下，需要将事务提升到业务层，即 Service 层。这样做是为了能够使用事务的特性来管理具体的业务。")]),_._v(" "),v("p",[_._v("在 Spring 中通常可以通过以下三种方式来实现对事务的管理：")]),_._v(" "),v("ul",[v("li",[_._v("使用 Spring 的事务代理工厂管理事务（已过时）")]),_._v(" "),v("li",[_._v("使用 Spring 的事务注解管理事务")]),_._v(" "),v("li",[_._v("使用 AspectJ 的 AOP 配置管理事务")])]),_._v(" "),v("h2",{attrs:{id:"spring-事务管理-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#spring-事务管理-api"}},[_._v("#")]),_._v(" Spring 事务管理 API")]),_._v(" "),v("p",[_._v("Spring 的事务管理，主要用到两个事务相关的接口。")]),_._v(" "),v("h3",{attrs:{id:"事务管理器接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事务管理器接口"}},[_._v("#")]),_._v(" 事务管理器接口")]),_._v(" "),v("p",[_._v("事务管理器是 "),v("code",[_._v("PlatformTransactionManager")]),_._v(" 接口对象。其主要用于完成事务的提交、回滚，及获取事务的状态信息。")]),_._v(" "),v("p",[_._v("该接口定义了 3 个事务方法：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("void commit(TransactionStatus status)")]),_._v("：事务的提交")]),_._v(" "),v("li",[v("code",[_._v("TransactionStatus getTransaction(TransactionDefinition definition)")]),_._v("：获取事务的状态")]),_._v(" "),v("li",[v("code",[_._v("void rollback(TranscationStatus status)")]),_._v("：事务的回滚")])]),_._v(" "),v("h3",{attrs:{id:"常用的两个实现类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用的两个实现类"}},[_._v("#")]),_._v(" 常用的两个实现类")]),_._v(" "),v("p",[v("code",[_._v("PlatformTransactionManager")]),_._v(" 接口有两个常用的实现类：")]),_._v(" "),v("p",[v("code",[_._v("DataSourceTransactionManager")]),_._v("：使用 JDBC 或 MyBatis 进行持久化数据时使用。\n"),v("code",[_._v("HibernateTransactionManager")]),_._v("：使用 Hibernate 进行持久化数据时使用。")]),_._v(" "),v("h2",{attrs:{id:"spring-的回滚方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#spring-的回滚方式"}},[_._v("#")]),_._v(" Spring 的回滚方式")]),_._v(" "),v("p",[_._v("Spring 事务的默认回滚方式是：发生运行时异常回滚")]),_._v(" "),v("h2",{attrs:{id:"事务定义接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事务定义接口"}},[_._v("#")]),_._v(" 事务定义接口")]),_._v(" "),v("p",[_._v("事务定义接口 "),v("code",[_._v("TransactionDefinition")]),_._v(" 中定义了事务描述相关的三类常量："),v("strong",[_._v("事务隔离级别、事务传播行为、事务默认超时时限")]),_._v("，及对它们的操作。")]),_._v(" "),v("h2",{attrs:{id:"事务的四种隔离级别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事务的四种隔离级别"}},[_._v("#")]),_._v(" 事务的四种隔离级别")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("DEFAULT")]),_._v("：采用 DB 默认的事务隔离级别。MySql 默认为 "),v("code",[_._v("REPEATABLE_READ")]),_._v("；Oracle 默认为："),v("code",[_._v("READ_COMMITTED")]),_._v("；")]),_._v(" "),v("li",[v("code",[_._v("READ_UNCOMMITTED")]),_._v("：读未提交。未解决任何并发问题。")]),_._v(" "),v("li",[v("code",[_._v("READ_COMMITTED")]),_._v("：读已提交。解决脏读，存在不可重复读与幻读。")]),_._v(" "),v("li",[v("code",[_._v("REPEATABLE_READ")]),_._v("：可重复读。解决脏读、不可重复读。存在幻读。")]),_._v(" "),v("li",[v("code",[_._v("SERIALIZABLE")]),_._v("：串行化。不存在并发问题。")])]),_._v(" "),v("h2",{attrs:{id:"事务的七种传播行为"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事务的七种传播行为"}},[_._v("#")]),_._v(" 事务的七种传播行为")]),_._v(" "),v("p",[_._v("所谓事务传播行为是指，处于不同事务中的方法在相互调用时，执行期间事务的维护情况。如，A 事务中的方法 "),v("code",[_._v("a()")]),_._v(" 调用 B 事务中的方法 "),v("code",[_._v("b()")]),_._v("，在调用执行期间事务的维护情况，就称为事务传播行为。事务传播行为是加在方法上的。")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("REQUIRED")]),_._v("：指定的方法必须在事务内执行。若当前存在事务，就加入到当前事务中；若当前没有事务，则创建一个新事务。这种传播行为是最常见的选择，也是 Spring 默认的事务传播行为。")]),_._v(" "),v("li",[v("code",[_._v("SUPPORTS")]),_._v("：指定的方法支持当前事务，但若当前没有事务，也可以以非事务方式执行。")]),_._v(" "),v("li",[v("code",[_._v("MANDATORY")]),_._v("：指定的方法必须在当前事务内执行，若当前没有事务，则直接抛出异常。")]),_._v(" "),v("li",[v("code",[_._v("REQUIRES_NEW")]),_._v("：总是新建一个事务，若当前存在事务，就将当前事务挂起，直到新事务执行完毕。")]),_._v(" "),v("li",[v("code",[_._v("NOT_SUPPORTED")]),_._v("：指定的方法不能在事务环境中执行，若当前存在事务，就将当前事务挂起。")]),_._v(" "),v("li",[v("code",[_._v("NEVER")]),_._v("：指定的方法不能在事务环境下执行，若当前存在事务，就直接抛出异常。")]),_._v(" "),v("li",[v("code",[_._v("NESTED")]),_._v("：指定的方法必须在事务内执行。若当前存在事务，则在嵌套事务内执行；若当前没有事务，则创建一个新事务。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);