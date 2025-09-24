import { describe, expect, test } from 'vitest'
import  { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button.vue', () => {
  test('basic button', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary'
      },
      slots: {
        default: 'button'
      }
    })
    console.log(wrapper.html())

    // type test
    expect(wrapper.classes()).toContain('clt-button--primary')

    // slot test
    expect(wrapper.get('button').text()).toBe('button')

    // events test
    wrapper.get('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  test('disabled', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      },
      slots: {
        default: 'disabled'
      }
    })
    // 通过attributes拿到button上的属性
    expect(wrapper.attributes('disabled')).toBeDefined()
    // 通过find直接拿到Dom实例后访问属性
    expect(wrapper.find('button').element.disabled).toBeDefined()
    // events test 此时不应该被触发
    wrapper.get('button').trigger('click')
    // expect(wrapper.emitted('click')).toHaveProperty('click')
  })
})