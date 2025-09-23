<script setup lang="ts">
import Button from './components/button/Button.vue'
import { onMounted, ref } from 'vue'
import type { ButtonInstance } from './components/button/types'
import Collapse from './components/collapse/Collapse.vue'
import CollapseItem from './components/collapse/components/CollapseItem.vue'
import type { nameType } from './components/collapse/types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const buttonRef = ref<ButtonInstance | null>(null)
onMounted(() => {
  if(buttonRef.value) {
    console.log(buttonRef.value.ref)
  }
})

const activeNames = ref<nameType[]>(['a'])

</script>

<template>
  <font-awesome-icon icon="fa-solid fa-user-secret"></font-awesome-icon>
  
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
  <Button circle ref="buttonRef" type="primary">√ </Button>
  <Button circle ref="buttonRef" type="success">× </Button>
  <Button circle ref="buttonRef" type="info">⭐</Button>
  <Button circle ref="buttonRef" type="warning">❤</Button>
  <Button circle ref="buttonRef" type="danger">✉</Button>
  <br>
  <br>
  <Button disabled ref="buttonRef" type="primary">Primary</Button>
  <Button disabled ref="buttonRef" type="success">Success</Button>
  <Button disabled ref="buttonRef" type="info">Info</Button>
  <Button disabled ref="buttonRef" type="warning">Warning</Button>
  <Button disabled ref="buttonRef" type="danger">Danger</Button>

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
</template>

<style scoped></style>
