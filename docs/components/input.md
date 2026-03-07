---
title: Input | clt-Elemnet
description: Input 组件文档
---

# Input 输入框
通过鼠标或键盘输入字符

## 基础用法
<preview path="../demo/Input/Basic.vue" title="基础用法" ></preview>

## 禁用状态
通过 `disabled` 属性指定是否禁用 input 组件
<preview path="../demo/Input/Disable.vue" title="禁用文本框" description="Input 禁用文本框"></preview>

## 尺寸
使用 `size` 属性改变输入框大小。 除了默认大小外，还有另外两个选项： `large`, `small`。
<preview path="../demo/Input/Size.vue" title="不同尺寸文本框" description="不同尺寸文本框"></preview>

## 复合型输入框
可以在输入框中前置或后置一个元素，通常是标签或按钮。

可通过 `slot` 来指定在 Input 中分发的前置或者后置的内容。

<preview path="../demo/Input/Combo.vue" title="复合型输入框" description="Input 复合型输入框"></preview>

## Textarea
用于输入多行文本信息可缩放的输入框。 添加 `type="textarea"` 属性来将 input 元素转换为原生的 textarea 元素。

文本域高度可通过 rows 属性控制
<preview path="../demo/Input/Textarea.vue" title="Textarea" description="Textarea"></preview>

## 密码文本框
使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框
<preview path="../demo/Input/Password.vue" title="密码文本框" description="Input 密码文本框"></preview>

## 清空文本框
使用`clearable`属性即可得到一个可一键清空的输入框

<preview path="../demo/Input/Clear.vue" title="清空文本框" description="Input 清空文本框"></preview>

## AI 智能润色
通过 `enableAI` 属性启用 AI 润色功能。输入文本后，点击右侧的魔法棒图标，AI 会自动将文本润色为更专业的文案。

### 配置 API Key

在使用 AI 功能前，需要配置智谱 AI (GLM) API Key：

1. 访问 https://open.bigmodel.cn/ 注册并获取 API Key（新用户赠送 100 万 tokens 免费额度）
2. 复制 `.env.example` 文件为 `.env`
3. 在 `.env` 文件中填入你的智谱 API Key：
   ```bash
   VITE_ZHIPU_API_KEY=your_api_key_here
   ```

### 基础用法

<preview path="../demo/Input/AI.vue" title="AI 润色" description="AI 智能润色功能"></preview>

### 自定义 Prompt

通过 `aiPrompt` 属性可以自定义润色指令，实现文本润色、翻译、改写等多种功能。

#### 文本润色
<preview path="../demo/Input/CustomPrompt.vue" title="自定义 Prompt" description="自定义 AI 润色指令"></preview>

#### 英文翻译
<preview path="../demo/Input/Translation.vue" title="英文翻译" description="中文翻译成英文"></preview>

### API 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| enableAI | 是否启用 AI 润色功能 | boolean | — | false |
| apiKey | 智谱 AI API Key（可选，优先级高于环境变量） | string | — | — |
| aiPrompt | 自定义润色指令 | string | — | — |

### 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| ai-polish | 润色完成时触发 | (original: string, polished: string) |
| ai-error | 润色失败时触发 | (error: string) |
| polish-start | 开始润色时触发 | — |
| polish-end | 润色结束时触发 | (text: string) |