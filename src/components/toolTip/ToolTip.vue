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
        <slot name="content">
          {{ content }}
        </slot>
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
import { debounce } from 'lodash-es'

const props = withDefaults(defineProps<TooltipProps>(),{
  placement: 'bottom',
  trigger: 'hover',
  transition: 'fade',
  openDelay: 0,
  closeDelay: 0
})
const emits = defineEmits<TooltipEmits>()
const isOpen = ref(false)
const triggerNode = ref<HTMLElement>()
const overlayNode = ref<HTMLElement>()
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

const open = () => {
  isOpen.value = true
  emits('visible-change', true)
}

const close = () => {
  isOpen.value = false
  emits('visible-change', false)
}

const openDebounce = debounce(open, props.openDelay)
const closeDebounce = debounce(close, props.closeDelay)

const togglePopper = () => {
  if(!isOpen.value) {
    openDebounce()
  } else {
    closeDebounce()
  }
}
const attachEvents = () => {
  if(props.trigger === 'click') {
    events['click'] = togglePopper
  } else if(props.trigger === 'hover') {
    events['mouseenter'] = openDebounce
    outerEvents['mouseleave'] = closeDebounce
  }
}

useClickOutside(popperContainerNode, () => {
  if(props.trigger === 'click' && isOpen.value && !props.manual) {
    closeDebounce()
  }
  if(isOpen.value) {
    emits('clcik-outside', true)
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

watch(() => props.trigger, (newTrigger, oldTrigger) => {
  if (newTrigger !== oldTrigger) {
    // clear the events
    events = {}
    outerEvents = {}
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
  'show': openDebounce,
  'hide': closeDebounce
})

defineOptions({
  name: 'cltTooltip'
})
</script>

<style>

</style>