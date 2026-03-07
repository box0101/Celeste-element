export interface InputProps {
  type: string,
  modelValue: string,
  size?: 'large' | 'small',
  disabled?: boolean,
  clearable?: boolean,
  showPassword?: boolean,
  placeholder?: string,
  readonly?: boolean,
  autocomplete?: string,
  autofocus?: boolean,
  form?: string,
  // AI 润色功能
  enableAI?: boolean,
  aiPrompt?: string
}

export interface InputEmits {
  (e: 'update:modelValue', value: string): void,
  (e: 'input', value: string): void,
  (e: 'change', value: string): void,
  (e: 'focus', value: FocusEvent): void,
  (e: 'blur', value: FocusEvent): void,
  (e: 'clear', value: string): void,
  (e: 'ai-polish', original: string, polished: string): void,
  (e: 'ai-error', error: string): void,
  (e: 'polish-start'): void,
  (e: 'polish-end', text: string): void
}

export interface InputInstance {
  ref: HTMLInputElement | HTMLTextAreaElement
}