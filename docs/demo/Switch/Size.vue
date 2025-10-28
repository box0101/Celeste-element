<script setup>
import Switch from '../../../src/components/switch/Switch.vue'
</script>

<template>
  large <Switch activeText= "ON" inactiveText="OFF" size="large"></Switch>
  <br><br>
  default <Switch activeText= "ON" inactiveText="OFF"></Switch>
  <br><br>
  small <Switch activeText= "ON" inactiveText="OFF" size="small"></Switch>
</template>