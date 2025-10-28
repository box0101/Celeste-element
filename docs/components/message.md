---
title: Message | clt-Elemnet
description: Message 组件文档
---

# Message 消息提示​
常用于主动操作后的反馈提示。 

## 基础用法​
默认情况下在顶部显示并在 2 秒后消失。 您可以使用 `duration` 属性控制时间, 可以点击 `Escape` 键直接关闭。

 Message 可以接收一个字符串或一个 `VNode` 作为参数，它会被显示为正文内容。
<preview path="../demo/Message/Basic.vue" title="基本用法"></preview>

## 不同状态​
用来显示「成功、警告、消息、错误」类的操作反馈。

当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 `type` 字段可以定义不同的状态，默认为`info`。 此时正文内容以 `message` 的值传入。
<preview path="../demo/Message/DiffStatus.vue" title="不同状态"></preview>

## Message API

Message 全局消息提示，支持自动关闭、手动关闭、多实例堆叠、自定义内容。

### 方法
`createMessage(options)`

创建消息实例。

| 属性          | 类型                                            | 默认       | 说明                   |
| ----------- | --------------------------------------------- | -------- | -------------------- |
| `message`   | `string \| VNode`                             | —        | 消息内容                 |
| `type`      | `'success' \| 'info' \| 'warning' \| 'error'` | `'info'` | 消息类型                 |
| `duration`  | `number`                                      | `3000`   | 自动关闭时间（ms），0 表示不自动关闭 |
| `showClose` | `boolean`                                     | `false`  | 是否显示关闭按钮             |
| `plain`     | `boolean`                                     | `false`  | 是否朴素样式（背景透明，文字带色）    |
| `offset`    | `number`                                      | `20`     | 距顶部偏移量，堆叠消息自动叠加      |
| `zIndex`    | `number`                                      | 自动       | 层级                   |
| `onDestory` | `() => void`                                  | —        | 消息销毁回调               |

### 状态类型
| 类型      | CSS 类                  | 配色 |
| ------- | ---------------------- | -- |
| success | `clt-message--success` | 绿  |
| info    | `clt-message--info`    | 蓝  |
| warning | `clt-message--warning` | 黄  |
| error   | `clt-message--error`   | 红  |
