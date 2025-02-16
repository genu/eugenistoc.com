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
      <div class="flex justify-between gap-x-2">
        <h3 class="inline-flex items-center justify-center font-semibold gap-x-1">
          {{ company }}
          <UBadge v-for="(tag, idx) in tags" :key="idx" variant="soft" :label="tag" size="sm" />
        </h3>
        <div class="text-sm text-gray-500">{{ startDate }} - {{ endDate ? endDate : "Present" }}</div>
      </div>
      <h4 class="text-sm font-semibold leading-none">{{ role }}</h4>
    </div>
    <div class="mt-2 text-xs text-pretty">
      <slot />
    </div>
  </div>
</template>
