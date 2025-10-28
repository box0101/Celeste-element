<template>
  <button
  ref="buttonRef"
  class="clt-button"  
  :class="{
    [`clt-button--${type}`]: type,
    [`clt-button--${size}`]: size,
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled,
    'is-loading': loading
  }"
  :disabled="disabled || loading"
  :type= "nativeType"
  :autofocus= "autofocus"
  >
  <Icon icon="spinner" spin v-if="loading"></Icon>
  <Icon :icon="icon" v-if="icon"></Icon>
  <span><slot></slot></span>
  
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'
import Icon from '../icon/Icon.vue'
withDefaults(defineProps<ButtonProps>(),{
  nativeType: 'button'
})

const buttonRef = ref<HTMLButtonElement>()
defineExpose({
  ref: buttonRef
})

defineOptions({
  name: 'cltButton'
})
</script>

<style scoped>
</style>