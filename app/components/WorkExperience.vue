<script lang="ts" setup>
  defineProps<{
    company?: string
    role?: string
    tags?: string[]
    startDate?: number
    endDate?: number
    description?: string
  }>()
</script>

<template>
  <div class="flex flex-col py-1">
    <div class="flex flex-col space-y-1.5">
      <div class="flex gap-x-2 justify-between">
        <h3 class="font-semibold gap-x-1 inline-flex items-center justify-center">
          {{ company }}
          <UBadge v-for="(tag, idx) in tags" :key="idx" variant="soft" :label="tag" size="sm" />
        </h3>
        <div class="text-sm text-gray-500">{{ startDate }} - {{ endDate ? endDate : "Present" }}</div>
      </div>
      <h4 class="font-semibold text-sm leading-none">{{ role }}</h4>
    </div>
    <div class="text-xs text-pretty mt-2">
      <slot />
    </div>
  </div>
</template>
