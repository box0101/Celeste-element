<script setup lang="ts">
import { ref } from 'vue'
import Collapse from '@/components/collapse/Collapse.vue'
import CollapseItem from '@/components/collapse/components/CollapseItem.vue'

const activeNames = ref(['1']) // 默认展开第一项
</script>

<template>
  <div>
    <Collapse v-model="activeNames">
      <CollapseItem name="1" title="标题一">
        内容一：可以放文本、列表或其他组件。
      </CollapseItem>
      <CollapseItem name="2" title="标题二">
        内容二：支持动态渲染。
      </CollapseItem>
      <CollapseItem name="3" title="标题三" :disabled="true">
        内容三（禁用）：无法展开。
      </CollapseItem>
    </Collapse>
  </div>
</template>
