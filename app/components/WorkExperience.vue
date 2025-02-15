<script lang="ts" setup>
  defineProps<{
    company?: string
    role?: string
    tags?: string[]
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
          {{ company }}
          <UBadge variant="soft" v-for="tag in tags" :label="tag" size="sm" />
        </h3>
        <div class="text-sm text-gray-500">{{ startDate }} - {{ endDate }}</div>
      </div>
      <h4 class="font-semibold text-sm leading-none">{{ role }}</h4>
    </div>
    <div class="text-xs text-pretty mt-2">
      <slot />
    </div>
  </div>
</template>
