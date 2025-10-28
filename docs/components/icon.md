---
title: Icon | clt-Elemnet
description: Icon 组件文档
---

# Icon 图标​
提供了一套常用的图标集合。

## 安装
### 使用包管理器
```
npm install clt-element
```

### 安装依赖
```
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome@latest
```

## 注册
### 全局注册
```
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import CltUI from 'clt-ui'
import '@fortawesome/fontawesome-svg-core/styles.css'

const app = createApp(App)
app.use(CltUI)
app.mount('#app')
```

### 按需导入
```
import { CltIcon } from 'clt-ui'

export default {
  components: { CltIcon }
}
```

## 基本用法
<preview path="../demo/Icon/Basic.vue" title="基础用法" ></preview>

## Icon API
### Icon Attributes
| 属性                | 类型            | 默认值        |  说明                    |   
| ----------------- | ------------- | ---------- | --------------------- |
| `icon`            | `string       | object     | IconDefinition`       |  |
| `type`            | `'primary'    | 'success'  | 'warning'             | 'danger' | 'info'`             | -    | 组件主题色，映射 CSS 变量 |                        |
| `color`           | `string`      | -          | 自定义颜色，优先级高于 `type`    |         
| `size`            | `'2xs'        | 'xs'       | 'sm'                  | 
| `spin`            | `boolean`     | false      | 是否旋转动画                |     
| `flip`            | `'horizontal' | 'vertical' | 'both'`               | 
| `border`          | `boolean`     | false      | 是否显示边框（可扩展）           |         
| 其他 FontAwesome 属性 | -             | -          | 透传 FontAwesome 所有原生属性 |      
| `$attrs`          | -             | -          | 支持事件和自定义属性透传          |        
