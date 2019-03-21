# 命令行工具

## 项目初始化

可以通过 vue-cli3预设创建新的项目

```shell
vue create --preset hua-cloud/hua-cloud-template {项目名称}
```

## 代码生成

通过调用 [vue-cli-hua-cloud-template-generator](https://github.com/hua-cloud/vue-cli-plugin-hua-cloud-template-generator) 插件生成模块文件，

使用前请确保目录结构风格和 [hua-cloud-template](https://github.com/hua-cloud/hua-cloud-template) 项目生成的结构一致。

``` bash
# 添加生成器进项目
# 如果通过 命令vue create --preset hua-cloud/hua-cloud-template 生成的请忽略此操作
vue add hua-cloud-template-generator
```

``` bash
# 使用
$ npm run add

? 你想生成什么啊?
❯ Component 组件
  View 页面
  Store 模块
  Mixin
  Directive 指令
  Filter 过滤器
```
<br>

## 调试和编译

如果你是通过预设创建的项目, 在 npm/yarn 中可以使用这么几个命令

1. `yarn run dev` 启动本地服开发务器
1. `yarn run build` 编译,会在本地生成 dist 目录, dist 目录中的文件可以部署到线上
1. `yarn run lint` 校验 js
1. `yarn run lint:style` 校验样式
1. `yarn run docs:build` 编译文档,会在项目根目录生成./documentation目录
1. `yarn run docs:dev` 启动文档本地服务器
1. `yarn run docs` 生成文档,并启动文档服务
