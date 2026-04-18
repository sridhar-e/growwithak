import { z } from 'zod';

export const AuditSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Please provide a valid email address"),
  linkedin: z.string().min(5, "LinkedIn URL is required"),
  phone: z.string().min(8, "Valid phone number is required"),
});

export type AuditFormData = z.infer<typeof AuditSchema>;
