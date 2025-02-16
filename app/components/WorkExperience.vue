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
        <h3 class="inline-flex flex-col justify-start flex-1 font-semibold md:items-center md:flex-row gap-x-1">
          {{ company }}
          <div class="flex gap-x-1">
            <UBadge v-for="(tag, idx) in tags" :key="idx" variant="soft" :label="tag" size="sm" />
          </div>
        </h3>
        <div class="flex items-center text-sm text-gray-500">{{ startDate }} - {{ endDate ? endDate : "Present" }}</div>
      </div>
      <h4 class="text-sm font-semibold leading-none">{{ role }}</h4>
    </div>
    <div class="mt-2 text-xs text-pretty">
      <slot />
    </div>
  </div>
</template>
