---
pageClass: getting-started
---

# 介绍

[vue-hua-cloud-template](https://github.com/hua-cloud/cloud-template) 是基于 Vue2.6+, Vue-cli3.x, Element UI的一个前端管理后台集成解决方案。它使用了最新的前端技术栈, 强化统一的编码规范，提炼了典型的业务模型，它可以作为公司统一的中后台项目模板。

## 功能

- 代码校验
- 样式校验
- commit校验
- 编辑器配置
- 代码生成
- 注释生成文档
- 自动加载

## 前序准备

你需要全局安装 Vue-cli3

Vue CLI 3 需要 Node.js 8.9 或更高版本 (推荐 8.11.0+) <br>
必须安装 @vue/cli 3.x 以上版本 <br>
[如何安装 Vue CLI](https://cli.vuejs.org/zh/guide/installation.html)

## 目录结构

```text
📂src
├── 📂api               // 接口文件夹
│   └── user.js
├── 📂app               // app 组件
│   ├── app.js
│   ├── app.scss
│   └── index.vue
├── 📂asset              // 资源文件夹
│   ├── 📂icons
│   ├── 📂images
│   └── 📂style
├── 📂components         // 资源文件夹
│   ├── 📂global         // 全局公共组件
│   ├── 📂HelloWorld     // 局部组件
│   └── index.js
├── 📂directives         // 指令文件夹
│   ├── 📂global         // 全局公共指令
│   ├── 📂test
│   └── index.js  
├── 📂filters            // 过滤器文件夹
│   ├── 📂global         // 全局公共过滤器
│   └── index.js  
├── 📂layout             // layout 公共组件骨架
│   └── 📂default  
├── 📂menus              // 项目显示的菜单  
│   ├── 📂modules        // 按模块划分的菜单
│   └── index.js
├── 📂mixins             // mixin
│   ├── 📂global         // 全局 mixin
│   └── index.js
├── 📂plugins             // mixin
│   ├── ajax.js           // 请求接口封装的方法 this.$ajax.get()
│   ├── element.js        // ElementUI 使用
│   └── request.js        // 基于axios的封装拦截处理
├── 📂router              // 路由
│   ├── 📂modules         // 按模块划分的路由
│   ├── routes.js
│   └── index.js
├── 📂store               // vuex 状态管理  
│   ├── 📂modules         // 按模块划分的store
│   ├── getters.js
│   └── index.js  
├── 📂utils               // 工具类文件夹  
│   └── index.js
├── 📂views               // 页面文件夹
│   ├── 📂dashboard        // 默认首页
│   └── 📂login           // 登录页面
├── main.js               // 主入口
..
```

## 安装

### 1. 快速安装命令

``` sh
vue create --preset hua-cloud/cloud-template {项目名称}
```

### 2. 启动开发环境

``` sh
cd my-project

npm run dev
```

## 规划

1. 完善generator:
    - compoents
    - view
    - model
    - router
2. 常用业务组件封装
    - form
    - table (excel导入导出)
    - CRUD (form + table + pagination)
3. 完善数据模型设计
    - ORM: API(CURD)->状态管理->持久化存储->监控告警
    - 开发只需要定义模型(model), 即可生成 增删改查 api, 状态管理store
    - 增强数据类型校验,避免现在看别人的代码都不知到一个对象里面到底有什么属性
    - 业务逻辑和视图解耦
4. 完善错误监控和日志监控
    - 插件化, 使用者可以选择是否使用,只需一个配置,无需任何操作
    - 错误监控, 增强前端应用鲁棒性
    - 日志监控, 解决开发调试效率, 关键是解决当前 bug 无法重现, 需要用户配合
        - 统一日志格式
        - 使用indexDB, websql, localstorage 多种方式, 能兼容大部分端
    - 性能监控, 这个可以优先级低些
