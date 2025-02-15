<script lang="ts" setup>
  defineProps<{ title: string }>()
</script>

<template>
  <section class="flex flex-col gap-y-3">
    <h2 class="text-xl font-bold">{{ title }}</h2>
    <slot />
  </section>
</template>
