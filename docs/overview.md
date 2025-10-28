---
title: Overview | clt-Elemnet
description:  组件总览
---

# Overview 组件总览
以下是 Clt-Element 提供的所有组件。

## 安装
```
npm i clt-element
```
## 使用
```js
// 全局导入组件库
import CltElement from 'clt-element'

// 引入样式
import 'clt-element/dist/style.css'

import { createApp } from 'vue'
import App from './App.vue'

// 全局注册组件库
createApp(App).use(CltElement).mount('#app')

```

## Basic 基础组件

### Button
<preview path="./Overview/Button.vue" title="Button按钮"></preview>

### Collapse
<preview path="./Overview/Collapse.vue" title="Collapse折叠面板"></preview>

### Dropdown
<preview path="./Overview/Dropdown.vue" title="Dropdown下拉菜单"></preview>

### Form
<preview path="./Overview/Form.vue" title="Form表单"></preview>

### Icon
<preview path="./demo/Icon/Basic.vue" title="Icon图标"></preview>

### Input
<preview path="./Overview/Input.vue" title="Input输入框"></preview>

### Message
<preview path="./demo/Message/Basic.vue" title="Message消息提示"></preview>

### Select
<preview path="./Overview/Select.vue" title="Select选择器"></preview>

### Switch
<preview path="./Overview/Switch.vue" title="Switch开关"></preview>

### Tooltip
<preview path="./demo/Tooltip/Basic.vue" title="Tooltip文字提示"></preview>