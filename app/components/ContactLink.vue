<script lang="ts" setup>
  defineProps<{ label?: string; url?: string; icon?: string }>()
</script>

<template>
  <UTooltip :text="label" :ui="{ content: 'flex' }">
    <UButton :to="url" size="md" :icon="icon" variant="outline" color="neutral" target="_blank" />
  </UTooltip>
</template>
