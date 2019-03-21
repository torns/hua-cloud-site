# 路由

## 数据

基本的路由配置在 src/router/routes.js.
在 src/router/ modules 目录放的是模块的路由.
它可以自动带入, 所以你不需要 import, 直接在 modules 目录添加js 文件就可以了.
推荐使用命令行创建路由配置

## 路由配置

vue-hua-cloud 拒绝使用嵌套路由, 主要出于这几点考虑

1. 使用嵌套路由,view 当中必须要有父页面中加入一个 router-view
2. 使用嵌套路由 view 的目录结构以及菜单必须耦合,实际上业务场景中,视图和菜单并不一定是一一对应的关系
3. 为了和菜单解耦,以及方便代码生成

## 示例

/src/router/modules/instance.js

```js
import Layout from '@/layout/default';

export default {
  path: '/instance',
  name: 'instance',
  component: Layout,
  redirect: { name: 'instance-list' },
  children: (pre => [
    {
      path: 'list',
      name: `${pre}list`,
      component: () => import('@/views/instance/list'),
      meta: {
        title: '实例列表',
        breadcrumb: ''
      },
    },
    {
      path: 'detail/:id',
      name: `${pre}detail`,
      component: () => import('@/views/instance/detail'),
      meta: {
        title: '实例详情',
        active: '/instance/list', // 因为路由不显示在页面，所有需要设置当刷新页面时，侧边菜单选中项
        breadcrumb: [`${pre}list`, `${pre}detail`]
      },
    },
  ])('instance-'),
};

```

而你的视图目录应该是这样的

```dir
src
└── views
    ├── instance
    │   ├── detail
    │   │   └── index.vue
    │   └── list
    │       └── index.vue
    ...
```