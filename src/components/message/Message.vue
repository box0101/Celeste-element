<template>
  <div 
    ref="MessageRef"
    v-show="visible"
    class="clt-message"
    :class="{
      [`clt-message--${type}`]: type,
      'is-close': showClose
    }"
    :style="cssStyle"
    role="alert"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
  >
    <div class="clt-message-content">
      <slot>
        <RenderVnode :v-node="message" v-if="message"></RenderVnode>
      </slot>
    </div>
    <div class="clt-message__close" v-if="showClose">
      <Icon icon="xmark" @click="visible = false"></Icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch, nextTick } from 'vue'
import type { MessageProps } from './types'
import RenderVnode from '../dropdown/RenderVnode'
import Icon from '../icon/Icon.vue'
import { getLastBottomOffset } from './method'
import { offset } from '@popperjs/core'
import useEventListener from "@/composables/useEventListener"

const visible = ref(true)

const MessageRef = ref<HTMLDivElement>()
const height = ref(0)
const lastBottomOffset = computed(() => getLastBottomOffset(props.id))
const topOffset = computed(() => lastBottomOffset.value + props.offset)
const bottomOffset = computed(() => topOffset.value + height.value)
const cssStyle = computed(() => ({
  top: `${topOffset.value}px`,
  zIndex: props.zIndex
}))
let timer: any

function startTimer () {
  if(props.duration === 0) {
    return 
  }
  timer = setTimeout(() => {
    visible.value = false
  }, props.duration)
}
function clearTimer () {
  clearTimeout(timer)
}

onMounted(async () => {
  visible.value = true
  startTimer()
  await nextTick()
  height.value = MessageRef.value!.getBoundingClientRect().height
  setTimeout(() => {
    
  }, 3000)
})

const keydown = (e: Event) => {
  const event = e as KeyboardEvent
  if(event.code === 'Escape') {
    visible.value = false
  }
}
useEventListener(document, 'keydown', keydown)

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000,
  offset: 20,
  transitionName: 'fad-up'
})

watch(visible, (newValue) => {
  if(!newValue) {
    props.onDestory()
  }
})

defineExpose({
  bottomOffset,
  offset,
  visible
})

defineOptions({
  name: 'cltMessage'
})
</script>

<style>
</style>