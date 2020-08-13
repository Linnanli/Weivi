---
title: Checkbox 复选框
autoGroup-4: Form
sidebarDepth: 2
---

### Checkbox 基础用法

::: demo
```html
<template>
  <w-checkbox v-model="value1" checked>男</w-checkbox>
  <w-checkbox v-model="value" disabled checked>女</w-checkbox>
</template>
<script>
export default {
  data () {
    return {
      value1: '1',
      value: ''
    }
  }
}
</script>
```
:::

### Checkbox 自定义值

::: demo
```html
<template>
  <w-checkbox v-model="value" true-value="男" false-value="女">性别</w-checkbox>
  <div>你的性别是: {{ value }}</div>
</template>
<script>
export default {
  data () {
    return {
      value: '男'
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
    <w-checkbox value="A">A</w-checkbox>
    <w-checkbox value="B">B</w-checkbox>
    <w-checkbox value="C">C</w-checkbox>
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