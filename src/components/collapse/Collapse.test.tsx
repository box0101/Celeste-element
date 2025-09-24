import { expect, test, describe, vi } from "vitest"
import { mount } from "@vue/test-utils"

import CollapseItem from "./components/CollapseItem.vue"
import Collapse from "./Collapse.vue"

describe('Collapse.vue', () => {
  test('basic collapse', async () => {
    const onChange = vi.fn()
    const wrapper = mount(() => 
      <Collapse modelValue={['a']} onChange={onChange}>
        <CollapseItem name="a" title="title a">
          content a
        </CollapseItem>
        <CollapseItem name="b" title="title b">
          content b
        </CollapseItem>
        <CollapseItem name="c" title="title c" disabled>
          content c
        </CollapseItem>
      </Collapse>,
      {
        global: {
          stubs: ['Icon']
        },
        attachTo: document.body
      }
    )
    const headers = wrapper.findAll('.clt-collapse-item__header')
    const content = wrapper.findAll('.clt-collapse-item__content')

    const firstHeader = headers[0]
    const secondHeader = headers[1]
    const thirdHeader = headers[2]

    const firstContent = content[0]
    const secondContent = content[1]
    const thirdContent = content[2]

    // length
    expect(headers.length).toBe(3)
    expect(content.length).toBe(3)

    // text
    expect(firstHeader.text()).toBe('title a')

    // content
    expect(firstContent.isVisible()).toBeTruthy()
    expect(secondContent.isVisible()).toBeFalsy()
    expect(firstContent.text()).toBe('content a')
    
    // events
    await firstHeader.trigger('click')
    expect(firstContent.isVisible()).toBeFalsy()
    await secondHeader.trigger('click')
    expect(secondHeader.isVisible()).toBeTruthy()
    expect(onChange).toHaveBeenCalledWith(['b'])

    // disabled
    expect(thirdHeader.classes('is-disabled')).toBeDefined()
    thirdHeader.trigger('click')
    expect(thirdContent.isVisible()).toBeFalsy()
  })
})