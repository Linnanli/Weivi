---
title: Message 消息提示
autoGroup-1: Basic
sidebarDepth: 0
---

### Message 基础用法

::: demo
```html
<template>
  <w-button @click="handleMessage">显示信息</w-button>
  <w-button @click="handleSuccessMessage">信息类型</w-button>
  <w-button @click="handleUsePromise">使用promise</w-button>
</template>
<script>
export default {
  methods: {
    handleMessage() {
      this.$message('这是一条消息')
    },
    handleSuccessMessage() {
      this.$message({
        type: 'success',
        message: '这条消息使用onClose监听关闭',
        onClose: () => {
          this.$message('message已关闭')
        }
      })
    },
    handleUsePromise() {
      this.$message({
        type: 'success',
        message: '这条消息使用promise监听关闭'
      }).then(() => {
        this.$message('message已关闭')
      })
    }
  }
}
</script>
```
:::

### Message 静态方法

::: demo
```html
<template>
  <w-button @click="handleShowSuccess">成功信息</w-button>
  <w-button @click="handleShowError">错误信息</w-button>
  <w-button @click="handleShowWarning">警告信息</w-button>
  <w-button @click="handleShowInfo">提示信息</w-button>
</template>
<script>
export default {
  methods: {
    handleShowSuccess() {
      this.$message.success({
        message: '恭喜你，这是一条成功消息',
        time: 2000
      })
    },
    handleShowError() {
      this.$message.error({
        message: '很遗憾，这是一条错误消息',
        time: 2000
      })
    },
    handleShowWarning() {
      this.$message.warning({
        message: '很遗憾，这是一条警告消息',
        time: 2000
      })
    },
    handleShowInfo() {
      this.$message.info({
        message: '很遗憾，这是一条警告消息',
        time: 2000
      })
    }
  }
}
</script>
```
:::
