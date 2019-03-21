# 命令行工具

## 项目初始化

可以通过 vue-cli3预设启动项目

```shell
vue create --preset hua-cloud/hua-cloud-template {项目名称}
```

## 代码生成

## 调试和编译

如果你是通过预设创建的项目, 在 npm/yarn 中可以使用这么几个命令

1. `yarn run dev` 启动本地服开发务器
1. `yarn run build` 编译,会在本地生成 dist 目录, dist 目录中的文件可以部署到线上
1. `yarn run lint` 校验 js
1. `yarn run lint:style` 校验样式
1. `yarn run docs:build` 编译文档,会在项目根目录生成./documentation目录
1. `yarn run docs:dev` 启动文档本地服务器
1. `yarn run docs` 生成文档,并启动文档服务
