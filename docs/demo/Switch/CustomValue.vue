<template>
  <Switch
    v-model="switchState"
    :active-value="'on'"
    :inactive-value="'off'"
  />
  <p>当前开关状态: {{ switchState }}</p>
</template>

<script setup lang="ts">
import Switch from '../../../src/components/switch/Switch.vue'
import { ref } from 'vue'

const switchState = ref('off')
</script>
