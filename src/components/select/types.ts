import type { VNode } from "vue"

export interface SelectOption {
  label: string,
  value: string,
  disabled?: boolean
}

export interface SelectProps {
  modelValue: string,
  options: SelectOption[],
  placeholder: string,
  disabled: boolean,
  clearable?: boolean,
  renderLabel?: RenderLabelFunc
}

export interface SelectEmits {
  (e: 'change', value: string): void,
  (e: 'update:medelValue', value: string): void,
  (e: 'visible-change', value: boolean): void,
  (e: 'clear'): void
}

export interface SelectStates {
  inputValue: string,
  selectedOption: null | SelectOption,
  mouseHover: boolean,
  highlightIndex?: number
}

export type RenderLabelFunc = (option: SelectOption) => VNode