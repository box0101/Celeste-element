import type { Ref, InjectionKey } from "vue"

export type nameType = string | number

export interface CollapseProps {
  modelValue: nameType[],
  accordion?: boolean,
}

export interface CollapseEmits {
  (e:'update:modelValue', values: nameType[]): void
  (e:'change', values: nameType[]): void
}

export interface CollapseItemProps {
  name: nameType,
  title?: String,
  disabled?: boolean,
  icon?: string
}

export interface CollapseContext {
  activeNames: Ref<nameType[]>,
  handleItemClick: (name: nameType) => void
}

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContext')