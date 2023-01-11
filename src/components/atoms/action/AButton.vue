<script setup lang="ts">
  import { computed, } from 'vue'
  
  export interface ButtonProps {
    id?: string
    label: string
    color?: 'primary' | 'white-transparent'
    size?: 'sm' | 'base' | 'lg'
    additionalClasses?: string
  }

  const props = withDefaults(defineProps<ButtonProps>(), {
    id: '',
    color: 'primary',
    size: 'base',
    additionalClasses: '',
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
