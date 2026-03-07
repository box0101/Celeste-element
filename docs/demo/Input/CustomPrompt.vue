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
      placeholder="使用自定义 Prompt 进行润色"
      :enable-ai="true"
      ai-prompt="将以下文本改写为更简洁的表达："
      @ai-polish="handlePolish"
      @ai-error="handleError"
    />
    <p style="margin-top: 10px; color: #666; font-size: 14px;">
      提示：使用 ai-prompt 属性可以自定义润色指令
    </p>
  </div>
</template>
