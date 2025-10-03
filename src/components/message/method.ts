import type { CreateMessageProps, MessageContex } from "./types"
import { render, h, shallowReactive } from 'vue'
import MessageConstructor from './Message.vue'
import useZIndex from '@/composables/useZIndex'

const instances: MessageContex[] = shallowReactive([])
let seed = 1
const { nextZIndex } = useZIndex(2000)

export const createMessage = (props: CreateMessageProps) => {
  const id = `message_${seed++}`
  // 用于挂载render函数的DOM节点
  const container = document.createElement('div')
  const  destory = () => {
    render(null, container)
    const index = instances.findIndex(instance => instance.id === id)
    if(index === -1) return 
    instances.splice(index, 1)
  }

  const manualDestory = () => {
    const instance = instances.find(instance => instance.id === id)

    if(instance) {
      instance.vm.exposed!.visible.value = false
    }
  }

  const newProps = {
    ...props,
    id,
    zIndex: nextZIndex(), 
    onDestory: destory
  }
  const vnode = h(MessageConstructor, newProps)
  render(vnode, container)
  document.body.appendChild(container)

  const vm = vnode.component!
  const instance = {
    id,
    vnode,
    vm,
    props: newProps,
    destory: manualDestory
  }

  instances.push(instance)

  return instance
}

export const getLastInstance = () => {
  return instances.at(-1)
}

export const getLastBottomOffset = (id:string) => {
  const idx = instances.findIndex(instances => instances.id === id)
  if(idx <= 0) {
    return 0
  }else {
    const pre = instances[idx - 1]
    return pre.vm.exposed!.bottomOffset.value
  }
}
