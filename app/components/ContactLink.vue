<script lang="ts" setup>
  defineProps<{ label?: string; url?: string; icon?: string }>()
</script>

<template>
  <UTooltip :text="label" :ui="{ content: 'flex' }">
    <UButton size="md" :icon="icon" variant="outline" color="neutral" />
  </UTooltip>
</template>
