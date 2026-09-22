"use client"

import Input from "@/components/ui/Input/input";
import Button from "@/components/ui/Button/button";
import "@/features/auth/components/AuthForm.css";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  registerSchema, 
  type RegisterFormData
} from "@/features/auth/validation/register.schema";

import { register as registerUser } from "@/features/auth/actions/register";


export default function RegisterForm() {
  const {
    register, handleSubmit, formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const [message, setMessage] = useState("");
  const router = useRouter();

  async function onSubmit(data: RegisterFormData) {
    const result = await registerUser({
      name: data.username,
      email: data.email,
      password: data.password,
    });

    if (!result.success) {
      setMessage(result.message);
      return;
    }

    router.push("/login");
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="auth-form-title">Biblioteca Virtual</h1>
      <p className="auth-form-subtitle">Registre-se para acessar a biblioteca</p>

      <div className="form-group">
        <label htmlFor="username">Usuário</label>
        <Input
          id="username"
          type="text"
          className={`input ${errors.username ? "error" : ""}`}
          placeholder="Digite seu usuário"
          {...register("username")}
        />
        {errors.username && (
          <span className="error-message">
            {errors.username.message}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <Input
          id="email"
          type="email"
          className={`input ${errors.email ? "error" : ""}`}
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        {errors.email && (
          <span className="error-message">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">Senha</label>
        <Input 
          id="password"
          type="password"
          className={`input ${errors.password ? "error" : ""}`}
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password && (
          <span className="error-message">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <Input 
          id="confirmPassword"
          type="password"
          className={`input ${errors.confirmPassword ? "error" : ""}`}
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span className="error-message">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <Button
        className="button-primary"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Registrando..." : "Registrar"}
      </Button>

      <p className="auth-form-link">
        Já possui uma conta? <Link href="/login">Faça login</Link>
      </p>
      {message && <p className="auth-form-message">{message}</p>}
    </form>
  );
}