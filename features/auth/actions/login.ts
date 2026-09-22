"use server";

import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

type LoginData = {
  email: string;
  password: string;
};

export async function login(data: LoginData) {
  try{
    const email = data.email.trim().toLowerCase();

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    
    if (!user) {
      return {
        success: false,
        message: "E-mail ou senha inválidos.",
      };
    }

    const passwordMatches = await bcrypt.compare(
      data.password,
      user.password
    );

    if (!passwordMatches) {
      return {
        success: false,
        message: "E-mail ou senha inválidos.",
      };
    }

    return {
      success: true,
      message: "Login bem-sucedido.",
    };
      
  }catch (error) {
    console.error("Erro ao realizar login:", error);

    return {
      success: false,
      message: "Ocorreu um erro ao realizar o login. Por favor, tente novamente.",
    };
  }
}