---
title: Tooltip | clt-Elemnet
description: Tooltip 组件文档
---

# Tooltip 文字提示​
常用于展示鼠标 hover 时的提示信息。

## 基础用法​
在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

使用 `content` 属性来决定 hover 时的提示信息。 由 `placement` 属性决定展示效果： `placement`属性值为：`[方向]-[对齐位置]`；四个方向：`top、left、right、bottom`；三种对齐位置：`start, end`，默认为空。 如 `placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。
<preview path="../demo/Tooltip/Basic.vue" title="基础用法"></preview>

## 不同触发模式
由 `trigger` 属性决定不同触发模式：`click` 或 `hover`， `manual` 属性决定是否由外部触发。 

### 点击触发
<preview path="../demo/Tooltip/Click.vue" title="点击触发"></preview>

### 由外部触发
<preview path="../demo/Tooltip/Manual.vue" title="点击触发"></preview>

## Tooltip API
### Tooltip Attributes
| 属性              | 类型                   | 默认值        | 说明                                 |
| --------------- | -------------------- | ---------- | ---------------------------------- |
| `content`       | `string`             | `''`       | 浮层显示的文本，可被 `slot="content"` 覆盖     |
| `trigger`       | `'hover' \| 'click'` | `'hover'`  | 触发方式                               |
| `placement`     | `Placement`          | `'bottom'` | 浮层出现位置（top, bottom, left, right 等） |
| `manual`        | `boolean`            | `false`    | 手动控制浮层显示，启用后需调用实例方法                |
| `PopperOptions` | `Partial<Options>`   | `{}`       | 自定义 Popper.js 配置（偏移、边界处理等）         |
| `transition`    | `string`             | `'fade'`   | 过渡动画类名                             |
| `openDelay`     | `number`             | `0`        | 鼠标触发打开延迟（ms）                       |
| `closeDelay`    | `number`             | `0`        | 鼠标移出关闭延迟（ms）                       |
