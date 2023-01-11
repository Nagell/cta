<script setup lang="ts">
  import AButton from '../atoms/action/AButton.vue'
  import AHeading from '../atoms/typo/AHeading.vue'

  export interface CtaProps {
    dictPlatform: string
    dictHeader: string
    dictIndustry: string
    dictSkillsLabel: string
    actionLink?: ActionButton
    skillLinks?: ActionButton[]
  }

  const props = withDefaults(defineProps<CtaProps>(), {
    dictPlatform: '',
    dictHeader: '',
    dictIndustry: '',
    dictSkillsLabel: '',
    actionLink: undefined,
    skillLinks: undefined,
  })
</script>

<template>
  <div class="m-cta">
    <header class="m-cta__header">
      <AHeading level="h2" color="white" label="#1 HIRING ">
        <template #after>
          <span class="text-sec"> {{ props.dictPlatform }}</span>
        </template>
      </AHeading>

      <AHeading color="white" :label="`${props.dictHeader} `">
        <template #after>
          <span class="text-sec"> {{ props.dictIndustry }}</span>
        </template>
      </AHeading>

      <template v-if="props.actionLink?.label">
        <AButton
          :id="props.actionLink.id"
          :label="props.actionLink.label"
          color="primary"
          additional-classes="mt-6 m-cta__action"
        />
      </template>
    </header>
    <div class="m-cta__content">
      <div class="m-cta__tags">
        <template v-if="skillLinks?.length">
          <AButton
            v-for="(tag, key) in skillLinks"
            :id="tag.id"
            :key="key"
            color="white-transparent"
            size="base"
            :label="tag.label"
            additional-classes="m-cta__tag"
          />
        </template>
      </div>
      <p class="m-cta__info">
        <i class="icon icon--search-green text-white" />
        {{ props.dictSkillsLabel }}
      </p>
    </div>      
  </div>
</template>
