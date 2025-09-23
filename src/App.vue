<script setup lang="ts">
import Button from './components/button/Button.vue'
import { onMounted, ref } from 'vue'
import type { ButtonInstance } from './components/button/types'
import Collapse from './components/collapse/Collapse.vue'
import CollapseItem from './components/collapse/components/CollapseItem.vue'
import type { nameType } from './components/collapse/types'
import Icon from './components/icon/Icon.vue'

const buttonRef = ref<ButtonInstance | null>(null)
onMounted(() => {
  if(buttonRef.value) {
    console.log(buttonRef.value.ref)
  }
})

const activeNames = ref<nameType[]>(['a'])

</script>

<template>
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
  
</template>

<style scoped></style>
