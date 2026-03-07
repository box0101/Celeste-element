<template>
  <div
  class="clt-input"
  v-bind="$attrs"
  :class="{
    [`clt-input--${type}`]: type,
    [`clt-input--${size}`]: size,
    'is-disabled': disabled,
    'is-prepend': $slots.prepend,
    'is-append': $slots.append,
    'is-prefix': $slots.prefix,
    'is-suffix': $slots.suffix,
    'is-focus': isFocus
  }"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend -->
      <div v-if="$slots.prepend" class="clt-input__prepend">
        <slot name="prepend"></slot>
      </div>

      <!-- wrapper -->
      <div class="clt-input__wrapper">
        <!-- prefix -->
        <span v-if="$slots.prefix" class="clt-input__prefix">
          <slot name="prefix"></slot>
        </span>

        <input
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        class="clt-input__inner"
        ref="inputRef"
        :disabled="disabled"
        :readonly="readonly || isAIPolishing"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :form="form"
        v-model="innerValue"
        @input="inputHandler"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="hanleChange"
        >

        <!-- suffix -->
        <span v-if="$slots.suffix || showClear || showPasswordArea || showAIButton || isAIPolishing" class="clt-input__suffix" @click="keepFocus">
          <slot name="suffix"></slot>
          <Icon
            icon="circle-xmark"
            v-if="showClear"
            class="clt-input__clear"
            @click="clear"
            @mousedown.prevent="NOOP"
          ></Icon>
          <Icon
            icon="eye"
            v-if="showPasswordArea && !passwordVisible"
            class="clt-input__password"
            @click="passwordVisible = !passwordVisible"
          ></Icon>
          <Icon
            icon="eye-slash"
            v-if="showPasswordArea && passwordVisible"
            class="clt-input__password"
            @click="passwordVisible = !passwordVisible"
          ></Icon>
          <Icon
            v-if="showAIButton"
            icon="star"
            class="clt-input__ai-button"
            @click="handleAIPolish"
            @mousedown.prevent="NOOP"
          ></Icon>
          <Icon
            v-if="isAIPolishing"
            icon="sync"
            class="clt-input__ai-button is-loading"
          ></Icon>
        </span>
      </div>

      <!-- append -->
      <div v-if="$slots.append" class="clt-input__append">
        <slot name="append"></slot>
      </div>
    </template>

    <!-- textarea -->
    <template v-else>
      <textarea
        class="clt-textarea__wrapper" 
        v-bind="attrs"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :form="form" 
        v-model="innerValue"
        @input="inputHandler"
        @change="hanleChange"
      ></textarea>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { InputProps, InputEmits } from './types'
import { computed, ref, watch, useAttrs, type Ref, nextTick, inject } from 'vue'
import Icon from '../icon/Icon.vue'
import { FormItemContextKey } from '../form/types'
import { polishTextStream } from '../../services/ai'

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  autocomplete: 'off',
  modelValue: '',
  enableAI: false
})
const emits = defineEmits<InputEmits>()
const innerValue = ref(props.modelValue)
const isFocus = ref(false)
const passwordVisible = ref(false)
const isAIPolishing = ref(false)
const attrs = useAttrs()
const inputRef = ref() as Ref<HTMLElement>
const formItemContext = inject(FormItemContextKey)
let currentAbortController: AbortController | null = null

const runValidate = (trigger?: string) => {
  formItemContext?.validate(trigger).catch(e => console.log(e.errors))
}

const showClear = computed(() =>
  props.clearable &&
  isFocus.value &&
  !!innerValue.value &&
  !props.disabled
)

const showPasswordArea = computed(() =>
  props.showPassword &&
  !props.disabled &&
  !! innerValue.value
)

const showAIButton = computed(() => {
  const enableAI = attrs['enable-ai'] !== undefined ? attrs['enable-ai'] : props.enableAI
  return enableAI && !!innerValue.value && !props.disabled && !isAIPolishing.value
})

const keepFocus = async () => {
  await nextTick()
  inputRef.value.focus()
}

const handleFocus = (event: FocusEvent) => {
  isFocus.value = true
  emits('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocus.value = false
  emits('blur', event)
  runValidate('blur')
}

const inputHandler = () => {
  emits('update:modelValue', innerValue.value)
  emits('input', innerValue.value)
  runValidate('input')
}

const hanleChange = () => {
  emits('change', innerValue.value)
  runValidate('change')
}

const clear = () => {
  innerValue.value = ''
  emits('update:modelValue', '')
  emits('clear', '')
  emits('input', '')
  emits('change', '')
}

const NOOP = () => {}

const handleAIPolish = async () => {
  if (!innerValue.value || !innerValue.value.trim()) {
    return
  }

  if (currentAbortController) {
    currentAbortController.abort()
  }

  currentAbortController = new AbortController()
  isAIPolishing.value = true
  const currentText = innerValue.value

  innerValue.value = ''
  emits('update:modelValue', '')
  emits('input', '')

  emits('polish-start')

  await polishTextStream(currentText, {
    prompt: props.aiPrompt,
    controller: currentAbortController,
    onChunk: (chunk: string) => {
      innerValue.value += chunk
      emits('update:modelValue', innerValue.value)
      emits('input', innerValue.value)
    },
    onComplete: (fullText: string) => {
      innerValue.value = fullText
      emits('update:modelValue', fullText)
      emits('input', fullText)
      emits('change', fullText)
      emits('ai-polish', currentText, fullText)
      emits('polish-end', fullText)
      isAIPolishing.value = false
    },
    onError: (error: string) => {
      emits('ai-error', error)
      isAIPolishing.value = false
    }
  })
}

watch(() => props.modelValue, (newValue) => {
  innerValue.value = newValue
})

defineExpose({
  ref: inputRef,

})

defineOptions({
  name: 'cltInput',
  inheritAttrs: false
})
</script>