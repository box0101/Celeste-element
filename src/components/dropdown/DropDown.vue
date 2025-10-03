<template>
  <div 
  class="clt-dropdown"
  >
    <ToolTip
      :trigger="trigger"
      :placement="placement"
      :popper-options="PopperOptions"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      @visible-change="visibleChange"
      ref="tooltipRef"
    >
      <slot></slot>

      <template #content>
        <ul class="clt-dropdown__menu">
          <template v-for="option in menuOptions" :key="option.key">
            <li v-if="option.divided" role="separator" class="divided-placeholder"></li>
            <li 
              @click="itemClick(option)"
              class="clt-dropdown__item"
              :class="{'is-disabled': option.disabled, 'is-divided': option.divided}"
              :id="`dropdown-item-${option.key}`"
            >
              <RenderVnode :vNode="option.label"></RenderVnode>
            </li>
          </template>
        </ul>
      </template>
    </ToolTip>
  </div>
</template>

<script setup lang="ts">
import ToolTip from '../toolTip/ToolTip.vue'
import { ref, type Ref } from 'vue'
import type { TooltipInstance } from '../toolTip/types'
import type { DropDownProps, DropDownEmits, DropDownInstance, MenuOption } from './types'
import RenderVnode from './RenderVnode'
const props = withDefaults(defineProps<DropDownProps>(), { hideAfterClick: true})
const emits = defineEmits<DropDownEmits>()
const tooltipRef = ref<TooltipInstance>() as Ref



const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}

const itemClick = (e: MenuOption) => {
  if(e.disabled) {
    return
  }
  emits('select', e)
  if(props.hideAfterClick) {
    tooltipRef.value.hide()
  }
}

defineExpose<DropDownInstance>({
  show: tooltipRef.value?.show,
  hide: tooltipRef.value?.hide
})
</script>