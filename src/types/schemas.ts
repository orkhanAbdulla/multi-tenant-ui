import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string({ message: "Invalid email address" }).min(1),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
const PassworwordSchema = z
  .string()
  .min(6)
  .max(72)
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(
    /[^A-Za-z0-9]/,
    "Password must contain at least one special character"
  );
export const RegisterSchema=  z.object({
    username: z.string().min(1).nonempty(),
    password: PassworwordSchema,
    confirmPassword: z.string().min(1),
    email: z.email(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Confirm password doesn't match with password",
      });
    }
  });

export type LoginFormData = z.infer<typeof LoginSchema>;
export type RegisterFormaData=z.infer<typeof RegisterSchema>
