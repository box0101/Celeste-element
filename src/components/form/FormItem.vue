<template>
  <div
    class="clt-form-item"
    :class="{
      'is-error':validateStatus.state === 'error',
      'is-success': validateStatus.state === 'success',
      'is-loading': validateStatus.loading,
      'is-required': isRequired
    }"
  >
    <label class="clt-form-item__label">
      <slot :label="label" name="label">
        {{ label }}
      </slot>
    </label>

    <div class="clt-form-item__content">
      <slot :validate="validate"></slot>
      <div class="clt-form-item__error-msg" v-if="validateStatus.state === 'error'">
        {{ validateStatus.errorMsg }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, provide, reactive } from 'vue'
import { isNil } from 'lodash-es'
import { type FormItemProps, type FormValidateFailure, type FormItemContext, FormItemContextKey, type ValidateStatusProp, type FormItemInstance } from './types'
import { FormContextKey } from './types'
import { inject } from 'vue'
import Schema from 'async-validator'
const props = defineProps<FormItemProps>()
let initialValue: any = null

const formContext = inject(FormContextKey)

const validateStatus: ValidateStatusProp = reactive({
  state: 'init',
  errorMsg: '',
  loading: false
})

const isRequired = computed(() => {
  return itemRules.value.some(rule => rule.required)
})

const innerValue = computed(() => {
  const model = formContext?.model
  if(model && props.prop && !isNil(model[props.prop])) {
    return model[props.prop]
  } else {
    return null
  }
})
const itemRules = computed(() => {
  const rules = formContext?.rules
  if(rules && props.prop && rules[props.prop]) {
    return rules[props.prop]
  } else {
    return []
  }
})

const getTriggeredRules = (trigger?: string) => {
  const rules = itemRules.value
  if(rules) {
    return rules.filter(rule => {
      if(!rule.trigger || trigger) {
        return true
      }
      return rule.trigger && rule.trigger === trigger
    })
  }else {
    return []
  }
}

const validate = async (trigger?: string) => {
  const modelName = props.prop
  const triggeredRules = getTriggeredRules(trigger) 
  if(triggeredRules.length === 0) {
    true
  }
  if(modelName) {
    const validator = new Schema({
      [modelName]: itemRules.value
    })
    validateStatus.loading = true
    return validator.validate({ [modelName]: innerValue.value})
    .then(()=> {
      validateStatus.state = 'success'
    })
    .catch((e: FormValidateFailure) => {
      const { errors } = e
      validateStatus.state = 'error'
      validateStatus.errorMsg = ( errors && errors.length > 0 ) ? errors[0].message || '' : '' 
      return Promise.reject(e)
    })
    .finally(() => {
      validateStatus.loading = false
    })
  }
}

const clearValidate = () => {
  validateStatus.state = 'init'
  validateStatus.loading = false
  validateStatus.errorMsg = ''
}

const resetField = () => {
  clearValidate()
  const model = formContext?.model
  if(model && props.prop && !isNil(model[props.prop])) {
    model[props.prop] = initialValue
  }
}

const context: FormItemContext = {
  validate,
  prop: props.prop || '',
  clearValidate,
  resetField
}
provide(FormItemContextKey, context)

onMounted(() => {
  if(props.prop) {
    formContext?.addField(context)
    initialValue = innerValue.value
  }
})

onUnmounted(() => {
    formContext?.removeField(context)
})

defineExpose<FormItemInstance>({
  validateStatus,
  validate,
  resetField,
  clearValidate
})

defineOptions({
  name: 'cltFormItem'
})
</script>