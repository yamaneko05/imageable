import { z } from "zod";

export const signupSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    password_confirm: z.string().min(8),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: "パスワードの再入力が一致しません",
    path: ["password_confirm"],
  });

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
