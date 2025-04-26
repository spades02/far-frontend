// lib/schemas/sharedProfileSchema.ts
import { z } from "zod"

export const sharedProfileSchema = z.object({
  profilePicture: z.any()
  .refine((fileList) => fileList?.length > 0, "Image is required"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  location: z.string().min(2, "Enter a valid location"),
  bio: z.string().min(2, "Bio must be at least 2 characters"),
})
