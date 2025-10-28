<script setup lang="ts">
import { ref } from 'vue'
import Collapse from '@/components/collapse/Collapse.vue'
import CollapseItem from '@/components/collapse/components/CollapseItem.vue'
import Icon from '@/components/icon/Icon.vue'

const activeNames = ref<string[]>(['1'])
</script>

<template>
  <Collapse v-model="activeNames" accordion>
    <CollapseItem name="1" title="标题 1">
      基本用法
    </CollapseItem>

    <CollapseItem name="2">
      <template #title>
        <span style="display: flex; align-items: center;">
          <Icon icon="star" style="margin-right: 6px;" /> 自定义标题 2
        </span>
      </template>
      支持自定义图标
    </CollapseItem>

    <CollapseItem name="3" disabled>
      <template #title>
        <span style="color: gray;">
          <Icon icon="lock" style="margin-right: 6px;" /> 标题 3
        </span>
      </template>
      禁用
    </CollapseItem>
  </Collapse>

  <p>当前展开面板: {{ activeNames }}</p>
</template>
