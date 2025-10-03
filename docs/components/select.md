---
title: Select | clt-Elemnet
description: Select 组件文档
---

# Select 选择器
当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法
适用广泛的基础单选 `v-model` 的值为当前被选中的 `el-option` 的 value 属性值

<preview path="../demo/Select/Basic.vue" title="基础用法" ></preview>

## 自定义模板
你可以自定义如何来渲染每一个选项。

将自定义的 HTML 模板插入 `el-option` 的 slot 中即可。

<preview path="../demo/Select/CustomRender.vue" title="自定义模板" ></preview>