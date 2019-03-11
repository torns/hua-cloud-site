# 规范

## 原则

### 一致性

* **文件结构一致性**：与框架约定的文件在工程中作用的一致
* **代码结构一致性**：组件选项顺序一致性
* **命名的一致性**：文件、Class、变量等命名的一致
* **注释风格一致性**： 函数、变量等都依据JSDoc规范添加注释

### 共享

* **公用代码的共享**：包括工具类函数、通用模板等可以公用代码及时告知相关同事
* **状态数据的共享**：多个页面使用同一个接口响应的状态数据，先校验是否存在后再按需重新请求接口

### 反馈

* **代码Bug反馈**：发现代码有Bug及时反馈团队，优化更改

### 兼容性

* **数据兼容性**：编写处理数据相关的逻辑时，考虑好数据不存在等情况的处理等
* **代码的兼容性**：使用函数、组件等涉及多处的代码时，优化时要兼容好之前代码考虑的情况

## 风格

在使用 vue-hua-cloud-template 开发时，建议按约定风格编码，有利于更好的协作开发，风格内容节选自 [Vue 官方风格指南](https://cn.vuejs.org/v2/style-guide)

### 组件数据

组件的 data 必须是一个函数。

```js
// bad
export default {
  data: {
    foo: 'bar'
  }
}

// good
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
```

### 组件样式设置作用域

在单文件组件中, 使用 `scoped` 特性, 尽可能的避免不必要样式冲突

```xml
<!-- bad -->
<template>
  <button class="btn btn-close">X</button>
</template>

<style>
.btn-close {
  background-color: red;
}
</style>

<!-- good -->
<template>
  <button class="button button-close">X</button>
</template>

<!-- 使用 `scoped` 特性 -->
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style>

```

### 自闭合组件

在单文件组件中没有内容的组件、字符串模板和 JSX 中应该是自闭合的。

```html
<!-- bad -->
<my-component></my-component>

<!-- good -->
<my-component />
```

### 指令缩写

指令缩写，用 `:` 表示 `v-bind:` ，用 `@` 表示 `v-on:`

```html
<!-- bad -->
<input
  v-bind:value="value"
  v-on:input="onInput"
>

<!-- good -->
<input
  :value="value"
  @input="onInput"
>
```

### Props 换行

多个 Props 的元素应该分多行撰写，每个 Props 一行，闭合标签单起一行。

```html
<!-- bad -->
<my-component foo="a" bar="b" baz="c" />

<!-- good -->
<my-component
  foo="a"
  bar="b"
  baz="c"
/>
```

### Props 顺序

标签的 Props 应该有统一的顺序，依次为指令、属性和事件。

```html
<my-component
  v-if="if"
  v-show="show"
  v-model="value"
  ref="ref"
  :key="key"
  :text="text"
  @input="onInput"
  @change="onChange"
/>
```

### 组件选项的顺序

组件选项应该有统一的顺序。

```js
export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data() {},

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {}
};
```

### 组件/实例选项中的空行

组件选项较多时，建议在属性之间添加空行。

```js
export default {
  computed: {
    formattedValue() {
      // ...
    },

    styles() {
      // ...
    }
  },

  methods: {
    onInput() {
      // ...
    },

    onChange() {
      // ...
    }
  }
};
```

### 单文件组件顶级标签的顺序

单文件组件应该总是让顶级标签的顺序保持一致，标签之间留有空行，
且 `<style>` 要放在最后，因为另外两个标签至少要有一个。

```html
<template>
...
</template>

<script>
/* ... */
</script>

<style>
/* ... */
</style>
```

## 命名

原则用英文，选取简单常见、有意义的单词，可以一个词描述的，不要用多词组合，单词简写要用常见的

### 文件夹/文件/URL命名

小写， 单词用“-”分隔，如：
```xml
folder
some-folder

file.js
some-file.js

http://127.0.0.1:8080/#/system-admin/person-detail

```

### Vue文件相关

* **组件名称** <br>
   JS定义以大写开头驼峰式，如：
   ```xml
   CamelCase
   
   import CamelCase from './CamelCase.vue'
   ```
   模板用全小写， 单词用“-”分隔，如：
   ```xml
   camle-case

   <camle-case></camle-case>
   ```
* **紧密耦合的组件名** <br>
  和父组件紧密耦合的子组件应该以父组件名作为前缀命名
  ```xml
  // bad
  components/
  |- TodoList.vue
  |- TodoItem.vue
  └─ TodoButton.vue
  
  // good
  components/
  |- TodoList.vue
  |- TodoListItem.vue
  └─ TodoListItemButton.vue
  ```
   
* **组件属性** <br>
   JS定义以小写开头驼峰式，如：
   ```xml
   camelCase

   prop :{
    camelCase：‘’
   }
   ```
   模板用全小写， 单词用“-”分隔，如：
   ```xml
   camle-case

   <div camle-case='100'></div>
   ```

* **事件名称** <br>
   全小写，加“on-”前缀 单词用“-”分隔，如：
   ```xml
   on-change

   this.$emit('on-change', data)
   ```

### JS命名

|类型|规范|示例|
|----|----|----|
|常量|全字符大写，单词用 '_' 分隔 |FETCH_USERS、GET_USERS|
|变量、函数|小写开头驼峰式|camelCase|
|类、特殊意义的命名空间|大写开头驼峰式|CamelCase|
|方法、函数|a.  动词 或 动词+名称 组合 <br/>b.  get 必须要有返回值||
|布尔值变量|is  或 has 前缀||
|私有属性或方法|用 '_' 或 '__' 前缀||
|事件处理函数|handle前缀 或 Handler 后缀||

### CSS的命名

采用BEM规范命名，即块（block）、元素（element）、修饰符（modifier）的缩写，利⽤不同的区块，功能以及样式来给元素命名

<img :src="$withBase('/bem.png')"></img>

```xml
.tabs{}
.tabs__item{}
.tabs__item—active{}

SCSS写法
.tabs{
  &__item{
    &—active{}
  }
}
```
