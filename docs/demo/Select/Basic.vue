<script setup>
import Select from '../../../src/components/select/Select.vue'
import { ref } from 'vue'
const test = ref('')
const options2 = [
  {label: 'option 1', value: '1'},
  {label: 'option 2', value: '2',},
  {label: 'option 3', value: '3',},
  {label: 'option 4', value: '4', disabled: true}
]
</script>

<template>
  <Select :options="options2" placeholder="Plaease select" v-model="test" clearable></Select>
</template>