<script setup lang="ts">
  import { computed, } from 'vue'
  import type { PropType } from 'vue'

  export interface ButtonProps {
    id?: string
    label: string
    color: 'primary' | 'white-transparent'
    size: 'sm' | 'base' | 'lg'
    additionalClasses?: string
  }

  const props = defineProps({
    label: {
      type: String as PropType<ButtonProps['label']>,
      required: true,
    },
    color: {
      type: String as PropType<ButtonProps['color']>,
      default: 'primary',
    },
    size: {
      type: String as PropType<ButtonProps['size']>,
      default: 'md',
    },
    id: {
      type: String as PropType<ButtonProps['id']>,
      default: '',
    },
    additionalClasses: {
      type: String as PropType<ButtonProps['additionalClasses']>,
      default: '',
    },
  })

  const computedId = computed(() => {
    return props.id || props.label.replaceAll(' ', '-').toLowerCase()
  })

  const buttonClasses = computed(() => {
    const classes = {
      'a-btn': true,
      'a-btn--c-primary': props.color === 'primary',
      'a-btn--c-white-transparent': props.color === 'white-transparent',
      'a-btn--s-sm': props.size === 'sm',
      'a-btn--s-base': props.size === 'base',
      'a-btn--s-lg': props.size === 'lg',
    }

    if (props.additionalClasses) {
      classes[props.additionalClasses as keyof typeof classes] = true
    }

    return classes
  })
</script>

<template>
  <button
    :id="computedId"
    type="button"
    :class="buttonClasses"
  >
    {{ label }}
  </button>
</template>
