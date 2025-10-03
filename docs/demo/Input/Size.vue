<script setup>
import Input from '../../../src/components/input/Input.vue'
</script>

<template>
  <div class="size-holder">
    <Input v-model="test" placeholder="large Input" size="large" class="input-item">
    </Input>
    <Input v-model="test" placeholder="primary Input" class="input-item">
    </Input>
    <Input v-model="test" placeholder="small Input" size="small" class="input-item">
    </Input>
  </div>
</template>

<style scoped>
.size-holder {
  display: flex;
  align-items: center;
}
.input-item {
  margin-right: 8px; /* 控制每个 input 右侧的间距 */
}
.input-item:last-child {
  margin-right: 0; /* 最后一个不加 margin */
}
</style>