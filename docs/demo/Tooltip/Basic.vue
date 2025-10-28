<script setup lang="ts">
import ToolTip from '../../../src/components/toolTip/ToolTip.vue'
import Button from '../../../src/components/button/Button.vue'
</script>

<template>
  <div class="toolTip-base-box">
    <div class="row center">
      <ToolTip
        class="box-item"
        content="Top Left prompts info"
        placement="top-start"
      >
        <Button>top-start</Button>
      </ToolTip>
      <ToolTip
        class="box-item"
        content="Top Center prompts info"
        placement="top"
      >
        <Button>top</Button>
      </ToolTip>
      <ToolTip
        class="box-item"
        content="Top Right prompts info"
        placement="top-end"
      >
        <Button>top-end</Button>
      </ToolTip>
    </div>
    <div class="row">
      <ToolTip
        class="box-item"
        content="Left Top prompts info"
        placement="left-start"
      >
        <Button>left-start</Button>
      </ToolTip>
      <ToolTip
        class="box-item"
        content="Right Top prompts info"
        placement="right-start"
      >
        <Button>right-start</Button>
      </ToolTip>
    </div>
    <div class="row">
      <ToolTip
        class="box-item"
        content="Left Center prompts info"
        placement="left"
      >
        <Button class="mt-3 mb-3">left</Button>
      </ToolTip>
      <ToolTip
        class="box-item"
        content="Right Center prompts info"
        placement="right"
      >
        <Button>right</Button>
      </ToolTip>
    </div>
    <div class="row">
      <ToolTip
        class="box-item"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <Button>left-end</Button>
      </ToolTip>
      <ToolTip
        class="box-item"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <Button>right-end</Button>
      </ToolTip>
    </div>
    <div class="row center">
      <ToolTip
        class="box-item"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <Button>bottom-start</Button>
      </ToolTip>
      <ToolTip
        class="box-item"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <Button>bottom</Button>
      </ToolTip>
      <ToolTip
        class="box-item"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <Button>bottom-end</Button>
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
  justify-content: center;
}
.toolTip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>