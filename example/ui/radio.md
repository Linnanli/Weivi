---
title: Radio 单选框
autoGroup-4: Form
sidebarDepth: 0
---

### Radio 基础用法

::: demo
```html
<template>
  <w-radio v-model="value" value="1">男</w-radio>
  <w-radio v-model="value" value="2" checked>女</w-radio>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
```
:::

### Radio 组

::: demo
```html
<template>
  <w-radio-group v-model="value">
    <w-radio value="1">男</w-radio>
    <w-radio value="2" checked>女</w-radio>
  </w-radio-group>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
```
:::
