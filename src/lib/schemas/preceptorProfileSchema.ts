// lib/schemas/preceptorProfileSchema.ts
import { z } from "zod"
import { sharedProfileSchema } from "./sharedProfileSchema"

export const preceptorProfileSchema = sharedProfileSchema.extend({
  title: z.string().min(2, "Title is required"),
  })
