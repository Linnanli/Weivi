---
title: Switch 开关
autoGroup-4: Form
sidebarDepth: 2
---

### Switch 基础用法

::: demo
```html
<template>
  <w-switch v-model="value" activeValue="man" inactiveValue="woman"/>
</template>
<script>
export default {
  data () {
    return {
      value: 'man'
    }
  }
}
</script>
```
:::

### Switch 自定义值

::: demo
```html
<template>
  <w-switch v-model="value" activeValue="man" inactiveValue="woman"/>
</template>
<script>
export default {
  data () {
    return {
      value: 'man'
    }
  }
}
</script>
```
:::

### Switch 自定义值

::: demo
```html
<template>
  <w-switch v-model="value" activeText="男" inactiveText="女"/>
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

### Switch 禁用

::: demo
```html
<template>
  <w-switch v-model="value" disabled />
  <w-switch v-model="value1" disabled />
</template>
<script>
export default {
  data () {
    return {
      value: true,
      value1: false
    }
  }
}
</script>
```
:::
