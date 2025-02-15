<script lang="ts" setup>
  defineProps<{
    name?: string
    description?: string
    skills?: string[]
    link?: string
  }>()
</script>

<template>
  <UCard
    :ui="{
      root: 'divide-y-0 flex flex-col',
      header: 'font-sans font-semibold tracking-tight sm:px-3 p-3 flex-none',
      body: 'sm:px-3 sm:py-0 text-pretty text-xs flex-grow',
      footer: 'sm:px-3 p-3 flex gap-1.5 flex-wrap flex-none',
    }">
    <template #header>
      <NuxtLink :to="link" class="flex items-center gap-1 hover:underline" v-if="link" target="_blank">
        {{ name }}
        <UIcon name="i-lucide-external-link" size="15" />
      </NuxtLink>
      <div v-else>{{ name }}</div>
    </template>
    {{ description }}
    <template #footer>
      <UBadge v-for="(skill, idx) in skills" :key="idx" :label="skill" variant="soft" size="sm" />
    </template>
  </UCard>
</template>
