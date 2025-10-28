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
        <div id="arrow" data-popper-arrow></div>
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
const PopperOptions = computed(() => {
  return {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0,9],
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

const openDebounce = debounce(open, props.openDelay || 150)
const closeDebounce = debounce(close, props.closeDelay || 150)

const openFinal = () => {
  closeDebounce.cancel()
  openDebounce()
}
const closeFinal = () => {
  openDebounce.cancel()
  closeDebounce()
}

const togglePopper = () => {
  if(!isOpen.value) {
    openFinal()
  } else {
    closeFinal()
  }
}

useClickOutside(popperContainerNode, () => {
  if(props.trigger === 'click' && isOpen.value && !props.manual) {
    closeFinal()
  }
  if(isOpen.value) {
    emits('click-outside', true)
  }
})

const attachEvents = () => {
  if(props.trigger === 'click') {
    events['click'] = togglePopper
  } else if(props.trigger === 'hover') {
    outerEvents['mouseenter'] = openFinal
    outerEvents['mouseleave'] = closeFinal
  }
}


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
      PopperInstance = createPopper(triggerNode.value, overlayNode.value, PopperOptions.value)
      console.log(props.placement)
    }else {
      PopperInstance?.destroy()
    }
  }
}, { flush: 'post'})

onUnmounted(() => PopperInstance?.destroy())

defineExpose<TooltipInstance>({
  'show': openFinal,
  'hide': closeFinal
})

defineOptions({
  name: 'cltTooltip'
})
</script>

<style>

</style>