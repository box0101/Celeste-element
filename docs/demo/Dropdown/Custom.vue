<script setup lang="ts">
import DropDown from '@/components/dropdown/DropDown.vue'
import type { MenuOption } from '@/components/dropdown/types'
import { ref, h } from 'vue'

const options: MenuOption[] = [
  { key:1, label: h('b', 'this is bold1') },
  { key:2, label: 'item2', disabled: true },
  { key:3, label: 'item3', divided: true },
  { key:4, label: 'item4' }
]

const trigger = ref<any>('hover')
</script>

<template>
  <DropDown :menu-options="options" placement="bottom" :trigger="trigger">
  Dropdown List
  </DropDown>
</template>