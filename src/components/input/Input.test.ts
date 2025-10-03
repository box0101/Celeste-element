import { describe, expect, it } from "vitest"
import { mount } from "@vue/test-utils"
import Input from "./Input.vue"

describe('Input', () => {
  it('基本展示', () => {
    const wrapper: any = mount(Input, {
      props: {
        type: 'text',
        size: 'small',
        modelValue: ''
      },
      slots: {
        prepend: 'prepend',
        suffix: 'suffix'
      }
    })
    console.log('wrapper:', wrapper)

    // input test
    expect(wrapper.classes()).toContain('clt-input--small')
    expect(wrapper.classes()).toContain('is-prepend')

    expect(wrapper.find('input')).toBeTruthy()
    expect(wrapper.get('input').attributes('type')).toBe('text')

    expect(wrapper.find('.clt-input__prepend').exists()).toBeTruthy()
    expect(wrapper.get('.clt-input__prepend').text()).toBe('prepend')
    expect(wrapper.find('.clt-input__suffix').exists()).toBeTruthy()
    expect(wrapper.get('.clt-input__suffix').text()).toBe('suffix')

    // textarea test
    const wrapper2 = mount(Input, {
      props:{
        type: 'textarea',
        modelValue: ''
      }
    })

    expect(wrapper2.find('.clt-textarea__wrapper').exists()).toBeTruthy()
  })

  it('支持v-mode', async () => {
    const wrapper = mount(Input, {
      props: {
        type: '',
        modelValue: 'test',
        'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e})
      }
    })

    const input = wrapper.get('input')
    expect(input.element.value).toBe('test')

    // 更新值
    // setValue同时触发input和change
    await input.setValue('update')
    expect(wrapper.props('modelValue')).toBe('update')
    expect(input.element.value).toBe('update')
    
    // 验证input和change是否触发
    console.log(wrapper.emitted())
    expect(wrapper.emitted()).toHaveProperty('input')
    expect(wrapper.emitted()).toHaveProperty('change')
    // 验证返回的值
    const inputEvent = wrapper.emitted('input')
    const changeEvent = wrapper.emitted('change')
    expect(inputEvent![0]).toEqual(['update'])
    expect(changeEvent![0]).toEqual(['update'])


    await wrapper.setProps({modelValue: 'prop update'})
    expect(wrapper.props('modelValue')).toBe('prop update')
  })

  it('支持点击清空', async () => {
    const wrapper = mount(Input, {
      props: {
        type: 'text',
        modelValue: 'test',
        clearable: true
      },
      global: {
        stubs: ['Icon']
      }
    })

    // 一开始不出现清空图标
    expect(wrapper.find('.clt-input__clear').exists()).toBeFalsy()

    // 获得焦点并且不为空则出现清空图标
    const input = wrapper.get('input')
    await input.trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
    expect(wrapper.find('.clt-input__clear').exists()).toBeTruthy()

    // 点击图标就清空
    await wrapper.get('.clt-input__clear').trigger('click')
    expect(input.element.value).toBe('')
    // 触发clear和input、change
    expect(wrapper.emitted()).toHaveProperty('clear')
    expect(wrapper.emitted()).toHaveProperty('input')
    expect(wrapper.emitted()).toHaveProperty('change')
    const inputEvent = wrapper.emitted('input')
    const changeEvent = wrapper.emitted('change')
    expect(inputEvent![0]).toEqual([''])
    expect(changeEvent![0]).toEqual([''])

    // blur
    await input.trigger('blur')
    expect(wrapper.emitted()).toHaveProperty('focus')
  })

  it('密码框的显示与隐藏', async () => {
    const wrapper = mount(Input, {
      props: {
        type: 'text',
        modelValue: 'test',
        showPassword: true
      },
      global: {
        stubs: ['Icon']
      }
    })

    // 一开始不出现图标
    // expect(wrapper.find('.clt-input__password').exists()).toBeFalsy()
    const input = wrapper.get('input')
    expect(input.element.type).toBe('password')

    // 有输入后图标出现
    await input.setValue('12345')
    const eyeIcon = wrapper.find('.clt-input__password')
    expect(eyeIcon.exists()).toBeTruthy()
    expect(eyeIcon.attributes('icon')).toBe('eye')

    // 点击图标会改变样式
    await eyeIcon.trigger('click')
    expect(wrapper.find('.clt-input__password').attributes('icon')).toBe('eye-slash')
    expect(input.element.type).toBe('text')
  })
})