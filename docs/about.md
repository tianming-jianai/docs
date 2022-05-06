---
navbar: false
sidebar: auto
# title: 关于我1 # 侧边栏标题
---

# 关于我

热爱生活，勤于实践

## 二级标题
```ts{1,6-8}:no-line-numbers
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```


## 二级标题
```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

aaa
## 二级标题
@[code{1-10} js{3}:no-line-numbers](./.vuepress/config.js)


## 二级标题
一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>

<br/>

这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />

<br/>

![My Blog Logo](/asserts/img/logo.png)

<img :src="$withBase('/asserts/img/logo.png')" alt="VuePress Logo">


## container

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::