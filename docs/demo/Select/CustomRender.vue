<script setup>
import Select from '../../../src/components/select/Select.vue'
import { h, ref } from 'vue'
const test = ref('')
const options2 = [
  {label: 'option 1', value: '1'},
  {label: 'option 2', value: '2',},
  {label: 'option 3', value: '3',},
  {label: 'option 4', value: '4', disabled: true}
]
const customRender = (option) => {
  return h('div', { className: 'option2'}, [h('b', option.label), h('span', option.value)])
}
</script>

<template>
  <Select :options="options2" placeholder="Plaease select" v-model="test" clearable :render-label="customRender"></Select>
</template>

<style>
.clt-select__menu-item, .option2 {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  color: rgb(53, 50, 50);
}
.clt-select__menu-item.is-disabled {
  color: var(--clt-select-item-disabled-font-color);
  cursor: not-allowed;
}

.clt-select__menu-item.is-disabled:hover {
  background-color: transparent; /* 禁用项不高亮 */
}

.clt-select__menu-item.is-disabled .option2 {
  color:  var(--clt-select-item-disabled-font-color) ; /* 让自定义渲染也变灰 */
}

</style>