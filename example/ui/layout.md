---
title: Layout 布局
autoGroup-1: Basic
sidebarDepth: 0
---

### Grid 基础用法

::: demo
```html
<template>
  <w-layout class="layout-demo-1">
    <w-header>header</w-header>
    <w-main>main</w-main>
  </w-layout>
  <!-- <w-layout>
    <w-header>header</w-header>
    <w-layout>
      <w-aside>aside</w-aside>
      <w-main>main</w-main>
    </w-layout>
  </w-layout> -->
</template>
<style>
.layout-demo-1 .w-header {
  background-color: #b3c0d1;
}
.layout-demo-1 .w-main {
  background-color: #e9eef3;
  height: 200px;
}
</style>
```
:::

::: demo
```html
<template>
  <w-layout class="layout-demo-2">
    <w-header>header</w-header>
    <w-layout>
      <w-aside>aside</w-aside>
      <w-main>main</w-main>
    </w-layout>
  </w-layout>
</template>
<style>
.layout-demo-2 .w-header {
  background-color: #b3c0d1;
}
.layout-demo-2 .w-main {
  background-color: #e9eef3;
  height: 200px;
}
.layout-demo-2 .w-aside {
  background-color: #d3dce6;
  width: 120px;
}
</style>
```
:::
::: demo
```html
<template>
  <w-layout class="layout-demo-3">
    <w-header>header</w-header>
    <w-layout>
      <w-aside>aside</w-aside>
      <w-main>main</w-main>
    </w-layout>
    <w-footer>footer</w-footer>
  </w-layout>
</template>
<style>
.layout-demo-3 .w-header {
  background-color: #b3c0d1;
}
.layout-demo-3 .w-main {
  background-color: #e9eef3;
  height: 200px;
}
.layout-demo-3 .w-aside {
  background-color: #d3dce6;
  width: 120px;
}
.layout-demo-3 .w-footer {
  background-color: #b3c0d1;
  height: 30px;
}
</style>
```
:::