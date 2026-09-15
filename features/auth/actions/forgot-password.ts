"use server";

import { resend } from "@/lib/resend";
import { generateVerificationCode } from "@/features/auth/utils/generateVerificationCode";

export async function forgotPassword(email: string) {
  try {
    const verificationCode = generateVerificationCode();

    console.log("Código gerado:", verificationCode);

    const { data, error } = await resend.emails.send({
      from: "Biblioteca Virtual <onboarding@resend.dev>",
      to: [email],
      subject: "Código para redefinir sua senha",
      html: `
        <h1>Redefinição de senha</h1>

        <p>Você solicitou a redefinição da sua senha.</p>

        <p>Seu código de verificação é:</p>

        <h2>${verificationCode}</h2>

        <p>Esse código é válido por 10 minutos.</p>
      `,
    });

    if (error) {
      console.error("Erro ao enviar e-mail:", error);

      return {
        success: false,
        message: "Não foi possível enviar o e-mail.",
      };
    }

    console.log("E-mail enviado:", data);

    return {
      success: true,
      message: "Código enviado para seu e-mail.",
    };
  } catch (error) {
    console.error("Erro inesperado:", error);

    return {
      success: false,
      message: "Ocorreu um erro ao enviar o e-mail.",
    };
  }
}