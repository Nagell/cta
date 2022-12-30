<script setup lang='ts'>
  import { ref } from 'vue'
  import AHeading from '../components/atoms/typo/AHeading.vue'
  import MCta from '../components/molecules/MCta.vue'
  
  import { skillLinks } from './../store/dummyData'
  import dummyDict from './../store/dummyDict.json'

  const data = ref(skillLinks)
  const dict = ref(dummyDict)
</script>

<template>
  <main>
    <section class="o-section">
      <MCta
        :dict-platform="dict.cta.platform" 
        :dict-header="dict.cta.header"
        :dict-industry="dict.cta.industry"
        :dict-skills-label="dict.cta.skillsLabel"
        :action-link="{ label: dict.cta.action, id: 'cta-action' }"
        :skill-links="data"
      />   
    </section>
    <section class="o-section o-section--dummy">
      <AHeading level="h4" label="DUMMY SECTION 1" />
    </section>
    <section class="o-section o-section--dummy-gradient">
      <AHeading color="white" level="h4" label="DUMMY SECTION 2" />
    </section>
    <section class="o-section o-section--dummy">
      <AHeading level="h4" label="DUMMY SECTION 3" />
    </section>
    <section class="o-section o-section--dummy-gradient">
      <AHeading color="white" level="h4" label="DUMMY SECTION 4" />
    </section>
  </main>
</template>