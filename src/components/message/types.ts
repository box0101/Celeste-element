import type { ComponentInternalInstance, VNode } from "vue"

export interface MessageProps {
  message?: string | VNode,
  duration?: number,
  showClose?: boolean,
  type?: 'success' | 'info' | 'warning' | 'error',
  onDestory: () => void,
  offset?: number,
  id: string,
  zIndex: number,
  transitionName?: string
}

export interface MessageContex {
  id: string,
  vnode: VNode,
  props: MessageProps,
  vm: ComponentInternalInstance,
  destory: () => void
}

export type CreateMessageProps = Omit<MessageProps, 'onDestory' | 'id' | 'zIndex'>