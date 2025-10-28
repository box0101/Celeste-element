<script setup lang="ts">
import DropDown from '../../../src/components/dropdown/DropDown.vue'
import type { MenuOption } from '../../../src/components/dropdown/types'
import { ref } from 'vue'

const options: MenuOption[] = [
  { key:1, label: 'item1' },
  { key:2, label: 'item2', disabled: true },
  { key:3, label: 'item3' },
  { key:4, label: 'item4' }
]

const trigger = ref<any>('hover')
</script>

<template>
  <DropDown :menu-options="options" placement="bottom" :trigger="trigger">
  Dropdown List
  </DropDown>
</template>