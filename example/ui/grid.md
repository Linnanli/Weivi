---
title: Grid 栅格
autoGroup-2: Layout
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

### Grid 偏移

::: demo
```html
<template>
  <div class="grid-demo-3">
    <w-row :gutter="20">
      <w-col :span="8">
        <div class="grid-content">col-8</div>
      </w-col>
      <w-col :span="8" :offset="8">
        <div class="grid-content">col-8</div>
      </w-col>
    </w-row>
    <w-row :gutter="20">
      <w-col :span="6">
        <div class="grid-content">col-6</div>
      </w-col>
      <w-col :span="6">
        <div class="grid-content">col-6</div>
      </w-col>
      <w-col :span="6" :offset="6">
        <div class="grid-content">col-6</div>
      </w-col>
    </w-row>
  </div>
</template>
<style>
  .grid-demo-3 .grid-content {
    background-color: #e5e9f2;
    text-align: center;
    height: 36px;
    line-height: 36px;
  }
  .grid-demo-3 .w-row {
    margin-bottom: 20px;
  }
</style>
```
:::

### Grid 响应式

::: demo
```html
<template>
  <div class="grid-demo-4">
    <w-row :gutter="20">
      <w-col :xs="{ span: 24 }" :sm="{ span: 12 }" :md="{ span: 8 }" :lg="{ span: 4 }">
        <div class="grid-content">col-8</div>
      </w-col>
      <w-col :xs="{ span: 24 }" :sm="{ span: 12 }" :md="{ span: 8 }" :lg="{ span: 4 }">
        <div class="grid-content">col-8</div>
      </w-col>
      <w-col :xs="{ span: 24 }" :sm="{ span: 12 }" :md="{ span: 8 }" :lg="{ span: 4, offset: 8 }">
        <div class="grid-content">col-8</div>
      </w-col>
      <w-col :xs="{ span: 24 }" :sm="{ span: 12 }" :md="{ span: 8 }" :lg="{ span: 4 }">
        <div class="grid-content">col-8</div>
      </w-col>
    </w-row>
  </div>
</template>
<style>
  .grid-demo-4 .grid-content {
    background-color: #e5e9f2;
    text-align: center;
    height: 36px;
    line-height: 36px;
  }
  .grid-demo-4 .w-col {
    margin-bottom: 20px;
  }
</style>
```
:::