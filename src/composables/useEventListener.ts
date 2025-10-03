import { onMounted, type Ref, isRef, watch, onUnmounted, unref } from "vue"

export default function useEventListener (
  target: Ref<EventTarget | null> | EventTarget,
  event: string,
  handler: (e: Event) => any
) {
  if(isRef(target)) {
    watch(target, (value, oldValue) => {
      oldValue?.removeEventListener(event, handler)
      value?.addEventListener(event, handler)
    })
  } else {
      onMounted(() => {
      target.addEventListener(event, handler)
    })
  }
  
  onUnmounted(() => {
    unref(target)?.removeEventListener(event, handler)
  })
}