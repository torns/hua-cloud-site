# 请求

负责和后台的交互,定义 api,以及一些通用的错误消息处理

vue-hua-cloud 使用的axios 作为网络请求的工具,并且做了一些封装

## 使用方式

### 设置接口地址


在配置文件中配置字段
```docs
VUE_APP_API=/api/
```
上述设置将在您访问 /demo/a 时实际去访问 /api/demo/a

### 不同环境配置

在根目录中有三个不同环境的配置文件

- `.evn` 通过环境配置, 在所有环境都生效
- `.env.development` 开发环境配置
- `.env.production` 生产环境配置
 

比如开发环境配置 /.env.development
```
VUE_APP_API=/api-dev/
```
这样在开发环境和正式环境就有了不同的公共请求地址，在开发环境访问 /demo/a 时实际去访问 /api-dev/demo/a

### 通用配置

在开始使用 vue-hua-cloud 开发项目之前，应该首先修改 src/plugin/request.js 下的设置。

默认的设置需要遵循下面的数据返回格式约定：

```js
{
  // 和后台约定的状态码
  code: 0,
  // 后台返回请求状态信息
  msg: '返回信息',
  // data 内才是真正的返回数据
  data: {
    list: [
      ...
    ]
  }
}
```

在响应拦截器中处理完数据后将会返回：
```js
{
  list: [
    ...
  ]
}
```

### 业务错误

当发生错误时返回的数据示例：
```js
{
  // 和后台约定的状态码
  code: '100001',
  // 后台返回请求状态信息
  msg: '用户没有登录'
}
```
如果针对某个错误指定处理方法，应该在响应拦截器中加入对应的代码：

src/plugin/request.js
```js
service.interceptors.response.use(
  response => {
    // 成功返回数据，在这里判断和后台约定的状态标识
  }
)
```

### 设计 API
假设有一个返回数据的 API 接口，想访问它，首先应该在 d2-admin/src/api 文件夹内创建合适的文件目录，例如：`src/api/user.js`，这个文件中应该导出一个或者多个请求：

```js
import request from '@/plugin/axios'

/**
 * 获取用户列表
 * @param {{}} params 查询字符串
 * @returns {Promise}
 */
export function getUsers (params) {
  return request({
    url: '/users',
    method: 'get',
    params
  })
}
/**
 * 创建用户
 * @param {Number} userId 用户 id, 作为 path 中的 id
 * @param {{}} params 查询字符串
 * @param {{}} data post body
 * @returns {Promise}
 */
export function postUser (userId, params, data) {
  return request({
    url: `/user/${userId}`,
    method: 'post',
    params,
    data
  })
}
/**
 * 删除用户
 * @param {Number} userId 用户 id, 作为 path 中的 id
 * @param {{}} params 查询字符串
 * @returns {Promise}
 */
export function deleteUser (userId, params) {
  return request({
    url: `/user/${userId}`,
    method: 'delete',
    params
  })
}
```

### 使用 API 获取数据
在上面的步骤中创建了 API 文件，您应该在页面中这样使用：

```js
<script>
import { getUsers } from '@/api/user'
export default {
  data() {
    return {
        users: []
    }
  },
  methods: {
    async handleSubmit (form) {
      try {
          const {code, data, message} = await getUsers({
            name: '张',
            age: '18'
          })
          this.$set(this, 'users', data)
      } catch(error) {
          console.error(error)
      }

    }
  }
}
</script>
```

## 跨域问题
如果您的前端项目和后端接口发生跨域，可以在本地配置反向代理：

`项目根目录/vue.config.js`
```js
devServer: {
  proxy: {
    '/api': {
      target: 'http//172.16.18.18:8196',
      changeOrigin: true
    }
  }
}
```
上述配置的结果是在请求 /api/login 时转发到 http://47.100.186.132/your-path/api/login。更多文档见 [Vue CLI 3 | devServer.proxy]()