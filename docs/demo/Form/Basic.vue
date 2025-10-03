<script setup lang="ts">
import FormItem from '../../../src/components/form/FormItem.vue'
import Form from '../../../src/components/form/Form.vue'
import Input from '../../../src/components/input/Input.vue'
import Button from '../../../src/components/button/Button.vue'
import type { FormRules } from '../../../src/components/form/types'
import { reactive, ref } from 'vue'

const formRef = ref()
const model = reactive({
  email: '',
  password: ''
})
const rules = reactive<FormRules>({
  email:[{ type: 'email', required: true, trigger: 'blur'}],
  password: [{ type: 'string', required: true, trigger: 'blur', min: 3, max: 5}]
})

const submit = async () => {
  try {
    await formRef.value.validate()
  } catch (e) {
    console.log(e)
  }
}

const reset = () => {
  formRef.value.resetFields()
}

</script>

<template>
  <div>
    <Form :model="model" :rules="rules" ref="formRef">
      <FormItem label="the email" prop="email">
        <Input type="text" v-model="model.email"></Input>
      </FormItem>
      <FormItem label="the password" prop="password">
        <Input type="password" v-model="model.password"></Input>
      </FormItem>
      <div class="button">
        <Button type="primary" @click.prevent="submit">Submit</Button>
        <Button type="primary" @click.prevent="reset">Reset</Button>
      </div>
      
    </Form>
  </div>
</template>

<style scoped>
.button {
  text-align: center;
}
</style>