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
  }"
  :disabled="disabled"
  :type= "nativeType"
  :autofoucs= autofocus
  >
  <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'
withDefaults(defineProps<ButtonProps>(),{
  nativeType: 'button'
})

const buttonRef = ref<HTMLButtonElement>()
defineExpose({
  ref: buttonRef
})

</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'cltButton'
})
</script>

<style scoped>
</style>