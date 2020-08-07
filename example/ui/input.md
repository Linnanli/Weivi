---
title: input 输入框
autoGroup-3: Form
sidebarDepth: 0
---

## input 输入框

input组件

### 基础用法

::: demo
```html
<template>
  <w-input v-model="value" placeholder="请输入"/>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
:::

### 禁用状态

::: demo
```html
<template>
  <w-input v-model="value" placeholder="请输入" disabled/>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
:::

### 可清空

::: demo
```html
<template>
  <w-input v-model="value" placeholder="请输入" clearable/>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
:::

### 带icon的输入框

::: demo
```html
<template>
  <div class="input-demo-block">属性定义icon:</div>
  <div class="input-demo-block">
    前缀icon：
    <w-input v-model="value" prefix-icon="setting" placeholder="请输入"/>
  </div>
  <div class="input-demo-block">
    后缀icon：
    <w-input v-model="value1" suffix-icon="setting" placeholder="请输入"/>
  </div>
  <div class="input-demo-block">slot定义icon:</div>
  <div class="input-demo-block">
    前缀icon：
    <w-input v-model="value2" placeholder="请输入">
      <w-icon class="w-input__icon" slot="prefix" name="loading"/>
    </w-input>
  </div>
  <div class="input-demo-block">
    后缀icon：
    <w-input v-model="value3" placeholder="请输入">
      <w-icon class="w-input__icon" slot="suffix" name="loading"/>
    </w-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      value1: '',
      value2: '',
      value3: ''
    }
  }
}
</script>
<style>
  .input-demo-block{
    margin-bottom: 16px;
  }
</style>
```
:::