---
title: Message 消息提示
autoGroup-1: Basic
sidebarDepth: 0
---

### Message 基础用法

::: demo
```html
<template>
  <w-button @click="handleClick">show message</w-button>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        showClose: true,
        time: 2000
      })
    }
  }
}
</script>
```
:::
