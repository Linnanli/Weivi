---
title: button 按钮
autoGroup-1: Basic
sidebarDepth: 0
---

# Button

按钮组件

## 基础用法

常用的按钮基础设置

::: demo 此处放置代码示例的描述信息，支持 `Markdown` 语法，**描述信息只支持单行**
```html
<template>
  <w-button icon="setting" icon-position="right">button1</w-button>
  <w-button icon="setting" icon-position="left" :loading="loading" @click="handleLoaidng">button2</w-button>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    handleLoaidng () {
      this.loading = !this.loading
    }
  }
}
</script>
```
:::

## 按钮组

以按钮组的形式展示按钮，是类似操作的按钮集合

::: demo 此处放置代码示例的描述信息，支持 `Markdown` 语法，**描述信息只支持单行**
```html
<template>
  <w-button-group>
    <w-button icon="left">上一页</w-button>
    <w-button>上一页</w-button>
    <w-button icon="right" icon-position="right">下一页</w-button>
  </w-button-group>
</template>
```
:::