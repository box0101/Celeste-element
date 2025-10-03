<template>
  <form class="clt-form">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import type { FormItemContext, FormProps, FormContext, FormValidateFailure, FormInstance } from './types'
import type { ValidateFieldsError } from 'async-validator';
import { FormContextKey } from './types'

const props = defineProps<FormProps>()

const fields: FormItemContext[] = []
const addField: FormContext['addField'] = (field) => {
  fields.push(field)
}
const removeField: FormContext['removeField'] = (field) => {
  if(field.prop) {
    fields.slice(fields.indexOf(field), 1)
  }
}

provide(FormContextKey, {
  ...props,
  addField,
  removeField
}) 

const validate = async () => {
  let validationErrors: ValidateFieldsError = {}
  for(const field of fields) {
    try {
      await field.validate()
    } catch(e) {
      const error = e as FormValidateFailure
      validationErrors = {
        ...validationErrors,
        ...error.fields
      }
    }
  }
  if(Object.keys(validationErrors).length === 0) return true
  return Promise.reject(validationErrors)
}

const resetFields = (keys: string[] =[]) => {
  const filterArr = keys.length > 0 ? fields.filter(field => keys.includes(field.prop as string)) : fields
  filterArr.forEach(field => field.resetField())
}
const clearValidate = (keys: string[] =[]) => {
  const filterArr = keys.length > 0 ? fields.filter(field => keys.includes(field.prop as string)) : fields
  filterArr.forEach(field => field.clearValidate())
}

defineOptions({
  name: 'cltForm'
})

defineExpose<FormInstance>({
  validate,
  resetFields,
  clearValidate
})
</script>