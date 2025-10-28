<template>
  <div
    class="clt-select"
    :class="{ 'is-disabled': disabled }"
    @click="toggleDropdown"
    @mouseenter="states.mouseHover = true"
    @mouseleave="states.mouseHover = false"
  >
    <ToolTip
      placement="bottom-start"
      ref="tooltipRef"
      manual
      :-popper-options="popperOptions"
      @clcik-outside="controlDropdown(false)"
    >
      <Input
        type="text"
        v-model="states.inputValue"
        :disabled="disabled"
        :placeholder="placeholder"
        readonly
        ref="inputRef"
        @keydown="handleKeydown"
        @blur="handleBlur"
      >
        <template #suffix>
          <Icon icon="circle-xmark" v-if="showClearIcon" class="clt-input__clear" @click="onClear" @click.stop="NOOP"></Icon>
          <Icon icon="angle-down" v-else class="header-angle" :class="{'is-active': isDropdownShow}"></Icon>
        </template>
      </Input>

      <template #content>
        <ul class="clt-select__menu">
          <template v-for="(item, index) in options" :key="index">
            <li
              class="clt-select__menu-item"
              :class="{ 'is-disabled': item.disabled,
                'is-selected': states.selectedOption?.value === item.value,
                'is-highlighted': states.highlightIndex === index
               }"
              :id="`select-item-${item.value}`"
              @click.stop="itemSelect(item)"
            >
              <RenderVnode :v-node="renderLabel ? renderLabel(item) : item.label"></RenderVnode>
            </li>
          </template>
        </ul>
      </template>
    </ToolTip>
  </div>
</template>

<script setup lang="ts">
import type { SelectOption, SelectProps, SelectEmits, SelectStates } from './types'
import type { TooltipInstance } from '../toolTip/types'
import ToolTip from '../toolTip/ToolTip.vue'
import Input from '../input/Input.vue'
import { ref, type Ref, reactive, computed } from 'vue'
import type { InputInstance } from '../input/types'
import Icon from '../icon/Icon.vue'
import RenderVnode from '../dropdown/RenderVnode'

const props = defineProps<SelectProps>()
const emits = defineEmits<SelectEmits>()

const tooltipRef = ref() as Ref<TooltipInstance>
const inputRef = ref() as Ref<InputInstance>
const isDropdownShow = ref(false)

const popperOptions: any = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9],
      },
    },
    {
      name: "sameWidth",
      enabled: true,
      fn: ({ state }: { state: any }) => {
          state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: "beforeWrite",
      requires: ["computeStyles"],
    }
  ],
}

// 初始时默认选中的选项
const findOption = (value: string) => {
  const option = props.options.find(option => option.value === value)
  return option ? option : null
}
const initialOption = findOption(props.modelValue)

const states = reactive<SelectStates>({
  selectedOption: initialOption,
  inputValue: initialOption ? initialOption.label : '',
  mouseHover: false,
  highlightIndex: -1
})

const itemSelect = (e: SelectOption) => {
  if(e.disabled) return
  states.inputValue = e.label
  states.selectedOption = e
  emits('change', e.value)
  emits('update:modelValue', e.value)
  controlDropdown(false)
  inputRef.value.ref.focus()
}

const controlDropdown = (show: boolean) => {
  if(show) {
    tooltipRef.value.show()
  } else {
    tooltipRef.value.hide()
    states.highlightIndex = -1
  }
  isDropdownShow.value = show
  emits('visible-change', show)
}

const toggleDropdown = () => {
  if(props.disabled) return 
  if(isDropdownShow.value) {
    controlDropdown(false)
  } else {
    controlDropdown(true)
  }
}

const showClearIcon = computed(() => {
  return props.clearable 
     && states.mouseHover
     && states.selectedOption
     && states.inputValue.trim()
})

const onClear = () => {
  states.inputValue = ''
  states.selectedOption = null
  emits('clear')
  emits('change', '')
  emits('update:modelValue', '')
}

const handleKeydown = (e: KeyboardEvent) => {
  switch(e.key) {
    case 'Enter':
      if(!isDropdownShow.value) {
        toggleDropdown()
      } else {
        if(states.highlightIndex! > -1 && props.options[states.highlightIndex!]) {
          itemSelect(props.options[states.highlightIndex!])
          controlDropdown(false)
        } else {
          controlDropdown(false)
        }
      }
      
      break
    case 'Escape':
      if(isDropdownShow.value) {
        controlDropdown(false)
      }
      break
    case 'ArrowUp':
      e.preventDefault()
      if(props.options.length > 0) {
        if(states.highlightIndex === 0 || states.highlightIndex === -1) {
          states.highlightIndex = props.options.length - 1
        }
        else {
          states.highlightIndex! --
        }
      }
      break
    case 'ArrowDown':
      e.preventDefault()
      if(props.options.length > 0) {
        if(states.highlightIndex === -1 || states.highlightIndex === props.options.length - 1) {
          states.highlightIndex = 0
        }
        else {
          states.highlightIndex! ++
        }
      }
  }
}

// 失焦则收起浮层
const handleBlur = () => {
  // ✅ 如果下拉展开，则关闭
  if (isDropdownShow.value) {
    controlDropdown(false)
  }
}

const NOOP = () => {}
 
defineOptions({
  name: 'cltSelect'
})
</script>