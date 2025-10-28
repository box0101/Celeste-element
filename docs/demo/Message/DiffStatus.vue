<script setup lang="ts">
import Button from '@/components/button/Button.vue'
import { createMessage } from '@/components/message/method'

const successMsg = () => {
  createMessage({
    message: 'Success',
    duration: 2000,
    type: 'success',
    showClose: true
  })
}

const warningMsg = () => {
  createMessage({
    message: 'Warning',
    duration: 2000,
    type: 'warning',
    showClose: true
  })
}

const defaultMsg = () => {
  createMessage({
    message: 'Default',
    duration: 2000,
    showClose: true
  })
}

const errorMsg = () => {
  createMessage({
    message: 'Danger',
    duration: 2000,
    type: 'danger',
    showClose: true
  })
}
  
</script>

<template>
  <div>
    <Button @click="successMsg" type="success" plain>
      Success
    </Button>
    <Button @click="warningMsg" type="warning" plain>
      Warning
    </Button>
    <Button @click="defaultMsg" type="info" plain>
      Default
    </Button>
    <Button @click="errorMsg" type="danger" plain>
      Danger
    </Button>
  </div>
</template>