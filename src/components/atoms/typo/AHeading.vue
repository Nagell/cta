<script lang="ts">
  import { h } from 'vue'
  import type { PropType } from 'vue'
  import { computed } from 'vue'

  export interface HeadingProps {
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    renderAs?: HeadingProps['level'] | ''
    color: 'primary' | 'secondary' | 'white' | 'black'
    label: string
    additionalClasses: string
  }

  export default {
    name: 'AHeading',
    props: {
      level: {
        type: String as PropType<HeadingProps['level']>,
        default: 'h1',
      },
      renderAs: {
        type: String as PropType<HeadingProps['renderAs']>,
        default: '',
      },
      color: {
        type: String as PropType<HeadingProps['color']>,
        default: 'black',
      },
      label: {
        type: String as PropType<HeadingProps['label']>,
        default: '',
      },
      additionalClasses: {
        type: String as PropType<HeadingProps['additionalClasses']>,
        default: '',
      },
    },

    setup(props, { slots }) {
      const computedRenderAs = computed(() => {
        return props.renderAs || props.level
      })

      const headingClasses = computed(() => {
        const classes = {
          'a-heading': true,
          'a-heading--c-primary': props.color === 'primary',
          'a-heading--c-secondary': props.color === 'secondary',
          'a-heading--c-white': props.color === 'white',
          'a-heading--c-black': props.color === 'black',
          'a-heading--s-5xl': computedRenderAs.value === 'h1',
          'a-heading--s-4xl': computedRenderAs.value === 'h2',
          'a-heading--s-3xl': computedRenderAs.value === 'h3',
          'a-heading--s-2xl': computedRenderAs.value === 'h4',
          'a-heading--s-xl': computedRenderAs.value === 'h5',
          'a-heading--s-lg': computedRenderAs.value === 'h6',
        }

        if (props.additionalClasses) {
          classes[props.additionalClasses as keyof typeof classes] = true
        }

        return classes
      })      

      return () => [
        h(
          props.level || 'h1',
          { class: headingClasses.value },
          [
            slots.before?.(),
            props.label,
            slots.after?.()
          ]
        ),
      ]
    },
  }
</script>
