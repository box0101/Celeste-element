<template>
  <div
    class="clt-tooltip"
    v-on="outerEvents"
    ref="popperContainerNode"
    style="display: inline-block;"
  >
    <div 
      class="clt-tooltip__trigger"
      ref="triggerNode"
      v-on="events"
    >
    <slot></slot>
    </div>

    <Transition :name="transition">
      <div 
        v-if="isOpen"
        class="clt-tooltip__popper"
        ref="overlayNode"
      >
      {{ content }}
      </div>
    </Transition>
    
  </div>
</template>

<script setup lang="ts">
import type { TooltipProps, TooltipEmits } from './types'
import { createPopper, type Instance } from '@popperjs/core'
import { computed, onUnmounted, reactive, watch } from 'vue';
import { ref } from 'vue'
import useClickOutside from '@/composables/useClickOutside'
import type { TooltipInstance } from './types'

const props = withDefaults(defineProps<TooltipProps>(),{
  placement: 'bottom',
  trigger: 'hover',
  transition: 'fade',
  openDelay: 0,
  closeDelay: 0
})
const emits = defineEmits<TooltipEmits>()
const isOpen = ref(false)
const triggerNode = ref<HTMLElement | null>(null)
const overlayNode = ref<HTMLElement | null>(null)
const popperContainerNode = ref<HTMLElement>()
let PopperInstance: Instance | null = null
let events: Record<string, any> = reactive({})
let outerEvents: Record<string, any> = reactive({})
const popperOptions = computed(() => {
  return {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0,20],
        }
      },
    ],
    ...props.PopperOptions
  }
})

const togglePopper = () => {
  if(isOpen.value) {
    open()
  } else {
    close()
  }
}

const open = () => {
  setTimeout(() => {
    isOpen.value = true
    emits('visiable-change', true)
  }, props.openDelay)
}

const close = () => {
  setTimeout(() => {
    isOpen.value = false
    emits('visiable-change', false)
  }, props.closeDelay)
}

const attachEvents = () => {
  if(props.trigger === 'click') {
    events['click'] = togglePopper
  } else if(props.trigger === 'hover') {
    events['mouseenter'] = open
    outerEvents['mouseleave'] = close
  }
}

useClickOutside(popperContainerNode, () => {
  if(popperContainerNode.value) {
    if(props.trigger === 'click' && isOpen.value && !props.manual) {
      close()
    }
  }
})

if(!props.manual){
  attachEvents()
}

watch(() => props.manual, (isManual) => {
  if(isManual){
    events = {}
    outerEvents = {}
  } else {
    attachEvents()
  }
})

watch(isOpen, (newValue) => {
  if(newValue) {
    if(triggerNode.value && overlayNode.value) {
      PopperInstance = createPopper(triggerNode.value, overlayNode.value, popperOptions.value)
      console.log(props.placement)
    }else {
      PopperInstance?.destroy()
    }
  }
}, { flush: 'post'})

onUnmounted(() => PopperInstance?.destroy())

defineExpose<TooltipInstance>({
  'show': open,
  'hide': close
})

defineOptions({
  name: 'cltTooltip'
})
</script>

<style>
.clt-tooltip__trigger,
.clt-tooltip__popper{
  border: 2px solid #ad64ad;
}
</style>