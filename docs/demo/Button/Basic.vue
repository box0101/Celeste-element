<script setup>
import Button from '@/components/button/Button.vue'
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
</template>