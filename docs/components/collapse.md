---
title: Collapse | clt-Elemnet
description: Collapse 组件文档
---

# Collapse 折叠面板
通过折叠面板收纳内容区域

## 基础用法
可同时展开多个面板，面板之间不影响
<preview path="../demo/Collapse/Basic.vue" title="基础用法" ></preview>

## 手风琴效果
每次只能展开一个面板

通过 `accordion` 属性来设置是否以手风琴模式显示。
<preview path="../demo/Collapse/Accordion.vue" title="基础用法" ></preview>

## 自定义面板标题
除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。
<preview path="../demo/Collapse/CustomTitle.vue" title="基础用法" ></preview>

## Collapse API

### Collapse Attributes
| Name       | Description                     | Type                  | Default  |
| ---------- | ------------------------------- | --------------------- | -------- |
| modelValue | 当前展开的面板 name 数组，用于 v-model 双向绑定 | `nameType[]` (`string or number`) | [ ] |
| accordion  | 是否开启手风琴模式，一次只展开一个面板             | `boolean`             | false    | 

### CollapseItem Props
| Name     | Description             | Type               | Default |
| -------- | ----------------------- | ------------------ | ------- |
| name     | 面板唯一标识，用于匹配 activeNames | `string \| number` | —       |
| title    | 面板标题，可通过 slot 自定义内容     | `string`           | —       |
| disabled | 是否禁用面板，禁用后无法展开          | `boolean`          | false   |
| icon     | 面板标题图标，可自定义显示           | `string`           | —       |

### CollapseItem Props
| Name              | Description              | Parameters             |
| ----------------- | ------------------------ | ---------------------- |
| update:modelValue | 当展开状态改变时触发，用于 v-model 同步 | `(values: nameType[])` |
| change            | 展开状态改变时触发，通知外部           | `(values: nameType[])` |
