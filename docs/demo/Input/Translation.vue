<script setup>
import { ref } from 'vue'
import Input from '../../../src/components/input/Input.vue'

const text = ref('')
const handlePolish = (original, polished) => {
  console.log('原文:', original)
  console.log('翻译后:', polished)
}

const handleError = (error) => {
  console.error('翻译失败:', error)
  alert(error)
}
</script>

<template>
  <div>
    <Input
      v-model="text"
      type="text"
      placeholder="输入中文进行翻译"
      :enable-ai="true"
      ai-prompt="将以下中文翻译成英文："
      @ai-polish="handlePolish"
      @ai-error="handleError"
    />
    <p style="margin-top: 10px; color: #666; font-size: 14px;">
      提示：输入中文，点击魔法棒图标即可翻译成英文
    </p>
  </div>
</template>
