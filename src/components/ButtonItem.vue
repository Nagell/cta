<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" class="a-btn a-btn--c-primary" @click="count++">count is {{ count }}</button>
  </div>
</template>
