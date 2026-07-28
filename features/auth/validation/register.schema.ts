import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(1, "O nome de usuário é obrigatório")
    .max(50, "O nome de usuário deve ter no máximo 50 caracteres"),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("E-mail inválido"),
  password: z
    .string()
    .min(1, "A senha é obrigatória")  
  .min(8, "A senha deve ter no mínimo 8 caracteres"),
  confirmPassword: z
    .string()
    .min(1, "A confirmação de senha é obrigatória")
    .min(8, "A confirmação de senha deve ter no mínimo 8 caracteres"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;