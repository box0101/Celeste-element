<script setup lang="ts">
import Button from './components/button/Button.vue'
import { onMounted, ref, h } from 'vue'
import type { ButtonInstance } from './components/button/types'
import Collapse from './components/collapse/Collapse.vue'
import CollapseItem from './components/collapse/components/CollapseItem.vue'
import type { nameType } from './components/collapse/types'
import Icon from './components/icon/Icon.vue'
import ToolTip from './components/toolTip/ToolTip.vue'
import type { TooltipInstance } from './components/toolTip/types'
import DropDown from './components/dropdown/DropDown.vue'
import type { MenuOption } from './components/dropdown/types'
// import Message from './components/message/Message.vue'
import { createMessage } from './components/message/method'

const buttonRef = ref<ButtonInstance | null>(null)
const tooltipRef = ref<TooltipInstance | null>(null)
const trigger = ref<any>('click')
onMounted(() => {
  createMessage({
    message: 'hello world',
    duration: 2000,
    type: 'success',
    showClose: true
  })
  createMessage({
    message: 'hello world again',
    duration: 2000,
    type: 'warning',
    showClose: true
  })
  createMessage({
    message: 'hello world three',
    duration: 2000,
    showClose: true
  })
  createMessage({
    message: 'hello world forth',
    duration: 2000,
    type: 'error',
    showClose: true
  })
  if(buttonRef.value) {
    console.log(buttonRef.value.ref)
  }
})

const activeNames = ref<nameType[]>(['a'])

const options: MenuOption[] = [
  { key:1, label: h('b', 'this is bold') },
  { key:2, label: 'item2', disabled: true },
  { key:3, label: 'item3', divided: true },
  { key:4, label: 'item4' }
]

</script>

<template>

  <h3>DropDown test</h3>
  <DropDown :menu-options="options" placement="right-end" :trigger="trigger">
    <img alt="Vue logo" src="./assets/gem.jpg" width="150" height="125">
  </DropDown>
  <br>
  <br>

  <h3>Popper Example</h3>
  <ToolTip placement="right-end" :open-delay="1000" :close-delay="1000" content="love gem" :trigger="trigger" ref="tooltipRef">
    <img alt="Vue logo" src="./assets/gem.jpg" width="150" height="125">
  </ToolTip>
  <br>
  <br>
  <Button plain ref="buttonRef" type="success" @click="tooltipRef?.show">Open</Button>
  <Button plain ref="buttonRef" type="success" @click="tooltipRef?.hide">Close</Button>
  <br><br>

  <Button ref="buttonRef" type="primary">Primary</Button>
  <Button ref="buttonRef" type="success">Success</Button>
  <Button ref="buttonRef" type="info">Info</Button>
  <Button ref="buttonRef" type="warning">Warning</Button>
  <Button ref="buttonRef" type="danger">Danger</Button>
  <br>
  <br>
  <Button plain ref="buttonRef" type="primary">Primary</Button>
  <Button plain ref="buttonRef" type="success">Success</Button>
  <Button plain ref="buttonRef" type="info">Info</Button>
  <Button plain ref="buttonRef" type="warning">Warning</Button>
  <Button plain ref="buttonRef" type="danger">Danger</Button>
  <br>
  <br>
  <Button round ref="buttonRef" type="primary">Primary</Button>
  <Button round ref="buttonRef" type="success">Success</Button>
  <Button round ref="buttonRef" type="info">Info</Button>
  <Button round ref="buttonRef" type="warning">Warning</Button>
  <Button round ref="buttonRef" type="danger">Danger</Button>
  <br>
  <br>
  <Button circle ref="buttonRef" type="primary" icon="check"></Button>
  <Button circle ref="buttonRef" type="success" icon="rotate"></Button>
  <Button circle ref="buttonRef" type="info" icon="trash"></Button>
  <Button circle ref="buttonRef" type="warning" icon="gear"></Button>
  <Button circle ref="buttonRef" type="danger" icon="eye-slash"></Button>
  <br>
  <br>
  <Button disabled ref="buttonRef" type="primary">Primary</Button>
  <Button disabled ref="buttonRef" type="success">Success</Button>
  <Button disabled ref="buttonRef" type="info">Info</Button>
  <Button disabled ref="buttonRef" type="warning">Warning</Button>
  <Button disabled ref="buttonRef" type="danger">Danger</Button>
  <br>
  <br>
  <Collapse accordion v-model="activeNames">
    <CollapseItem name="a">
      <template #title>
        title A
      </template>
      headline
      <div>content aaaaaaa</div>
    </CollapseItem>
    <CollapseItem name="b" title="title B">
      <div>content bbbbbbb</div>
    </CollapseItem>
    <CollapseItem name="c" title="title C" disabled>
      <div>content ccccccc</div>
    </CollapseItem>
  </Collapse>
  <br>
  <br>
  <Icon icon="arrow-up" type="danger" size="2xl"></Icon>
  <br>
  <br>
  <h3>Button + Icon Test：</h3>
  
  <Button loading>loading</Button>
  <Button icon="arrow-up">Icon</Button>
  <br>
  <br>
</template>

<style scoped></style>
