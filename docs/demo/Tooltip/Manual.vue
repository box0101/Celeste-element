<script setup lang="ts">
import ToolTip from '@/components/toolTip/ToolTip.vue'
import Button from '@/components/button/Button.vue'
import { ref } from 'vue'
const tooltipRef = ref<TooltipInstance | null>(null)

const open = () => {
  tooltipRef.value?.show()
}

const close = () => {
  tooltipRef.value?.hide()
}
</script>

<template>
  <div class="toolTip-base-box">
    <div class="row center">
      <ToolTip
        class="box-item"
        content="Top Left prompts info"
        placement="top-start"
        ref="tooltipRef"
        manual
      >
        <!-- <img alt="G.E.M. logo" src="https://www.facebook.com/houseofgloryus/" width="150" height="125"> -->
         ToolTip Message
        
      </ToolTip>
      <div class="button-row">
        <Button @click="open">open</Button>
        <Button @click="close">close</Button>
      </div>
      
    </div>
  </div>
</template>

<style>
.toolTip-base-box {
  width: 600px; 
  margin: 0 auto;
}

</style>