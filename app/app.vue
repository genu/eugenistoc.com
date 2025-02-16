<script setup lang="ts">
  useHead({
    meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
    link: [{ rel: "icon", href: "/favicon.ico" }],
    htmlAttrs: {
      lang: "en",
    },
  })

  useSeoMeta({
    ogImage: "https://landing-template.nuxt.dev/social-card.png",
    twitterImage: "https://landing-template.nuxt.dev/social-card.png",
    twitterCard: "summary_large_image",
  })
</script>

<template>
  <UApp :toaster="{ expand: false }" class="relative">
    <ParticlesBg class="absolute top-0 left-0 z-50 flex w-full pointer-events-none h-72" />
    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
