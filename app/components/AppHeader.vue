<script setup lang="ts">
  const { activeHeadings } = useScrollspy()

  const items = computed(() => [
    {
      label: "About Me",
      to: "#home",
      active: activeHeadings.value.includes("home"),
    },
    {
      label: "My Work",
      to: "#templates",
      active: activeHeadings.value.includes("templates") && !activeHeadings.value.includes("pricing"),
    },
    {
      label: "Writing",
      to: "#writing",
      active: activeHeadings.value.includes("writing"),
    },
    {
      label: "Contact",
      to: "#contact",
      active: activeHeadings.value.includes("contact") && !activeHeadings.value.includes("testimonials"),
    },
  ])
</script>

<template>
  <UHeader title="">
    <UNavigationMenu :items="items" variant="link" />
    <template #right>
      <UButton
        to="https://github.com/nuxt-ui-pro/landing/tree/v3"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="neutral"
        variant="ghost" />
    </template>

    <template #content>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
