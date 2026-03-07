<script setup>
import { ref } from 'vue'
import Input from '../../../src/components/input/Input.vue'

const text = ref('')
const handlePolish = (original, polished) => {
  console.log('原文:', original)
  console.log('润色后:', polished)
}

const handleError = (error) => {
  console.error('润色失败:', error)
  alert(error)
}
</script>

<template>
  <div>
    <Input
      v-model="text"
      type="text"
      placeholder="输入一些文字，然后点击右侧的魔法棒图标"
      :enable-ai="true"
      @ai-polish="handlePolish"
      @ai-error="handleError"
    />
    <p style="margin-top: 10px; color: #666; font-size: 14px;">
      提示：确保已配置智谱 AI API Key（在 .env 文件中）
    </p>
  </div>
</template>
