"use server";

import { forgotPasswordSchema } from "@/features/auth/validation/forgot-password.schema";

type ForgotPasswordState = {
  success: boolean;
  message: string;
};

export async function forgotPassword(
  email: string
): Promise<ForgotPasswordState> {
  try {
    // Validação no servidor
    
    const result = forgotPasswordSchema.safeParse({
      email,
    });

    if (!result.success) {
      return {
        success: false,
        message: result.error.issues[0].message,
      };
    }

    // Simula um processamento
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Simulando envio de e-mail para:", email);

    return {
      success: true,
      message: "Código enviado com sucesso.",
    };
  } catch {
    return {
      success: false,
      message: "Não foi possível enviar o código.",
    };
  }
}