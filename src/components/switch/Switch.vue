<template>
  <div
    class="clt-switch"
    :class="{
      [`clt-switch--${size}`]: size,
      'is-disabled': disabled,
      'is-checked': checked
    }"
    @click="switchValue"
  >
    <input
      class="clt-switch__input"
      ref="input"
      type="checkbox"
      role="switch"
      :name="name"
      :disabled="disabled"
      @keydown.enter="switchValue"
    />
    <div class="clt-switch__core">
      <div class="clt-switch__core-inner">
        <span v-if="activeText || inactiveText" class="clt-switch__core-inner-text">
          {{ checked ? activeText : inactiveText }}
        </span>
      </div>
      <div class="clt-switch__core-action">

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SwitchProps, SwitchEmits } from './types'
import { computed, onMounted, ref, watch } from 'vue'

const props = withDefaults(defineProps<SwitchProps>(),{
  activeValue: true,
  inactiveValue: false
})
const emits = defineEmits<SwitchEmits>()

const input = ref<HTMLInputElement>()
const innerValue = ref(props.modelValue)
const checked = computed(() => innerValue.value === props.activeValue)

const switchValue = () => {
  if(props.disabled) return
  const newValue = checked.value ? props.inactiveValue : props.activeValue
  innerValue.value = newValue
  emits('update:modelValue', newValue)
  emits('change', newValue)
}

onMounted(() => {
  input.value!.checked = checked.value
})
watch(checked, (newValue) => {
  input.value!.checked = newValue
})
watch(() => props.modelValue, (newValue) => {
  innerValue.value = newValue
})

defineOptions({
  name: 'cltSwitch',
  inheritAttrs: false
})
</script>