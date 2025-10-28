---
title: Switch | clt-Elemnet
description: Switch 组件文档
---

# Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。 可以使用 `--el-switch-on-color` 属性与 `--el-switch-off-color` 属性来设置开关的背景色。
<preview path="../demo/Switch/Basic.vue" title="基础用法" ></preview>

## 尺寸
<preview path="../demo/Switch/Size.vue" title="不同尺寸" ></preview>

## 文字描述​
使用`activeText`属性与`inactiveText`属性来设置开关的文字描述。 
<preview path="../demo/Switch/Text.vue" title="文字描述" ></preview>

## 禁用状态​
设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。
<preview path="../demo/Switch/Disabled.vue" title="禁用状态" ></preview>

## 自定义值
Switch 组件支持自定义开关状态的值，通过 `activeValue` 和 `inactiveValue` props 自定义开关的值，结合 v-model 实现双向绑定。

默认值：`activeValue: true`，`inactiveValue: false`。用户可以自定义为任意 `boolean | string | number`。
<preview path="../demo/Switch/CustomValue.vue" title="自定义值" ></preview>