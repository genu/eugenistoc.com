import { defineCollection, z } from "@nuxt/content"

const workExperienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  tags: z.array(z.string()),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string(),
  accomplishments: z.array(z.string()),
})

const educationSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  location: z.string(),
})

const contactLinkSchema = z.object({
  label: z.string().nonempty(),
  url: z.string().nonempty(),
  icon: z.string().nonempty(),
})

const skillSchema = z.object({
  name: z.string(),
})

const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  skills: z.array(z.string()),
  link: z.string(),
})

export const collections = {
  content: defineCollection({
    source: "index.yml",
    type: "data",
    schema: z.object({
      name: z.string().nonempty(),
      headline: z.string(),
      location: z.string(),
      profileImage: z.string(),
      contact: z.array(contactLinkSchema),
      about: z.string(),
      workExperience: z.array(workExperienceSchema),
      education: z.array(educationSchema),
      skills: z.array(skillSchema),
      projects: z.array(projectSchema),
    }),
  }),
}
