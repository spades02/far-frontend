// lib/schemas/studentProfileSchema.ts
import { z } from "zod"
import { sharedProfileSchema } from "./sharedProfileSchema"

export const studentProfileSchema = sharedProfileSchema.extend({
  school: z.string().min(2, "School is required"),
  status: z.string().min(2, "Status is required"),
})
