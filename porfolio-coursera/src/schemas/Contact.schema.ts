import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(50, "Name is too long"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(500, "Message is too long")
    .regex(
      /^[a-zA-Z0-9\s.,;:!?`'"<>(){}\\[\]_|\\\\/#$%&=@+*~]+$/,
      "Message contains invalid characters (<>{}[]\\#$%&=@+*~)"
    ),
  subject: z
    .string()
    .min(1, "Subject is required")
    .regex(
      /^[a-zA-Z0-9\s.,;:!?`'"<>(){}\\[\]_|\\\\/#$%&=@+*~]+$/,
      "Subject contains invalid characters (<>{}[]\\#$%&=@+*~)"
    ),
});

export type ContactType = z.infer<typeof contactSchema>;
