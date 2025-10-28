<script setup lang="ts">
import ToolTip from '@/components/toolTip/ToolTip.vue'
import Button from '@/components/button/Button.vue'
</script>

<template>
  <div class="toolTip-base-box">
    <div class="row center">
      <ToolTip
        class="box-item"
        content="Top Left prompts info"
        placement="top-start"
        trigger="click"
      >
        <Button>top-start</Button>
      </ToolTip>
    </div>
  </div>
</template>

<style>
.toolTip-base-box {
  width: 600px;
}
.toolTip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.toolTip-base-box .center {
  justify-content:left;
}
.toolTip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>