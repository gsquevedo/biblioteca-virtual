"use server";

import bcrypt from "bcrypt";
import prisma from "../../../lib/prisma";

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

export async function register(data: RegisterData) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingUser) {
      return {
        success: false,
        message: "Este e-mail já está cadastrado.",
      };
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });

    return {
      success: true,
      message: "Conta criada com sucesso.",
    };
  } catch (error) {
    console.error("Erro ao criar usuário:", error);

    return {
      success: false,
      message: "Não foi possível criar sua conta.",
    };
  }
}