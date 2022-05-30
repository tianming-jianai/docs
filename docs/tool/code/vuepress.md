# Vuepress2

> 技巧案例

## markdown

目录：`[[toc]]`

代码块高亮：```ts{1,6-8}

禁用行号：```ts:no-line-numbers

代码块md中是否运行编译：v-pre 默认不编译 v-no-pre 编译

导入代码块：`@[code js{1-10}:no-line-numbers](../foo.js)`

## 在markdown中实用Vue

- Markdown 中允许使用 HTML。
- Vue 模板语法是和 HTML 兼容的。
- 你可以在 Markdown 中直接使用 Vue 组件。

`
一加一等于： {{ 1 + 1 }}
<span v-for="i in 3"> span: {{ i }} </span>
`
这是默认主题内置的 `<Badge  text="演示" />` 组件 <Badge text="演示" />


非标准的 HTML 标签不会被 Vue 模板编译器识别成原生 HTML 标签。相反，Vue 会尝试将这些标签解析为 Vue 组件，而显然这些组件通常是不存在的。例如：`<center>`、`<font>`


## 静态资源

在你的 Markdown 内容中使用相对路径来引用静态资源
`![图片](./image.png)`

你可以把一些静态资源放在 Public 目录中，它们会被复制到最终生成的网站的根目录下

## 默认主题

> [继承](https://vuepress2.netlify.app/zh/reference/default-theme/extending.html) 布局插槽 组件替换

VuePress 默认主题有着大量的用户，因此我们对它进行了一些便于继承的设计，以便用户轻松进行定制化。

