// import { PropType } from "vue"

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'small'
export type NativeType = 'submit' | 'reset' | 'button'

export interface ButtonInstance {
  ref: HTMLButtonElement
}

export interface ButtonProps {
  type?: ButtonType,
  size?: ButtonSize,
  plain?: boolean,
  round?: boolean,
  circle?: boolean,
  disabled?: boolean,
  nativeType?: NativeType,
  autofocus?: boolean,
  loading?: boolean,
  icon?: string
}