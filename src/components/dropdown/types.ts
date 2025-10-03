import type { VNode } from "vue"
import type { TooltipProps } from "../toolTip/types"

export interface DropDownProps extends TooltipProps {
  menuOptions: MenuOption[],
  hideAfterClick?: boolean
}

export interface MenuOption {
  label: string | VNode,
  key: string | number,
  disabled?: boolean,
  divided?: boolean
}

export interface DropDownEmits {
  (e: 'visible-change', value: boolean): void,
  (e: 'select', value: MenuOption): void
}

export interface DropDownInstance {
  show: () => void ,
  hide: () => void
}