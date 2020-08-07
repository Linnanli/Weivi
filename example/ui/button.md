---
title: button 按钮
autoGroup-1: Basic
sidebarDepth: 0
---

# Button

按钮组件

## 基础用法

常用的按钮类型

::: demo 
```html
<template>
  <div>
    <w-button>Default Button</w-button>
    <w-button type="primary">Primary Button</w-button>
    <w-button type="danger">Danger Button</w-button>
  </div>
  <div>
    <w-button text>Default Text</w-button>
    <w-button type="primary" text>Primary Text</w-button>
    <w-button type="danger" text>Danger Text</w-button>
  </div>
</template>
```
:::

按钮禁用

::: demo 
```html
<template>
  <w-button disabled>Default Button Disabled</w-button>
  <w-button type="primary" disabled>Primary Button Disabled</w-button>
  <w-button type="danger" disabled>Danger Button Disabled</w-button>
  <div>
    <w-button text disabled>Default Text Disabled</w-button>
    <w-button type="primary" text disabled>Primary Text Disabled</w-button>
    <w-button type="danger" text disabled>Danger Text Disabled</w-button>
  </div>
</template>
```
:::

按钮loading

::: demo 
```html
<template>
  <w-button type="primary" :loading="loading" @click="handleLoaidng">Click Me</w-button>
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

按钮icon

::: demo 
```html
<template>
  <w-button type="primary" icon="setting">Primary</w-button>
  <w-button icon="setting" icon-position="right">Primary</w-button>
  <w-button type="danger" icon="setting"></w-button>
</template>
```
:::

## 块状按钮

块状按钮将会充满父级宽度

::: demo 
```html
<template>
  <div class="w-button-block-demo">
    <w-button block>Default Button</w-button>
    <w-button type="primary" block>Primary Button</w-button>
    <w-button type="danger" block>Danger Button</w-button>
  </div>
</template>
<style>
.w-button-block-demo .w-button{
  margin-bottom: 16px;
}
</style>
```
:::

## 按钮组

以按钮组的形式展示按钮，是类似操作的按钮集合

::: demo 
```html
<template>
  <w-button-group @select="handleSelect">
    <w-button icon="left" button-key="prev">上一页</w-button>
    <w-button button-key="center">首页</w-button>
    <w-button icon="right" button-key="next" icon-position="right">下一页</w-button>
  </w-button-group>
</template>
<script>
 export default {
   methods: {
     handleSelect(key) {
       alert(`button key: ${key}`)
     }
   }
 }
</script>
```
:::