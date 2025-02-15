<script lang="ts" setup>
  defineProps<{
    institution?: string
    degree?: string
    location?: string
    startDate?: string
    endDate?: string
    description?: string
  }>()
</script>

<template>
  <div class="flex flex-col py-1">
    <div class="flex flex-col space-y-1.5">
      <div class="flex gap-x-2 justify-between">
        <h3 class="font-semibold gap-x-1 inline-flex items-center justify-center">
          {{ degree }}
        </h3>
        <div class="text-sm text-gray-500">{{ startDate }} - {{ endDate }}</div>
      </div>
      <h4 class="text-sm leading-none">{{ institution }}</h4>
      <div class="items-center max-w-md text-xs text-pretty inline-flex gap-x-1.5" v-if="location">
        <UIcon name="i-lucide-globe" />
        <span>{{ location }}</span>
      </div>
    </div>
  </div>
</template>
