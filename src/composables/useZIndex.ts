import { computed, ref } from 'vue'

const zIndex = ref(0)
const useZIndex = (initialvalue: 2000) => {
  const currentZIndex = computed(() => initialvalue + zIndex.value)
  const nextZIndex = () => {
    zIndex.value++
    return currentZIndex.value
  }

  return {
    currentZIndex,
    initialvalue,
    nextZIndex
  }
}

export default useZIndex