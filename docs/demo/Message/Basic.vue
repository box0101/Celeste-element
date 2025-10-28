<script setup lang="ts">
import Button from '@/components/button/Button.vue'
import { h } from 'vue'
import { createMessage } from '@/components/message/method'

const open = () => {
  createMessage({
    message: 'This is a message',
    duration: 2000,
    showClose: true
  })
}

const openVn = () => {
  createMessage({
    message: h('b', 'this is bold'),
    duration: 2000,
    showClose: true
  })
}
</script>

<template>
  <div>
    <Button @click="open">
      Show message
    </Button>
    <Button @click="openVn">VNode</Button>
  </div>
</template>