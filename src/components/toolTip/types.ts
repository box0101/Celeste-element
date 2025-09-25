import type { Placement } from "@popperjs/core";
import type { Options } from "@popperjs/core";

export interface TooltipProps {
  content?: string,
  trigger?: 'hover' | 'click',
  placement?: Placement,
  manual?: boolean,
  PopperOptions?: Partial<Options>,
  transition?: string,
  openDelay?: number,
  closeDelay?: number
}

export interface TooltipEmits {
  (e: 'visiable-change', value: boolean): void
}

export interface TooltipInstance {
  show: () => void,
  hide: () => void
}