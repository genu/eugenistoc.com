<script setup lang="ts">
  const { data: page } = await useAsyncData("home", () => {
    return queryCollection("content").first()
  })

  useSeoMeta({
    title: page.value.name,
    ogTitle: page.value.name,
    description: page.value.headline,
    ogDescription: page.value.about,
  })
</script>

<template>
  <div class="relative font-mono">
    <UContainer class="flex flex-col max-w-3xl py-12 space-y-8">
      <div class="flex items-center justify-between">
        <div class="flex-1 space-y-1.5">
          <h1 class="text-2xl font-bold">{{ page.name }}</h1>
          <p class="max-w-md text-sm text-pretty">{{ page.headline }}</p>
          <div class="items-center max-w-md text-xs text-pretty inline-flex gap-x-1.5">
            <UIcon name="i-lucide-globe" />
            <span>{{ page.location }}</span>
          </div>
          <div class="flex pt-1 gap-x-1">
            <ContactLink v-for="(contact, idx) in page.contact" :key="idx" v-bind="contact" />
          </div>
        </div>

        <NuxtImg
          width="130"
          height="130"
          sizes="100vw sm:50vw md:300px"
          :src="page.profileImage"
          class="rounded-lg drop-shadow-md" />
      </div>
      <div class="space-y-8">
        <PageSection title="About" :description="page.about">
          <div class="text-sm">
            {{ page.about }}
          </div>
        </PageSection>

        <PageSection title="Work Experience">
          <div class="space-y-4">
            <WorkExperience v-for="(work, idx) in page.workExperience" :key="idx" v-bind="work">
              {{ work.description }}
              <ul class="mt-2 ml-3 list-disc list-inside">
                <li v-for="(accomplishment, idx) in work.accomplishments" :key="idx">{{ accomplishment }}</li>
              </ul>
            </WorkExperience>
          </div>
        </PageSection>
        <PageSection title="Education">
          <Education v-for="(education, idx) in page.education" :key="idx" v-bind="education" />
        </PageSection>
        <PageSection title="Skills">
          <div class="flex flex-wrap gap-2">
            <UCollapsible
              v-for="(skill, idx) in page.skills"
              :key="idx"
              :ui="{ content: 'p-2 flex gap-1', root: 'withSubSkills' }">
              <UButton :label="skill.name" block />

              <template #content>
                <div class="flex flex-wrap gap-1">
                  <UBadge v-for="(subSkill, idx) in skill.subSkills" :key="idx" :label="subSkill" variant="soft" />
                </div>
              </template>
            </UCollapsible>
          </div>
        </PageSection>
        <PageSection title="Projects">
          <div class="grid gap-3 grid-cols-3">
            <Project v-for="(project, idx) in page.projects" :key="idx" v-bind="project" />
          </div>
        </PageSection>
      </div>
    </UContainer>
  </div>
</template>

<style>
  .withSubSkills[data-state="open"] {
    @apply block w-full;
  }
</style>
