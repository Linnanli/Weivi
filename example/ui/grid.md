---
title: Grid 栅格
autoGroup-1: Basic
sidebarDepth: 0
---

### Grid 基础用法

::: demo
```html
<template>
  <div class="grid-demo-1">
    <w-row>
      <w-col :span="24">
        col-24
      </w-col>
    </w-row>
    <w-row>
      <w-col :span="6">
        col-6
      </w-col>
      <w-col :span="6">
        col-6
      </w-col>
      <w-col :span="6">
        col-6
      </w-col>
      <w-col :span="6">
        col-6
      </w-col>
    </w-row>
    <w-row>
      <w-col :span="8">
        col-8
      </w-col>
      <w-col :span="8">
        col-8
      </w-col>
      <w-col :span="8">
        col-8
      </w-col>
    </w-row>
    <w-row>
      <w-col :span="12">
        col-8
      </w-col>
      <w-col :span="12">
        col-8
      </w-col>
    </w-row>
  </div>
</template>
<style>
  .grid-demo-1 .w-row{
    margin-bottom: 20px;
  }
  .grid-demo-1 .w-col{
    text-align: center;
    height: 36px;
    line-height: 36px;
  }
  .grid-demo-1 .w-col:nth-of-type(even) {
    background-color: #e5e9f2;
  }
  .grid-demo-1 .w-col:nth-of-type(odd) {
    background-color: #d3dce6;
  }
</style>
```
:::

### Grid 间隔

::: demo
```html
<template>
  <div class="grid-demo-2">
    <w-row :gutter="20">
      <w-col :span="8">
        <div class="grid-content">col-8</div>
      </w-col>
      <w-col :span="8">
        <div class="grid-content">col-8</div>
      </w-col>
      <w-col :span="8">
        <div class="grid-content">col-8</div>
      </w-col>
    </w-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 10
      }
    }
  }
</script>
<style>
  .grid-demo-2 .grid-content {
    background-color: #e5e9f2;
    text-align: center;
    height: 36px;
    line-height: 36px;
  }
</style>
```
:::