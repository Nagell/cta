<script setup lang="ts">
  import { computed } from 'vue'
  import type { PropType } from 'vue'

  export interface Props {
    text: string,
    color: 'primary' | 'white-outline',
    size: 'sm' | 'base' | 'lg',
  }

  const props = defineProps({
    text: {
      type: String as PropType<Props['text']>,
      default: 'Text',
    },
    color: {
      type: String as PropType<Props['color']>,
      default: 'primary',
    },
    size: {
      type: String as PropType<Props['size']>,
      default: 'md',
    },
  })

  const buttonClasses = computed(() => {
    return {
      'a-btn': true,
      'a-btn--c-primary': props.color === 'primary',
      'a-btn--c-white-outline': props.color === 'white-outline',
      'a-btn--s-sm': props.size === 'sm',
      'a-btn--s-base': props.size === 'base',
      'a-btn--s-lg': props.size === 'lg',
    }
  })
</script>

<template>
  <button
    type="button"
    :class="buttonClasses"
  >
    {{ text }}
  </button>
</template>
