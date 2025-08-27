import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string({ message: "Invalid email address" }).min(1),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export type LoginFormData = z.infer<typeof LoginSchema>;
