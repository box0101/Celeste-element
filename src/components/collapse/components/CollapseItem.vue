<template>
  <div
  class="clt-collapse-item"
  :class="{
    'is-disabled': disabled
  }"
  >
    <div class="clt-collapse-item__header"
    :class="{
      'is-disabled': disabled,
      'is-active': isActive
    }"
    :id="`clt-collapse-item--${name}`" @click="handleClick">
      <slot name="title">{{ title }}</slot>
      <Icon icon="angle-right" class="header-angle"></Icon>
    </div>
    <Transition name="slide" v-on="transitionEvent">
      <div class="clt-collapse-item__wrapper"  v-show="isActive">
        <div class="clt-collapse-item__content" :id="`clt-collapse-content--${name}`">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { collapseContextKey } from '../types'
import Icon from '@/components/icon/Icon.vue'
import type { CollapseItemProps } from '../types'
const props = defineProps<CollapseItemProps>()

const collapseContext = inject(collapseContextKey)
const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))

const handleClick = () => {
  if(props.disabled) { return }
  collapseContext?.handleItemClick(props.name)
}

const transitionEvent: Record<string, (el: HTMLElement) => void> = {
  beforeEnter (el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave (el) {
    el.style.height = ''
    el.style.overflow = ''
  }
}

defineOptions({
  name: 'CltCollapseItem'
})
</script>
