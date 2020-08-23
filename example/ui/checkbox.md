---
title: Checkbox 复选框
autoGroup-4: Form
sidebarDepth: 2
---

### Checkbox 基础用法

::: demo
```html
<template>
  <w-checkbox v-model="value1">男</w-checkbox>
  <w-checkbox v-model="value">女</w-checkbox>
</template>
<script>
export default {
  data () {
    return {
      value1: true,
      value: false
    }
  }
}
</script>
```
:::


### Checkbox 默认选中

::: demo
```html
<template>
  <w-checkbox v-model="value" checked>默认选中</w-checkbox>
</template>
<script>
export default {
  data () {
    return {
      value: false
    }
  }
}
</script>
```
:::

### Checkbox 禁用

::: demo
```html
<template>
  <w-checkbox disabled>禁止选中</w-checkbox>
</template>
```
:::

### Checkbox 自定义值

::: demo
```html
<template>
  <w-checkbox v-model="value" true-value="已选中" false-value="未选中">自定义值</w-checkbox>
  <div>值: {{ value }}</div>
</template>
<script>
export default {
  data () {
    return {
      value: '已选中'
    }
  }
}
</script>
```
:::

### Checkbox 组

::: demo
```html
<template>
  <w-checkbox-group v-model="value" >
    <w-checkbox label="A">A</w-checkbox>
    <w-checkbox label="B" checked>B</w-checkbox>
    <w-checkbox label="C">C</w-checkbox>
    <div>你的选项是: {{ value }}</div>
  </w-checkbox-group>
</template>
<script>
export default {
  data () {
    return {
      value: ['A']
    }
  }
}
</script>
```
:::