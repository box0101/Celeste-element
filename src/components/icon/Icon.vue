<template>
  <i class="clt-icon" :class="{[`clt-icon--${type}`]: type}" :style="customStyle" v-bind="$attrs">
    <font-awesome-icon v-bind="filteredProps"></font-awesome-icon>
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IconProps } from './types';
import { omit } from 'lodash-es'

const filteredProps = computed(() => omit(props, ['type', 'coloe']))
const customStyle = computed(() => {
  return props.color? { color: props.color } : {}
})

const props = defineProps<IconProps>()

defineOptions({
  name: 'CltIcon',
  inheritAttrs: false
})
</script>