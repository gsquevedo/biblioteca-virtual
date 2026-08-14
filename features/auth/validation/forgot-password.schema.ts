import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email({ message: 'Por favor, insira um e-mail válido.' })
    .trim()
    .min(1, { message: 'O campo de e-mail é obrigatório.' })
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;