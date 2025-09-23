<template>
  <div class="clt-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import type { nameType, CollapseEmits, CollapseProps } from './types'
import { collapseContextKey } from './types'

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

const activeNames = ref<nameType[]>(props.modelValue)

watch(() => props.modelValue, () => {
  activeNames.value = props.modelValue
})

const handleItemClick = (item: nameType) => {
  if(props.accordion) {
    activeNames.value = [activeNames.value[0] === item ? '' : item]
  } else {
    if(activeNames.value.includes(item)) {
        activeNames.value.splice(activeNames.value.indexOf(item), 1)
      } 
    else {
        activeNames.value.push(item)
      }
  }
}

emits('update:modelValue', activeNames.value)
emits('change', activeNames.value)

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})

defineOptions({
  name: 'CltCollapse'
})
</script>
